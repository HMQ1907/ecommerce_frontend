<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, useAttrs } from 'vue'
import { useModal } from 'vue-final-modal'
import { useToast } from 'vue-toastification'
import { createDialog } from 'vuetify3-dialog'
import { useAbility } from '@casl/vue'
import { useQueryClient } from 'vue-query'
import { chain } from 'lodash'
import useGetDesignations from '@/composables/use-get-designations'
import AppFixedPage from '@/components/shared/AppFixedPage'
import AppFilter from '@/components/shared/AppFilter'
import CreateDesignationModal from '@/components/designations/CreateDesignationModal'
import UpdateDesignationModal from '@/components/designations/UpdateDesignationModal'
import table from '@/mixins/table'

definePageMeta({
  action: 'view',
  resource: 'designations',
})

const toast = useToast()
const { t } = useI18n()
const { $api } = useNuxtApp()
const { can } = useAbility()
const queryClient = useQueryClient()
const attrs = useAttrs()
// inject loading
const $loading = inject('$loading')

const editConfig = ref({
  trigger: 'click',
  mode: 'row',
  showStatus: true,
})

const headers = computed(() => [
  {
    title: t('designations.model.name'),
    field: 'name',
    key: 'name',
    align: 'left',
    minWidth: '100px',
  },
  {
    title: t('employees.model.employee'),
    field: 'employees',
    key: 'employees',
    align: 'left',
    width: '250px',
    cellRender: {
      name: 'CommonVChip',
      props: (row: any): any => ({
        items: row.employees.map((e: any) => {
          return {
            name: e.first_name + ' ' + e.last_name,
            image: e.avatar,
          }
        }),
      }),
    },
  },
  {
    title: t('designations.model.description'),
    field: 'description',
    key: 'description',
    align: 'left',
    minWidth: '100px',
  },
  {
    title: t('common.model.action'),
    field: 'action',
    key: 'action',
    align: 'center',
    fixed: 'right',
    width: '60px',
    cellRender: {
      name: 'CommonAction',
      props: (row: any) => ({
        actions: [
          {
            name: 'edit',
            color: 'info',
            permission: !can('edit', 'designations'),
            icon: 'mdi-pencil-outline',
            click: () => editItem(row),
          },
          {
            name: 'delete',
            color: 'error',
            permission: !can('delete', 'designations'),
            icon: 'mdi-delete-outline',
            click: () => deleteItem(row),
          },
        ],
      }),
    },
  },
])

const schema = ref([
  {
    defaultValue: '',
    name: 'q',
    label: t('customers.action.search'),
    type: 'text',
    enabled: true,
    readonly: false,
    class: 'tw-w-30 sm:tw-w-[200px]',
    clearable: true,
    props: {
      prependInnerIcon: 'mdi-magnify',
    },
  },
])

const queryBuilder = ref({
  filters: chain(schema.value).keyBy('name').mapValues('defaultValue').value(),
  sorts: ['-created_at'],
  page: 1,
  limit: table.limit,
})

const { items, totalItems, isLoading, isFetching, refetch } = useGetDesignations(queryBuilder)

const selectedItems = ref([])

const { open, close } = useModal({
  component: CreateDesignationModal,
  attrs: {
    clickToClose: false,
    escToClose: false,
    title: t('designations.action.create'),
    reserveScrollBarGap: true,
    zIndexFn: () => 1010,
    onClosed: () => {
      close()
    },
  },
})

const editItem = (item: any) => {
  const { open, close } = useModal({
    component: UpdateDesignationModal,
    attrs: {
      clickToClose: false,
      escToClose: false,
      item,
      title: t('designations.action.update'),
      zIndexFn: () => 1010,
      onClosed: () => {
        close()
      },
    },
  })
  open()
}

const deleteItem = async (item: any) => {
  const isConfirmed = await createDialog({
    level: 'warning',
    title: t('designations.action.delete'),
    text: t('designations.action.deleteItem') + ' ' + `${item.name}` + ' ! ',
    cardOptions: {
      class: 'delete-dialog',
    },
    buttons: [
      { key: false, title: t('common.action.cancel'), color: 'grey' },
      { key: true, title: t('common.action.delete'), color: 'warning' },
    ],
  })

  if (isConfirmed) {
    const loader = $loading.show()
    $api.designations
      .deleteDesignation(item.id)
      .then(() => {
        queryClient.invalidateQueries('designations')
        toast.success(t('common.message.deleteSuccess'))
      })
      .finally(() => {
        loader.hide()
      })
  }
}

const bulkDeleteItem = async () => {
  const isConfirmed = await createDialog({
    level: 'warning',
    title: t('designations.action.delete'),
    text: t('designations.message.deleteItems'),
    cardOptions: {
      class: 'delete-dialog',
    },
    buttons: [
      { key: false, title: t('common.action.cancel'), color: 'grey' },
      { key: true, title: t('common.action.delete'), color: 'warning' },
    ],
  })

  if (isConfirmed) {
    const loader = $loading.show()
    $api.designations
      .bulkDeleteDesignations({
        ids: selectedItems.value,
      })
      .then(() => {
        toast.success(t('common.message.deleteSuccess'))
        refetch.value()
        selectedItems.value = []
      })
      .finally(() => {
        loader.hide()
      })
  }
}
</script>
<template>
  <app-fixed-page :title="$t('designations.title')">
    <template #leftAction>
      <app-filter
        v-model:value="queryBuilder"
        addition-button-class="tw-flex lg:tw-hidden"
        :schema="schema"
        @apply="refetch"
      >
        <v-btn
          v-if="can('create', 'designations')"
          class="tw-flex md:tw-hidden tw-w-5 tw-h-5 tw-px-2 tw-rounded-[4px] tw-bg-primary"
          flat
          size="40"
          @click="open"
        >
          <FilePlusIcon class="tw-text-white" />
        </v-btn>
        <v-btn
          v-if="selectedItems.length && can('delete', 'designations')"
          class="tw-bg-warning tw-text-white md:tw-hidden"
          :loading="isLoading"
          @click="bulkDeleteItem"
        >
          {{ t('common.action.delete') }}
        </v-btn>
      </app-filter>
    </template>
    <template #rightAction>
      <div class="gap-2 justify-end tw-items-center tw-hidden md:tw-flex">
        <v-btn icon variant="text" @click="refetch">
          <RefreshIcon size="20" />
        </v-btn>
        <v-btn
          v-if="selectedItems.length && can('delete', 'designations')"
          class="tw-bg-error tw-text-white"
          :loading="isLoading"
          @click="bulkDeleteItem"
        >
          {{ t('common.action.delete') }}
        </v-btn>
        <v-btn v-if="can('create', 'designations')" class="tw-bg-primary tw-w-[180px]" @click="open">
          <span class="tw-text-sm tw-text-white tw-font-medium create-button">
            {{ t('designations.action.create') }}
          </span>
        </v-btn>
      </div>
    </template>
    <template #table>
      <common-table
        v-model:page="queryBuilder.page"
        v-model:page-size="queryBuilder.limit"
        v-model:selected="selectedItems"
        :edit-config="editConfig"
        :headers="headers"
        :items="items"
        :loading="isLoading"
        sequence
        sequence-size="50"
        :total-items="totalItems"
        @refetch="refetch"
      />
    </template>
  </app-fixed-page>
</template>

<style lang="scss">
.create-button {
  letter-spacing: 1.25px;
}
</style>

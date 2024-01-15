<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed, ref, useAttrs } from 'vue'
import { useModal } from 'vue-final-modal'
import { useToast } from 'vue-toastification'
import { useAbility } from '@casl/vue'
import { useQueryClient } from 'vue-query'
import { chain, upperCase } from 'lodash'
import { createDialog } from 'vuetify3-dialog'
import table from '~/mixins/table'
import AppFixedPage from '@/components/shared/AppFixedPage'
import AppFilter from '@/components/shared/AppFilter'
import useGetOvertimes from '@/composables/use-get-overtimes'
import CreateOvertimeModal from '@/components/overtimes/organisms/CreateOvertimeModal'
import UpdateOvertimeModal from '@/components/overtimes/organisms/UpdateOvertimeModal'

definePageMeta({
  action: 'view',
  resource: 'overtimes',
})

const toast = useToast()
const { t } = useI18n()
const { $api } = useNuxtApp()
const { can } = useAbility()
const queryClient = useQueryClient()
const attrs = useAttrs()
const dayjs = useDayjs()
// inject loading
const $loading = inject('$loading')

const editConfig = ref({
  trigger: 'click',
  mode: 'row',
  showStatus: true,
})

const schema = ref([
  {
    defaultValue: null,
    name: 'employee_id',
    label: t('awards.model.employee'),
    type: 'EmployeeAutocomplete',
    enabled: true,
    readonly: false,
    clearable: true,
  },
  {
    defaultValue: dayjs().format('YYYY-MM-DD'),
    name: 'month',
    label: t('common.filter.month'),
    type: 'date',
    enabled: true,
    readonly: false,
    clearable: true,
  },
])

const queryBuilder = ref({
  filters: chain(schema.value).keyBy('name').mapValues('defaultValue').value(),
  sorts: [],
  page: 1,
  limit: table.limit,
})

const { items, totalItems, isLoading, isFetching, refetch } = useGetOvertimes(queryBuilder)
const types = ref([
  {
    id: 1,
    title: '17:00-22:00',
    percent: '150%',
  },
  {
    id: 2,
    title: '22:00-6:00',
    percent: '200%',
  },
  {
    id: 3,
    title: '06:00-16:00',
    percent: '250%',
  },
  {
    id: 4,
    title: '16:00-22:00',
    percent: '300%',
  },
  {
    id: 5,
    title: '22:00-6:00',
    percent: '350%',
  },
])

const headers = computed(() => [
  {
    title: t('overtime.model.employeeName'),
    field: 'employee_name',
    key: 'employee_name',
    align: 'left',
    minWidth: '180px',
  },
  {
    align: 'center',
    fixed: 'center',
    children: types?.value.map((e: any) => ({
      title: e.title,
      align: 'center',
      minWidth: '160px',
      children: [
        {
          title: upperCase(e.percent) + '%',
          align: 'center',
          minWidth: '50px',
          field: `rates.${e.id}`,
          key: `rates.${e.id}`,
        },
      ],
    })),
  },
  {
    title: upperCase(t('overtime.title')),
    align: 'center',
    fixed: 'center',
    children: [
      {
        align: 'center',
        minWidth: '50px',
        children: [
          {
            title: upperCase(t('overtime.model.hrs')),
            align: 'center',
            field: 'total_hrs',
            key: 'total_hrs',
            minWidth: '50px',
          },
          {
            title: upperCase(t('overtime.model.amount')),
            align: 'center',
            field: 'total_amount',
            key: 'total_amount',
            minWidth: '80px',
            formatter: 'formatCurrency',
          },
        ],
      },
    ],
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
            icon: 'mdi-pencil-outline',
            permission: !can('edit', 'overtimes'),
            click: () => {
              editItem(row)
            },
          },
          {
            name: 'delete',
            color: 'error',
            icon: 'mdi-delete-outline',
            permission: !can('delete', 'overtimes'),
            click: () => {
              deleteItem(row)
            },
          },
        ],
      }),
    },
  },
])
const selectedItems = ref([])

const { open, close } = useModal({
  component: CreateOvertimeModal,
  attrs: {
    clickToClose: false,
    escToClose: false,
    title: t('overtime.action.create'),
    reserveScrollBarGap: true,
    zIndexFn: () => 1010,
    onClosed: () => {
      close()
    },
  },
})

const editItem = (item: any) => {
  const { open, close } = useModal({
    component: UpdateOvertimeModal,
    attrs: {
      clickToClose: false,
      escToClose: false,
      item,
      title: t('overtime.action.update') + item.employee_name,
      reserveScrollBarGap: true,
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
    title: t('overtime.action.delete'),
    text: t('overtime.message.deleteItem'),
    cardOptions: {
      class: 'delete-dialog',
    },
    buttons: [
      { key: false, title: t('common.action.cancel'), color: 'grey' },
      { key: true, title: t('common.action.confirm'), color: 'warning' },
    ],
  })

  if (isConfirmed) {
    $api.overtimes.deleteOvertime(item.id).then(() => {
      toast.success(t('common.message.updateSuccess'))
      refetch.value()
    })
  }
}

const bulkDeleteItem = async () => {
  const isConfirmed = await createDialog({
    level: 'warning',
    title: t('overtime.action.delete'),
    text: t('overtime.message.deleteItems'),
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
    $api.overtimes
      .bulkDeleteOvertimes({
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
  <app-fixed-page :title="$t('overtime.model.list')">
    <template #leftAction>
      <app-filter
        v-model:value="queryBuilder"
        addition-button-class="tw-flex lg:tw-hidden"
        :schema="schema"
        @apply="refetch"
      >
        <v-btn
          class="tw-flex md:tw-hidden tw-w-5 tw-h-5 tw-px-2 tw-rounded-[4px] tw-bg-primary"
          flat
          size="40"
          @click="open"
        >
          <FilePlusIcon class="tw-text-white" />
        </v-btn>
        <v-btn v-if="selectedItems.length" class="tw-bg-warning tw-text-white md:tw-hidden" :loading="isLoading">
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
          v-if="selectedItems.length && can('delete', 'overtimes')"
          class="tw-bg-error tw-text-white"
          :loading="isLoading"
          @click="bulkDeleteItem"
        >
          {{ t('common.action.delete') }}
        </v-btn>
        <v-btn v-if="can('create', 'overtimes')" class="tw-bg-primary tw-w-[160px]" @click="open">
          <span class="tw-text-sm tw-text-white tw-font-medium create-button">
            {{ t('overtime.action.create') }}
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

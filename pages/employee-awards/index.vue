<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, useAttrs } from 'vue'
import { useModal } from 'vue-final-modal'
import { useToast } from 'vue-toastification'
import { useAbility } from '@casl/vue'
import { useQueryClient } from 'vue-query'
import { chain } from 'lodash'
import { createDialog } from 'vuetify3-dialog'
import table from '~/mixins/table'
import AppFixedPage from '@/components/shared/AppFixedPage'
import AppFilter from '@/components/shared/AppFilter'
import useGetEmployeeAwards from '@/composables/use-get-employee-awards'
import CreateEmployeeAwardModal from '@/components/employees/awards/CreateEmployeeAwardModal'
import UpdateEmployeeAwardModal from '@/components/employees/awards/UpdateEmployeeAwardModal'
import filters from '~/plugins/filters/bonus'
import Parser from '~/utils/parser'

definePageMeta({
  action: 'view',
  resource: 'employee_awards',
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

const headers = computed(() => [
  {
    title: t('awards.model.title'),
    field: 'title',
    key: 'title',
    align: 'left',
    minWidth: '200px',
  },
  {
    title: t('employees.model.employee'),
    field: 'employees',
    key: 'employees',
    align: 'left',
    width: '180px',
    cellRender: {
      name: 'CommonVChip',
      props: (row: any): any => ({
        items: row.employees.map((e: any) => {
          return {
            name: e.full_name,
            image: e.employee.avatar,
          }
        }),
      }),
    },
  },
  {
    title: t('awards.model.awardType'),
    field: 'award_type',
    key: 'award_type',
    align: 'left',
    minWidth: '120px',
  },
  {
    title: t('awards.model.type'),
    field: 'type',
    key: 'type',
    align: 'left',
    minWidth: '120px',
    cellRender: {
      name: 'CommonText',
      props: (row: any) => ({
        title: filters.bonusType(row.type),
      }),
    },
  },
  // {
  //   title: t('awards.model.amount'),
  //   field: 'total_amount',
  //   key: 'total_amount',
  //   align: 'center',
  //   minWidth: '180px',
  //   formatter: 'formatCurrency',
  // },
  {
    title: t('awards.model.awardPeriod'),
    field: 'award_period',
    key: 'award_period',
    align: 'left',
    minWidth: '120px',
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
            permission: !can('edit', 'employee_awards'),
            click: () => {
              editItem(row)
            },
          },
          {
            name: 'delete',
            color: 'error',
            icon: 'mdi-delete-outline',
            permission: !can('delete', 'employee_awards'),
            click: () => {
              deleteItem(row)
            },
          },
        ],
      }),
    },
  },
])

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
  sorts: ['-created_at'],
  page: 1,
  limit: table.limit,
})

const { items, totalItems, isLoading, isFetching, refetch } = useGetEmployeeAwards(queryBuilder)

const selectedItems = ref([])

const { open, close } = useModal({
  component: CreateEmployeeAwardModal,
  attrs: {
    clickToClose: false,
    escToClose: false,
    title: t('awards.action.create'),
    reserveScrollBarGap: true,
    zIndexFn: () => 1010,
    onClosed: () => {
      close()
    },
  },
})

const editItem = (item: any) => {
  const { open, close } = useModal({
    component: UpdateEmployeeAwardModal,
    attrs: {
      clickToClose: false,
      escToClose: false,
      item,
      // items: item.employeeAwards,
      title: t('awards.action.update'),
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
    title: t('awards.message.award.deleteTitle'),
    text: t('awards.message.award.deleteItem'),
    cardOptions: {
      class: 'delete-dialog',
    },
    buttons: [
      { key: false, title: t('common.action.cancel'), color: 'grey' },
      { key: true, title: t('common.action.confirm'), color: 'warning' },
    ],
  })

  if (isConfirmed) {
    $api.employeeAwards.deleteAward(item.id).then(() => {
      toast.success(t('common.message.updateSuccess'))
      refetch.value()
    })
  }
}

const bulkDeleteItem = async () => {
  const isConfirmed = await createDialog({
    level: 'warning',
    title: t('awards.message.employeeAward.deleteTitle'),
    text: t('awards.message.employeeAward.deleteItems'),
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
    $api.employeeAwards
      .bulkDeleteAwards({
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

const exportEmployeeBonus = () => {
  isLoading.value = true
  queryBuilder.value.limit = 1000
  queryBuilder.value.filters.month = dayjs(queryBuilder.value.filters.month).format('YYYY-MM')
  const params = {
    limit: 1000,
  }
  $api.employeeAwards
    .exportEmployeeAwards(
      new Parser({
        includes: [],
        appends: [],
        fields: {},
        sorts: queryBuilder.value.sorts,
        filters: queryBuilder.value.filters,
        payload: null,
        ...params,
      }).query()
    )
    .then((res) => {
      const url = URL.createObjectURL(
        new Blob([res], {
          type: 'application/vnd.ms-excel',
        })
      )
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'employee-bonus.xlsx')
      document.body.appendChild(link)
      link.click()
      toast.success(t('awards.message.export.success'))
    })
    .catch((err) => {
      toast.error(t(err.message))
    })
    .finally(() => {
      isLoading.value = false
    })
}
</script>

<template>
  <app-fixed-page :title="$t('awards.list')">
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
          v-if="selectedItems.length && can('delete', 'employee_awards')"
          class="tw-bg-error tw-text-white"
          :loading="isLoading"
          @click="bulkDeleteItem"
        >
          {{ t('common.action.delete') }}
        </v-btn>
        <v-btn
          v-if="can('create', 'employee_awards')"
          color="success"
          :loading="isLoading"
          prepend-icon="mdi-download-outline"
          small
          @click="exportEmployeeBonus"
        >
          {{ t('awards.action.export') }}
        </v-btn>
        <v-btn v-if="can('create', 'employee_awards')" class="tw-bg-primary tw-w-[160px]" @click="open">
          <span class="tw-text-sm tw-text-white tw-font-medium create-button">
            {{ t('awards.action.create') }}
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

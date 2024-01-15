<script setup lang="ts">
import type { ServerOptions } from 'vue3-easy-data-table'
import { useI18n } from 'vue-i18n'
import { ref, useAttrs } from 'vue'
import { useModal } from 'vue-final-modal'
import { useToast } from 'vue-toastification'
import { createDialog } from 'vuetify3-dialog'
import { useAbility } from '@casl/vue'
import { useQueryClient } from 'vue-query'
import { chain } from 'lodash'
import useGetEmployeeTerminations from '@/composables/use-get-terminations'
import AppFixedPage from '@/components/shared/AppFixedPage'
import AppFilter from '@/components/shared/AppFilter'
import CreateTerminationModal from '@/components/terminations/organisms/CreateTerminationModal'
import UpdateTerminationModal from '@/components/terminations/organisms/UpdateTerminationModal'
import table from '~/mixins/table'

definePageMeta({
  action: 'view',
  resource: 'employee_terminations',
})

const toast = useToast()
const { t } = useI18n()
const { $api } = useNuxtApp()
const { can } = useAbility()
const queryClient = useQueryClient()
const dayjs = useDayjs()
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
    title: t('termination.model.employeeName'),
    field: 'employee.full_name',
    key: 'employee_name',
    align: 'left',
    minWidth: '150px',
  },
  {
    title: t('termination.model.subject'),
    field: 'subject',
    key: 'subject',
    align: 'left',
    minWidth: '120px',
  },
  {
    title: t('termination.model.terminationType'),
    field: 'type',
    key: 'type',
    align: 'left',
    minWidth: '120px',
  },
  {
    title: t('termination.model.terminationDate'),
    field: 'termination_date',
    key: 'termination_date',
    align: 'left',
    minWidth: '100px',
  },
  {
    title: t('termination.model.noticeDate'),
    field: 'notice_date',
    key: 'notice_date',
    align: 'left',
    minWidth: '100px',
  },
  {
    title: t('termination.model.remainingVactionDays'),
    field: 'remaining_vacation_days',
    key: 'remaining_vacation_days',
    align: 'left',
    minWidth: '100px',
  },
  {
    title: t('payslip.model.vacationFundProvision'),
    field: 'vacation_fund',
    key: 'vacation_fund',
    align: 'left',
    minWidth: '100px',
    formatter: 'formatCurrency',
  },
  // {
  //   title: t('termination.model.terminatedBy'),
  //   field: 'terminated_by_name',
  //   key: 'terminated_by_name',
  //   align: 'left',
  //   minWidth: '150px',
  // },
  // {
  //   title: t('termination.model.terminationAllowance'),
  //   field: 'termination_allowance',
  //   key: 'termination_allowance',
  //   align: 'center',
  //   minWidth: '120px',
  //   formatter: 'formatCurrency',
  // },
  {
    title: t('payslip.model.retirementFundProvision'),
    field: 'retirement_fund',
    key: 'retirement_fund',
    align: 'center',
    minWidth: '120px',
    formatter: 'formatCurrency',
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
            disabled: row.termination_date < dayjs().format('YYYY-MM-DD'),
            permission: !can('edit', 'employee_terminations'),
            icon: 'mdi-pencil-outline',
            click: () => editItem(row),
          },
          {
            name: 'delete',
            color: 'error',
            permission: !can('delete', 'employee_terminations'),
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

const { items, totalItems, isLoading, isFetching, refetch } = useGetEmployeeTerminations(queryBuilder)

const selectedItems = ref([])

const { open, close } = useModal({
  component: CreateTerminationModal,
  attrs: {
    clickToClose: false,
    escToClose: false,
    title: t('termination.action.create'),
    reserveScrollBarGap: true,
    zIndexFn: () => 1010,
    onClosed: () => {
      close()
    },
  },
})

const editItem = (item: any) => {
  const { open, close } = useModal({
    component: UpdateTerminationModal,
    attrs: {
      clickToClose: false,
      escToClose: false,
      item,
      title: t('termination.action.update'),
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
    title: t('termination.action.delete'),
    text: t('termination.message.deleteItem'),
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
    $api.terminations
      .deleteEmployeeTermination(item.id)
      .then(() => {
        queryClient.invalidateQueries('terminations')
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
    title: t('termination.action.delete'),
    text: t('termination.message.deleteItems'),
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
    $api.terminations
      .bulkDeleteEmployeeTerminations({
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
  <app-fixed-page :title="$t('termination.title')">
    <template #leftAction>
      <app-filter
        v-model:value="queryBuilder"
        addition-button-class="tw-flex lg:tw-hidden"
        :schema="schema"
        @apply="refetch"
      >
        <v-btn
          v-if="can('create', 'employee_terminations')"
          class="tw-flex md:tw-hidden tw-w-5 tw-h-5 tw-px-2 tw-rounded-[4px] tw-bg-primary"
          flat
          size="40"
          @click="open"
        >
          <FilePlusIcon class="tw-text-white" />
        </v-btn>
        <v-btn
          v-if="selectedItems.length"
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
          v-if="selectedItems.length && can('delete', 'employee_terminations')"
          class="tw-bg-error tw-text-white"
          :loading="isLoading"
          @click="bulkDeleteItem"
        >
          {{ t('common.action.delete') }}
        </v-btn>
        <v-btn v-if="can('create', 'employee_terminations')" class="tw-bg-primary tw-w-[180px]" @click="open">
          <span class="tw-text-sm tw-text-white tw-font-medium create-button">
            {{ t('termination.action.create') }}
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
      />
    </template>
  </app-fixed-page>
</template>

<style lang="scss">
.create-button {
  letter-spacing: 1.25px;
}
</style>

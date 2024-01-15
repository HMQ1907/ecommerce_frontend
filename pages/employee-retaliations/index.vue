<script setup lang="ts">
import { useToast } from 'vue-toastification'
import { useI18n } from 'vue-i18n'
import { useAbility } from '@casl/vue'
import { useQueryClient } from 'vue-query'
import { chain, get } from 'lodash'
import { ref } from 'vue'
import { createDialog } from 'vuetify3-dialog'
import { useModal } from 'vue-final-modal'
import AppFixedPage from '@/components/shared/AppFixedPage.vue'
import AppFilter from '@/components/shared/AppFilter.vue'
import table from '@/mixins/table'
import useGetEmployeeRetaliations from '@/composables/use-get-employee-retaliations'
import CreateRetaliationModel from '@/components/employees/retaliations/CreateRetaliationModel.vue'
import UpdateRetaliationModal from '@/components/employees/retaliations/UpdateRetaliationModal.vue'
import Parser from '@/utils/parser'
const { data } = useAuth()

definePageMeta({
  action: 'view',
  resource: 'employee_retaliations',
})

const dayjs = useDayjs()
const toast = useToast()
const { t } = useI18n()
const { $api } = useNuxtApp()
const { can } = useAbility()
const queryClient = useQueryClient()
const router = useRouter()
const isSubmitting = ref(false)

const headers = ref([
  {
    title: t('transfers.model.employee'),
    field: 'employee.full_name',
    key: 'employee.full_name',
    align: 'left',
    fixed: 'left',
    minWidth: '200px',
  },
  {
    title: t('retaliations.model.applySalaryDate'),
    field: 'apply_salary_date',
    key: 'apply_salary_date',
    align: 'center',
    minWidth: '140px',
    formatter: 'formatDate',
  },
  {
    title: t('retaliations.model.incrementDate'),
    field: 'increment_date',
    key: 'increment_date',
    align: 'center',
    minWidth: '120px',
    formatter: 'formatDate',
  },
  {
    title: t('retaliations.model.previousSalary'),
    field: 'previous_salary',
    key: 'previous_salary',
    align: 'center',
    minWidth: '120px',
    formatter: 'formatCurrency',
  },
  {
    title: t('retaliations.model.newSalary'),
    field: 'new_salary',
    key: 'new_salary',
    align: 'center',
    minWidth: '120px',
    formatter: 'formatCurrency',
  },
  {
    title: t('retaliations.model.amount'),
    field: 'amount',
    key: 'amount',
    align: 'center',
    minWidth: '100px',
    formatter: 'formatCurrency',
  },
  {
    title: t('retaliations.model.months'),
    field: 'months',
    key: 'months',
    align: 'center',
    minWidth: '70px',
  },
  {
    title: t('retaliations.model.amountOfMoney'),
    field: 'amount_of_money',
    key: 'amount_of_money',
    align: 'center',
    minWidth: '140px',
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
            color: 'primary',
            disabled: !can('edit', 'employee_retaliations'),
            icon: 'mdi-pencil-outline',
            click: () => editItem(row),
          },
          {
            name: 'delete',
            color: 'error',
            disabled: !can('delete', 'employee_retaliations'),
            icon: 'mdi-delete-outline',
            click: () => deleteItem(row),
          },
        ],
      }),
    },
  },
])

const editConfig = ref({
  trigger: 'click',
  mode: 'row',
  showStatus: true,
})

const schema = ref([
  {
    defaultValue: '',
    name: 'q',
    label: t('employees.action.search'),
    type: 'text',
    enabled: true,
    readonly: false,
    class: 'md:tw-w-[230px] xl:tw-w-[450px]',
    clearable: true,
    props: {
      prependInnerIcon: 'mdi-magnify',
    },
  },
  {
    defaultValue: dayjs().format('YYYY-MM'),
    name: 'apply_salary_month',
    label: t('retaliations.model.applySalaryDate'),
    type: 'date',
    enabled: true,
    readonly: false,
    clearable: true,
    props: {
      pickerType: 'month',
    },
  },
  {
    defaultValue: dayjs().format('YYYY-MM'),
    name: 'increment_month',
    label: t('retaliations.model.incrementDate'),
    type: 'date',
    enabled: true,
    readonly: false,
    clearable: true,
    props: {
      pickerType: 'month',
    },
  },
])

const queryBuilder = ref({
  filters: chain(schema.value).keyBy('name').mapValues('defaultValue').value(),
  sorts: ['-created_at'],
  page: 1,
  limit: table.limit,
})

const { items, totalItems, isLoading, isFetching, refetch } = useGetEmployeeRetaliations(queryBuilder)

const { open, close } = useModal({
  component: CreateRetaliationModel,
  attrs: {
    clickToClose: false,
    escToClose: false,
    title: t('retaliations.action.create'),
    zIndexFn: () => 1010,
    onClosed() {
      close()
    },
  },
})

const editItem = (item: any) => {
  const { open, close } = useModal({
    component: UpdateRetaliationModal,
    attrs: {
      clickToClose: false,
      escToClose: false,
      item,
      title: t('retaliations.action.update'),
      zIndexFn: () => 1010,
      onClosed() {
        close()
      },
    },
  })
  open()
}

const deleteItem = async (item: any) => {
  const isConfirmed = await createDialog({
    level: 'warning',
    title: t('employees.message.deleteTitle'),
    text: t('employees.message.deleteText', { name: item.full_name }),
    cardOptions: {
      class: 'delete-dialog',
    },
    buttons: [
      { key: false, title: t('common.action.cancel'), color: 'grey' },
      { key: true, title: t('common.action.confirm'), color: 'warning' },
    ],
  })

  if (isConfirmed) {
    $api.employeeRetaliations.deleteEmployeeRetaliation(item.id).then(() => {
      toast.success(t('common.message.deleteSuccess'))
      refetch.value()
    })
  }
}

const exportRetaliation = () => {
  isSubmitting.value = true
  queryBuilder.value.filters.branch_id = data.value.branch_id
  $api.employeeRetaliations
    .exportRetaliation(
      new Parser({
        includes: [],
        appends: [],
        fields: {},
        sorts: queryBuilder.value.sorts,
        filters: queryBuilder.value.filters,
        payload: null,
        limit: 1000,
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
      link.setAttribute('download', 'retaliation.xlsx')
      document.body.appendChild(link)
      link.click()
      toast.success(t('retaliations.action.exportSuccess'))
    })
    .finally(() => {
      isSubmitting.value = false
    })
}
</script>

<template>
  <app-fixed-page :title="$t('retaliations.title')">
    <template #leftAction>
      <app-filter
        v-model:value="queryBuilder"
        addition-button-class="tw-flex lg:tw-hidden"
        :display="3"
        :schema="schema"
        @apply="refetch"
      >
        <v-btn
          class="tw-flex md:tw-hidden tw-w-5 tw-h-5 tw-px-2 tw-py-0 tw-rounded-[4px] tw-bg-primary"
          flat
          size="40"
          @click="open"
        >
          <FilePlusIcon class="tw-text-white" />
        </v-btn>
      </app-filter>
    </template>
    <template #rightAction>
      <div class="gap-2 justify-end tw-items-center tw-hidden md:tw-flex">
        <v-btn :disabled="isFetching" icon variant="text" @click="refetch">
          <RefreshIcon size="20" />
        </v-btn>
        <v-btn
          v-if="can('view', 'employee_retaliations')"
          class="tw-w-5 tw-h-5 tw-px-2 tw-py-0 tw-rounded-[4px] tw-bg-[#F5F5F5] tw-w-[168px]"
          color="success"
          :loading="isSubmitting"
          size="40"
          @click="exportRetaliation"
        >
          <DownloadIcon size="20" />
          <span class="tw-text-sm tw-text-white tw-font-medium create-button">
            {{ t('retaliations.action.export') }}
          </span>
        </v-btn>
        <v-btn v-if="can('create', 'employee_retaliations')" class="tw-bg-primary tw-w-[168px]" @click="open">
          <span class="tw-text-sm tw-text-white tw-font-medium create-button">
            {{ t('retaliations.action.create') }}
          </span>
        </v-btn>
      </div>
    </template>
    <template #table>
      <common-table
        v-model:page="queryBuilder.page"
        v-model:page-size="queryBuilder.limit"
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

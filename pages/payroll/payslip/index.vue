<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { chain } from 'lodash'
import { useModal } from 'vue-final-modal'
import { useToast } from 'vue-toastification'
import { createDialog } from 'vuetify3-dialog'
import { useAbility } from '@casl/vue'
import { useQueryClient } from 'vue-query'
import table from '@/mixins/table'
import filters from '@/plugins/filters/currency'
import useGetPayslips from '@/composables/use-get-payslips'
import AppFixedPage from '@/components/shared/AppFixedPage'
import AppFilter from '@/components/shared/AppFilter'
import useGetSalaryComponents from '@/composables/use-get-salary-components'
import UpdatePayslipModal from '@/components/Payroll/payslip/organisms/UpdatePayslipModal'
import ImportPayslip from '@/components/Payroll/payslip/organisms/ImportPayslip'
import CreateRatePayslipModal from '@/components/Payroll/payslip/organisms/CreateRatePayslipModal'
import Parser from '@/utils/parser'

definePageMeta({
  action: 'view',
  resource: 'payslips',
})

const { t } = useI18n()
const { can } = useAbility()
const queryClient = useQueryClient()
const toast = useToast()
const dayjs = useDayjs()
const { $api } = useNuxtApp()
const { data } = useAuth()

const schema = ref([
  {
    defaultValue: '',
    name: 'q',
    label: t('common.filter.searchByName'),
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
    defaultValue: dayjs().format('YYYY-MM-DD'),
    name: 'month',
    label: t('common.filter.month'),
    type: 'date',
    enabled: true,
    readonly: false,
    clearable: true,
  },
  {
    defaultValue: null,
    name: 'employee_type',
    label: t('employees.model.type'),
    type: 'select',
    enabled: true,
    readonly: false,
    class: 'md:tw-w-[200px] xl:tw-w-[400px]',
    clearable: true,
    props: {
      items: [
        { title: t('employees.type.staff'), value: 'staff' },
        { title: t('employees.type.contractor'), value: 'contractor' },
        { title: t('employees.type.expat'), value: 'expat' },
        { title: t('employees.type.removal'), value: 'removal' },
      ],
      itemTitle: 'title',
      itemValue: 'value',
    },
  },
])

const queryBuilder = ref({
  filters: chain(schema.value).keyBy('name').mapValues('defaultValue').value(),
  page: 1,
  limit: table.limit,
})

const query = ref({
  filters: {},
  sorts: [],
  page: 1,
  limit: table.limit,
})

const { items: components, allowances } = useGetSalaryComponents(query)

const editConfig = ref({
  trigger: 'click',
  mode: 'row',
  showStatus: true,
})

const headers = computed(() => [
  {
    title: t('payslip.model.employeeCode'),
    field: 'employee.employee_code',
    key: 'employee_code',
    align: 'center',
    fixed: 'left',
    minWidth: '120px',
  },
  {
    title: t('payslip.model.employeeName'),
    field: 'employee.full_name',
    key: 'employee_name',
    fixed: 'left',
    minWidth: '300px',
  },
  {
    title: t('payslip.model.basicSalary'),
    field: 'salary_json.basic_salary',
    key: 'basic_salary',
    align: 'center',
    fixed: 'left',
    minWidth: '160px',
    formatter: 'formatCurrency',
  },
  {
    title: t('payslip.model.socialSecurity'),
    field: 'salary_json.social_security',
    key: 'social_security',
    align: 'center',
    minWidth: '160px',
    formatter: 'formatCurrency',
  },
  {
    title: t('payslip.model.salaryAfterSecurity'),
    field: 'salary_json.salary_after_social_security',
    key: 'salary_after_social_security',
    align: 'center',
    minWidth: '160px',
    formatter: 'formatCurrency',
  },
  {
    title: t('payslip.model.incentMoney'),
    field: 'extra_json.incent_money',
    key: 'incent_money',
    align: 'center',
    minWidth: '160px',
    formatter: 'formatCurrency',
  },
  {
    title: t('payslip.model.mainAllowance'),
    align: 'center',
    minWidth: '200px',
    children: allowances?.value.map((e: any) => ({
      title: e.name,
      field: `${e.id}`,
      key: e.id,
      align: 'center',
      minWidth: '160px',
      cellRender: {
        name: 'PayslipComponent',
        props: (row: any) => ({
          components: row?.salary_json.main_allowances || [],
        }),
      },
    })),
  },
  {
    title: t('payslip.model.otMoney'),
    field: 'salary_json.amount_ot',
    key: 'amount_ot',
    align: 'center',
    minWidth: '160px',
    formatter: 'formatCurrency',
  },
  {
    title: t('payslip.model.retaliation'),
    field: 'salary_json.retaliation',
    key: 'retaliation',
    align: 'center',
    minWidth: '160px',
    formatter: 'formatCurrency',
  },
  {
    title: t('payslip.model.hrs'),
    field: 'salary_json.hrs',
    key: 'hrs',
    align: 'center',
    minWidth: '80px',
  },
  {
    title: t('awards.title'),
    field: '',
    key: 'employee_award',
    align: 'center',
    minWidth: '160px',
    formatter: 'formatCurrency',
    cellRender: {
      name: 'PayslipTotalAward',
      props: (row: any): any => ({
        awards: row || [],
        dayjs,
      }),
    },
  },
  {
    title: t('awards.model.allowance'),
    field: '',
    key: 'employee_award',
    align: 'center',
    minWidth: '160px',
    formatter: 'formatCurrency',
    cellRender: {
      name: 'PayslipTotalAllowance',
      props: (row: any): any => ({
        awards: row || [],
        dayjs,
      }),
    },
  },
  {
    title: t('awards.model.birthday'),
    field: '',
    key: 'employee_award',
    align: 'center',
    minWidth: '160px',
    formatter: 'formatCurrency',
    cellRender: {
      name: 'PayslipTotalBirthday',
      props: (row: any): any => ({
        awards: row || [],
        dayjs,
      }),
    },
  },
  {
    title: t('payslip.model.totalSalary'),
    field: 'gross_salary',
    key: 'gross_salary',
    align: 'center',
    minWidth: '160px',
    formatter: 'formatCurrency',
  },
  {
    title: t('payslip.model.retainedTax'),
    field: 'salary_json.personal_income_tax',
    key: 'personal_income_tax',
    align: 'center',
    minWidth: '160px',
    formatter: 'formatCurrency',
  },
  {
    title: t('payslip.model.totalMoney'),
    field: 'net_salary',
    key: 'net_salary',
    align: 'center',
    minWidth: '160px',
    formatter: 'formatCurrency',
  },
  {
    title: t('payslip.model.addDiff'),
    field: 'salary_json.add_diff',
    key: 'add_diff',
    align: 'center',
    minWidth: '160px',
    formatter: 'formatCurrency',
  },
  {
    title: t('payslip.model.netPay'),
    field: 'net_salary',
    key: 'net_salary',
    align: 'center',
    minWidth: '160px',
    formatter: 'formatCurrency',
  },
  {
    title: t('payslip.model.salaryConvert'),
    field: 'salary_json.salary_convert',
    key: 'salary_convert',
    align: 'center',
    minWidth: '160px',
    formatter: ({ cellValue }) => {
      return filters.currency(cellValue, 'VND')
    },
    // cellRender: {
    //   name: 'CommonText',
    //   props: (row: any): any => ({
    //     title:
    //       row?.employee?.type === 'expat'
    //         ? filters.currency(row?.salary_json.salary_convert, 'VND')
    //         : filters.currency(0),
    //   }),
    // },
  },
  {
    title: t('payslip.model.retirementFundProvision'),
    field: 'total_retirement_fund',
    key: 'total_retirement_fund',
    align: 'center',
    minWidth: '160px',
    formatter: 'formatCurrency',
  },
  {
    title: t('payslip.model.socialSecurityFundByCompany'),
    field: 'salary_json.insurance_salary',
    key: 'insurance_salary',
    align: 'center',
    minWidth: '160px',
    formatter: 'formatCurrency',
  },
  // {
  //   title: t('payslip.model.status'),
  //   field: 'status',
  //   key: 'status',
  //   align: 'center',
  //   minWidth: '120px',
  //   cellRender: {
  //     name: 'TableChip',
  //     props: (row: any): any => ({
  //       title: filtersPayslip.status(row.status),
  //       color: filtersPayslip.statusColor(row.status),
  //     }),
  //   },
  // },
  // {
  //   title: t('payslip.model.paidOn'),
  //   field: 'paid_on',
  //   key: 'paid_on',
  //   align: 'center',
  //   minWidth: '100px',
  //   formatter: 'formatDate',
  // },
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
            name: 'sendMail',
            color: 'info',
            permission: !can('edit', 'payslips'),
            icon: 'mdi-email-fast-outline',
            click: () => sendMailPayslips(row.id),
          },
          {
            name: 'update',
            color: 'info',
            permission: !can('edit', 'payslips'),
            disabled: row.status === 'paid',
            icon: 'mdi-pencil-outline',
            click: () => onUpdateModal(row),
          },
        ],
      }),
    },
  },
])

const { items, totalItems, isLoading, isFetching, refetch } = useGetPayslips(queryBuilder)

const selectedItems = ref([])
const onUpdateModal = (item: any) => {
  const { open, close } = useModal({
    component: UpdatePayslipModal,
    attrs: {
      clickToClose: false,
      escToClose: false,
      item,
      title: t('payslip.action.updatePayslip'),
      reserveScrollBarGap: false,
      zIndexFn: () => 1010,
      onClosed() {
        close()
      },
    },
  })
  open()
}

const loading = ref(false)

const generate = () => {
  const { open, close } = useModal({
    component: CreateRatePayslipModal,
    attrs: {
      clickToClose: false,
      escToClose: false,
      item: {
        queryBuilder: queryBuilder.value.filters.month,
      },
      title: t('payslip.action.createRate'),
      reserveScrollBarGap: false,
      zIndexFn: () => 1010,
      onClosed() {
        close()
      },
    },
  })
  open()
}

const exportSalary = () => {
  loading.value = true
  queryBuilder.value.filters.branch_id = data.value.branch_id
  queryBuilder.value.filters.month = dayjs(queryBuilder.value.filters.month).format('YYYY-MM')
  const params = {
    limit: 1000,
  }
  $api.employees
    .exportSalary(
      new Parser({
        includes: [],
        appends: [],
        fields: {},
        sorts: [],
        filters: queryBuilder.value.filters,
        payload: null,
        ...params,
      }).query()
    )
    .then(() => {
      toast.success(t('departments.action.export'))
    })
    .finally(() => {
      loading.value = false
    })
}

const sendMailPayslips = async (id: any) => {
  const isConfirmed = await createDialog({
    level: 'warning',
    title: t('payslip.message.sendMailTitle'),
    text: t('payslip.message.sendMailText'),
    cardOptions: {
      class: 'delete-dialog',
    },
    buttons: [
      { key: false, title: t('common.action.cancel'), color: 'grey' },
      { key: true, title: t('common.action.confirm'), color: 'primary' },
    ],
  })
  if (isConfirmed) {
    loading.value = true
    const ids = typeof id === 'number' ? [id] : selectedItems.value
    $api.payrollConfig
      .sendMailPayslips({
        ids,
        month: queryBuilder.value.filters.month,
      })
      .then(() => {
        toast.success(t('payslip.notice.sendEmailSuccess'))
      })
      .finally(() => {
        loading.value = false
      })
  }
}

const payPayslips = async () => {
  const isConfirmed = await createDialog({
    level: 'warning',
    title: t('payslip.message.payTitle'),
    text: t('payslip.message.payText'),
    cardOptions: {
      class: 'delete-dialog',
    },
    buttons: [
      { key: false, title: t('common.action.cancel'), color: 'grey' },
      { key: true, title: t('common.action.confirm'), color: 'primary' },
    ],
  })
  if (isConfirmed) {
    loading.value = true
    $api.payrollConfig
      .payPayslips({
        ids: selectedItems.value,
      })
      .then(() => {
        toast.success(t('payslip.notice.paySuccess'))
        refetch.value()
      })
      .finally(() => {
        loading.value = false
      })
  }
}

const importPayslip = (item: any) => {
  const { open, close } = useModal({
    component: ImportPayslip,
    attrs: {
      clickToClose: false,
      escToClose: false,
      item,
      title: t('payslip.model.importPayslip'),
      zIndexFn: () => 1010,
      onClosed() {
        close()
        queryClient.invalidateQueries('payslips')
      },
    },
  })
  open()
}
</script>

<template>
  <app-fixed-page :title="$t('payslip.list')">
    <template #leftAction>
      <app-filter v-model:value="queryBuilder" :schema="schema" @apply="refetch" />
    </template>
    <template #rightAction>
      <div class="gap-2 justify-end tw-items-center tw-hidden md:tw-flex">
        <v-btn :disabled="isFetching" icon variant="text" @click="refetch">
          <RefreshIcon size="20" />
        </v-btn>
        <v-btn
          v-if="can('edit', 'payslips')"
          color="success"
          :loading="loading"
          prepend-icon="mdi-download-outline"
          small
          @click="exportSalary"
        >
          {{ t('employees.action.exportSalary') }}
        </v-btn>
        <!--        <v-btn-->
        <!--          v-if="selectedItems.length && can('edit', 'payslips')"-->
        <!--          color="success"-->
        <!--          :loading="loading"-->
        <!--          prepend-icon="mdi-account-credit-card-outline"-->
        <!--          small-->
        <!--          @click="payPayslips"-->
        <!--        >-->
        <!--          {{ t('payslip.action.payment') }}-->
        <!--        </v-btn>-->
        <!--        <v-btn-->
        <!--          v-if="selectedItems.length && can('edit', 'payslips')"-->
        <!--          color="info"-->
        <!--          :loading="loading"-->
        <!--          prepend-icon="mdi-email-fast-outline"-->
        <!--          small-->
        <!--          @click="sendMailPayslips"-->
        <!--        >-->
        <!--          {{ t('payslip.action.sendMail') }}-->
        <!--        </v-btn>-->
        <!--        <v-btn-->
        <!--          v-if="can('edit', 'payslips')"-->
        <!--          color="success"-->
        <!--          :loading="loading"-->
        <!--          prepend-icon="mdi-file-import-outline"-->
        <!--          small-->
        <!--          @click="importPayslip"-->
        <!--        >-->
        <!--          {{ t('payslip.action.importPayslip') }}-->
        <!--        </v-btn>-->
        <v-btn
          v-if="can('create', 'payslips')"
          color="primary"
          :loading="loading"
          prepend-icon="mdi-send"
          small
          @click="generate"
        >
          {{ t('payslip.action.generate') }}
        </v-btn>
      </div>
    </template>
    <template #table>
      <common-table
        ref="payslipTable"
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

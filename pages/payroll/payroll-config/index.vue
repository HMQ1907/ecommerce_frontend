<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { chain, toUpper } from 'lodash'
import { useModal } from 'vue-final-modal'
import { useAbility } from '@casl/vue'
import table from '@/mixins/table'
import useGetEmployeeSalaries from '@/composables/use-get-employee-salaries'
import AppFixedPage from '@/components/shared/AppFixedPage'
import AppFilter from '@/components/shared/AppFilter'
import CreateSalaryModal from '@/components/Payroll/payroll-config/CreateSalaryModal'
import ViewSalaryHistoryModal from '@/components/Payroll/payroll-config/ViewSalaryHistoryModal'

definePageMeta({
  action: 'view',
  resource: 'employee_salaries',
})

const { t } = useI18n()
const { $api } = useNuxtApp()

const editConfig = ref({
  trigger: 'click',
  mode: 'row',
  showStatus: true,
})

const { can } = useAbility()
const salaryComponents = ref([])

const headers = computed(() => [
  {
    title: t('payrollConfig.model.employeeName'),
    field: 'employee_name',
    key: 'employee_name',
    fixed: 'left',
    minWidth: '180px',
  },
  {
    title: t('payrollConfig.model.basicSalary'),
    field: 'salary.current_basic_salary',
    key: 'basic_salary',
    align: 'center',
    fixed: 'left',
    sortBy: '',
    minWidth: '120px',
    formatter: 'formatCurrency',
  },
  {
    title: t('payrollConfig.model.mainAllowance'),
    align: 'center',
    minWidth: '100px',
    children: salaryComponents.value.map((e: any) => ({
      title: e.name,
      field: `${e.id}`,
      key: e.id,
      align: 'center',
      minWidth: '120px',
      cellRender: {
        name: 'EmployeeSalaryAllowance',
        props: (row: any) => ({
          variables: row?.salary?.variable_salaries || [],
        }),
      },
    })),
  },
  {
    title: t('payrollConfig.model.socialSecurity'),
    field: 'salary.social_security',
    key: 'social_security',
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
            name: 'addSalary',
            color: 'success',
            disabled: row.salary,
            permission: !can('create', 'employee_salaries'),
            icon: 'mdi-plus',
            click: () => onCreateModal(row),
          },
          {
            name: 'historySalary',
            color: 'accent',
            disabled: !row.salary,
            permission: !can('view', 'employee_salaries'),
            icon: 'mdi-eye-outline',
            click: () => onViewRow(row),
          },
          {
            name: 'updateSalary',
            color: 'info',
            disabled: !row.salary,
            permission: !can('edit', 'employee_salaries'),
            icon: 'mdi-pencil-outline',
            click: () => onUpdateModal(row),
          },
        ],
      }),
    },
  },
])

onMounted(() => {
  $api.payrollConfig.getMainAllowances().then(({ data }) => {
    salaryComponents.value = data
  })
})

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
  sorts: ['sort_order'],
  page: 1,
  limit: table.limit,
})

const { items, totalItems, isLoading, isFetching, refetch } = useGetEmployeeSalaries(queryBuilder)

const onCreateModal = (item: any) => {
  const { open, close } = useModal({
    component: CreateSalaryModal,
    attrs: {
      clickToClose: false,
      escToClose: false,
      item,
      title: `${t('payrollConfig.action.addSalary')} ${item.employee_name}`,
      components: salaryComponents,
      reserveScrollBarGap: false,
      zIndexFn: () => 1010,
      onClosed() {
        close()
      },
    },
  })
  open()
}
const onUpdateModal = (item: any) => {
  const { open, close } = useModal({
    component: CreateSalaryModal,
    attrs: {
      clickToClose: false,
      escToClose: false,
      item,
      title: `${t('payrollConfig.action.updateSalary')} ${item.employee_name}`,
      components: salaryComponents,
      update: true,
      reserveScrollBarGap: false,
      zIndexFn: () => 1010,
      onClosed() {
        close()
      },
    },
  })
  open()
}
const onViewRow = (item: any) => {
  const { open, close } = useModal({
    component: ViewSalaryHistoryModal,
    attrs: {
      clickToClose: false,
      escToClose: false,
      item,
      title: `${t('payrollConfig.action.salaryHistory')} ${item.employee_name}`,
      components: salaryComponents,
      reserveScrollBarGap: false,
      zIndexFn: () => 1010,
      onClosed() {
        close()
      },
    },
  })
  open()
}
</script>

<template>
  <app-fixed-page :title="$t('payrollConfig.title')">
    <template #leftAction>
      <app-filter v-model:value="queryBuilder" :schema="schema" @apply="refetch" />
    </template>
    <template #rightAction>
      <div class="gap-2 justify-end tw-items-center tw-hidden md:tw-flex">
        <v-btn :disabled="isFetching" icon variant="text" @click="refetch">
          <RefreshIcon size="20" />
        </v-btn>
      </div>
    </template>
    <template #table>
      <common-table
        v-model:page="queryBuilder.page"
        v-model:page-size="queryBuilder.limit"
        v-model:selected="queryBuilder.page"
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

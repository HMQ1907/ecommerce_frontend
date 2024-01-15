<script setup lang="ts">
import { useToast } from 'vue-toastification'
import { useI18n } from 'vue-i18n'
import { useAbility } from '@casl/vue'
import { useQueryClient } from 'vue-query'
import { chain, get } from 'lodash'
import { ref } from 'vue'
import { createDialog } from 'vuetify3-dialog'
import useGetEmployees from '@/composables/use-get-employees'
import AppFixedPage from '@/components/shared/AppFixedPage'
import AppFilter from '@/components/shared/AppFilter'
import table from '@/mixins/table'
import Parser from '@/utils/parser'

definePageMeta({
  action: 'view',
  resource: 'employees',
})

const dayjs = useDayjs()
const toast = useToast()
const { t } = useI18n()
const { $api } = useNuxtApp()
const { can } = useAbility()
const queryClient = useQueryClient()
const router = useRouter()
const { data } = useAuth()

const headers = ref([
  {
    title: t('employees.model.name'),
    field: 'full_name',
    key: 'full_name',
    align: 'left',
    fixed: 'left',
    minWidth: '300px',
    cellRender: {
      name: 'CommonText',
      props: (row: any): any => ({
        title: row.full_name,
        classText: getEmployeeColor(row.expiry_status),
      }),
    },
  },
  {
    title: t('departments.model.name'),
    field: 'department.name',
    key: 'name',
    align: 'left',
    minWidth: '200px',
  },
  {
    title: t('employees.model.designation'),
    field: 'designation.name',
    key: 'designation',
    align: 'left',
    minWidth: '200px',
  },
  {
    title: t('employees.model.indicator'),
    field: 'indicator',
    key: 'indicator',
    align: 'left',
    minWidth: '100px',
  },
  // {
  //   title: t('employees.model.salary'),
  //   field: 'basic_salary',
  //   key: 'basic_salary',
  //   align: 'left',
  //   minWidth: '100px',
  //   formatter: 'formatCurrency',
  // },
  // {
  //   title: t('employees.model.housingAllowance'),
  //   field: 'housing_allowance',
  //   key: 'housing_allowance',
  //   align: 'left',
  //   minWidth: '120px',
  //   formatter: 'formatCurrency',
  // },
  // {
  //   title: t('employees.model.positionAllowance'),
  //   field: 'position_allowance',
  //   key: 'position_allowance',
  //   align: 'left',
  //   minWidth: '120px',
  //   formatter: 'formatCurrency',
  // },
  {
    title: t('employees.model.dateOfBirth'),
    field: 'date_of_birth',
    key: 'date_of_birth',
    align: 'left',
    minWidth: '120px',
    formatter: 'formatDate',
  },
  {
    title: t('employees.model.dateToCompany'),
    field: 'date_to_company',
    key: 'date_to_company',
    align: 'left',
    minWidth: '120px',
    formatter: 'formatDate',
  },
  {
    title: t('employees.model.dateToJobGroup'),
    field: 'date_to_job_group',
    key: 'date_to_job_group',
    align: 'left',
    minWidth: '120px',
    formatter: 'formatDate',
  },
  {
    title: t('employees.model.job'),
    field: 'job',
    key: 'job',
    align: 'left',
    minWidth: '80px',
  },
  {
    title: t('employees.model.employee_code'),
    field: 'employee_code',
    key: 'employee_code',
    align: 'left',
    minWidth: '120px',
  },
  {
    title: t('employees.model.gender'),
    field: 'gender',
    key: 'gender',
    align: 'left',
    minWidth: '80px',
    cellRender: {
      name: 'TableChip',
      props: (row) => {
        const titleMapping = {
          male: t('employees.model.male'),
          female: t('employees.model.female'),
        }

        const colorMapping = {
          male: 'primary',
          female: 'warning',
        }

        return {
          color: colorMapping[row.gender] || 'primary',
          title: titleMapping[row.gender] || '',
        }
      },
    },
  },
  {
    title: t('employees.model.age'),
    field: 'age',
    key: 'age',
    align: 'left',
    minWidth: '100px',
  },
  {
    title: t('employees.model.normalRetirementDate'),
    field: 'normal_retirement_date',
    key: 'normal_retirement_date',
    align: 'left',
    minWidth: '120px',
    formatter: 'formatDate',
  },
  {
    title: t('employees.model.education'),
    field: 'education',
    key: 'education',
    align: 'left',
    minWidth: '120px',
  },
  {
    title: t('employees.model.type'),
    field: 'type',
    key: 'type',
    align: 'center',
    minWidth: '120px',
    cellRender: {
      name: 'TableChip',
      props: (row) => {
        const titleMapping = {
          staff: t('employees.type.staff'),
          contractor: t('employees.type.contractor'),
          expat: t('employees.type.expat'),
          removal: t('employees.type.removal'),
        }

        const colorMapping = {
          staff: 'primary',
          contractor: 'warning',
          expat: 'success',
          removal: 'error',
        }

        return {
          color: colorMapping[row.type] || 'primary',
          title: titleMapping[row.type] || '',
        }
      },
    },
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
            name: 'view',
            color: 'info',
            disabled: !can('edit', 'employees'),
            icon: 'mdi-eye-outline',
            click: () => router.push({ name: 'employees-id-personal', params: { id: row.id } }),
          },
          {
            name: 'delete',
            color: 'error',
            disabled: !can('delete', 'employees'),
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
    defaultValue: [],
    name: 'start_date_between',
    type: 'date',
    enabled: true,
    readonly: false,
    clearable: true,
    class: 'tw-w-[50%] md:tw-w-[230px] xl:tw-w-[450px]',
    props: {
      range: true,
      label: t('employees.model.dateToCompany'),
    },
  },
  {
    defaultValue: null,
    name: 'department_id',
    label: t('departments.model.name'),
    type: 'DepartmentAutocomplete',
    enabled: true,
    readonly: false,
    class: 'tw-w-30 sm:tw-w-[200px]',
    clearable: true,
    props: {
      itemText: 'name',
      itemValue: 'id',
    },
  },
  {
    defaultValue: ['staff', 'contractor', 'expat'],
    name: 'type',
    label: t('employees.model.employeeType'),
    type: 'select',
    enabled: true,
    readonly: false,
    class: 'tw-w-30 sm:tw-w-[330px]',
    clearable: true,
    props: {
      multiple: true,
      items: [
        { value: t('employees.type.staff'), key: 'staff' },
        { value: t('employees.type.contractor'), key: 'contractor' },
        { value: t('employees.type.expat'), key: 'expat' },
        { value: t('employees.type.removal'), key: 'removal' },
      ],
      itemTitle: 'value',
      itemValue: 'key',
    },
  },
  {
    defaultValue: null,
    name: 'designation_id',
    label: t('employees.model.designation'),
    type: 'DesignationAutocomplete',
    enabled: true,
    readonly: false,
    class: 'tw-w-30 sm:tw-w-[200px]',
    clearable: true,
    props: {
      multiple: true,
      itemText: 'name',
      itemValue: 'id',
    },
  },
  {
    defaultValue: null,
    name: 'gender',
    label: t('employees.model.gender'),
    type: 'select',
    enabled: true,
    readonly: false,
    class: 'tw-w-30 sm:tw-w-[330px]',
    clearable: true,
    props: {
      items: [
        { value: t('employees.gender.male'), key: 'male' },
        { value: t('employees.gender.female'), key: 'female' },
        { value: t('employees.gender.others'), key: 'others' },
      ],
      itemTitle: 'value',
      itemValue: 'key',
    },
  },
])

const queryBuilder = ref({
  filters: chain(schema.value).keyBy('name').mapValues('defaultValue').value(),
  sorts: ['sort_order'],
  page: 1,
  limit: table.limit,
})

const { items, totalItems, isLoading, isFetching, refetch } = useGetEmployees(queryBuilder)

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
    $api.employees.deleteEmployee(item.id).then(() => {
      toast.success(t('common.message.deleteSuccess'))
      refetch.value()
    })
  }
}
const loading = ref(false)

const exportEmployeeRecord = () => {
  loading.value = true
  queryBuilder.value.filters.month = dayjs(queryBuilder.value.filters.month).format('YYYY-MM')
  queryBuilder.value.filters.type = null
  const params = {
    limit: 1000,
  }
  $api.employees
    .exportEmployeeRecord(
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
      link.setAttribute('download', 'employee-record.xlsx')
      document.body.appendChild(link)
      link.click()
      toast.success(t('departments.action.export'))
    })
    .catch((err) => {
      toast.error(t(err.message))
    })
    .finally(() => {
      loading.value = false
    })
}

const getEmployeeColor = (item: any) => {
  switch (item) {
    case 'nearing_expiry':
      return 'tw-text-warning'
    case 'expired':
      return 'tw-text-error'
    default:
      return 'tw-text-default'
  }
}
</script>

<template>
  <app-fixed-page :title="$t('employees.title')">
    <template #leftAction>
      <app-filter
        v-model:value="queryBuilder"
        addition-button-class="tw-flex"
        :display="3"
        :schema="schema"
        @apply="refetch"
      >
        <v-btn class="tw-flex md:tw-hidden tw-w-5 tw-h-5 tw-px-2 tw-py-0 tw-rounded-[4px] tw-bg-primary" flat size="40">
          <FilePlusIcon class="tw-text-white" />
        </v-btn>
      </app-filter>
    </template>
    <template #rightAction>
      <div class="gap-2 justify-end tw-items-center tw-hidden md:tw-flex">
        <v-btn
          v-if="can('edit', 'employees')"
          color="success"
          :loading="loading"
          prepend-icon="mdi-download-outline"
          small
          @click="exportEmployeeRecord"
        >
          {{ t('employees.action.exportRecord') }}
        </v-btn>
        <v-btn v-if="can('create', 'employees')" class="tw-bg-primary tw-w-[168px]" :to="{ name: 'employees-create' }">
          <span class="tw-text-sm tw-text-white tw-font-medium create-button">
            {{ t('employees.action.create.title') }}
          </span>
        </v-btn>
      </div>
    </template>
    <template #table>
      <div class="tw-w-full">
        <common-table
          v-model:page="queryBuilder.page"
          v-model:page-size="queryBuilder.limit"
          class="tw-h-[98%]"
          :edit-config="editConfig"
          :headers="headers"
          :items="items"
          :loading="isLoading"
          sequence
          :total-items="totalItems"
          @refetch="refetch"
        />
      </div>
    </template>
  </app-fixed-page>
</template>

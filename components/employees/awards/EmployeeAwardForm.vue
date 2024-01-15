<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useQueryClient } from 'vue-query'
import { createDialog } from 'vuetify3-dialog'
import { useToast } from 'vue-toastification'
import { chain } from 'lodash'
import { validator as payslipValidator } from '@/validators/payslip-schema'
import EmployeeAutocomplete from '@/components/common/autocomplete/EmployeeAutocomplete'
import DepartmentAutocomplete from '@/components/common/autocomplete/DepartmentAutocomplete'

const props = defineProps({
  value: {
    type: Object,
    required: true,
  },
  item: {
    type: Object,
    default: () => ({}),
  },
  setFieldValue: {
    type: Function,
    default: () => {},
  },
  update: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:value'])

const $loading = inject('$loading')
const { $api } = useNuxtApp()
const { t } = useI18n()
const queryClient = useQueryClient()
const toast = useToast()
const dayjs = useDayjs()

const editConfig = ref({
  trigger: 'click',
  mode: 'row',
  showStatus: true,
})

const checkboxConfig = ref({
  checkField: 'is_tax',
  trigger: 'click',
  mode: 'row',
  showStatus: true,
})

const form = computed({
  get: () => props.value,
  set: (val) => emit('update:value', val),
})

const headers = computed(() => [
  {
    title: t('awards.model.employeeName'),
    field: 'full_name',
    key: 'full_name',
    align: 'left',
    minWidth: '120px',
  },
  {
    title: t('awards.model.amount'),
    field: 'amount',
    key: 'amount',
    align: 'center',
    minWidth: '200px',
    editRender: {
      name: 'AwardAmount',
      props: (row: any) => ({
        bonus: row,
        type: form.value.type.modelValue,
      }),
    },
    validator: ({ cellValue }: any) => payslipValidator.amount(t('payslip.model.amount'), cellValue, 0, 1000000000),
  },
  {
    title: t('awards.model.isTax'),
    field: 'is_tax',
    key: 'is_tax',
    align: 'left',
    minWidth: '120px',
    type: 'checkbox',
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
      props: (row: any, rowIndex: number) => ({
        actions: [
          {
            name: 'delete',
            color: 'error',
            icon: 'mdi-close',
            click: () => deleteItem(row, rowIndex),
          },
        ],
      }),
    },
  },
])

const employeeType = ref(null)
const departments = ref(null)
const employeesList = ref([])

const types = [
  { title: t('awards.model.bonus'), value: 'bonus' },
  { title: t('awards.model.allowance'), value: 'allowance' },
  { title: t('awards.model.birthday'), value: 'birthday' },
]

const employeeTypes = [
  { title: t('employees.type.staff'), value: 'staff' },
  { title: t('employees.type.contractor'), value: 'contractor' },
  { title: t('employees.type.expat'), value: 'expat' },
]

watch(
  () => form.value.award_type,
  (newVal, oldVal) => {
    if (newVal !== null && newVal.modelValue !== oldVal.modelValue) {
      form.value.employees.modelValue.forEach((item: any) => {
        if (form.value.type.modelValue === 'birthday') {
          item.amount = 500000 * Number(newVal.modelValue)
        } else {
          item.amount = item.basic_salary * Number(newVal.modelValue)
        }
      })
    }
  }
)

watch(
  () => form.value.type,
  async (newVal, oldVal) => {
    if (newVal !== null && newVal.modelValue !== oldVal.modelValue) {
      if (newVal.modelValue === 'birthday') {
        const { data } = await $api.employees.getEmployees({
          filter: {
            birthday: dayjs().format('YYYY-MM-DD'),
          },
          page: 1,
          limit: 10000,
        })
        props.setFieldValue('employees', mergeData(data))
        form.value.employees.modelValue.forEach((item: any) => {
          item.amount = 500000
        })
      } else if (
        oldVal.modelValue === 'birthday' &&
        newVal.modelValue !== 'birthday' &&
        newVal.modelValue !== oldVal.modelValue
      ) {
        form.value.employees.modelValue = []
        props.setFieldValue('employees', [])
      }
    }
  }
)

watch(
  () => departments.value,
  async (newVal, oldVal) => {
    if (newVal !== null && newVal !== oldVal && newVal?.length < oldVal?.length) {
      props.setFieldValue('employees', removeData(newVal, true))
    } else {
      const { data } = await $api.employees.getEmployees({
        filter: {
          department_id: newVal,
          type: ['staff', 'contractor', 'expat'],
        },
        page: 1,
        limit: 10000,
      })
      props.setFieldValue('employees', mergeData(data))
    }
  }
)

watch(
  () => employeeType.value,
  async (newVal, oldVal) => {
    if (newVal !== null && newVal !== oldVal && newVal?.length < oldVal?.length) {
      props.setFieldValue('employees', removeData(newVal, false))
    } else {
      const { data } = await $api.employees.getEmployees({
        filter: {
          type: newVal,
        },
        page: 1,
        limit: 10000,
      })
      props.setFieldValue('employees', mergeData(data))
    }
  }
)

const mergeData = (list: any[]) => {
  return chain(list)
    .concat(form.value.employees.modelValue)
    .map((item: any) => {
      return {
        id: item.id,
        employee_award_id: item?.employee_award_id,
        employee_id: item.id,
        full_name: item.full_name,
        basic_salary: item.basic_salary,
        currency_code: item.currency_code,
        type: item.type,
        department_id: item.department_id,
        amount: form.value.award_type.modelValue
          ? item.basic_salary * Number(form.value.award_type.modelValue)
          : item.basic_salary,
        is_tax: item?.is_tax ? item?.is_tax : false,
      }
    })
    .uniqBy('id')
    .value()
}

const removeData = (list: [], department: boolean) => {
  const filteredEmployees = form.value.employees.modelValue.filter((item: any) => {
    if (department) {
      return list.includes(item.department_id)
    } else {
      return list.includes(item.type)
    }
  })

  return chain(filteredEmployees)
    .map((item: any) => {
      return {
        id: item.id,
        employee_id: item.id,
        full_name: item.full_name,
        basic_salary: item.basic_salary,
        type: item.type,
        amount: form.value.award_type.modelValue
          ? item.basic_salary * Number(form.value.award_type.modelValue)
          : item.basic_salary,
        is_tax: false,
      }
    })
    .uniqBy('id')
    .value()
}

const addNewLine = () => {
  props.setFieldValue('employees', mergeData(employeesList.value))
  employeesList.value = []
}

const deleteItem = async (row: any, index: number) => {
  if (row.award_id && row.id) {
    const isConfirmed = await createDialog({
      level: 'warning',
      title: t('awards.message.employeeAward.deleteTitle'),
      text: t('awards.message.employeeAward.deleteItem'),
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
        .deleteEmployeeAward(row.id)
        .then(() => {
          queryClient.invalidateQueries('employee-awards')
          form.value.employees.modelValue.splice(index, 1)
          toast.success(t('common.message.deleteSuccess'))
        })
        .finally(() => {
          loader.hide()
        })
    }
  } else {
    form.value.employees.modelValue.splice(index, 1)
  }
}
</script>
<template>
  <v-form class="mb-3">
    <v-row dense>
      <v-col cols="6">
        <v-text-field v-bind="form.title" density="compact" :label="t('awards.model.title')" />
      </v-col>
      <v-col cols="6">
        <v-select
          v-bind="form.type"
          density="compact"
          item-title="title"
          item-value="value"
          :items="types"
          :label="t('awards.model.type')"
        />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="6">
        <v-text-field v-bind="form.award_type" :label="t('awards.model.awardType')" type="number" />
      </v-col>
      <v-col cols="6">
        <v-select
          v-model="employeeType"
          :clearable="true"
          density="compact"
          item-title="title"
          item-value="value"
          :items="employeeTypes"
          :label="t('awards.model.contractType')"
          :multiple="true"
        />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12">
        <department-autocomplete v-model="departments" clearable :label="t('awards.model.department')" multiple />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12">
        <div class="d-flex">
          <employee-autocomplete
            v-model="employeesList"
            :label="t('awards.model.employee')"
            multiple
            return-object
            select-all
          />
          <v-btn class="ml-2" color="primary" small @click="addNewLine">
            <v-icon small>mdi-plus</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row v-if="!update" dense>
      <v-col cols="6">
        <v-text-field v-bind="form.rate_vnd" :label="t('payslip.model.rateVND')" type="number" />
      </v-col>
      <v-col cols="6">
        <v-text-field v-bind="form.rate_usd" :label="t('payslip.model.rateUSD')" type="number" />
      </v-col>
    </v-row>
  </v-form>
  <common-table
    :checkbox-config="checkboxConfig"
    :edit-config="editConfig"
    :headers="headers"
    :height="`300px`"
    hide-pagination
    :items="form.employees.modelValue"
    sequence
  />
</template>

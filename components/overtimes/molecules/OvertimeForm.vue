<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
import { upperCase } from 'lodash'
import DatePicker from '@/components/common/DatePicker'
import EmployeeAutocomplete from '@/components/common/autocomplete/EmployeeAutocomplete'
import { validator as payslipValidator, validator } from '~/validators/payslip-schema'

const props = defineProps({
  modelValue: {
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

const editConfig = ref({
  trigger: 'click',
  mode: 'row',
  showStatus: true,
})

const emit = defineEmits(['update:modelValue'])

const { t } = useI18n()
const { $api } = useNuxtApp()
const toast = useToast()
const dayjs = useDayjs()

const form = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})

const employees = ref([])
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
    title: t('awards.model.employeeName'),
    field: 'employee_name',
    key: 'employee_name',
    align: 'left',
    minWidth: '200px',
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
          minWidth: '70px',
          field: `rates.${e.id}`,
          key: `rates.${e.id}`,
          editRender: {
            name: '$input',
            props: {
              type: 'number',
            },
          },
          validator: ({ cellValue }: any) => validator.hour(t('overtime.model.hour'), cellValue, 0, 50),
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
            minWidth: '100px',
          },
          {
            title: upperCase(t('overtime.model.amount')),
            align: 'center',
            field: 'total_amount',
            key: 'total_amount',
            formatter: 'formatCurrency',
            minWidth: '120px',
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

const addNewLine = () => {
  employees.value.forEach((e: any) => {
    let basicSalary = 0
    e.salary.forEach((salary: any) => {
      if (dayjs(form.value.overtime_date.modelValue).format('YYYY-MM') === dayjs(salary.date).format('YYYY-MM')) {
        basicSalary = salary.current_basic_salary
      } else {
        basicSalary = e.basic_salary
      }
    })
    form.value.details.modelValue.push({
      employee_id: e.id,
      employee_name: e.full_name,
      currency_code: e.currency_code,
      basic_salary: basicSalary,
      salary_day: Number(basicSalary) / 26 / 8,
      total_hrs: 0,
      total_amount: 0,
      rates: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      },
    })
  })
  employees.value = []
  props.setFieldValue('overtime_date', form.value.overtime_date.modelValue)
}

watch(
  () => form.value.details.modelValue,
  (val) => {
    if (val.length > 0) {
      val.forEach((e: any) => {
        let amountOT = 0
        let hrsOT = 0
        for (let i = 1; i <= 5; i++) {
          if (e.rates[i]) {
            const amount = Number(e.rates[i]) * (Math.round(e.salary_day * 100) / 100) * (1 + i / 2)
            amountOT += Math.round(amount * 100) / 100
            hrsOT += Number(e.rates[i])
          }
        }
        if (e.rates[1] || e.rates[2] || e.rates[3] || e.rates[4] || e.rates[5]) {
          e.total_amount = amountOT
          e.total_hrs = hrsOT
        }

        if (val !== val) {
          props.setFieldValue('details', form.value.details.modelValue)
        }
      })
    }
  },
  { deep: true }
)

const deleteItem = async (row: any, index: number) => {
  form.value.details.modelValue.splice(index, 1)
}
</script>
<template>
  <v-form class="mb-3">
    <v-row dense>
      <v-col cols="6">
        <employee-autocomplete
          v-model="employees"
          :label="t('awards.model.employee')"
          multiple
          return-object
          select-all
        />
      </v-col>
      <v-col cols="6">
        <date-picker
          v-bind="form.overtime_date"
          :disabled="true"
          :label="t('common.filter.month')"
          picker-type="month"
          readonly
        />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="6">
        <v-text-field v-bind="form.rate_vnd" :label="t('payslip.model.rateVND')" type="number" />
      </v-col>
      <v-col cols="6">
        <v-text-field v-bind="form.rate_usd" :label="t('payslip.model.rateUSD')" type="number" />
      </v-col>
    </v-row>
  </v-form>
  <v-btn class="mb-4" color="primary" small @click="addNewLine">
    <v-icon left small>mdi-plus</v-icon>
    {{ $t('overtime.action.addNewLine') }}
  </v-btn>
  <common-table
    :edit-config="editConfig"
    :headers="headers"
    :height="`500px`"
    :hide-pagination="true"
    :items="form.details.modelValue"
    sequence
  />
</template>

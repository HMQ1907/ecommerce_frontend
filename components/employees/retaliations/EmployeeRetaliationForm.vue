<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import EmployeeAutocomplete from '@/components/common/autocomplete/EmployeeAutocomplete.vue'
import { EmployeeRetaliationTypes } from '@/types/employees/EmployeeRetaliationTypes'
import VCurrency from '@/components/common/VCurrency.vue'

const props = defineProps({
  value: {
    type: Object as PropType<EmployeeRetaliationTypes>,
    required: true,
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
const { t } = useI18n()
const { $api } = useNuxtApp()

const form = computed<EmployeeRetaliationTypes>({
  get: () => props.value,
  set: (val) => emit('update:value', val),
})

watch(
  () => form.value.employee_id,
  async (val, oldValue) => {
    if (val && val.modelValue && val.modelValue !== (oldValue && oldValue.modelValue)) {
      const { data } = await $api.employees.getEmployee(val.modelValue)
      props.setFieldValue('previous_salary', parseInt(data.basic_salary))
    }
  },
  { immediate: true }
)

const employee = ref(null)
const currency = ref('LAK')

watch(
  () => employee.value,
  (val) => {
    if (val) {
      props.setFieldValue('employee_id', val.id)
      currency.value = val.currency_code
    }
  },
  {
    deep: true,
  }
)
</script>

<template>
  <v-row dense>
    <v-col cols="12">
      <employee-autocomplete v-model="employee" clearable :label="t('retaliations.model.employee')" return-object />
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field v-bind="form.apply_salary_date" :label="t('retaliations.model.applySalaryDate')" type="date" />
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field v-bind="form.increment_date" :label="t('retaliations.model.incrementDate')" type="date" />
    </v-col>
    <v-col cols="12" sm="6">
      <v-currency
        v-bind="form.previous_salary"
        :currency="currency"
        disabled
        :label="t('retaliations.model.previousSalary')"
        persistent-hint
      />
    </v-col>
    <v-col cols="12" sm="6">
      <v-currency
        :currency="currency"
        v-bind="form.new_salary"
        :label="t('retaliations.model.newSalary')"
        persistent-hint
      />
    </v-col>
  </v-row>
</template>

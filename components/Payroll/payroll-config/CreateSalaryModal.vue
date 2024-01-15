<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
import { useQueryClient } from 'vue-query'
import AppModal from '@/components/shared/AppModal'
import { payrollConfigSchema } from '@/validators/payroll-config-schema'
import { SalaryType } from '@/types/payroll/PayrollTypes'
import filters from '~/plugins/filters/currency'

const props = defineProps({
  item: {
    type: Object,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
  components: {
    type: Array,
    default: () => [],
  },
  update: {
    type: Boolean,
    default: false,
  },
})
const { $api } = useNuxtApp()
const { t } = useI18n()
const toast = useToast()
const queryClient = useQueryClient()
const isSubmitting = ref(false)

const emit = defineEmits(['closed', 'submit'])

const getAllowance = (allowance: any) => {
  return (
    props.item?.salary.variable_salaries.find((variable: any) => {
      return variable.variable_component_id === allowance.id
    })?.current_value || 0
  )
}

const { defineComponentBinds, handleSubmit, setErrors, setFieldValue, errors } = useForm({
  validationSchema: payrollConfigSchema(t),
  initialValues: {
    employee_id: props.item.id,
    currency_code: props.item.currency_code,
    basic_salary: props.item.salary.current_basic_salary,
    social_security: 0,
    variable_salaries: props.components?.map((item: any) => ({
      variable_component_id: item.id,
      variable_component: item,
      variable_value: getAllowance(item),
    })),
  } as SalaryType,
})

const vuetifyConfig = (state: any) => ({
  props: {
    'error-messages': state.errors,
  },
})

const form = ref({
  employee_id: defineComponentBinds('employee_id', vuetifyConfig),
  currency_code: defineComponentBinds('currency_code', vuetifyConfig),
  basic_salary: defineComponentBinds('basic_salary', vuetifyConfig),
  social_security: defineComponentBinds('social_security', vuetifyConfig),
})

const onSubmit = handleSubmit((values) => {
  isSubmitting.value = true
  if (props.update) {
    $api.payrollConfig
      .updateEmployeeSalary(values.employee_id, values)
      .then(() => {
        queryClient.invalidateQueries('employee-salaries')
        toast.success(t('common.message.updateSuccess'))
        emit('closed')
      })
      .catch((err) => {
        setErrors(err)
      })
      .finally(() => {
        isSubmitting.value = false
      })
  } else {
    $api.payrollConfig
      .createEmployeeSalary(values)
      .then(() => {
        queryClient.invalidateQueries('employee-salaries')
        toast.success(t('common.message.updateSuccess'))
        emit('closed')
      })
      .catch((err) => {
        setErrors(err)
      })
      .finally(() => {
        isSubmitting.value = false
      })
  }
})
</script>

<template>
  <app-modal :loading="isSubmitting" :title="props.title" width="1000" @cancel="emit('closed')" @submit="onSubmit">
    <payroll-payroll-config-form
      :components="components"
      :errors="errors"
      :item="item"
      :update="update"
      :value="form"
    />
  </app-modal>
</template>

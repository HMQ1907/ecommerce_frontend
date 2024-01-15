<script setup lang="ts">
import { useToast } from 'vue-toastification'
import { useI18n } from 'vue-i18n'
import { useQueryClient } from 'vue-query'
import { serialize } from 'object-to-formdata'
import AppModal from '@/components/shared/AppModal'
import { vuetifyConfig } from '@/utils/vee-validate'
import EmployeeRetaliationForm from '@/components/employees/retaliations/EmployeeRetaliationForm.vue'
import { EmployeeRetaliationTypes } from '@/types/employees/EmployeeRetaliationTypes'
import { retaliationSchema } from '@/validators/retaliation-schema'

const props = defineProps({
  item: {
    type: Object,
    default: () => ({} as EmployeeRetaliationTypes),
  },
  title: {
    type: String,
    default: null,
  },
})
const { t } = useI18n()
const toast = useToast()
const emit = defineEmits(['closed', 'submit'])
const queryClient = useQueryClient()
const { $api } = useNuxtApp()
const isSubmitting = ref(false)

const { defineComponentBinds, handleSubmit, setErrors, setFieldValue } = useForm({
  validationSchema: retaliationSchema(t),
  initialValues: {
    id: props.item.id,
    employee_id: props.item.employee_id,
    apply_salary_date: props.item.apply_salary_date,
    increment_date: props.item.increment_date,
    previous_salary: props.item.previous_salary,
    new_salary: props.item.new_salary,
  } as EmployeeRetaliationTypes,
})

const form = ref({
  id: defineComponentBinds('id', vuetifyConfig),
  employee_id: defineComponentBinds('employee_id', vuetifyConfig),
  apply_salary_date: defineComponentBinds('apply_salary_date', vuetifyConfig),
  increment_date: defineComponentBinds('increment_date', vuetifyConfig),
  previous_salary: defineComponentBinds('previous_salary', vuetifyConfig),
  new_salary: defineComponentBinds('new_salary', vuetifyConfig),
})

const submit = handleSubmit((values) => {
  isSubmitting.value = true
  $api.employeeRetaliations
    .updateEmployeeRetaliation(values.id, values)
    .then(() => {
      queryClient.invalidateQueries('employee-retaliations')
      toast.success(t('common.message.updateSuccess'))
      emit('closed')
    })
    .catch((err) => {
      setErrors(err)
    })
    .finally(() => {
      isSubmitting.value = false
    })
})
</script>

<template>
  <app-modal :loading="isSubmitting" :title="title" width="60vw" @cancel="emit('closed')" @submit="submit">
    <employee-retaliation-form :set-field-value="setFieldValue" :item="item" update :value="form" />
  </app-modal>
</template>

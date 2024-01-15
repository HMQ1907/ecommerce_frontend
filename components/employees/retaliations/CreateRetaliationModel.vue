<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
import { useQueryClient } from 'vue-query'
import { serialize } from 'object-to-formdata'
import AppModal from '@/components/shared/AppModal'
import { vuetifyConfig } from '@/utils/vee-validate'
import { retaliationSchema } from '@/validators/retaliation-schema'
import EmployeeRetaliationForm from '@/components/employees/retaliations/EmployeeRetaliationForm.vue'

const props = defineProps({
  title: {
    type: String,
    default: null,
  },
})

const emit = defineEmits(['closed', 'submit', 'update:modelValue'])
const { $api } = useNuxtApp()
const isSubmitting = ref(false)
const queryClient = useQueryClient()
const { t } = useI18n()
const toast = useToast()

const { defineComponentBinds, handleSubmit, setErrors, setFieldValue } = useForm({
  validationSchema: retaliationSchema(t),
  initialValues: {
    employee_id: null,
    apply_salary_date: null,
    increment_date: null,
    previous_salary: 0,
    new_salary: 0,
  },
})

const form = ref({
  employee_id: defineComponentBinds('employee_id', vuetifyConfig),
  apply_salary_date: defineComponentBinds('apply_salary_date', vuetifyConfig),
  increment_date: defineComponentBinds('increment_date', vuetifyConfig),
  previous_salary: defineComponentBinds('previous_salary', vuetifyConfig),
  new_salary: defineComponentBinds('new_salary', vuetifyConfig),
})

const onSubmit = handleSubmit((values) => {
  isSubmitting.value = true
  $api.employeeRetaliations
    .createEmployeeRetaliation(values)
    .then(() => {
      toast.success(t('common.message.createSuccess'))
      queryClient.invalidateQueries('employee-retaliations')
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
  <app-modal :loading="isSubmitting" :title="title" width="60vw" @cancel="emit('closed')" @submit="onSubmit">
    <employee-retaliation-form :set-field-value="setFieldValue" :value="form" />
  </app-modal>
</template>

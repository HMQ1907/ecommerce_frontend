<script setup lang="ts">
import { useForm } from 'vee-validate'
import { useI18n } from 'vue-i18n'
import * as yup from 'yup'
import { useToast } from 'vue-toastification'
import { useQueryClient } from 'vue-query'
import AppModal from '@/components/shared/AppModal'
import EmployeeAwardForm from '@/components/employees/awards/EmployeeAwardForm'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  item: {
    type: Object,
    default: null,
  },
  items: {
    type: Array,
    default: () => [],
  },
})

const toast = useToast()
const queryClient = useQueryClient()
const emit = defineEmits(['closed', 'submit'])
const { $api } = useNuxtApp()
const { t } = useI18n()
const isSubmitting = ref(false)

const schema = yup.object({
  title: yup.string().required().max(100).label(t('awards.model.title')),
  award_type: yup.string().label(t('awards.model.awardType')),
  type: yup.string().nullable().label(t('awards.model.type')),
  employees: yup.array().required().label(t('awards.model.employee')),
  department_id: yup.string().nullable().label(t('awards.model.department')),
})

const { defineComponentBinds, handleSubmit, setErrors, setFieldValue } = useForm({
  validationSchema: schema,
  initialValues: {
    title: props.item.title,
    award_type: props?.item.award_type,
    type: props?.item.type,
    employees: props?.item.employees.map((item: any) => {
      return {
        id: item.employee_id,
        employee_award_id: item.id,
        employee_id: item.employee_id,
        full_name: item.full_name,
        basic_salary: item.basic_salary,
        currency_code: item.currency_code,
        amount: item.amount,
        is_tax: item.is_tax,
      }
    }),
    department_id: null,
  },
})

const vuetifyConfig = (state: any) => ({
  props: {
    'error-messages': state.errors,
  },
})

const form = ref({
  title: defineComponentBinds('title', vuetifyConfig),
  award_type: defineComponentBinds('award_type', vuetifyConfig),
  type: defineComponentBinds('type', vuetifyConfig),
  employees: defineComponentBinds('employees', vuetifyConfig),
  department_id: defineComponentBinds('department_id', vuetifyConfig),
})

const submit = handleSubmit(async (values) => {
  isSubmitting.value = true
  $api.employeeAwards
    .updateEmployeeAward(props.item.id, values)
    .then(() => {
      queryClient.invalidateQueries('employee-awards')
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
  <app-modal
    :loading="isSubmitting"
    :submit-text="$t('awards.action.update')"
    :title="title"
    width="1000px"
    @cancel="emit('closed')"
    @submit="submit"
  >
    <employee-award-form :item="item" :set-field-value="setFieldValue" :update="true" :value="form" />
  </app-modal>
</template>

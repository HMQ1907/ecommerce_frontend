<script setup lang="ts">
import { useForm } from 'vee-validate'
import { useI18n } from 'vue-i18n'
import * as yup from 'yup'
import { useToast } from 'vue-toastification'
import { useQueryClient } from 'vue-query'
import AppModal from '@/components/shared/AppModal'
import EmployeeAwardForm from '@/components/employees/awards/EmployeeAwardForm'

defineProps<{
  title?: string
}>()

const toast = useToast()
const queryClient = useQueryClient()
const emit = defineEmits(['closed', 'submit', 'value'])
const { $api } = useNuxtApp()
const { t } = useI18n()
const isSubmitting = ref(false)

const schema = yup.object({
  title: yup.string().max(100).required().label(t('awards.model.title')),
  award_type: yup.string().required().label(t('awards.model.awardType')),
  type: yup.string().required().label(t('awards.model.type')),
  employees: yup.array().required().label(t('awards.model.employee')),
  rates: yup.array().required().label(t('payslip.model.rate')),
  rate_vnd: yup.number().required().label(t('payslip.model.rateVND')),
  rate_usd: yup.number().required().label(t('payslip.model.rateUSD')),
})

const { defineComponentBinds, handleSubmit, setErrors, setFieldValue } = useForm({
  validationSchema: schema,
  initialValues: {
    title: null,
    award_type: null,
    type: null,
    employees: [],
    rates: [
      {
        id: 1,
        rate: 0,
        from_currency_code: 'LAK',
        to_currency_code: 'VND',
      },
      {
        id: 2,
        rate: 0,
        from_currency_code: 'USD',
        to_currency_code: 'LAK',
      },
    ],
    rate_vnd: null,
    rate_usd: null,
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
  rates: defineComponentBinds('rates', vuetifyConfig),
  rate_vnd: defineComponentBinds('rate_vnd', vuetifyConfig),
  rate_usd: defineComponentBinds('rate_usd', vuetifyConfig),
})

const submit = handleSubmit(async (values) => {
  const mergeData = {
    rates: values.rates.map((item: any) => {
      return {
        id: item.id,
        rate: item.to_currency_code === 'VND' ? values.rate_vnd : values.rate_usd,
        to_currency_code: item.to_currency_code,
        from_currency_code: item.from_currency_code,
      }
    }),
    award_type: values.award_type,
    type: values.type,
    employees: values.employees,
    title: values.title,
  }
  if (mergeData.employees.length > 0) {
    isSubmitting.value = true
    $api.employeeAwards
      .createEmployeeAward(mergeData)
      .then(() => {
        queryClient.invalidateQueries('employee-awards')
        toast.success(t('common.message.createSuccess'))
        emit('closed')
      })
      .catch((err) => {
        setErrors(err)
      })
      .finally(() => {
        isSubmitting.value = false
      })
  } else {
    toast.error(t('awards.message.award.invalidEmployee'))
  }
})
</script>

<template>
  <app-modal
    :loading="isSubmitting"
    :submit-text="$t('awards.action.create')"
    :title="title"
    width="1000px"
    @cancel="emit('closed')"
    @submit="submit"
  >
    <employee-award-form :set-field-value="setFieldValue" :value="form" />
  </app-modal>
</template>

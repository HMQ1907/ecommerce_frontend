<script setup lang="ts">
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
import { useQueryClient } from 'vue-query'
import AppModal from '@/components/shared/AppModal'
import RateForm from '@/components/Payroll/payslip/molecules/RateForm'

const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
  title: {
    type: String,
    default: null,
  },
})
const { $api } = useNuxtApp()
const { t } = useI18n()
const toast = useToast()
const queryClient = useQueryClient()
const isSubmitting = ref(false)

const emit = defineEmits(['closed', 'submit'])

const schema = yup.object({
  rates: yup.array().required().label(t('payslip.model.rate')),
  rate_vnd: yup.number().required().label(t('payslip.model.rateVND')),
  rate_usd: yup.number().required().label(t('payslip.model.rateUSD')),
})

const { defineComponentBinds, handleSubmit, setErrors, setFieldValue } = useForm({
  validationSchema: schema,
  initialValues: {
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
  rates: defineComponentBinds('rates', vuetifyConfig),
  rate_vnd: defineComponentBinds('rate_vnd', vuetifyConfig),
  rate_usd: defineComponentBinds('rate_usd', vuetifyConfig),
})

const submit = handleSubmit(async (values) => {
  isSubmitting.value = true
  $api.payrollConfig
    .generatePayslip({
      month: props.item.queryBuilder,
      rates: values.rates.map((item: any) => {
        return {
          id: item.id,
          rate: item.to_currency_code === 'VND' ? values.rate_vnd : values.rate_usd,
          to_currency_code: item.to_currency_code,
          from_currency_code: item.from_currency_code,
        }
      }),
    })
    .then(() => {
      queryClient.invalidateQueries('payslips')
      toast.success(t('payslip.notice.generateSuccess'))
      emit('closed')
    })
    .finally(() => {
      isSubmitting.value = false
    })
})
</script>

<template>
  <app-modal :loading="isSubmitting" :title="title" width="800" @cancel="emit('closed')" @submit="submit">
    <rate-form :item="item" :set-field-value="setFieldValue" :value="form" />
  </app-modal>
</template>

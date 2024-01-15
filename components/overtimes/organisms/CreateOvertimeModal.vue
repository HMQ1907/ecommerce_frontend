<script setup lang="ts">
import { useForm } from 'vee-validate'
import { useI18n } from 'vue-i18n'
import * as yup from 'yup'
import { useToast } from 'vue-toastification'
import { useQueryClient } from 'vue-query'
import { isEmpty } from 'xe-utils'
import AppModal from '@/components/shared/AppModal'
import OvertimeForm from '@/components/overtimes/molecules/OvertimeForm'

defineProps<{
  title?: string
}>()

const toast = useToast()
const queryClient = useQueryClient()
const emit = defineEmits(['closed', 'submit'])
const { $api } = useNuxtApp()
const { t } = useI18n()
const dayjs = useDayjs()
const isSubmitting = ref(false)
const types = ref([])
const type = ref({})

const schema = yup.object({
  overtime_date: yup.string().required().label(t('overtime.model.overtimeDate')),
  details: yup.array().required().label(t('overtime.model.details')),
  rates: yup.array().required().label(t('payslip.model.rate')),
  rate_vnd: yup.number().required().label(t('payslip.model.rateVND')),
  rate_usd: yup.number().required().label(t('payslip.model.rateUSD')),
})

const { defineComponentBinds, handleSubmit, setErrors, setFieldValue } = useForm({
  validationSchema: schema,
  initialValues: {
    overtime_date: dayjs().format('YYYY-MM'),
    details: [],
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
  overtime_date: defineComponentBinds('overtime_date', vuetifyConfig),
  details: defineComponentBinds('details', vuetifyConfig),
  rates: defineComponentBinds('rates', vuetifyConfig),
  rate_vnd: defineComponentBinds('rate_vnd', vuetifyConfig),
  rate_usd: defineComponentBinds('rate_usd', vuetifyConfig),
})

const submit = handleSubmit(async (values) => {
  const isNegative = values.details.some((item: any) => {
    return Object.values(item.rates).some((value: any) => value < 0)
  })
  const mergeData = {
    rates: values.rates.map((item: any) => {
      return {
        id: item.id,
        rate: item.to_currency_code === 'VND' ? values.rate_vnd : values.rate_usd,
        to_currency_code: item.to_currency_code,
        from_currency_code: item.from_currency_code,
      }
    }),
    overtime_date: values.overtime_date,
    details: values.details,
  }

  if (isNegative) {
    toast.error(t('overtime.message.invalidHour'))
  } else if (mergeData.details.length > 0) {
    isSubmitting.value = true
    $api.overtimes
      .createOvertime(mergeData)
      .then(() => {
        queryClient.invalidateQueries('overtimes')
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
    toast.error(t('overtime.message.invalidEmployee'))
  }
})
const isValid = computed(() => {
  return !(isEmpty(form.value.details.modelValue) || form.value.details?.modelValue?.length === 0)
})
</script>

<template>
  <app-modal
    :hide-submit="!isValid"
    :loading="isSubmitting"
    :submit-text="$t('overtime.action.create')"
    :title="title"
    width="1200px"
    @cancel="emit('closed')"
    @submit="submit"
  >
    <overtime-form v-model="form" :set-field-value="setFieldValue" />
  </app-modal>
</template>

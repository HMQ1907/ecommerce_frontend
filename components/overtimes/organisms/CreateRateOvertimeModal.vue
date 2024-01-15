<script setup lang="ts">
import { useForm } from 'vee-validate'
import { useI18n } from 'vue-i18n'
import * as yup from 'yup'
import { useToast } from 'vue-toastification'
import { useQueryClient } from 'vue-query'
import { uniqBy } from 'lodash'
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
const toast = useToast()
const queryClient = useQueryClient()
const emit = defineEmits(['closed', 'submit'])
const { $api } = useNuxtApp()
const { t } = useI18n()
const isSubmitting = ref(false)

const schema = yup.object({
  rates: yup.array().required().label(t('payslip.model.rate')),
})

const { defineComponentBinds, handleSubmit, setErrors, setFieldValue } = useForm({
  validationSchema: schema,
  initialValues: {
    rates: [],
  },
})

const vuetifyConfig = (state: any) => ({
  props: {
    'error-messages': state.errors,
  },
})

const form = ref({
  rates: defineComponentBinds('rates', vuetifyConfig),
})

const submit = handleSubmit(async (values) => {
  const isNegative = props.item.form.details.modelValue.some((item: any) => {
    return Object.values(item.rates).some((value: any) => value < 0)
  })
  const mergeData = {
    rates: uniqBy(values.rates.slice().reverse(), 'id').reverse(),
    overtime_date: props.item.form.overtime_date?.modelValue,
    details: props.item.form.details?.modelValue,
  }

  if (isNegative) {
    toast.error(t('overtime.message.invalidHour'))
  } else {
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
  }
})
</script>

<template>
  <app-modal :loading="isSubmitting" :title="title" width="800" @cancel="emit('closed')" @submit="submit">
    <rate-form :item="item" :set-field-value="setFieldValue" :value="form" />
  </app-modal>
</template>

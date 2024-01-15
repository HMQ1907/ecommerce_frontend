<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
import { useQueryClient } from 'vue-query'
import { serialize } from 'object-to-formdata'
import { ImportPayslipTypes } from '@/types/payroll/PayslipTypes'
import { importPayslipSchema } from '@/validators/payslip-schema'
import AppModal from '@/components/shared/AppModal'
import ImportPayslipForm from '@/components/Payroll/payslip/molecules/ImportPayslipForm'

defineProps<{
  title?: string
}>()
const emit = defineEmits(['closed', 'submit'])

const queryClient = useQueryClient()
const { $api } = useNuxtApp()
const { t } = useI18n()
const toast = useToast()
const dayjs = useDayjs()

const { defineComponentBinds, handleSubmit, setErrors, useFieldModel } = useForm({
  validationSchema: importPayslipSchema(t),
  initialValues: {
    file: undefined,
    month: dayjs().format('YYYY-MM'),
  } as ImportPayslipTypes,
})
const vuetifyConfig = (state: any) => ({
  props: {
    'error-messages': state.errors,
  },
})

const form = ref({
  file: defineComponentBinds('file', vuetifyConfig),
  month: defineComponentBinds('month', vuetifyConfig),
})
const isSubmitting = ref(false)

const submit = handleSubmit((form) => {
  if (!form.file.length) {
    return toast.error(t('payslip.notice.requiredFile'))
  }
  isSubmitting.value = true
  form.file = form.file[0]
  $api.payrollConfig
    .importPayslips(serialize(form))
    .then((res) => {
      if (res.headers['content-type'] === 'application/json') {
        toast.success(t('payslip.notice.importSuccess'))
        emit('closed')
      } else {
        const url = URL.createObjectURL(
          new Blob([res.data], {
            type: res.headers['content-type'],
          })
        )
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'payslip_errors.xlsx')
        document.body.appendChild(link)
        link.click()
        toast.error(t('payslip.notice.invalid'))
      }
    })
    .finally(() => {
      isSubmitting.value = false
    })
})
</script>

<template>
  <app-modal :loading="isSubmitting" :title="title" width="1000" @cancel="emit('closed')" @submit="submit">
    <import-payslip-form :use-field-model="useFieldModel" :value="form" />
  </app-modal>
</template>

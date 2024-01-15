<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
import { useQueryClient } from 'vue-query'
import AppModal from '@/components/shared/AppModal.vue'
import PayslipForm from '@/components/Payroll/payslip/molecules/PayslipForm'
import { PayslipType } from '@/types/payroll/PayslipTypes'
import { payslipSchema } from '@/validators/payslip-schema'

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
const formRef = ref(null)

const emit = defineEmits(['closed', 'submit'])

const { defineComponentBinds, setErrors, values, errors, validate } = useForm({
  validationSchema: payslipSchema(t),
  initialValues: {
    salary_json: props.item.salary_json,
    extra_json: props.item.extra_json,
    status: props.item.status,
    paid_on: props.item.paid_on,
  } as PayslipType,
})

const vuetifyConfig = (state: any) => ({
  props: {
    'error-messages': state.errors,
  },
})

const form = ref({
  employee: defineComponentBinds('employee', vuetifyConfig),
  salary_json: defineComponentBinds('salary_json', vuetifyConfig),
  salary_from: defineComponentBinds('salary_from', vuetifyConfig),
  salary_to: defineComponentBinds('salary_to', vuetifyConfig),
  status: defineComponentBinds('status', vuetifyConfig),
  paid_on: defineComponentBinds('paid_on', vuetifyConfig),
})

const onSubmit = async () => {
  const { valid } = await validate()
  const $form = formRef.value
  if ($form) {
    await $form.validateTable()
  }
  if (valid) {
    isSubmitting.value = true
    $api.payrollConfig
      .updatePayslip(props.item.id, values)
      .then(() => {
        queryClient.invalidateQueries('payslips')
        toast.success(t('payslip.notice.updateSuccess'))
        emit('closed')
      })
      .catch((err) => {
        setErrors(err)
      })
      .finally(() => {
        isSubmitting.value = false
      })
  }
}
</script>

<template>
  <app-modal :loading="isSubmitting" :title="props.title" width="1000" @cancel="emit('closed')" @submit="onSubmit">
    <payslip-form ref="formRef" :errors="errors" :item="item" :update="update" :value="form" />
  </app-modal>
</template>

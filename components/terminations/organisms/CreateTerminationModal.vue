<script setup lang="ts">
import { useForm } from 'vee-validate'
import { useI18n } from 'vue-i18n'
import * as yup from 'yup'
import { useToast } from 'vue-toastification'
import { useQueryClient } from 'vue-query'
import AppModal from '@/components/shared/AppModal'
import TerminationForm from '@/components/terminations/molecules/TerminationForm'

defineProps<{
  title?: string
}>()

const toast = useToast()
const queryClient = useQueryClient()
const emit = defineEmits(['closed', 'submit'])
const { $api } = useNuxtApp()
const { t } = useI18n()
const isSubmitting = ref(false)

const schema = yup.object({
  employee_id: yup.string().nullable().required().label(t('termination.model.employeeName')),
  subject: yup.string().nullable().required().label(t('termination.model.subject')),
  type: yup.string().nullable().required().label(t('termination.model.terminationType')),
  termination_date: yup.string().nullable().required().label(t('termination.model.terminationDate')),
  notice_date: yup.string().nullable().required().label(t('termination.model.noticeDate')),
  // terminated_by: yup.string().nullable().required().label(t('termination.model.terminatedBy')),
  description: yup.string().nullable().label(t('termination.model.description')),
  remaining_vacation_days: yup.string().nullable().required().label(t('termination.model.remainingVactionDays')),
})

const { defineComponentBinds, handleSubmit, setErrors } = useForm({
  validationSchema: schema,
  initialValues: {
    employee_id: null,
    subject: null,
    type: null,
    termination_date: null,
    notice_date: null,
    // terminated_by: null,
    description: null,
    remaining_vacation_days: null,
  },
})

const vuetifyConfig = (state: any) => ({
  props: {
    'error-messages': state.errors,
  },
})

const form = ref({
  employee_id: defineComponentBinds('employee_id', vuetifyConfig),
  subject: defineComponentBinds('subject', vuetifyConfig),
  type: defineComponentBinds('type', vuetifyConfig),
  termination_date: defineComponentBinds('termination_date', vuetifyConfig),
  notice_date: defineComponentBinds('notice_date', vuetifyConfig),
  // terminated_by: defineComponentBinds('terminated_by', vuetifyConfig),
  description: defineComponentBinds('description', vuetifyConfig),
  remaining_vacation_days: defineComponentBinds('remaining_vacation_days', vuetifyConfig),
})

const submit = handleSubmit(async (values) => {
  isSubmitting.value = true
  $api.terminations
    .createEmployeeTermination(values)
    .then(() => {
      queryClient.invalidateQueries('terminations')
      toast.success(t('common.message.createSuccess'))
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
    :submit-text="$t('termination.action.create')"
    :title="title"
    width="800px"
    @cancel="emit('closed')"
    @submit="submit"
  >
    <termination-form :value="form" />
  </app-modal>
</template>

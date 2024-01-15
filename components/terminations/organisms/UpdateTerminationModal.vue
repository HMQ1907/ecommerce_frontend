<script setup lang="ts">
import { useForm } from 'vee-validate'
import { useI18n } from 'vue-i18n'
import * as yup from 'yup'
import { useToast } from 'vue-toastification'
import { useQueryClient } from 'vue-query'
import AppModal from '@/components/shared/AppModal'
import TerminationForm from '@/components/terminations/molecules/TerminationForm'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  item: {
    type: Object,
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
    employee_id: props.item.employee_id,
    subject: props.item.subject,
    type: props.item.type,
    termination_date: props.item.termination_date,
    notice_date: props.item.notice_date,
    // terminated_by: props.item.terminated_by,
    description: props.item.description,
    remaining_vacation_days: props.item.remaining_vacation_days,
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

const onSubmit = handleSubmit((values) => {
  isSubmitting.value = true
  $api.terminations
    .updateEmployeeTermination(props.item.id, values)
    .then(() => {
      queryClient.invalidateQueries('terminations')
      toast.success(t('common.message.updateSuccess'))
      emit('closed')
    })
    .catch((err) => {
      setErrors(err.response.data.errors)
    })
    .finally(() => {
      isSubmitting.value = false
    })
})
</script>

<template>
  <app-modal
    :loading="isSubmitting"
    :submit-text="$t('termination.action.update')"
    :title="title"
    width="800px"
    @cancel="emit('closed')"
    @submit="onSubmit"
  >
    <termination-form :item="item" :value="form" />
  </app-modal>
</template>

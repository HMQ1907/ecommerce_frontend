<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import * as yup from 'yup'
import { useToast } from 'vue-toastification'
import { useQueryClient } from 'vue-query'
import AppModal from '@/components/shared/AppModal'
import OvertimeUpdateForm from '@/components/overtimes/molecules/OvertimeUpdateForm'

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
const dayjs = useDayjs()
const { $api } = useNuxtApp()
const { t } = useI18n()
const isSubmitting = ref(false)

const { defineComponentBinds, handleSubmit, setErrors, setFieldValue, errors, validate, values } = useForm({
  validationSchema: yup.object({
    details: yup.array().required().label(t('overtime.model.details')),
    overtime_date: yup.string().required().label(t('overtime.model.overtimeDate')),
  }),
  initialValues: {
    overtime_date: dayjs(props.item.overtime_date).format('YYYY-MM'),
    details: [props.item],
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
})

const onSubmit = handleSubmit((values) => {
  const isNegative = values.details.some((item: any) => {
    return Object.values(item.rates).some((value: any) => value < 0)
  })

  if (isNegative) {
    toast.error(t('overtime.message.invalidHour'))
  } else {
    isSubmitting.value = true
    $api.overtimes
      .updateOvertime(props.item.id, values)
      .then(() => {
        queryClient.invalidateQueries('overtimes')
        toast.success(t('designations.model.updateSuccess'))
        emit('closed')
      })
      .catch((err) => {
        setErrors(err.response.data.errors)
      })
      .finally(() => {
        isSubmitting.value = false
      })
  }
})
</script>

<template>
  <app-modal
    :loading="isSubmitting"
    :submit-text="$t('overtime.action.update')"
    :title="title"
    width="1200px"
    @cancel="emit('closed')"
    @submit="onSubmit"
  >
    <overtime-update-form v-model="form" :item="item" :set-field-value="setFieldValue" :update="true" />
  </app-modal>
</template>

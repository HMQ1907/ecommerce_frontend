<script setup lang="ts">
import { useForm } from 'vee-validate'
import { useI18n } from 'vue-i18n'
import * as yup from 'yup'
import { useToast } from 'vue-toastification'
import { useQueryClient } from 'vue-query'
import AppModal from '@/components/shared/AppModal'
import DesignationForm from '@/components/designations/DesignationForm'

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
  name: yup.string().nullable().required().max(50).label(t('designations.model.name')),
  code: yup.string().nullable().required().max(50).label(t('designations.model.code')),
  description: yup.string().nullable().label(t('designations.model.description')),
})

const { defineComponentBinds, handleSubmit, setErrors } = useForm({
  validationSchema: schema,
  initialValues: {
    name: null,
    code: null,
    description: null,
  },
})

const vuetifyConfig = (state: any) => ({
  props: {
    'error-messages': state.errors,
  },
})

const form = ref({
  name: defineComponentBinds('name', vuetifyConfig),
  code: defineComponentBinds('code', vuetifyConfig),
  description: defineComponentBinds('description', vuetifyConfig),
})

const submit = handleSubmit(async (values) => {
  isSubmitting.value = true
  $api.designations
    .createDesignation(values)
    .then(() => {
      queryClient.invalidateQueries('designations')
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
    :submit-text="$t('designations.action.create')"
    :title="title"
    width="500px"
    @cancel="emit('closed')"
    @submit="submit"
  >
    <designation-form :value="form" />
  </app-modal>
</template>

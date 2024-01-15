<script setup lang="ts">
import { useForm } from 'vee-validate'
import { useI18n } from 'vue-i18n'
import * as yup from 'yup'
import { useToast } from 'vue-toastification'
import { useQueryClient } from 'vue-query'
import AppModal from '@/components/shared/AppModal'
import DesignationForm from '@/components/designations/DesignationForm'

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
  name: yup.string().nullable().required().label(t('designations.model.name')),
  code: yup.string().nullable().required().label(t('designations.model.code')),
  description: yup.string().nullable().label(t('designations.model.description')),
})

const { defineComponentBinds, handleSubmit, setErrors } = useForm({
  validationSchema: schema,
  initialValues: {
    name: props.item.name,
    code: props.item.code,
    description: props.item.description,
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

const onSubmit = handleSubmit((values) => {
  isSubmitting.value = true
  $api.designations
    .updateDesignation(props.item.id, values)
    .then(() => {
      queryClient.invalidateQueries('designations')
      toast.success(t('designations.model.updateSuccess'))
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
    :submit-text="$t('designations.action.update')"
    :title="title"
    width="500px"
    @cancel="emit('closed')"
    @submit="onSubmit"
  >
    <designation-form :item="item" :value="form" />
  </app-modal>
</template>

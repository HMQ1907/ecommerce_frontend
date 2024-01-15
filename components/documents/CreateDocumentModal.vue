<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
import { useQueryClient } from 'vue-query'
import { serialize } from 'object-to-formdata'
import AppModal from '@/components/shared/AppModal'
import DocumentForm from '@/components/documents/DocumentForm.vue'
import { vuetifyConfig } from '@/utils/vee-validate'
import { documentSchema } from '@/validators/document-schema'

const props = defineProps({
  title: {
    type: String,
    default: null,
  },
})

const emit = defineEmits(['closed', 'submit', 'update:modelValue'])
const { $api } = useNuxtApp()
const isSubmitting = ref(false)
const queryClient = useQueryClient()
const { t } = useI18n()
const toast = useToast()

const { defineComponentBinds, handleSubmit, setErrors } = useForm({
  validationSchema: documentSchema(t),
  initialValues: {
    category_id: undefined,
    name: '',
    content: '',
    type: 'from',
    attachment: undefined,
    document_number: '',
    issued_date: '',
  },
})

const form = ref({
  category_id: defineComponentBinds('category_id', vuetifyConfig),
  name: defineComponentBinds('name', vuetifyConfig),
  content: defineComponentBinds('content', vuetifyConfig),
  type: defineComponentBinds('type', vuetifyConfig),
  attachment: defineComponentBinds('attachment', vuetifyConfig),
  document_number: defineComponentBinds('document_number', vuetifyConfig),
  issued_date: defineComponentBinds('issued_date', vuetifyConfig),
})

const onSubmit = handleSubmit((values) => {
  isSubmitting.value = true
  $api.documents
    .createDocument(serialize(values))
    .then(() => {
      toast.success(t('common.message.createSuccess'))
      queryClient.invalidateQueries('documents')
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
  <app-modal :loading="isSubmitting" :title="title" width="60vw" @cancel="emit('closed')" @submit="onSubmit">
    <document-form :value="form" />
  </app-modal>
</template>

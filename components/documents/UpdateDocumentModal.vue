<script setup lang="ts">
import { useToast } from 'vue-toastification'
import { useI18n } from 'vue-i18n'
import { useQueryClient } from 'vue-query'
import { serialize } from 'object-to-formdata'
import { DocumentTypes } from '@/types/documents/DocumentTypes'
import AppModal from '@/components/shared/AppModal'
import DocumentForm from '@/components/documents/DocumentForm'
import { documentSchema } from '@/validators/document-schema'
import { vuetifyConfig } from '@/utils/vee-validate'

const props = defineProps({
  item: {
    type: Object,
    default: () => ({} as DocumentTypes),
  },
  title: {
    type: String,
    default: null,
  },
})
const { t } = useI18n()
const toast = useToast()
const emit = defineEmits(['closed', 'submit'])
const queryClient = useQueryClient()
const { $api } = useNuxtApp()
const isSubmitting = ref(false)

const { defineComponentBinds, handleSubmit, setErrors } = useForm({
  validationSchema: documentSchema(t),
  initialValues: {
    id: props.item.id,
    category_id: props.item.category_id,
    name: props.item.name,
    content: props.item.content,
    attachment_id: props.item.attachment_id,
    media: props.item.media,
    document_number: props.item.document_number,
    issued_date: props.item.issued_date,
  } as DocumentTypes,
})

const form = ref({
  id: defineComponentBinds('id', vuetifyConfig),
  category_id: defineComponentBinds('category_id', vuetifyConfig),
  name: defineComponentBinds('name', vuetifyConfig),
  content: defineComponentBinds('content', vuetifyConfig),
  attachment: defineComponentBinds('attachment', vuetifyConfig),
  document_number: defineComponentBinds('document_number', vuetifyConfig),
  issued_date: defineComponentBinds('issued_date', vuetifyConfig),
})

const submit = handleSubmit((values) => {
  isSubmitting.value = true
  $api.documents
    .updateDocument(values.id, serialize(values))
    .then(() => {
      queryClient.invalidateQueries('documents')
      toast.success(t('documents.message.success'))
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
  <app-modal :loading="isSubmitting" :title="title" width="60vw" @cancel="emit('closed')" @submit="submit">
    <document-form :item="item" update :value="form" />
  </app-modal>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useToast } from 'vue-toastification'
import { useI18n } from 'vue-i18n'
import { useQueryClient } from 'vue-query'
import * as yup from 'yup'
import { useForm } from 'vee-validate'
import AppModal from '@/components/shared/AppModal'
import RoleForm from '@/components/roles/RoleForm'
import { RoleTypes } from '@/types/roles/RoleTypes'

const props = defineProps({
  item: {
    type: Object,
    default: null,
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
const dialog = ref(false)
const loading = ref(false)
const isSubmitting = ref(false)

const schema = yup.object({
  display_name: yup.string().required().label(t('roles.model.display_name')),
})
const { defineComponentBinds, handleSubmit, setErrors } = useForm({
  validationSchema: schema,
  initialValues: {
    id: props.item.id,
    display_name: props.item.display_name,
    description: props.item.description,
    permission_ids: props.item.permission_ids,
  } as RoleTypes,
})
const vuetifyConfig = (state: any) => ({
  props: {
    'error-messages': state.errors,
  },
})

const form = ref({
  id: defineComponentBinds('id', vuetifyConfig),
  display_name: defineComponentBinds('display_name', vuetifyConfig),
  description: defineComponentBinds('description', vuetifyConfig),
  permission_ids: defineComponentBinds('permission_ids', vuetifyConfig),
})

const submit = handleSubmit((values) => {
  isSubmitting.value = true
  $api.roles
    .updateRole(values.id, values)
    .then(() => {
      queryClient.invalidateQueries('roles')
      toast.success(t('roles.model.updateSuccess'))
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
  <app-modal :loading="isSubmitting" :title="title" width="1200" @cancel="emit('closed')" @submit="submit">
    <role-form :value="form" />
  </app-modal>
</template>

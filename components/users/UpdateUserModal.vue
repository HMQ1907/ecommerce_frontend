<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
import { useQueryClient } from 'vue-query'
import type { UserType } from '@/types/users/UserTypes'
import AppModal from '@/components/shared/AppModal'
import UserForm from '@/components/users/form/UserForm'
import { userSchema } from '@/validators/user-schema'
import { vuetifyConfig } from '@/utils/vee-validate'

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

const emit = defineEmits(['closed', 'submit'])

const { $api } = useNuxtApp()

const { t } = useI18n()
const toast = useToast()
const queryClient = useQueryClient()

const isSubmitting = ref(false)

const { defineComponentBinds, handleSubmit, setErrors } = useForm({
  validationSchema: userSchema(t),
  initialValues: {
    id: props.item.id,
    branch_id: props.item.branch_id,
    name: props.item.name,
    email: props.item.email,
    password: '',
    password_confirmation: '',
    roles: props.item.role_ids[0] || [],
  } as UserType,
})

const form = ref({
  id: defineComponentBinds('id', vuetifyConfig),
  branch_id: defineComponentBinds('branch_id', vuetifyConfig),
  name: defineComponentBinds('name', vuetifyConfig),
  email: defineComponentBinds('email', vuetifyConfig),
  password: defineComponentBinds('password', vuetifyConfig),
  password_confirmation: defineComponentBinds('password_confirmation', vuetifyConfig),
  roles: defineComponentBinds('roles', vuetifyConfig),
})

const onSubmit = handleSubmit((values) => {
  isSubmitting.value = true
  $api.users
    .updateUser(values.id, values)
    .then(() => {
      queryClient.invalidateQueries('users')
      toast.success(t('common.message.updateSuccess'))
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
    :cancel-text="$t('common.action.cancel')"
    :loading="isSubmitting"
    :submit-text="$t('common.action.update')"
    :title="title"
    width="600px"
    @cancel="emit('closed')"
    @submit="onSubmit"
  >
    <user-form :value="form" />
  </app-modal>
</template>

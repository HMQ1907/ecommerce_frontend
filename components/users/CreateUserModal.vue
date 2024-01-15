<script setup lang="ts">
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
import { useQueryClient } from 'vue-query'
import type { UserType } from '@/types/users/UserTypes'
import AppModal from '@/components/shared/AppModal'
import UserForm from '@/components/users/form/UserForm'
import { userSchema } from '@/validators/user-schema'
import { vuetifyConfig } from '@/utils/vee-validate'

defineProps<{
  title?: string
}>()

const emit = defineEmits(['closed', 'submit'])

const { $api } = useNuxtApp()

const { t } = useI18n()
const toast = useToast()

const isSubmitting = ref(false)
const queryClient = useQueryClient()

const { defineComponentBinds, handleSubmit, setErrors } = useForm({
  validationSchema: userSchema(t).shape({
    password: yup.string().min(8).max(30).required().label(t('users.model.password')),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref('password')], t('users.model.passwordNotMatch'))
      .required()
      .label(t('users.model.passwordConfirm')),
  }),
  initialValues: {
    branch_id: undefined,
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    roles: undefined,
  } as UserType,
})

const form = ref({
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
    .createUser(values)
    .then(() => {
      queryClient.invalidateQueries('users')
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
    :cancel-text="$t('common.action.cancel')"
    :loading="isSubmitting"
    :submit-text="$t('common.action.create')"
    :title="title"
    width="600px"
    @cancel="emit('closed')"
    @submit="onSubmit"
  >
    <user-form :value="form" />
  </app-modal>
</template>

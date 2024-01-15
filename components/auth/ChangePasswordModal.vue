<script setup lang="ts">
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
import AppModal from '~/components/shared/AppModal.vue'

const { t } = useI18n()
const toast = useToast()
const { $api } = useNuxtApp()

const emit = defineEmits(['closed'])
const isSubmitting = ref(false)
const schema = yup.object({
  current_password: yup.string().min(8).required().label(t('users.model.password')),
  new_password: yup.string().min(8).required().label(t('users.model.password')),
  new_password_confirmation: yup
    .string()
    .oneOf([yup.ref('new_password')], t('users.model.passwordNotMatch'))
    .required()
    .label(t('users.model.passwordConfirm')),
})

const { defineComponentBinds, handleSubmit, setErrors } = useForm({
  validationSchema: schema,
  initialValues: {
    current_password: '',
    new_password: '',
    new_password_confirmation: '',
  },
})

const vuetifyConfig = (state: any) => ({
  props: {
    'error-messages': state.errors,
  },
})

const form = ref({
  current_password: defineComponentBinds('current_password', vuetifyConfig),
  new_password: defineComponentBinds('new_password', vuetifyConfig),
  new_password_confirmation: defineComponentBinds('new_password_confirmation', vuetifyConfig),
})

const onSubmit = handleSubmit((values) => {
  isSubmitting.value = true
  $api.profile
    .changePassword(values)
    .then(() => {
      toast.success(t('common.message.updateSuccess'))
    })
    .catch((err: any) => {
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
    :title="$t('changePassword.title')"
    width="600px"
    @cancel="emit('closed')"
    @submit="onSubmit"
  >
    <v-row dense>
      <v-col cols="12">
        <v-text-field
          v-bind="form.current_password"
          autocomplete="new-password"
          :label="$t('changePassword.model.currentPassword')"
          type="password"
        />
      </v-col>
      <v-col cols="12">
        <v-text-field
          autocomplete="new-password"
          v-bind="form.new_password"
          :label="$t('changePassword.model.newPassword')"
          type="password"
        />
      </v-col>
      <v-col cols="12">
        <v-text-field
          autocomplete="new-password"
          v-bind="form.new_password_confirmation"
          :label="$t('changePassword.model.newPasswordConfirmation')"
          type="password"
        />
      </v-col>
    </v-row>
  </app-modal>
</template>

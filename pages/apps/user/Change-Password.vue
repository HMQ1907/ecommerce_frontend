<script setup lang="ts">
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'

const { t } = useI18n()
const toast = useToast()
const { $api } = useNuxtApp()

const isSubmitting = ref(false)
const schema = yup.object({
  current_password: yup.string().min(8).required().label(t('employee.model.password')),
  new_password: yup.string().min(8).required().label(t('employee.model.password')),
  new_password_confirmation: yup
    .string()
    .oneOf([yup.ref('new_password')], t('employee.model.passwordNotMatch'))
    .required()
    .label(t('employee.model.passwordConfirm')),
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
  <v-row dense>
    <v-col cols="12">
      <div>
        <p class="tw-text-xl tw-font-bold mb-1">{{ $t('changePassword.title') }}</p>
      </div>
      <div>
        <p class="tw-text-base tw-font-semibold mb-1">{{ $t('changePassword.model.currentPassword') }}</p>
        <v-text-field v-bind="form.current_password" type="password" />
      </div>
      <div class="mt-2">
        <p class="tw-text-base tw-font-semibold mb-1">{{ $t('changePassword.model.newPassword') }}</p>
        <v-text-field v-bind="form.new_password" type="password" />
      </div>
      <div class="mt-2">
        <p class="tw-text-base tw-font-semibold mb-1">{{ $t('changePassword.model.newPasswordConfirmation') }}</p>
        <v-text-field v-bind="form.new_password_confirmation" type="password" />
      </div>
      <div class="text-right mt-2">
        <v-btn color="primary" :loading="isSubmitting" @click="onSubmit">
          {{ t('common.action.save') }}
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

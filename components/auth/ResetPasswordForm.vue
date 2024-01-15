<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import * as Yup from 'yup'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
const { t } = useI18n()

const { $api } = useNuxtApp()
const router = useRouter()
const toast = useToast()
const isSubmitting = ref(false)
const email = router.currentRoute.value.query.email
const token = router.currentRoute.value.params.token[0]

const schema = Yup.object({
  password: Yup.string().min(8).required().label(t('employee.model.password')),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required()
    .label(t('employee.model.passwordConfirm')),
})

const { defineComponentBinds, handleSubmit, setErrors } = useForm({
  validationSchema: schema,
  initialValues: {
    token,
    email,
    password: '',
    password_confirmation: '',
  },
})

const vuetifyConfig = (state: any) => ({
  props: {
    'error-messages': state.errors,
  },
})

const form = ref({
  password: defineComponentBinds('password', vuetifyConfig),
  password_confirmation: defineComponentBinds('password_confirmation', vuetifyConfig),
})

const reset = handleSubmit((values) => {
  isSubmitting.value = true
  $api.auth
    .reset(values)
    .then((data) => {
      if (data.success) {
        toast.success(t('passwordReset.message.success'))
        router.push('/')
      }
    })
    .finally(() => {
      isSubmitting.value = false
    })
})
</script>

<template>
  <v-form class="mt-6">
    <v-label class="text-subtitle-1 font-weight-medium text-lightText">{{ t('login.model.email') }}</v-label>
    <v-text-field v-model="email" disabled />
    <v-label class="text-subtitle-1 font-weight-medium text-lightText mt-3">{{ t('passwordReset.title') }}</v-label>
    <v-text-field v-bind="form.password" type="password" />
    <v-label class="text-subtitle-1 font-weight-medium text-lightText mt-3">
      {{ t('passwordReset.model.newPasswordConfirmation') }}
    </v-label>
    <v-text-field v-bind="form.password_confirmation" type="password" />
    <div class="tw-flex tw-justify-between tw-items-center tw-py-2">
      <nuxt-link
        class="pl-4 text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium"
        to="/auth/login"
      >
        {{ t('forgotPassword.model.backToLogin') }}
      </nuxt-link>
      <v-btn color="primary" height="40" :loading="isSubmitting" submit @click="reset">
        {{ t('passwordReset.action.set') }}
      </v-btn>
    </div>
  </v-form>
</template>

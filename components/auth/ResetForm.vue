<script setup lang="ts">
import { useField } from 'vee-validate'
import * as Yup from 'yup'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
const { t } = useI18n()

const { $api } = useNuxtApp()
const toast = useToast()
const router = useRouter()

const isSubmitting = ref(false)
const { value: email, errorMessage, validate } = useField('email', Yup.string().email().required())

const reset = async () => {
  const { valid } = await validate()
  if (!valid) {
    return
  }
  isSubmitting.value = true
  $api.auth
    .forgot({
      email: email.value,
    })
    .then((data) => {
      if (data.success) {
        toast.success(t('common.message.success'))
      }
    })
    .finally(() => {
      isSubmitting.value = false
    })
}
</script>

<template>
  <v-form class="mt-sm-13 mt-8">
    <v-label class="text-subtitle-1 font-weight-medium pb-2 text-lightText">
      {{ t('forgotPassword.model.email') }}
    </v-label>
    <v-text-field v-model="email" :error-messages="errorMessage" label="E-mail" />
    <div class="tw-flex tw-justify-between tw-items-center tw-py-2">
      <nuxt-link
        class="pl-4 text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium"
        to="/auth/login"
      >
        {{ t('forgotPassword.model.backToLogin') }}
      </nuxt-link>
      <v-btn color="primary" height="40" :loading="isSubmitting" submit @click="reset">
        {{ t('forgotPassword.action.send') }}
      </v-btn>
    </div>
  </v-form>
</template>

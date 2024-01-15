<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ResetPasswordForm from '~/components/auth/ResetPasswordForm.vue'
const { t } = useI18n()
definePageMeta({
  layout: 'auth',
  auth: false,
})
</script>

<template>
  <div>
    <h2 class="tw-text-primary tw-text-[23px] tw-font-normal tw-leading-8">{{ t('passwordReset.title') }}</h2>
    <div class="tw-text-[#424242] tw-text-sm tw-font-normal">
      {{ t('passwordReset.subTitle') }}
    </div>
    <reset-password-form />
  </div>
</template>

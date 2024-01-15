<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

definePageMeta({
  layout: 'auth',
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  },
})
</script>

<template>
  <div>
    <h2 class="tw-text-primary tw-text-[23px] tw-font-normal tw-leading-8">{{ t('login.title') }}</h2>
    <div class="tw-text-[#424242] tw-text-sm tw-font-normal">
      {{ t('login.subTitle') }}
    </div>
    <auth-login-form />
    <h6 class="tw-text-sm d-flex align-center mt-6 tw-font-bold">
      {{ t('login.forgotPassword') }}
      <nuxt-link
        class="pl-4 text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium"
        to="/auth/forgot-password"
      >
        {{ t('login.passwordRetrieval') }}
      </nuxt-link>
    </h6>
  </div>
</template>

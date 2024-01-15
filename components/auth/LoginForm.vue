<script setup lang="ts">
import { useToast } from 'vue-toastification'
import { useForm } from 'vee-validate'
import * as Yup from 'yup'
import { useI18n } from 'vue-i18n'
import { useAbility } from '@casl/vue'
import defineAbilitiesFor from '@/abilities'
import TextInput from '@/components/auth/TextInput'

const router = useRouter()
const { signIn, data } = useAuth()
const toast = useToast()
const isSubmitting = ref(false)
const { t } = useI18n()
const ability = useAbility()

const { values, handleSubmit } = useForm({
  validationSchema: Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
  }),
  initialValues: {
    email: '',
    password: '',
  },
})

const login = handleSubmit(() => {
  isSubmitting.value = true
  signIn('credentials', {
    email: values.email,
    password: values.password,
    redirect: false,
  })
    .then(({ error, ok }) => {
      console.log('error', error)
      console.log('ok', ok)
      let firstRoute = ''
      if (ok) {
        const scope = data.value?.scope || []
        const abilities = defineAbilitiesFor(scope)
        ability.update(ability.rules.concat(abilities.rules))
        if (!scope.includes('dashboard.view')) {
          firstRoute = scope[0].split('.')[0]
        }
      }
      if (error) {
        toast.error(t('login.message.error'))
      } else {
        router.push({ path: `/${firstRoute}` })
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
    <text-input name="email" success-message="Got it, we won't spam you!" type="email" />
    <v-label class="text-subtitle-1 font-weight-medium text-lightText mt-3">{{ t('login.model.password') }}</v-label>
    <text-input name="password" success-message="Nice and secure!" type="password" />
  </v-form>
  <div class="d-flex flex-wrap align-center my-3 ml-n2">
    <v-checkbox hide-details :label="t('login.model.remember')" />
    <div class="ml-sm-auto">
      <v-btn
        color="primary"
        :disabled="!values.password"
        height="40"
        :loading="isSubmitting"
        type="submit"
        @click="login"
      >
        {{ t('login.action.login') }}
      </v-btn>
    </div>
  </div>
</template>

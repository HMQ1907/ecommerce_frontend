<script setup lang="ts">
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
import { useQuery } from 'vue-query'
import { UserType } from '@/types/users/UserTypes'
import { vuetifyConfig } from '@/utils/vee-validate'
import AppModal from '@/components/shared/AppModal'
import UserForm from '@/components/users/form/UserForm'

const emit = defineEmits(['closed'])

const { $api } = useNuxtApp()

const { t } = useI18n()
const toast = useToast()

const { isLoading } = useQuery(
  'profile',
  async () => {
    const { data } = await $api.auth.profile()
    setValues({
      id: data?.id,
      name: data?.name,
      email: data?.email,
    } as UserType)

    return data
  },
  {
    refetchOnWindowFocus: false,
  }
)

const isSubmitting = ref(false)

const schema = yup.object({
  name: yup.string().required().label(t('users.model.fullName')),
  email: yup.string().email().required().label(t('employee.model.email')),
})

const { defineComponentBinds, handleSubmit, setErrors, setValues } = useForm({
  validationSchema: schema,
})

const form = ref({
  name: defineComponentBinds('name', vuetifyConfig),
  email: defineComponentBinds('email', vuetifyConfig),
})

const onSubmit = handleSubmit((values) => {
  isSubmitting.value = true
  $api.profile
    .updateProfile(values)
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
    :loading="isSubmitting || isLoading"
    :submit-text="$t('common.action.update')"
    :title="$t('employees.profile.userInformation')"
    width="600px"
    @cancel="emit('closed')"
    @submit="onSubmit"
  >
    <user-form is-profile :value="form" />
  </app-modal>
</template>

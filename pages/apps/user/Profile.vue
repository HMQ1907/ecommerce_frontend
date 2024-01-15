<script setup lang="ts">
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
import { useQuery } from 'vue-query'
import { UserType } from '@/types/users/UserTypes'

const { t } = useI18n()
const toast = useToast()
const { $api } = useNuxtApp()

const { isLoading } = useQuery(
  'profile',
  async () => {
    const { data } = await $api.auth.profile()
    setValues({
      id: data?.id,
      first_name: data?.employee.first_name,
      last_name: data?.employee.last_name,
      phone: data?.employee.phone || '',
      email: data?.email,
      date_of_birth: data?.employee.date_of_birth,
      gender: data?.employee.gender,
      address: data?.employee.address || '',
    } as UserType)

    return data
  },
  {
    refetchOnWindowFocus: false,
  }
)

const isSubmitting = ref(false)
const schema = yup.object({
  first_name: yup.string().required().label(t('employee.model.firstName')),
  last_name: yup.string().required().label(t('employee.model.lastName')),
  phone: yup.string().nullable().min(10).max(13).label(t('employee.model.phone')),
  email: yup.string().email().required().label(t('employee.model.email')),
  address: yup.string().max(255).label(t('employee.model.address')),
})

const { defineComponentBinds, handleSubmit, setErrors, setValues } = useForm({
  validationSchema: schema,
})

const vuetifyConfig = (state: any) => ({
  props: {
    'error-messages': state.errors,
  },
})

const form = ref({
  first_name: defineComponentBinds('first_name', vuetifyConfig),
  last_name: defineComponentBinds('last_name', vuetifyConfig),
  phone: defineComponentBinds('phone', vuetifyConfig),
  email: defineComponentBinds('email', vuetifyConfig),
  date_of_birth: defineComponentBinds('date_of_birth', vuetifyConfig),
  gender: defineComponentBinds('gender', vuetifyConfig),
  address: defineComponentBinds('address', vuetifyConfig),
})

const genders = [
  { value: t('employee.gender.male'), key: 'male' },
  { value: t('employee.gender.female'), key: 'female' },
  { value: t('employee.gender.others'), key: 'others' },
]

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
  <v-row v-if="!isLoading" dense>
    <v-col cols="12">
      <div>
        <p class="tw-text-xl tw-font-bold mb-1">{{ $t('employee.profile.userInformation') }}</p>
        <p>{{ $t('employee.profile.userInforDes') }}</p>
      </div>
      <div>
        <p class="tw-text-base tw-font-semibold mb-1">{{ $t('employee.profile.email') }}</p>
        <v-text-field v-bind="form.email" autocomplete="new" disabled :label="$t('employee.model.email')" />
      </div>
      <div class="mt-2">
        <p class="tw-text-base tw-font-semibold mb-0">{{ $t('employee.profile.fullName') }}</p>
        <v-row dense>
          <v-col cols="6">
            <v-text-field v-bind="form.first_name" :label="$t('employee.model.lastName')" />
          </v-col>
          <v-col cols="6">
            <v-text-field v-bind="form.last_name" :label="$t('employee.model.firstName')" />
          </v-col>
        </v-row>
      </div>
      <div class="mt-2">
        <p class="tw-text-base tw-font-semibold mb-1">{{ $t('employee.profile.dateOfBirth') }}</p>
        <v-text-field v-bind="form.date_of_birth" :label="$t('employee.model.DOB')" type="date" />
      </div>
      <div class="tw-mt-2">
        <p class="tw-text-base tw-font-semibold mb-1">{{ $t('employee.profile.phone') }}</p>
        <v-text-field v-bind="form.phone" :label="$t('employee.model.phone')" />
      </div>
      <div class="tw-mt-2">
        <span class="tw-text-base tw-font-semibold mb-2">{{ $t('employee.profile.selectYourGender') }}</span>
        <div class="mt-2">
          <v-radio-group v-bind="form.gender" hide-details inline>
            <v-radio v-for="(gender, index) in genders" :key="index" :label="gender.value" :value="gender.key" />
          </v-radio-group>
        </div>
      </div>
      <div class="mt-1">
        <p class="tw-text-base tw-font-semibold mb-1">{{ $t('employee.model.address') }}</p>
        <v-textarea v-bind="form.address" :label="$t('employee.model.address')" />
      </div>
      <div class="text-right mt-2">
        <v-btn color="primary" :loading="isSubmitting" @click="onSubmit">
          {{ t('common.action.save') }}
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

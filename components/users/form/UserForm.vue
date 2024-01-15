<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import RoleAutocomplete from '@/components/users/controls/RoleAutocomplete'
import type { UserType } from '@/types/users/UserTypes'

const props = defineProps({
  value: {
    type: Object as PropType<UserType>,
    required: true,
  },
  isProfile: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:value'])

const { t } = useI18n()
const name = useField('name')
const dayjs = useDayjs()

const form = computed<UserType>({
  get: () => props.value,
  set: (val) => emit('update:value', val),
})
</script>

<template>
  <v-row dense>
    <v-col cols="12" md="6">
      <v-text-field v-bind="form.name" :label="$t('users.model.fullName')" />
    </v-col>
    <v-col cols="12" md="6">
      <v-text-field
        v-bind="form.email"
        autocomplete="new-email"
        :disabled="isProfile"
        :label="$t('employees.model.email')"
      />
    </v-col>
    <v-col v-if="!isProfile" cols="12" md="6">
      <role-autocomplete v-bind="form.roles" clearable :label="$t('users.model.role')" />
    </v-col>
    <v-col cols="12" md="6">
      <v-text-field
        autocomplete="new-password"
        v-bind="form.password"
        :label="$t('users.model.password')"
        type="password"
      />
    </v-col>
    <v-col cols="12" md="6">
      <v-text-field
        v-bind="form.password_confirmation"
        autocomplete="new-password"
        :label="$t('users.model.passwordConfirm')"
        type="password"
      />
    </v-col>
  </v-row>
</template>

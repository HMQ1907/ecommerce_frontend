<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PermissionsList from '@/components/roles/PermissionsList'
import { RoleTypes } from '@/types/roles/RoleTypes'

const { t } = useI18n()
const props = defineProps({
  value: {
    type: Object as PropType<RoleTypes>,
    required: true,
  },
})
const emit = defineEmits(['update:value'])

const form = computed<RoleTypes>({
  get: () => props.value,
  set: (val) => emit('update:value', val),
})
</script>

<template>
  <div>
    <v-row dense>
      <v-col cols="12">
        <v-text-field v-bind="form.display_name" :label="$t('roles.model.display_name')" />
      </v-col>
      <v-col cols="12">
        <v-textarea v-bind="form.description" :label="$t('roles.model.description')" />
      </v-col>
    </v-row>
    <v-list-subheader class="font-weight-bold black--text">{{ t('roles.model.permissions') }}</v-list-subheader>
    <permissions-list v-bind="form.permission_ids" :value="form" />
  </div>
</template>

<script setup>
import { useAbility } from '@casl/vue'
import useGetRoles from '@/composables/use-get-roles'
const { can } = useAbility()

const emit = defineEmits(['click'])

const queryBuilder = computed(() => ({}))
const { items, isLoading } = useGetRoles(queryBuilder, {
  staleTime: 1000 * 60 * 15,
})
const currentRole = ref('')
const handleClickRole = (role) => {
  currentRole.value = role.name
  emit('click', role.name)
}
</script>

<template>
  <div v-if="can('view', 'roles')" class="tw-flex tw-flex-col tw-gap-2">
    <v-btn
      v-for="(role, index) in items"
      :key="index"
      class="tw-border tw-border-solid tw-border-[#0000006b]"
      :color="role.name === currentRole ? '#cdcdcd' : '#F5F5F5'"
      flat
      @click="handleClickRole(role)"
    >
      <span class="tw-text-sm tw-text-[#0000006b] tw-uppercase tw-font-medium">{{ role.display_name }}</span>
    </v-btn>
  </div>
</template>

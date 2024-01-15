<script setup lang="ts">
import { ref, reactive, onMounted, defineEmits } from 'vue'
import { RoleTypes } from '@/types/roles/RoleTypes'

const props = defineProps<{
  value: any
}>()
const { $api } = useNuxtApp()
const isSubmitting = ref(false)
const state = reactive({
  permissions: [],
})

const permissions = toRef(state, 'permissions')

onMounted(() => {
  getModule()
})
const emit = defineEmits(['update:value', 'change'])

const form = computed<RoleTypes>({
  get: () => props.value,
  set: (val) => emit('update:value', val),
})

const getModule = () => {
  isSubmitting.value = true
  $api.permission
    .getModulePermissions()
    .then(({ data }) => {
      state.permissions = data
    })
    .finally(() => {
      isSubmitting.value = false
    })
}
</script>

<template>
  <div>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">{{ $t('roles.model.module') }}</th>
          <th class="text-left">{{ $t('roles.model.action') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in permissions" :key="item.id">
          <td>{{ item.module }}</td>
          <td class="d-flex align-center pa-0">
            <div v-for="action in item.permissions" :key="action.id">
              <v-checkbox
                v-bind="form.permission_ids"
                class="mr-2"
                dense
                hide-details
                :label="action.description"
                :value="action.id"
                @change="$emit('change')"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

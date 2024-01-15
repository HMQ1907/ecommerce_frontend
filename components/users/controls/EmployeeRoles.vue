<script setup lang="ts">
import { useToast } from 'vue-toastification'
import { useI18n } from 'vue-i18n'
import { computed, inject, ref } from 'vue'
import { find } from 'lodash'
import { useQueryClient } from 'vue-query'
import useGetRoles from '@/composables/use-get-roles'

const props = defineProps({
  params: {
    type: Object,
    default: () => ({}),
  },
  properties: {
    type: Object,
    default: () => ({}),
  },
})

const $loading = inject('$loading')
const { t } = useI18n()
const toast = useToast()
const { $api } = useNuxtApp()
const emit = defineEmits(['success'])

const params = ref(props.params)
const properties = ref(props.properties)
const queryClient = useQueryClient()

const isDisabled = computed(() => properties.value.disabled)
const innerValue = computed(() => properties.value.user)
const roleIds = ref(properties.value.user.role_ids[0])

const onChange = (e: any) => {
  const loader = $loading.show()
  const role = find(items.value, { id: e.value })
  $api.employees
    .updateRoles(innerValue.value.id, {
      roles: role.id,
    })
    .then(() => {
      queryClient.invalidateQueries('users')
      toast.success(t('common.message.updateSuccess'))
    })
    .finally(() => {
      loader.hide()
    })
}

const queryBuilder = computed(() => ({
  sorts: ['name'],
}))

const { items, isLoading, isFetching } = useGetRoles(queryBuilder, {
  staleTime: 1000 * 60 * 15,
})
</script>

<template>
  <vxe-select v-if="!isDisabled" v-model="roleIds" @change="onChange">
    <vxe-option v-for="item in items" :key="item.id" :label="item.display_name" :value="item.id" />
  </vxe-select>
</template>

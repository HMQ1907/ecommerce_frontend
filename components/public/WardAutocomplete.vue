<script setup lang="ts">
import { useAttrs } from 'vue'
import { debounce } from 'lodash'
import useGetWards from '@/composables/use-get-wards'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  defaultParams: {
    type: Object,
    default: () => ({}),
  },
  label: {
    type: String,
    default: null,
  },
})

const emit = defineEmits(['update:model-value', 'update:title'])

const attrs = useAttrs()

const innerValue = computed(() => {
  if (!attrs.modelValue) {
    return undefined
  }

  return {
    id: attrs.modelValue,
    name: attrs.title,
  }
})

const queryBuilder = computed(() => ({
  ...props.defaultParams,
}))

const { items, isLoading } = useGetWards(queryBuilder, {
  staleTime: 1000 * 60 * 15,
})

const handleChange = (val: any) => {
  emit('update:model-value', val?.id || null)
  emit('update:title', val?.name || null)
}
</script>

<template>
  <v-autocomplete
    hide-details
    item-title="name"
    item-value="id"
    :items="items"
    :label="label"
    :loading="isLoading"
    :model-value="innerValue"
    return-object
    @update:model-value="handleChange"
  />
</template>

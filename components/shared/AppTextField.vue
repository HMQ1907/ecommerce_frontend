<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  value: {
    type: [String, Number, Boolean, Array, Object, File],
    default: null,
  },
})

defineOptions({
  inheritAttrs: false,
})
const emit = defineEmits(['input'])

const innerValue = computed({
  get: () => props.value,
  set: (val) => emit('input', val),
})
</script>

<template>
  <v-text-field v-model="innerValue" :label="$attrs.label">
    <template #label="{ label }">
      <span>{{ label }}</span>
      <span class="tw-text-error tw-ml-0.5">*</span>
    </template>
  </v-text-field>
</template>

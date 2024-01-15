<script setup lang="ts">
import { set } from 'lodash'
import { ref } from 'vue'

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
const emit = defineEmits(['change'])

const properties = ref({
  openLabel: props.properties.openLabel,
  closeLabel: props.properties.closeLabel,
  openValue: props.properties.openValue || 1,
  closeValue: props.properties.closeValue || 0,
  disabled: props.properties.disabled || false,
  key: props.properties.key || undefined,
})

const params = ref(props.params)
const { row, column } = params.value
const innerValue = ref(properties.value?.key ? row[column.field][properties.value?.key] : row[column.field])

const onSwitch = (e: any) => {
  set(row, column.property, e.value)
  emit('change', row, e.value)
}
</script>

<template>
  <vxe-switch
    v-model="innerValue"
    close-icon="vxe-icon-close"
    :close-label="properties.closeLabel"
    :close-value="properties.closeValue"
    :disabled="properties.disabled"
    open-icon="vxe-icon-check"
    :open-label="properties.openLabel"
    :open-value="properties.openValue"
    @change="onSwitch"
  />
</template>

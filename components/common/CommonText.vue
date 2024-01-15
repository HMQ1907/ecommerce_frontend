<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps({
  properties: {
    type: Object,
    default: () => ({}),
  },
  events: {
    type: Object,
    default: () => ({}),
  },
})
const emit = defineEmits(['click'])

const properties = computed(() => ({
  element: props.properties?.element || 'span',
  classText: props.properties?.classText || '',
  title: props.properties?.title || '',
  disabled: props.properties?.disabled,
}))

const subTitle = computed(() => ({
  element: props.properties?.child?.element || 'span',
  classText: props.properties?.child?.classText || '',
  title: props.properties?.child?.title || '',
  disabled: props.properties?.child?.disabled || '',
}))

const hasEvents = computed(() => Object.keys(props.events).length !== 0)
const cursorClass = computed(() => {
  if (properties.value.disabled) {
    return 'tw-cursor-no-drop'
  } else if (hasEvents.value) {
    return 'tw-cursor-pointer'
  } else {
    return 'tw-cursor-default'
  }
})

const onClick = () => {
  if (!properties.value.disabled && hasEvents.value) {
    emit('click')
  }
}

const onChildClick = () => {
  if (!properties.value.disabled && hasEvents.value) {
    emit('click')
  }
}
</script>

<template>
  <component :is="properties.element" :class="[cursorClass, properties.classText]" @click="onClick">
    {{ properties.title }}
  </component>
  <component :is="subTitle.element" v-if="subTitle.title" :class="subTitle.classText" @click="onChildClick">
    {{ subTitle.title }}
  </component>
</template>

<script setup lang="ts">
const props = defineProps({
  leftTitle: {
    type: String,
    default: '',
  },
  rightTitle: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="tw-flex tw-flex-col tw-gap-1 tw-h-full">
    <div class="tw-flex tw-justify-between tw-gap-2">
      <div v-if="$slots.bottom" class="tw-w-3/4">
        <slot name="left" />
      </div>
      <div class="tw-w-1/4">
        <slot name="right" />
      </div>
    </div>
    <v-divider v-if="$slots.bottom" />
    <slot name="bottom" />
    <slot name="footer" />
  </div>
</template>

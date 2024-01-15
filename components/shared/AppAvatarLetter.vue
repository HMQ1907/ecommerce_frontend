<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'primary',
  },
  size: {
    type: Number,
    default: 40,
  },
})

const shortName = computed(() =>
  props.name
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .join('')
)
</script>

<template>
  <v-avatar :color="color" :size="size">
    <span class="tw-text-white tw-text-sm tw-tracking-[0.5px] tw-font-normal">{{ shortName }}</span>
  </v-avatar>
</template>

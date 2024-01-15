<script setup lang="ts">
const emit = defineEmits(['click'])
</script>

<template>
  <v-btn
    class="tw-flex md:tw-hidden tw-w-5 tw-h-5 tw-px-2 tw-py-0 tw-rounded-[4px] tw-bg-primary"
    flat
    size="40"
    @click="$emit('click')"
  >
    <FilePlusIcon class="tw-text-white" />
  </v-btn>
</template>

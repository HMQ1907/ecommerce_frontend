<script setup lang="ts">
const props = defineProps({
  title: String,
  hideaction: Boolean,
})
</script>

<template>
  <!-- -------------------------------------------------------------------- -->
  <!-- Card with Header & Footer -->
  <!-- -------------------------------------------------------------------- -->
  <v-card class="mb-6 overflow-hidden" elevation="0" variant="outlined">
    <v-card-item>
      <v-card-title class="text-18">{{ title }}</v-card-title>
    </v-card-item>
    <v-divider />
    <slot />
    <v-divider />
    <v-card-actions :class="`${hideaction ? 'd-none' : ''}`">
      <slot name="footer" />
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
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
    <v-card-text>
      <slot />
    </v-card-text>
  </v-card>
</template>

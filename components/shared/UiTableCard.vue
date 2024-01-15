<script setup lang="ts">
const props = defineProps({
  title: String,
})
</script>

<template>
  <!-- ---------------------------------------------------- -->
  <!-- Table Card -->
  <!-- ---------------------------------------------------- -->
  <v-card elevation="0" variant="outlined">
    <v-card-item>
      <v-card-title class="text-18">{{ title }}</v-card-title>
    </v-card-item>
    <v-divider />

    <slot />
  </v-card>
</template>

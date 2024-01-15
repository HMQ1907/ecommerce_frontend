<script setup lang="ts">
import type { ArrowUpLeftIcon } from 'vue-tabler-icons'
</script>
<template>
  <v-card class="position-relative overflow-hidden" elevation="10">
    <span class="lstick" />
    <img class="bg-img-1" src="/images/profile/businessmen.png" />
    <v-card-text>
      <h2 class="title text-h5 overlay-title">Congratulation Julia</h2>
      <h2 class="text-h4 font-weight-bold mt-4 d-flex align-center mb-1">
        $39,358
        <span class="text-subtitle-1 ml-2 d-flex align-center textSecondary">
          <ArrowUpLeftIcon size="18" />
          +9%
        </span>
      </h2>
      <v-btn class="mt-8" color="primary" flat>Download</v-btn>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.overlay-title {
  position: relative;
  z-index: 1;
}

.bg-img-1 {
  position: absolute;
  right: -18px;
  width: 265px;
  top: -20px;
}
@media screen and (max-width: 600px) {
  .bg-img-1 {
    right: -70px;
  }
}
</style>

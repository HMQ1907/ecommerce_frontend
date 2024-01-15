<script setup lang="ts">
import { ref } from 'vue'
const rating = ref(4)
</script>

<template>
  <v-row>
    <v-col class="align-streach" lg="4">
      <v-card class="text-center h-100 d-flex align-center justify-center" elevation="0" variant="outlined">
        <div class="pa-7 py-9">
          <h6 class="text-subtitle-1 font-weight-regular">Average Rating</h6>
          <h1 class="text-primary text-h1 my-4">4/5</h1>
          <div class="text-medium-emphasis align-center justify-center d-flex mb-3 gap-2">
            <v-rating v-model="rating" color="warning" density="compact" half-increments />
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col class="align-streach justify-center" lg="4">
      <v-card class="text-center justify-center h-100" elevation="0" variant="outlined">
        <div class="pa-7">
          <div class="d-flex align-center gap-4 mb-5">
            <div class="text-no-wrap text-subtitle-2">1 Stars</div>
            <v-progress-linear color="primary" model-value="15" rounded="md" />
            <span class="text-subtitle-1">(125)</span>
          </div>
          <div class="d-flex align-center gap-4 my-5">
            <div class="text-no-wrap text-subtitle-2">2 Stars</div>
            <v-progress-linear color="primary" model-value="15" rounded="md" />
            <span class="text-subtitle-1">(125)</span>
          </div>
          <div class="d-flex align-center gap-4 my-5">
            <div class="text-no-wrap text-subtitle-2">3 Stars</div>
            <v-progress-linear color="primary" model-value="35" rounded="md" />
            <span class="text-subtitle-1">(160)</span>
          </div>
          <div class="d-flex align-center gap-4 my-5">
            <div class="text-no-wrap text-subtitle-2">4 Stars</div>
            <v-progress-linear color="primary" model-value="12" rounded="md" />
            <span class="text-subtitle-1">(105)</span>
          </div>
          <div class="d-flex align-center gap-4 mt-5">
            <div class="text-no-wrap text-subtitle-2">5 Stars</div>
            <v-progress-linear color="primary" model-value="55" rounded="md" />
            <span class="text-subtitle-1">(325)</span>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col class="align-streach" lg="4">
      <v-card class="d-flex align-center justify-center h-100" elevation="0" variant="outlined">
        <div class="pa-7 py-9">
          <v-btn color="primary" size="large" variant="outlined">
            <PencilIcon class="mr-1" size="20" />
            Write a Review
          </v-btn>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TimelineView from './TimelineView.vue'
import TimelineProfile from './TimelineProfile.vue'
import TimelineSettings from './TimelineSettings.vue'
const tab = ref(null)
</script>
<template>
  <VCard elevation="10">
    <v-tabs v-model="tab" color="primary" fixed-tabs>
      <v-tab value="one">Activity</v-tab>
      <v-tab value="two">Profile</v-tab>
      <v-tab value="three">Settings</v-tab>
    </v-tabs>
    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <timeline-view />
        </v-window-item>
        <v-window-item value="two"><timeline-profile /></v-window-item>
        <v-window-item value="three"><timeline-settings /></v-window-item>
      </v-window>
    </v-card-text>
  </VCard>
</template>

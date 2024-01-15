<script setup lang="ts">
import { ClockHour4Icon, MessageCircle2Icon, MessageCircleIcon } from 'vue-tabler-icons'
</script>

<template>
  <VCard class="overflow-hidden" elevation="10">
    <img src="/images/backgrounds/u5.jpg" style="width: 100%" />
    <v-card-text>
      <h3 class="text-h6 d-flex align-center">
        <clock-hour4-icon class="mr-1" size="20" />
        22 March, 2021
      </h3>
      <h5 class="mb-2 mt-5 text-h5">Super awesome, Vue 3 is there, Lets do this!</h5>
      <v-chip class="mr-2" color="primary" label size="small">Medium</v-chip>
      <v-chip class="mr-2" color="error" label size="small">Low</v-chip>
      <v-divider class="mt-7" />
      <div class="d-flex align-center mt-4">
        <v-avatar size="40">
          <img alt="John" src="/images/profile/1.jpg" width="40" />
        </v-avatar>
        <v-avatar class="ml-2" size="40">
          <img alt="John" src="/images/profile/2.jpg" width="40" />
        </v-avatar>
        <v-avatar class="ml-2" size="40">
          <img alt="John" src="/images/profile/3.jpg" width="40" />
        </v-avatar>
        <div class="ml-auto">
          <v-btn icon variant="flat">
            <v-avatar class="textSecondary" size="large">
              <message-circle2-icon size="22" />
            </v-avatar>
          </v-btn>
        </div>
      </div>
    </v-card-text>
  </VCard>
</template>

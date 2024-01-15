<script setup lang="ts">
import { ref } from 'vue'
const items = ref([{ title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me 2' }])
</script>

<template>
  <v-card elevation="10">
    <span class="lstick" />
    <v-card-text>
      <div class="d-flex align-center mb-4">
        <h3 class="text-h5 title mb-1">MedicalPro Branding</h3>
        <v-spacer />
        <div class="ml-auto">
          <v-menu bottom left>
            <template #activator="{ props }">
              <v-btn color="inherit" v-bind="props" flat icon>
                <DotsIcon size="20" stroke-width="1.5" />
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
      <v-chip color="primary" label size="small">16 APR, 2022</v-chip>
      <v-row class="mt-3">
        <v-col cols="4">
          <h4 class="text-subtitle-2">Due Date</h4>
          <h5 class="text-subtitle-1 font-weight-medium">Oct 23, 2022</h5>
        </v-col>
        <v-col cols="4">
          <h4 class="text-subtitle-2">Budget</h4>
          <h5 class="text-subtitle-1 font-weight-medium">$98,500</h5>
        </v-col>
        <v-col cols="4">
          <h4 class="text-subtitle-2">Expense</h4>
          <h5 class="text-subtitle-1 font-weight-medium">$63,000</h5>
        </v-col>
      </v-row>
      <v-divider class="my-3" />
      <h5 class="title text-subtitle-1 font-weight-medium mb-2">Teams</h5>

      <v-chip class="mr-1" color="warning" label size="small">Bootstrap</v-chip>
      <v-chip color="error" label size="small">Angular</v-chip>
      <v-divider class="my-4" />
      <h5 class="title text-subtitle-1 font-weight-medium mb-2">Leaders</h5>
      <div class="d-flex align-center">
        <v-avatar size="40">
          <img alt="John" src="/images/profile/1.jpg" width="40" />
        </v-avatar>
        <v-avatar class="ml-2" size="40">
          <img alt="John" src="/images/profile/2.jpg" width="40" />
        </v-avatar>
        <v-avatar class="ml-2" size="40">
          <img alt="John" src="/images/profile/3.jpg" width="40" />
        </v-avatar>
      </div>
      <v-divider class="my-4" />
      <div class="d-flex justify-space-between align-center mt-5">
        <v-btn color="secondary" flat>Add</v-btn>
        <p class="text-body-1 ma-0 text-grey-darken-1">36 Recent Transactions</p>
      </div>
    </v-card-text>
  </v-card>
</template>

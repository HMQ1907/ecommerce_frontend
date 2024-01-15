<script setup lang="ts">
import { ref } from 'vue'
import UiParentCard from '@/components/shared/UiParentCard.vue'
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue'
const page = ref({ title: 'Tabler' })
const breadcrumbs = ref([
  {
    text: 'Icons',
    disabled: false,
    href: '#',
  },
  {
    text: 'Tabler',
    disabled: true,
    href: '#',
  },
])
</script>
<template>
  <base-breadcrumb :breadcrumbs="breadcrumbs" :title="page.title" />
  <v-row>
    <v-col cols="12" md="12">
      <v-card elevation="10">
        <v-card-text class="pa-5">
          <div class="pa-7 pt-0">
            <iframe
              frameborder="0"
              height="650"
              src="https://tabler-icons.io/"
              title="Inline Frame Example"
              width="100%"
            />
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

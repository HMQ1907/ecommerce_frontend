<script setup lang="ts">
import { ChevronRightIcon } from 'vue-tabler-icons'
const props = defineProps({
  title: String,
  breadcrumbs: Array as any,
  icon: String,
})
</script>

<template>
  <div class="mt-3 mb-6">
    <div class="d-flex justify-space-between">
      <div class="d-flex py-0 align-center">
        <div>
          <h3 class="text-h3 mb-2">{{ title }}</h3>
          <v-breadcrumbs class="text-h6 font-weight-regular pa-0 ml-n1" :items="breadcrumbs">
            <template v-if="breadcrumbs" #divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
            <template #title="{ item }">
              <h6 class="text-medium-emphasis text-subtitle-1">{{ item.title }}</h6>
            </template>
          </v-breadcrumbs>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.page-breadcrumb {
  .v-toolbar {
    background: transparent;
  }
}
</style>

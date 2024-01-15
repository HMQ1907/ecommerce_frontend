<script setup lang="ts">
const props = defineProps({
  name: String,
  destination: String,
  building: String,
  city: String,
  state: String,
  phone: String,
  isDefault: Boolean,
  showBtn: Boolean,
})
</script>
<template>
  <v-card variant="outlined">
    <v-card-text>
      <div class="d-flex align-center gap-2">
        <h6 class="text-h6">{{ name }}</h6>
        <small class="text-medium-emphasis">({{ destination }})</small>
        <v-chip v-if="isDefault" class="ml-auto" color="primary" size="small">Default</v-chip>
      </div>
      <div class="mt-4 mb-6 text-body1">
        <p class="text-subtitle-2 lh-md">{{ building }}, {{ city }}, {{ state }}</p>
        <h6 class="text-h6 mt-4 d-flex align-center">
          <DeviceMobileIcon class="mr-2" size="20" />
          {{ phone }}
        </h6>
      </div>
      <div v-if="showBtn" class="d-sm-flex align-center gap-2">
        <v-btn color="primary" flat variant="outlined">Deliver to This Address</v-btn>
        <div class="ml-auto d-flex gap-1">
          <v-btn class="elevation-0" flat icon size="small"><PencilIcon size="18" /></v-btn>
          <v-btn class="elevation-0" flat icon size="small"><TrashIcon size="18" /></v-btn>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

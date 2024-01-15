<script setup lang="ts">
defineProps({
  vehicles: {
    type: Array,
    default: () => [],
  },
  isLoading: Boolean,
})
</script>

<template>
  <VCard class="tw-rounded-[8px] tw-h-[214px] tw-overflow-y-auto" elevation="10">
    <v-card-text class="tw-p-[0]">
      <v-card-title class="tw-py-1.5 tw-px-2">
        <template #default>
          <div class="d-flex tw-flex-col tw-justify-center tw-text-sm">
            {{ $t('dashboard.vehicleInNeedOfRepair.title') }}
          </div>
        </template>
      </v-card-title>
      <div class="tw-absolute tw-top-1/2 tw-left-1/2 tw-translate-y-[-50%] tw-translate-x-[-50%]">
        <v-progress-circular color="green" :indeterminate="isLoading" />
      </div>
      <div
        v-if="vehicles.length <= 0 && !isLoading"
        class="tw-absolute tw-top-1/2 tw-left-1/2 tw-translate-y-[-50%] tw-translate-x-[-50%]"
      >
        {{ $t('common.model.noData') }}
      </div>
      <div v-if="vehicles.length > 0 && !isLoading">
        <v-card-text
          v-for="(vehicle, index) in vehicles"
          :key="index"
          class="d-flex tw-flex-col tw-items-start tw-gap-2"
        >
          <v-row class="tw-self-stretch tw-m-[0] d-flex tw-items-center">
            <v-col class="tw-p-[0] tw-text-[#FF5252] tw-text-[34px] tw-font-medium tw-leading-10">
              {{ vehicle.code }}
            </v-col>
            <v-col class="tw-text-[#00000094] tw-text-sm tw-tracking-[0.25px]">
              {{ vehicle.name }}
            </v-col>
          </v-row>
        </v-card-text>
      </div>
    </v-card-text>
  </VCard>
</template>

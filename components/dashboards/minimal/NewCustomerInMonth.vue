<script setup lang="ts">
defineProps({
  newCustomer: {
    type: Array,
    default: () => [],
  },
  isLoading: Boolean,
})
</script>

<template>
  <VCard class="tw-rounded-[8px] tw-h-[214px] tw-overflow-y-auto" elevation="10">
    <v-card-text class="tw-p-[0]">
      <v-card-title class="tw-py-1.5 tw-px-2 tw-sticky tw-top-[0px] tw-bg-white tw-z-[1]">
        <template #default>
          <div class="d-flex tw-flex-col tw-justify-center tw-text-sm tw-whitespace-pre-wrap">
            {{ $t('dashboard.newCustomerInMonth.title') }}
          </div>
        </template>
      </v-card-title>
      <div class="tw-absolute tw-top-1/2 tw-left-1/2 tw-translate-y-[-50%] tw-translate-x-[-50%]">
        <v-progress-circular color="green" :indeterminate="isLoading" />
      </div>
      <div
        v-if="newCustomer.length <= 0 && !isLoading"
        class="tw-absolute tw-top-1/2 tw-left-1/2 tw-translate-y-[-50%] tw-translate-x-[-50%]"
      >
        {{ $t('common.model.noData') }}
      </div>
      <div v-if="newCustomer.length > 0 && !isLoading">
        <v-card-text
          v-for="(customer, index) in newCustomer"
          :key="index"
          class="d-flex tw-flex-col tw-mx-2 tw-mb-1.5 tw-p-[0]"
        >
          <span class="tw-text-base tw-tracking-[0.5px]">
            {{ customer.name }}
          </span>
          <span class="tw-text-xs tw-leading-5 tw-tracking-[0.4px]">
            {{ customer.address }}
          </span>
        </v-card-text>
      </div>
    </v-card-text>
  </VCard>
</template>

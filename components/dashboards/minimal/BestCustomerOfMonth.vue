<script setup lang="ts">
defineProps({
  customer: Object,
  isLoading: Boolean,
})
</script>

<template>
  <VCard class="tw-relative tw-w-full tw-rounded-[8px]" :class="customer ? 'tw-h-full' : 'tw-h-[214px]'" elevation="10">
    <v-card-text class="tw-p-[0]">
      <v-card-title class="tw-pt-1.5 tw-px-2 tw-pb-[0]">
        <template #default>
          <div class="d-flex tw-flex-col tw-justify-center tw-text-sm">
            {{ $t('dashboard.bestCustomerOfMonth.title') }}
          </div>
        </template>
      </v-card-title>

      <div class="tw-absolute tw-top-1/2 tw-left-1/2 tw-translate-y-[-50%] tw-translate-x-[-50%]">
        <v-progress-circular color="green" :indeterminate="isLoading" />
      </div>
      <div
        v-if="!customer && !isLoading"
        class="tw-absolute tw-top-1/2 tw-left-1/2 tw-translate-y-[-50%] tw-translate-x-[-50%]"
      >
        {{ $t('common.model.noData') }}
      </div>
      <div v-if="customer && !isLoading">
        <v-card-text class="tw-p-2 tw-min-h-[96px]">
          <h5 class="tw-text-[#FB8C00] tw-text-[23px] tw-font-normal tw-leading-8">
            {{ customer?.customer.name }}
          </h5>
        </v-card-text>
        <div class="tw-absolute tw-top-1.5 tw-right-2">
          <img alt="hotel_class" class="tw-w-6 tw-leading-[48px]" src="/images/svgs/hotel_class.svg" />
        </div>
        <v-card-text class="tw-pt-0.5 d-flex tw-justify-between">
          <div class="d-flex tw-flex-col">
            <span class="d-flex tw-flex-col tw-justify-center tw-text-[34px] tw-leading-10">
              {{ customer?.total_plans }}
            </span>
            <span class="d-flex tw-flex-col tw-justify-center tw-text-[#00000094] tw-text-sm">
              {{ $t('dashboard.bestCustomerOfMonth.order') }}
            </span>
          </div>
          <div>
            <span class="d-flex tw-flex-col tw-justify-center tw-text-[34px] tw-leading-10">
              {{ customer?.total_actual_quantity }}
            </span>
            <span class="d-flex tw-flex-col tw-justify-center tw-text-[#00000094] tw-text-sm">
              {{ $t('dashboard.bestCustomerOfMonth.mass') }}
            </span>
          </div>
        </v-card-text>
      </div>
    </v-card-text>
  </VCard>
</template>

<script setup lang="ts">
import { ServerOptions } from 'vue3-easy-data-table'
import useGetRateGoods from '@/composables/use-get-rate-goods'

const { $api } = useNuxtApp()

const serverOptions = ref<ServerOptions>({
  page: 1,
  rowsPerPage: 9999,
  sortBy: 'created_at',
  sortType: 'asc',
})
const params = ref({
  filters: '',
})

const queryBuilder = computed(() => ({
  ...serverOptions.value,
  ...params.value,
}))
const { items, totalItems, isLoading } = useGetRateGoods(queryBuilder)

const chartOptions = computed(() => ({
  chart: {
    type: 'donut',
  },
  dataLabels: {
    enabled: true,
    textAnchor: 'start',
    formatter(val: number) {
      return val.toFixed(0)
    },
    dropShadow: {
      enabled: false,
    },
    offsetX: 0,
    offsetY: 0,
    style: {
      fontSize: '12px',
      fontFamily: 'Roboto',
      fontWeight: '500',
      colors: ['#424242'],
    },
  },
  legend: {
    position: 'bottom',
    horizontalAlign: 'left',
    fontSize: '12px',
    fontFamily: 'Roboto',
    fontWeight: 400,
    itemMargin: {
      horizontal: 18,
      vertical: 5,
    },
  },
  labels: items.value.map(({ name }: { name: string }) => name),
}))

const series = computed(() => items.value.map(({ quantity }: { quantity: any }) => parseFloat(quantity)))
</script>

<template>
  <VCard class="tw-h-[450px] tw-min-h-full" elevation="10">
    <v-card-text class="tw-p-[0]">
      <v-card-title class="tw-pt-1.5 tw-pb-[0] tw-opacity-100">
        <template #default>
          <div class="bg-[#FFFFFF] d-flex justify-space-between align-center">
            <p class="tw-text-sm tw-font-medium tw-text-[#424242]">{{ $t('dashboard.rateOfGoodsByMonth.title') }}</p>
          </div>
        </template>
      </v-card-title>
      <div class="tw-absolute tw-top-1/2 tw-left-1/2 tw-translate-y-[-50%] tw-translate-x-[-50%]">
        <v-progress-circular color="green" :indeterminate="isLoading" />
      </div>
      <div
        v-if="!chartOptions.value && !isLoading"
        class="tw-absolute tw-top-1/2 tw-left-1/2 tw-translate-y-[-50%] tw-translate-x-[-50%]"
      >
        {{ $t('common.model.noData') }}
      </div>

      <div v-if="chartOptions.value && !isLoading">
        <v-card-text class="tw-px-1 tw-mt-5">
          <div id="chart">
            <apexchart height="372" :options="chartOptions" :series="series" type="donut" />
          </div>
        </v-card-text>
      </div>
    </v-card-text>
  </VCard>
</template>

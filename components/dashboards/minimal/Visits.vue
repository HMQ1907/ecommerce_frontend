<script setup lang="ts">
import { ref, computed } from 'vue'
import { getPrimary, getSecondary } from '@/utils/update-colors'
/* Chart */
const chartOptions = computed(() => {
  return {
    series: [25, 35, 35, 15],
    labels: ['Mobile', 'tablet', 'Other', 'Desktop'],
    chart: {
      height: 280,
      type: 'donut',
      foreColor: '#adb0bb',
      fontFamily: 'inherit',
    },
    colors: [getPrimary.value, getSecondary.value, '#ecf0f2', '#6352ce'],
    dataLabels: { enabled: false },
    legend: { show: false },
    grid: {
      show: false,
      borderColor: 'transparent',
      padding: { top: 0, right: 0 },
    },
    stroke: { colors: ['transparent'] },
    plotOptions: {
      pie: {
        donut: {
          size: '85%',
          background: 'transparent',
          labels: {
            show: false,
            name: {
              show: true,
              fontSize: '18px',
              color: undefined,
              offsetY: -10,
            },
            value: { show: false, color: '#98aab4' },
            total: { show: false, label: 'Our Visitors', color: '#98aab4' },
          },
        },
      },
    },
    tooltip: { theme: 'dark', fillSeriesColor: false },
    responsive: [{ breakpoint: 480, options: { chart: { height: 230 } } }],
  }
})

const select = ref('March')
const items = ref(['March', 'April', 'May', 'June'])
</script>

<template>
  <!-- ------------------------------------ -->
  <!-- html -->
  <!-- ------------------------------------ -->
  <VCard elevation="10">
    <span class="lstick" />
    <v-card-text>
      <div>
        <h3 class="text-h5 title mb-1">Visits</h3>
        <h5 class="text-subtitle-1">From Devices</h5>
      </div>
      <div class="mt-3 pt-5 position-relative">
        <apexchart height="280px" :options="chartOptions" :series="chartOptions.series" type="donut" />
      </div>
      <div class="d-flex align-center justify-space-between mt-9">
        <div class="d-flex align-center px-2">
          <span class="text-overline">
            <i class="mdi mdi-brightness-1 text-secondary mx-1" />
          </span>
          <span class="text-subtitle-1 mr-1">Tablet</span>
        </div>
        <div class="d-flex align-center px-2">
          <span class="text-overline">
            <i class="mdi mdi-brightness-1 text-primary mx-1" />
          </span>
          <span class="text-subtitle-1 mr-1">Mobile</span>
        </div>
        <div class="d-flex align-center px-2">
          <span class="text-overline">
            <i class="mdi mdi-brightness-1 mx-1" />
          </span>
          <span class="text-subtitle-1 mr-1">Desktop</span>
        </div>
      </div>
    </v-card-text>
  </VCard>
</template>

<style scoped>
.total-sales-icon {
  position: absolute;
  left: 46%;
  top: 45%;
}
</style>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { getPrimary, getSecondary } from '@/utils/update-colors'
/* Chart */
const Chart = computed(() => {
  return {
    series: [
      {
        name: 'INDIA',
        data: [50, 100, 70, 100, 240, 180, 220, 140],
      },
      {
        name: 'JAPAN',
        data: [30, 50, 30, 60, 180, 120, 180, 80],
      },
    ],

    chart: {
      height: 480,
      type: 'bar',

      fontFamily: 'inherit',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '35%',
        endingShape: 'rounded',
      },
    },
    stroke: {
      show: true,
      width: 5,
      colors: ['transparent'],
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 3,
      strokeColors: 'transparent',
    },
    fill: {
      type: 'solid',
      colors: ['#e5e6e9', getPrimary.value, '#e9edf2'],
      opacity: 1,
    },
    colors: ['#e9edf2', getPrimary.value, '#7460ee'],
    legend: {
      show: false,
    },
    grid: {
      show: true,
      strokeDashArray: 0,
      borderColor: 'rgba(0,0,0,0.1)',
      yaxis: {
        show: false,
      },
    },
    xaxis: {
      type: 'category',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      labels: {
        style: {
          colors: '#a1aab2',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#a1aab2',
        },
      },
    },
    tooltip: {
      theme: 'dark',
      fillColors: ['#e9edf2', '#398bf7', '#7460ee'],
    },
  }
})
</script>

<template>
  <!-- ------------------------------------ -->
  <!-- html -->
  <!-- ------------------------------------ -->

  <v-card elevation="10">
    <span class="lstick" />
    <v-card-text class="pb-3">
      <div class="d-flex align-center">
        <div>
          <h2 class="text-h5 mb-1">Countries Visit</h2>
          <h5 class="text-subtitle-1">Year 2022</h5>
        </div>
        <div class="d-flex ml-auto">
          <v-icon color="primary" size="sm">mdi-circle</v-icon>
          <div class="ml-2 mt-n1">
            <h3 class="text-subtitle-1 font-weight-medium">10,320</h3>
            Usa
          </div>
        </div>
        <div class="mx-4 d-flex">
          <v-icon color="info" size="sm">mdi-circle</v-icon>
          <div class="ml-2 mt-n1">
            <h3 class="text-subtitle-1 font-weight-medium">13,200</h3>
            India
          </div>
        </div>
      </div>
      <div class="mt-5">
        <apexchart height="480px" :options="Chart" :series="Chart.series" type="bar" />
      </div>
    </v-card-text>
  </v-card>
</template>

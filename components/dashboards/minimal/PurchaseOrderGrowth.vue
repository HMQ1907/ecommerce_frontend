<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { $api, $vuetify } = useNuxtApp()

const fontSizeChart = computed(() => {
  switch ($vuetify.display.name.value) {
    case 'smAndUp':
      return '12px'
    default:
      return '10px'
  }
})
/* Chart */
const chartOptions = ref({
  series: [
    {
      name: t('dashboard.model.onSchedule'),
      data: [],
    },
    {
      name: t('dashboard.model.late'),
      data: [],
    },
  ],

  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      dataLabels: {
        position: 'top',
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: true,
    formatter(val: any) {
      return val
    },
    offsetY: -20,
    style: {
      fontWeight: 'normal',
      fontSize: '12px',
      colors: ['#4CAF50', '#FB8C00'],
    },
  },
  grid: {
    row: {
      opacity: 0.5,
    },
    borderColor: '#ccc',
    strokeDashArray: 4,
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    labels: {
      style: {
        colors: '#333',
        fontSize: fontSizeChart.value,
        fontWeight: 400,
        cssClass: 'apexcharts-xaxis-label tw-uppercase',
      },
    },
  },
  yaxis: {
    title: {},
  },
  colors: ['#4CAF50', '#FB8C00'],
  tooltip: {
    theme: 'dark',
    y: {
      formatter(val: any) {
        return val
      },
    },
  },
})

onMounted(() => {
  $api.dashboard.getTotalByMonth().then(({ data }) => {
    chartOptions.value.series[0].data = data.on_time
    chartOptions.value.series[1].data = data.over_time
  })
})
</script>

<template>
  <v-card elevation="10">
    <v-card-text class="tw-pt-1.5 tw-pb-[0px] tw-px-1">
      <div class="d-flex align-center tw-px-1">
        <div>
          <h5 class="text-subtitle-1 tw-font-medium">{{ $t('dashboard.model.purchaseOderGrowth') }}</h5>
        </div>
        <div class="ml-auto">
          <div class="d-flex align-center tw-mt-0 sm:tw-mt-1.5">
            <div class="mx-4 d-flex align-baseline">
              <v-icon color="#FB8C00" size="sm">mdi-circle</v-icon>
              <div class="ml-2">
                <h3 class="tw-text-xs tw-font-normal">{{ $t('dashboard.model.late') }}</h3>
              </div>
            </div>
            <div class="d-flex align-baseline">
              <v-icon color="#4CAF50" size="sm">mdi-circle</v-icon>
              <div class="ml-2">
                <h3 class="tw-text-xs tw-font-normal">{{ $t('dashboard.model.onSchedule') }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <apexchart class="tw-mb-0" height="350px" :options="chartOptions" :series="chartOptions.series" type="bar" />
      </div>
    </v-card-text>
  </v-card>
</template>
<style lang="scss" scoped>
.card-text-chart {
  padding: 12px 16px;
}
</style>

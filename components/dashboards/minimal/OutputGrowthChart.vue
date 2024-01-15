<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getPrimary } from '@/utils/update-colors'

const { $api, $vuetify } = useNuxtApp()

const fontSizeChart = computed(() => {
  switch ($vuetify.display.name.value) {
    case 'smAndUp':
      return '12px'
    default:
      return '10px'
  }
})

const chartOptions = ref({
  series: [
    {
      name: 'Sản lượng',
      type: 'column',
      data: [],
    },
    {
      name: 'Phần trăm',
      type: 'line',
      data: [],
    },
  ],

  chart: {
    height: 320,
    width: '100%',
    type: 'area',
    stacked: true,
    fontFamily: 'inherit',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: true,
    position: 'top',
    offsetY: -10,
    formatter(val: any, opts: any) {
      // 1 is percent item
      return opts.seriesIndex === 1 ? `${val}%` : val
    },
    style: {
      fontSize: '12px',
      colors: [getPrimary.value, '#FB8C00'],
      fontWeight: 'normal',
    },
    background: {
      enabled: false,
    },
  },
  markers: {
    size: 4,
    strokeColors: 'white',
  },
  stroke: {
    width: [0, 2],
  },
  colors: [getPrimary.value, '#FB8C00'],
  legend: {
    show: false,
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
  xaxis: {
    type: 'category',
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
  yaxis: [
    {
      title: {},
    },
    {
      opposite: true,
      title: {},
    },
  ],
  tooltip: {
    theme: 'dark',
    fillColors: ['#e9edf2', '#398bf7', '#7460ee'],
  },
})

onMounted(() => {
  $api.plans.getOutputGrowthCharts().then(({ data }) => {
    chartOptions.value.series[0].data = data.map((item: any) => item.quantity)
    chartOptions.value.series[1].data = data.map((item: any) => item.growth)
  })
})
</script>

<template>
  <v-card elevation="10">
    <v-card-text class="tw-pt-1.5 tw-pb-[0px] tw-px-1">
      <div class="d-flex align-center tw-px-1">
        <div>
          <h5 class="text-subtitle-1 tw-font-medium">{{ $t('dashboard.model.outputGrowth') }}</h5>
        </div>
        <div class="ml-auto">
          <div class="d-flex align-center tw-mt-0 sm:tw-mt-1.5">
            <div class="d-flex align-baseline">
              <v-icon color="#FB8C00" size="sm">mdi-circle</v-icon>
              <div class="ml-2">
                <h3 class="tw-text-xs tw-font-normal tw-text-black">{{ $t('dashboard.model.sPLY') }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <apexchart
          class="tw-mb-0"
          height="350px"
          :options="chartOptions"
          :series="chartOptions.series"
          type="line"
          width="100%"
        />
      </div>
    </v-card-text>
  </v-card>
</template>

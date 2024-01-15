<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, computed } from 'vue'
import DatePicker from '@/components/common/DatePicker'
import useGetPlansLayouts from '@/composables/use-get-plans-layouts'

const { t } = useI18n()
const dayjs = useDayjs()

const queryBuilder = computed(() => ({
  filters: {
    type: 'year',
  },
}))
const { items, totalItems, isLoading, refetch } = useGetPlansLayouts(queryBuilder)

/* Chart */
const chart = computed(() => {
  return {
    series: [
      {
        name: dayjs().format('YYYY'),
        data: items.value.map((e: any) => e.current_year),
      },
      {
        name: dayjs().subtract(1, 'year').format('YYYY'),
        data: items.value.map((e: any) => e.previous_year),
      },
    ],
    chart: {
      height: 320,
      width: '100%',
      fontFamily: 'inherit',
      toolbar: {
        show: false,
      },
    },

    stroke: {
      show: true,
      width: 5,
      colors: ['transparent'],
    },
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetY: -20,
      style: {
        fontSize: '12px',
        fontFamily: 'Roboto',
        fontWeight: '400',
        colors: ['#333'],
      },
      formatter(val: any) {
        return val === 0 ? '' : `${val}`
      },
    },
    colors: ['#5a9bd5', '#ED7D31'],
    legend: {
      show: true,
      position: 'bottom',
      fontSize: '12px',
      fontFamily: 'Roboto',
      fontWeight: 400,
    },
    grid: {
      strokeDashArray: 0,
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: false,
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
      labels: {
        style: {
          colors: '#333',
          fontSize: 12,
          fontWeight: 400,
          cssClass: 'apexcharts-xaxis-label tw-uppercase',
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      show: true,
      tickAmount: 8,
      labels: {
        offsetX: -10,
      },
    },
    tooltip: {
      theme: 'dark',
      fillColors: ['#e9edf2', '#398bf7', '#7460ee'],
    },
    labels: items.value.map((e: any) => e.month),
  }
})
</script>

<template>
  <v-card class="tw-min-h-[400px]" variant="outlined">
    <v-card-text>
      <div class="d-flex tw-py-1 tw-gap-2">
        <v-btn icon variant="text" width="40" @click="refetch">
          <RefreshIcon size="20" />
        </v-btn>
      </div>
      <div class="tw-text-[20px] tw-text-center tw-text-[#5a5a5a] tw-font-bold tw-uppercase">
        {{ t('reports.model.arrangementPlan') }}
      </div>
      <div class="tw-absolute tw-top-1/2 tw-left-1/2 tw-translate-y-[-50%] tw-translate-x-[-50%]">
        <v-progress-circular color="green" :indeterminate="isLoading" />
      </div>
      <div v-if="!isLoading"><apexchart height="350px" :options="chart" :series="chart.series" type="bar" /></div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DatePicker from '@/components/common/DatePicker'
import useGetWorkPerformancesLine from '@/composables/use-get-work-performances-line'

const { t } = useI18n()
const dayjs = useDayjs()

const date = ref([dayjs().format('YYYY-MM-DD'), dayjs().format('YYYY-MM-DD')])

const dateFormatted = computed(() =>
  date.value.map((day: string) =>
    day ? dayjs(day).format('YYYY-MM-DD') : dayjs(date.value.find((e: any) => e)).format('YYYY-MM-DD')
  )
)

const queryBuilder = computed(() => ({
  filters: {
    type: 'day',
    date_between: dateFormatted.value,
  },
}))

const { items, isLoading, refetch } = useGetWorkPerformancesLine(queryBuilder)

/* Chart */
const chartOptions = computed(() => ({
  series: items.value?.map((item: any) => ({
    name: item.title,
    data: item.data.map((dt: any) => dt.percent),
  })),
  chart: {
    height: 320,
    width: '100%',
    fontFamily: 'inherit',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      dataLabels: {
        position: 'top',
        orientation: 'vertical',
      },
    },
  },
  legend: {
    show: true,
    showForSingleSeries: true,
  },
  dataLabels: {
    enabled: true,
    textAnchor: 'start',
    formatter(val: any, { seriesIndex, dataPointIndex }: any) {
      const statusItems = items.value?.map((item: any) => item.data.map((dt: any) => dt.status))
      const statusName = statusItems[seriesIndex][dataPointIndex]
      return `${statusName}, ${val}%`
    },
    offsetX: 10,
    style: {
      fontSize: '12px',
      fontWeight: '400',
      colors: ['#333'],
    },
    background: {
      enabled: false,
    },
  },
  colors: ['#ffc000', '#5c9cd5', '#ed7d31', '#a5a5a5', '#4472c4'],
  grid: {
    borderColor: '#ccc',
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
    width: 3,
    curve: 'straight',
  },
  markers: {
    size: 5,
  },
  xaxis: {
    categories: ['9:00', '11:00', '13:00', '15:00', '17:00'],
    labels: {
      style: {
        colors: '#333',
        fontSize: 12,
        fontWeight: 400,
        cssClass: 'apexcharts-xaxis-label tw-uppercase',
      },
    },
    axisBorder: {
      show: false,
    },
    tickPlacement: 'between',
  },
  yaxis: {
    tickAmount: 6,
    labels: {
      offsetX: -10,
      formatter(val: any) {
        return val + '%'
      },
    },
    title: {},
  },
  tooltip: {
    theme: 'dark',
    y: {
      formatter(val: any) {
        return val + '%'
      },
    },
  },
}))
</script>

<template>
  <v-card class="tw-min-h-[500px] tw-px-1" variant="outlined">
    <div class="d-flex tw-py-1 tw-gap-2">
      <date-picker v-model="date" class="tw-h-[32px] tw-w-[200px]" range />
      <v-btn icon variant="text" width="40" @click="refetch">
        <RefreshIcon size="20" />
      </v-btn>
    </div>
    <v-card-text>
      <div class="tw-text-[20px] tw-mb-2 tw-text-center tw-text-[#5a5a5a] tw-font-bold tw-uppercase">
        {{ $t('reports.model.workEffective') }}
      </div>
      <div class="tw-absolute tw-top-1/2 tw-left-1/2 tw-translate-y-[-50%] tw-translate-x-[-50%]">
        <v-progress-circular color="green" :indeterminate="isLoading" />
      </div>
      <div v-if="!isLoading">
        <apexchart class="tw-mb-0" height="400px" :options="chartOptions" :series="chartOptions.series" type="line" />
      </div>
    </v-card-text>
  </v-card>
</template>

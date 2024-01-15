<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, computed } from 'vue'
import DatePicker from '@/components/common/DatePicker'
import useGetWorkPerformancesBar from '@/composables/use-get-work-performances-bar'

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
const { items, isLoading, refetch } = useGetWorkPerformancesBar(queryBuilder)

/* Chart */
const chart = computed(() => ({
  series: [
    {
      name: t('reports.model.percent'),
      type: 'line',
      data: items.value.map((e: any) => e.data[1]),
    },
    {
      name: t('reports.model.result'),
      type: 'column',
      data: items.value.map((e: any) => (e.data[1] >= 0 ? 100 : null)),
    },
  ],
  chart: {
    fontFamily: 'inherit',
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: [1, 0],
    curve: 'straight',
  },
  markers: {
    size: 6,
    shape: 'square',
    strokeWidth: 0,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      dataLabels: {
        position: 'center',
        offsetY: 30,
      },
    },
  },
  dataLabels: {
    enabled: true,
    textAnchor: 'middle',
    offsetY: -8,
    style: {
      fontSize: '12px',
      fontFamily: 'Roboto',
      fontWeight: '400',
      colors: ['#333', '#fff'],
    },
    formatter(val: any, opts: any) {
      const statusItems = items.value.map((item: any) => item.data).map((e: any) => e[0])
      const statusName = statusItems[opts.dataPointIndex]
      return opts.seriesIndex === 0 ? `${statusName}, ${val}%` : `${val}%`
    },
    background: {
      enabled: false,
    },
  },
  colors: ['#5c9cd5', '#ed7d31'],
  legend: {
    show: false,
  },
  grid: {
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
    categories: items.value?.map((item: any) => [item?.warehouses, item?.ship, item?.customer || '']),
    labels: {
      show: true,
      rotate: 0,
      hideOverlappingLabels: false,
      showDuplicates: false,
      trim: true,
      style: {
        colors: '#333',
        fontSize: 12,
        fontWeight: 400,
        cssClass: 'apexcharts-xaxis-label tw-uppercase',
      },
    },
    axisTicks: {
      show: true,
      borderType: 'solid',
      color: '#ccc',
      height: 60,
    },
  },
  yaxis: {
    labels: {
      offsetX: -10,
      formatter(val: any) {
        return val + '%'
      },
    },
  },
  tooltip: {
    theme: 'dark',
    fillColors: ['#e9edf2', '#398bf7', '#7460ee'],
    y: {
      title: {},
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
        {{ t('reports.model.workEffective') }}
      </div>
      <div class="tw-absolute tw-top-1/2 tw-left-1/2 tw-translate-y-[-50%] tw-translate-x-[-50%]">
        <v-progress-circular color="green" :indeterminate="isLoading" />
      </div>
      <div v-if="!isLoading"><apexchart height="400" :options="chart" :series="chart.series" type="line" /></div>
    </v-card-text>
  </v-card>
</template>

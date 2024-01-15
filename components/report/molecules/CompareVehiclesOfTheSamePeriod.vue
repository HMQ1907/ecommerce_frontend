<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, computed } from 'vue'
import DatePicker from '@/components/common/DatePicker'
import useGetNewVehicles from '@/composables/use-get-new-vehicles'

const { t } = useI18n()

const dayjs = useDayjs()
const startOfMonth = ref({
  year: dayjs().year(),
  month: dayjs().month(),
})
const endOfMonth = ref({
  year: dayjs().year(),
  month: dayjs().month(),
})

const queryBuilder = computed(() => ({
  filters: {
    month: dayjs().year(startOfMonth.value.year).month(startOfMonth.value.month).format('YYYY-MM'),
    type: 'month',
    date_from: dayjs()
      .year(startOfMonth.value.year)
      .month(startOfMonth.value.month)
      .startOf('month')
      .format('YYYY-MM-DD'),
    date_to: dayjs().year(endOfMonth.value.year).month(endOfMonth.value.month).endOf('month').format('YYYY-MM-DD'),
  },
}))
const { items, totalItems, isLoading, refetch } = useGetNewVehicles(queryBuilder)

/* Chart */
const chart = computed(() => {
  return {
    series: [
      {
        name: dayjs().year(startOfMonth.value.year).month(startOfMonth.value.month).format('YYYY-MM'),
        data: items.value.map((item: any) => item.total),
      },
      {
        name: dayjs().year(endOfMonth.value.year).month(endOfMonth.value.month).format('YYYY-MM'),
        data: items.value.map((item: any) => item.previous),
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
      width: 20,
      colors: ['transparent'],
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
    dataLabels: {
      enabled: true,
      offsetY: 10,
      offsetX: 9,
      style: {
        fontSize: '12px',
        fontFamily: 'Roboto',
        fontWeight: '500',
        colors: ['#9d9d9d'],
      },
    },
    colors: ['#5a9bd5', '#ED7D31'],
    legend: {
      show: true,
      position: 'top',
      fontSize: '12px',
      fontFamily: 'Roboto',
      fontWeight: 400,
    },
    grid: {
      strokeDashArray: 0,
      yaxis: {
        lines: {
          show: false,
        },
      },
      xaxis: {
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
      labels: {
        style: {
          colors: '#9d9d9d',
          fontSize: 12,
          fontWeight: 400,
          cssClass: 'apexcharts-xaxis-label tw-uppercase',
        },
      },
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      theme: 'dark',
      fillColors: ['#e9edf2', '#398bf7', '#7460ee'],
    },
    labels: items.value.map(({ type }: { type: string }) => {
      switch (type) {
        case 'GH':
          return t('reports.model.gh')
        case 'ND':
          return t('reports.model.nd')
        case 'NN':
          return t('reports.model.nn')
        default:
          return t('reports.model.sl')
      }
    }),
  }
})
</script>

<template>
  <v-card class="tw-min-h-full" variant="outlined">
    <div class="d-flex tw-justify-center tw-py-1 tw-gap-2">
      <date-picker v-model="startOfMonth" class="tw-h-[32px] tw-w-[200px]" month-picker />
      <date-picker v-model="endOfMonth" class="tw-h-[32px] tw-w-[200px]" month-picker />
      <v-btn icon variant="text" width="40" @click="refetch">
        <RefreshIcon size="20" />
      </v-btn>
    </div>
    <v-card-text>
      <div class="tw-text-[20px] tw-mb-2 tw-text-center tw-text-[#5a5a5a] tw-font-bold tw-uppercase">
        {{ t('reports.model.compareVehicle') }}
      </div>
      <div class="tw-absolute tw-top-1/2 tw-left-1/2 tw-translate-y-[-50%] tw-translate-x-[-50%]">
        <v-progress-circular color="green" :indeterminate="isLoading" />
      </div>
      <div v-if="!isLoading">
        <apexchart height="350px" :options="chart" :series="chart.series" type="bar" />
      </div>
    </v-card-text>
  </v-card>
</template>

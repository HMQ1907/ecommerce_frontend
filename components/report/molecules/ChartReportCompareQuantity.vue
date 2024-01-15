<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed, ref } from 'vue'
import DatePicker from '@/components/common/DatePicker'
import useGetChartReportQuantity from '@/composables/use-get-chart-report-quantity'

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

const { items, totalItems, isLoading, refetch } = useGetChartReportQuantity(queryBuilder)
const barChartOptions = computed(() => {
  return {
    series: [
      {
        name: dayjs().year(startOfMonth.value.year).month(startOfMonth.value.month).format('YYYY-MM'),
        data: items.value.map((item: any) => parseInt(item.total)),
      },
      {
        name: dayjs().year(endOfMonth.value.year).month(endOfMonth.value.month).format('YYYY-MM'),
        data: items.value.map((item: any) => parseInt(item.previous)),
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
          orientation: 'vertical',
        },
      },
    },
    legend: {
      show: true,
      position: 'top',
    },
    dataLabels: {
      enabled: true,
      formatter(val: any) {
        return val
      },
      offsetY: 5,
      style: {
        fontWeight: 'normal',
        fontSize: '12px',
        colors: ['#D6D6D6', '#D6D6D6'],
        rotate: 90,
      },
    },
    grid: {
      row: {
        opacity: 0.5,
      },
      borderColor: '#ccc',
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
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
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      labels: {
        hideOverlappingLabels: false,
        style: {
          colors: '#333',
          fontSize: 12,
          fontWeight: 400,
          cssClass: 'apexcharts-xaxis-label tw-uppercase tw-text-red-800',
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
    labels: items.value.map((item: string) => item.name),
  }
})
</script>
<template>
  <!--  Bar Chart-->
  <v-card class="tw-h-[500px] tw-p-1" variant="outlined">
    <div class="d-flex white-space tw-gap-2 tw-py-0.5 tw-mb-1">
      <date-picker v-model="startOfMonth" class="tw-h-[32px]" month-picker />
      <date-picker v-model="endOfMonth" class="tw-h-[32px]" month-picker />
      <v-btn icon variant="text" width="40" @click="refetch">
        <RefreshIcon size="20" />
      </v-btn>
    </div>
    <v-card-text class="tw-pt-1.5 tw-pb-[0px] tw-px-1">
      <div class="align-center tw-px-1">
        <div>
          <h2 class="tw-text-center tw-pb-3">{{ $t('chartsQuantity.model.titleChart') }}</h2>
        </div>
      </div>
      <div class="tw-absolute tw-top-1/2 tw-left-1/2 tw-translate-y-[-50%] tw-translate-x-[-50%]">
        <v-progress-circular color="green" :indeterminate="isLoading" />
      </div>
      <div v-if="!isLoading">
        <apexchart
          class="tw-mb-0"
          height="350px"
          :options="barChartOptions"
          :series="barChartOptions.series"
          type="bar"
        />
      </div>
    </v-card-text>
  </v-card>
</template>

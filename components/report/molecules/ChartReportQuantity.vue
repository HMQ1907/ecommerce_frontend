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

const queryBuilder = computed(() => ({
  filters: {
    month: dayjs().year(startOfMonth.value.year).month(startOfMonth.value.month).format('YYYY-MM'),
    type: 'month',
  },
}))

const isEmpty = computed(() => items.value.every((e: any) => parseInt(e.total) === 0))

const { items, totalItems, isLoading, refetch } = useGetChartReportQuantity(queryBuilder)

// Pie Chart
const pieChartOptions = computed(() => {
  return {
    stroke: {
      show: true,
      width: 5,
      colors: [],
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -20,
        },
      },
    },
    legend: {
      show: true,
      position: 'top',
      markers: {
        width: 12,
        height: 12,
        radius: null,
      },
    },
    series: items.value.map((item: any) => parseInt(item.total)),
    colors: ['#62A0DB', '#D76F26', '#969696', '#EDA908', '#446EBA'],
    labels: items.value.map((item: any) => item.name),
    dataLabels: {
      style: {
        fontSize: '12px',
        fontWeight: 'bold',
      },
      enabled: true,
      formatter(val: any, opts: any) {
        const name = opts.w.globals.labels[opts.seriesIndex]
        return [name + '\n' + val.toFixed(1) + '%']
      },
      offsetX: 0,
    },
  }
})
</script>

<template>
  <!--  Pie chart-->
  <v-card class="tw-h-[500px] tw-px-1" variant="outlined">
    <div class="d-flex tw-py-1 tw-gap-2">
      <date-picker v-model="startOfMonth" class="tw-h-[32px] tw-w-[90px]" month-picker />
      <v-btn icon variant="text" width="40" @click="refetch">
        <RefreshIcon size="20" />
      </v-btn>
    </div>
    <v-card-text class="tw-pt-1.5 tw-px-1">
      <div class="align-center">
        <div>
          <h2 class="tw-text-center">{{ $t('chartsQuantity.model.titleChartPie') }}</h2>
        </div>
      </div>
      <div class="tw-absolute tw-top-1/2 tw-left-1/2 tw-translate-y-[-50%] tw-translate-x-[-50%]">
        <v-progress-circular color="green" :indeterminate="isLoading" />
      </div>
      <div v-if="!isLoading && !isEmpty" class="tw-flex tw-items-center tw-justify-center tw-mt-3">
        <apexchart :options="pieChartOptions" :series="pieChartOptions.series" type="pie" width="380" />
      </div>
      <div
        v-if="!isLoading && isEmpty"
        class="tw-absolute tw-top-1/2 tw-left-1/2 tw-translate-y-[-50%] tw-translate-x-[-50%]"
      >
        {{ $t('common.model.noData') }}
      </div>
    </v-card-text>
  </v-card>
</template>

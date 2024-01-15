<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, computed, watch } from 'vue'
import DatePicker from '@/components/common/DatePicker'
import useGetPlanTrueLate from '@/composables/use-get-plan-true-late'

const { t } = useI18n()

const dayjs = useDayjs()
const startOfMonth = ref({
  year: dayjs().year(),
  month: dayjs().month(),
})

const queryBuilder = computed(() => ({
  filters: {
    month: dayjs().year(startOfMonth.value.year).month(startOfMonth.value.month).startOf('month').format('YYYY-MM'),
  },
}))
const { items, totalItems, isLoading, refetch } = useGetPlanTrueLate(queryBuilder)

/* Chart */
const chart = computed(() => {
  return {
    series: [
      {
        name: t('reports.model.true'),
        data: items.value.map((e: any) => e.on_time),
      },
      {
        name: t('reports.model.late'),
        data: items.value.map((e: any) => e.late),
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
      formatter(val: any) {
        return val === 0 ? '' : `${val}`
      },
      style: {
        fontSize: '12px',
        fontFamily: 'Roboto',
        fontWeight: '400',
        colors: ['#333'],
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
    },
    xaxis: {
      type: 'category',
      categories: items.value.map((item: any) => item.end_date),
      labels: {
        rotateAlways: false,
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
    },
    yaxis: {
      show: true,
      labels: {
        offsetX: -10,
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
  <v-card class="tw-min-h-[400px] tw-px-1" variant="outlined">
    <div class="d-flex tw-py-1 tw-gap-2">
      <date-picker v-model="startOfMonth" class="tw-h-[32px] tw-w-[90px]" month-picker />
      <v-btn icon variant="text" width="40" @click="refetch">
        <RefreshIcon size="20" />
      </v-btn>
    </div>
    <v-card-text>
      <div class="tw-text-[20px] tw-mb-2 tw-text-center tw-text-[#5a5a5a] tw-font-bold tw-uppercase">
        {{ t('reports.model.trueLatePlan') }}
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

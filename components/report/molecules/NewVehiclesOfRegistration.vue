<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, computed } from 'vue'
import DatePicker from '@/components/common/DatePicker'
import useGetNewVehicles from '@/composables/use-get-new-vehicles'

const { t } = useI18n()
const dayjs = useDayjs()
const month = ref({
  year: dayjs().year(),
  month: dayjs().month(),
})

const queryBuilder = computed(() => ({
  filters: {
    month: dayjs().year(month.value.year).month(month.value.month).format('YYYY-MM'),
  },
}))
const { items, totalItems, isLoading, refetch } = useGetNewVehicles(queryBuilder)
/* Chart */
const chartOptions = computed(() => {
  return {
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
    colors: ['#65a2db', '#f1894a', '#aaaaaa', '#FFC615'],
    legend: {
      show: true,
      position: 'bottom',
      markers: {
        width: 12,
        height: 12,
        radius: null,
      },
    },
    stroke: { colors: ['transparent'] },
    plotOptions: {
      pie: {
        expandOnClick: true,
        customScale: 1,
        dataLabels: {
          offset: -50,
          minAngleToShowLabel: 10,
        },
      },
    },
    dataLabels: {
      enabled: true,
      textAnchor: 'end',
      dropShadow: {
        enabled: false,
      },
      style: {
        fontSize: '14px',
        fontFamily: 'Roboto',
        fontWeight: '500',
        colors: ['#424242'],
      },
    },
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: { height: 300 },
        },
      },
    ],
  }
})

const series = computed(() => items.value.map((item: any) => item.percent))
const checkEmpty = computed(() => items.value.some((item: any) => parseInt(item.percent) > 0))
</script>

<template>
  <v-card class="tw-h-[500px] tw-px-1" variant="outlined">
    <div class="d-flex tw-py-1 tw-gap-2">
      <date-picker v-model="month" class="tw-h-[32px] tw-w-[90px]" month-picker />
      <v-btn icon variant="text" width="40" @click="refetch">
        <RefreshIcon size="20" />
      </v-btn>
    </div>
    <v-card-text>
      <div class="tw-text-[20px] tw-mb-2 tw-text-center tw-text-[#5a5a5a] tw-font-bold tw-uppercase">
        {{ t('reports.model.newVehicles') }}
      </div>
      <div class="tw-absolute tw-top-1/2 tw-left-1/2 tw-translate-y-[-50%] tw-translate-x-[-50%]">
        <v-progress-circular color="green" :indeterminate="isLoading" />
      </div>
      <div
        v-if="!checkEmpty && !isLoading"
        class="tw-absolute tw-top-1/2 tw-left-1/2 tw-translate-y-[-50%] tw-translate-x-[-50%]"
      >
        {{ $t('common.model.noData') }}
      </div>

      <div v-if="checkEmpty && !isLoading">
        <apexchart height="350px" :options="chartOptions" :series="series" type="pie" />
      </div>
    </v-card-text>
  </v-card>
</template>

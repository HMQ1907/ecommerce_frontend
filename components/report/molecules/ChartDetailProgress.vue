<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed, ref } from 'vue'
import dayjs from 'dayjs'
import DatePicker from '@/components/common/DatePicker'
import useGetChartTwoProgress from '@/composables/use-get-chart-two-progress'

const { t } = useI18n()

const startOfDay = ref(dayjs().format('YYYY-MM-DD'))
const queryBuilder = computed(() => ({
  filters: {
    type: 'day',
    date: dayjs(startOfDay.value).format('YYYY-MM-DD'),
  },
}))

const { items, totalItems, isLoading, refetch } = useGetChartTwoProgress(queryBuilder)

const barChartOptions = computed(() => {
  return {
    series:
      items.value.length !== 0
        ? Object.values(items.value[0].times).map((_, index) => ({
            name: items.value.map((obj: any) => Object.keys(obj.times)[index])[0],
            data: items.value.map((obj: any) => Object.values(obj.times)[index]),
          }))
        : [],
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    colors: [
      '#636363',
      '#ed7d31',
      '#a5a5a5',
      '#ffc000',
      '#4472c4',
      '#70ad47',
      '#255e91',
      '#9e480e',
      '#636363',
      '#997300',
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          total: {
            enabled: false,
            style: {
              fontSize: '13px',
              fontWeight: 900,
            },
          },
        },
      },
    },
    xaxis: {
      categories: items.value.map((item: any) => [item.customer_name, item.ship_name, item.warehouses[0].name]),
      labels: {
        trim: true,
        hideOverlappingLabels: false,
        rotate: 0,
      },
    },
    legend: {
      show: false,
    },
    grid: {
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
    },
  }
})
</script>
<template>
  <!--  Bar Chart-->
  <v-card class="tw-h-[500px] tw-p-1" variant="outlined">
    <div class="tw-flex white-space tw-gap-2 tw-py-0.5 tw-mb-1">
      <date-picker v-model="startOfDay" class="tw-h-[32px] tw-w-[110px]" />
      <v-btn icon variant="text" width="40" @click="refetch">
        <RefreshIcon size="20" />
      </v-btn>
    </div>
    <v-card-text class="tw-pt-1.5 tw-pb-[0px] tw-px-1">
      <div class="align-center tw-px-1">
        <div>
          <h2 class="tw-text-center tw-pb-3">{{ $t('chartsDetailProgress.title') }}</h2>
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

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed, ref } from 'vue'
import DatePicker from '@/components/common/DatePicker'
import useGetChartProgress from '@/composables/use-get-chart-progress'

const { t } = useI18n()
const dayjs = useDayjs()

const startOfDay = ref(dayjs().format('YYYY-MM-DD'))
const queryBuilder = computed(() => ({
  filters: {
    type: 'day',
    date: dayjs(startOfDay.value).format('YYYY-MM-DD'),
  },
}))

const { items, totalItems, isLoading, refetch } = useGetChartProgress(queryBuilder)

const barChartOptions = computed(() => ({
  series: [
    {
      name: t('chartAggregateProgress.model.progress'),
      data: items.value.map((item: any) => item.percent),
    },
  ],
  chart: {
    toolbar: {
      show: false,
    },
  },
  colors: ['#4472c4'],
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: '12px',
          colors: ['#000'],
        },
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter(val: any) {
      return val + '%'
    },
  },
  xaxis: {
    categories: items.value.map((item: any) => [item.ship_name, item.customer_name, item.warehouses[0].name]),
    labels: {
      formatter(val: any) {
        return val + '%'
      },
    },
  },
  yaxis: {
    labels: {
      show: true,
      style: {
        colors: ['#000'],
      },
    },
  },
}))
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
          <h2 class="tw-text-center tw-pb-3">{{ $t('chartAggregateProgress.title') }}</h2>
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

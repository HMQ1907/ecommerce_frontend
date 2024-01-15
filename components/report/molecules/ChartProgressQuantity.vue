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
      name: t('chartProgressQuantity.model.quantityExpected'),
      data: items.value.map((dt: any) => ({
        x:
          dt.warehouses.length !== 0
            ? [
                dayjs(dt.warehouses[0].created_at).format('YYYY-MM-DD'),
                dt.warehouses[0].code,
                dt.ship_name,
                dt.customer_name,
              ]
            : [dt.ship_name, dt.customer_name],
        y: dt.plan_quantity,
        goals: [
          {
            name: t('chartProgressQuantity.model.quantityReality'),
            value: dt.actual_quantity,
            strokeHeight: 10,
            strokeColor: '#FF7F00',
          },
        ],
      })),
    },
  ],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    customLegendItems: [
      t('chartProgressQuantity.model.quantityExpected'),
      t('chartProgressQuantity.model.quantityReality'),
    ],
    markers: {
      fillColors: ['#1e81b0', '#FF7F00'],
      width: [12, 12],
      height: [12, 5],
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '35%',
      dataLabels: {
        position: 'top',
      },
    },
  },
  dataLabels: {
    formatter(val: any, opt: any) {
      const goals = opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex].goals
      return `${goals[0].value} / ${val}`
    },
  },
  xaxis: {
    labels: {
      trim: true,
      hideOverlappingLabels: false,
      rotate: 0,
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
          <h2 class="tw-text-center tw-pb-3">{{ $t('chartProgressQuantity.title') }}</h2>
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

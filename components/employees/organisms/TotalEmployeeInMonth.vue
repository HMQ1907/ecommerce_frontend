<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { round } from 'lodash'
import AppLoading from '@/components/common/AppLoading'
import useGetDashboardFluctuateEmployee from '@/composables/use-get-dashboard-fluctuate-employee'

const chart = ref<any>(null)
const dayjs = useDayjs()
const { t } = useI18n()
const { $api } = useNuxtApp()
const { data } = useAuth()
const monthInYear = computed(() => {
  const months = []
  for (let i = 0; i < 12; i++) {
    months.push(dayjs().month(i).format('MM-YYYY'))
  }
  return months
})

const chartOptions = computed(() => ({
  series: [],
  chartOptions: {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
      stacked: true,
    },
    events: {
      onMounted: (chart: any) => {
        chart.windowResizeHandler()
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%',
        endingShape: 'rounded',
      },
    },
    colors: ['#00E396'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: monthInYear.value,
    },
    yaxis: {
      labels: {
        formatter(val: any) {
          return round(val, 2)
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter(val: any) {
            return val
          },
        },
      },
    },
  },
}))
const typeEmployee = ref([
  { text: t('employees.model.employee'), value: 'employee' },
  { text: t('employees.model.manager'), value: 'manager' },
])
const query = ref({
  filters: {
    year: dayjs().year(),
    branch_id: data.value.branch_id,
    position_type: 'employee',
  },
})
watch(
  () => query.value,
  () => {
    refetch.value()
  },
  { deep: true }
)

const { items, refetch, isLoading, isFetching } = useGetDashboardFluctuateEmployee(query.value)

watch(
  () => items.value,
  (val) => {
    isLoading.value = true
    chart.value.updateSeries([
      {
        name: t('employees.model.totalEmployee'),
        data: Object.entries(val.current.avg_month).map((item: any) => round(item[1], 2)),
      },
    ])
    isLoading.value = false
  },
  { deep: true }
)
</script>

<template>
  <v-card class="tw-relative" variant="outlined">
    <div class="d-flex tw-p-1">
      <v-card-title>{{ $t('employees.model.totalEmployeeFluctuate') }}</v-card-title>
      <v-spacer />
      <div class="tw-w-[200px]">
        <v-select
          v-model="query.filters.position_type"
          item-title="text"
          item-value="value"
          :items="typeEmployee"
          :label="t('employees.model.employeeType')"
          outlined
        />
      </div>
    </div>
    <v-divider />
    <div v-show="isFetching" class="tw-h-[350px]">
      <app-loading absolute />
    </div>
    <apexchart
      v-show="!isFetching"
      ref="chart"
      height="350"
      :options="chartOptions.chartOptions"
      :series="chartOptions.series"
      type="bar"
    />
  </v-card>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTheme } from 'vuetify'
import { getPrimary, getSecondary } from '@/utils/update-colors'

// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue'
import UiParentCard from '@/components/shared/UiParentCard.vue'
import UiChildCard from '@/components/shared/UiChildCard.vue'
// theme breadcrumb
const page = ref({ title: 'Doughnut Chart' })
const breadcrumbs = ref([
  {
    text: 'Dashboard',
    disabled: false,
    href: '#',
  },
  {
    text: 'Doughnut Chart',
    disabled: true,
    href: '#',
  },
])

const theme = useTheme()
const success = theme.current.value.colors.success
const accent = theme.current.value.colors.accent
const warning = theme.current.value.colors.warning

const donutchartOptions = computed(() => {
  return {
    chart: {
      type: 'donut',
      height: 300,
      fontFamily: 'inherit',
      foreColor: '#adb0bb',
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70px',
        },
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      width: '50px',
    },
    colors: ['#6ac3fd', '#0b70fb', '#f64e60', '#26c6da', '#ffa800'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  }
})

const donutChart = {
  series: [44, 55, 41, 17, 15],
}

const piechartOptions = computed(() => {
  return {
    chart: {
      type: 'pie',
      height: 300,
      fontFamily: 'inherit',
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70px',
        },
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      width: '50px',
    },
    colors: ['#6ac3fd', '#0b70fb', '#f64e60', '#26c6da', '#ffa800'],
    tooltip: {
      fillSeriesColor: false,
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  }
})

const pieChart = {
  series: [44, 55, 13, 43, 22],
}
</script>

<template>
  <base-breadcrumb :breadcrumbs="breadcrumbs" :title="page.title" />
  <v-row>
    <v-col cols="12">
      <v-row>
        <v-col cols="12" lg="6">
          <!-- ---------------------------------------------------- -->
          <!-- Donut Chart -->
          <!-- ---------------------------------------------------- -->
          <ui-child-card title="Donut Chart">
            <apexchart height="300" :options="donutchartOptions" :series="donutChart.series" type="donut" />
          </ui-child-card>
        </v-col>
        <v-col cols="12" lg="6">
          <!-- ---------------------------------------------------- -->
          <!-- Pie Chart -->
          <!-- ---------------------------------------------------- -->
          <ui-child-card title="Pie Chart">
            <apexchart height="300" :options="piechartOptions" :series="pieChart.series" type="pie" />
          </ui-child-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

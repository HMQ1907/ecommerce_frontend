<script setup lang="ts">
import { ref } from 'vue'

import OutputGrowthChart from '@/components/dashboards/minimal/OutputGrowthChart'
import PurchaseOrderGrowth from '@/components/dashboards/minimal/PurchaseOrderGrowth'
import TheStatisticsCard from '@/components/dashboards/minimal/TheStatisticsCard'
import SupplierLateDeadline from '@/components/dashboards/analytical/SupplierLateDeadline'
import RateOfGoodsByMonth from '@/components/dashboards/analytical/RateOfGoodsByMonth'
import BestCustomerOfMonth from '@/components/dashboards/minimal/BestCustomerOfMonth'
import BestSalerOfMonth from '@/components/dashboards/minimal/BestSalerOfMonth'
import NewCustomerInMonth from '@/components/dashboards/minimal/NewCustomerInMonth'
import VehicleInNeedOfRepair from '@/components/dashboards/minimal/VehicleInNeedOfRepair'

const page = ref({ title: 'Minimal' })
const breadcrumbs = ref([
  {
    text: 'Dashboard',
    disabled: false,
    href: '#',
  },
  {
    text: 'Minimal',
    disabled: true,
    href: '#',
  },
])
</script>

<template>
  <!--  <base-breadcrumb class="dashboard-breadcrumb" />-->
  <v-row>
    <!---The statistics card---->
    <v-col class="tw-p-1" cols="12" lg="12">
      <the-statistics-card />
    </v-col>
    <!---Output Growth Chart---->
    <v-col cols="12" lg="6">
      <output-growth-chart />
    </v-col>
    <!---Purchase Order Growth---->
    <v-col cols="12" lg="6">
      <purchase-order-growth />
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <supplier-late-deadline />
    </v-col>
    <v-col cols="12" lg="3" md="6">
      <rate-of-goods-by-month />
    </v-col>
    <v-col cols="12" lg="5">
      <v-row>
        <v-col cols="12" sm="6">
          <best-customer-of-month />
        </v-col>
        <v-col cols="12" sm="6">
          <best-saler-of-month />
        </v-col>
        <v-col cols="12" sm="6">
          <new-customer-in-month />
        </v-col>
        <v-col cols="12" sm="6">
          <vehicle-in-need-of-repair />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<style lang="scss" scoped>
.dashboard-breadcrumb {
  margin: 0 !important;
}
</style>

<script setup lang="ts">
import BestCustomerOfMonth from '@/components/dashboards/minimal/BestCustomerOfMonth'
import BestSalerOfMonth from '@/components/dashboards/minimal/BestSalerOfMonth'
import NewCustomerInMonth from '@/components/dashboards/minimal/NewCustomerInMonth'
import VehicleInNeedOfRepair from '@/components/dashboards/minimal/VehicleInNeedOfRepair'

const queryBuilder = computed(() => ({}))
const { items, isLoading } = useGetBestCustomers(queryBuilder)
</script>

<template>
  <v-row>
    <v-col cols="12" sm="6">
      <best-customer-of-month :customer="items.customer" :is-loading="isLoading" />
    </v-col>
    <v-col cols="12" sm="6">
      <best-saler-of-month :is-loading="isLoading" :saler="items.best_saler" />
    </v-col>
    <v-col cols="12" sm="6">
      <new-customer-in-month :is-loading="isLoading" :new-customer="items.new_customer" />
    </v-col>
    <v-col cols="12" sm="6">
      <vehicle-in-need-of-repair :is-loading="isLoading" :vehicles="items.vehicles" />
    </v-col>
  </v-row>
</template>

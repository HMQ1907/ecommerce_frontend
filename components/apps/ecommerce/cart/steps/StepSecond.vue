<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AddressCard from './AddressCard.vue'
import AddAddress from './AddAddress.vue'
import OrderSummary from './OrderSummary.vue'
import { useEcomStore } from '@/stores/apps/eCommerce'

const store = useEcomStore()
onMounted(() => {
  store.fetchAddress()
})
const dialog = ref(false)
</script>

<template>
  <v-row>
    <v-col cols="12">
      <div class="d-flex align-center my-5">
        <h4 class="text-h5">Billing Address</h4>
        <v-btn class="ml-auto" color="primary" size="small" @click="dialog = true">
          <PlusIcon size="16" />
          Add Address
        </v-btn>
      </div>
      <v-row>
        <v-col v-for="address in store.addresses" :key="address.id" cols="12" lg="4" md="4">
          <address-card
            :building="address.building"
            :city="address.city"
            :destination="address.destination"
            :is-default="address.isDefault"
            :name="address.name"
            :phone="address.phone"
            :show-btn="true"
            :state="address.state"
          />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" lg="8">
      <div class="p-3">
        <order-summary />
      </div>
    </v-col>
    <v-col cols="12" lg="4" md="12">
      <div v-for="address in store.addresses" class="mt-7">
        <template v-if="address.isDefault">
          <h5 class="text-h5 mb-4">Shipping Address</h5>
          <address-card
            :building="address.building"
            :city="address.city"
            :destination="address.destination"
            :is-default="address.isDefault"
            :name="address.name"
            :phone="address.phone"
            :state="address.state"
          />
        </template>
      </div>
    </v-col>
  </v-row>
  <add-address :dialog="dialog" @handledialog="dialog = false" />
</template>

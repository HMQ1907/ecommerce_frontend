<script setup lang="ts">
import { computed } from 'vue'
import CartEmpty from '../CartEmpty.vue'
import OrderSummaryVue from './OrderSummary.vue'
import { useEcomStore } from '@/stores/apps/eCommerce'

const store = useEcomStore()
const getCart = computed(() => {
  return store.cart
})
</script>
<template>
  <div v-if="getCart.length > 0">
    <h5 class="text-h5 my-8">Cart Item ({{ getCart.length }})</h5>
    <v-divider />
    <v-table>
      <thead>
        <tr>
          <th class="text-left text-subtitle-1 font-weight-semibold">Product</th>
          <th class="text-left text-subtitle-1 font-weight-semibold">Price</th>
          <th class="text-left text-subtitle-1 font-weight-semibold">Quantity</th>
          <th class="text-left text-subtitle-1 font-weight-semibold">Total</th>
          <th class="text-right" />
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in getCart" :key="item.name">
          <td>
            <div class="d-flex align-center my-3 gap-2">
              <img alt="product" class="rounded-md custom-img-box" :src="item.image" />
              <div class="ma-2">
                <h6 class="text-h6">{{ item.name }}</h6>
                <span class="text-subtitle-2">size: 8 | Color: Dark Red</span>
              </div>
            </div>
          </td>
          <td>
            <h4 class="text-h5">${{ item.salePrice }}</h4>
            <p class="text-decoration-line-through text-medium-emphasis">${{ item.offerPrice }}</p>
          </td>
          <td>
            <v-btn-toggle color="success" divided variant="outlined">
              <v-btn :disabled="item.qty < 2" size="x-small" @click="store.decrementQty(item.id)">
                <MinusIcon size="18" />
              </v-btn>

              <v-btn size="x-small">
                {{ item.qty }}
              </v-btn>

              <v-btn size="x-small" @click="store.incrementQty(item.id)">
                <PlusIcon size="18" />
              </v-btn>
            </v-btn-toggle>
          </td>
          <td class="text-h5">${{ item.salePrice * item.qty }}</td>
          <td class="text-right">
            <v-btn elevation="0" flat icon small>
              <TrashIcon class="text-error" size="18" @click="store.deleteCart(item.id)" />
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <order-summary-vue />
  </div>
  <div v-else class="d-flex justify-center">
    <cart-empty />
  </div>
</template>
<style>
.custom-img-box {
  width: 60px;
  height: 60px;
}
</style>

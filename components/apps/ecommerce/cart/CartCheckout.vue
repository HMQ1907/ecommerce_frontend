<script setup lang="ts">
import { ref, computed } from 'vue'
import { BasketIcon } from 'vue-tabler-icons'
import StepFirst from './steps/StepFirst.vue'
import StepSecond from './steps/StepSecond.vue'
import Payment from './steps/Payment.vue'
import Thankyou from './steps/Thankyou.vue'
import { useEcomStore } from '@/stores/apps/eCommerce'

const store = useEcomStore()
const thankyou = ref(false)

const getCart = computed(() => {
  return store.cart
})
const tab = ref('tab-1')
function changeTab(e: string) {
  tab.value = e
}
</script>
<template>
  <v-card elevation="10">
    <v-card-text>
      <v-tabs v-model="tab" class="customTab" color="primary">
        <v-tab class="mb-3 mx-2 text-left" height="70" rounded="md" value="tab-1">
          <basket-icon class="v-icon--start" stroke-width="1.5" width="20" />
          <div>
            <div>Item Cart</div>
            <span class="text-subtitle-2 text-lightText text-medium-emphasis font-weight-medium d-block">
              Product Summary
            </span>
          </div>
        </v-tab>

        <v-tab class="mb-3 mx-2 text-left" :disabled="store.cart.length < 1" height="70" rounded="md" value="tab-2">
          <FileDescriptionIcon class="v-icon--start" stroke-width="1.5" width="20" />
          <div>
            <div>Billing</div>
            <span class="text-subtitle-2 text-lightText text-medium-emphasis font-weight-medium d-block">
              Billing Information
            </span>
          </div>
        </v-tab>

        <v-tab class="mb-3 mx-2 text-left" :disabled="store.cart.length < 1" height="70" rounded="md" value="tab-3">
          <CreditCardIcon class="v-icon--start" stroke-width="1.5" width="20" />
          <div>
            <div>Payment</div>
            <span class="text-subtitle-2 text-lightText text-medium-emphasis font-weight-medium d-block">
              Add & Update Card
            </span>
          </div>
        </v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item class="pa-1" value="tab-1">
          <step-first />
          <v-row class="mt-3">
            <v-col cols="12" sm="6">
              <v-btn color="primary" to="/apps/ecommerce/products" variant="tonal">Continue Shopping</v-btn>
            </v-col>
            <v-col class="text-sm-right" cols="12" sm="6">
              <v-btn v-if="store.cart.length >= 1" color="primary" @click="changeTab('tab-2')">CheckOut</v-btn>
            </v-col>
          </v-row>
        </v-window-item>
        <v-window-item class="pa-1" value="tab-2">
          <step-second />
          <v-row class="mt-3">
            <v-col cols="6">
              <v-btn color="primary" variant="tonal" @click="changeTab('tab-1')">Back</v-btn>
            </v-col>
            <v-col class="text-right" cols="6">
              <v-btn color="primary" @click="changeTab('tab-3')">Place an Order</v-btn>
            </v-col>
          </v-row>
        </v-window-item>
        <v-window-item class="pa-1" value="tab-3">
          <payment />
          <v-row class="mt-3">
            <v-col cols="12" sm="6">
              <v-btn color="primary" variant="tonal" @click="changeTab('tab-2')">Back</v-btn>
            </v-col>
            <v-col class="text-sm-right" cols="12" sm="6">
              <v-btn color="primary" @click="thankyou = true">Complete an Order</v-btn>
              <!-- Modal -->
              <v-dialog v-model="thankyou" max-width="750">
                <thankyou />
              </v-dialog>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>
<style lang="scss">
.customTab {
  min-height: 68px;
}
</style>

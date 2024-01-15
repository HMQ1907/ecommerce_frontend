<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import ProductCarousel from './ProductCarousel.vue'
import ProductTab from './ProductTab.vue'
import RelatedProducts from './RelatedProducts.vue'
import { useEcomStore } from '@/stores/apps/eCommerce'

const store = useEcomStore()
const route = useRoute()
const size = ref(['10', '09', '08', '07'])
const selectedSize = ref(['10'])
const setColor = ref(1)
onMounted(() => {
  store.fetchProducts()
})

const getProduct = computed(() => {
  return store.products[route.params.id - 1]
})
function selectColor(e) {
  setColor.value = e
}
</script>
<template>
  <div v-if="getProduct">
    <v-row>
      <v-col lg="6" sm="12">
        <product-carousel />
      </v-col>
      <v-col class="pl-lg-5" lg="6" sm="12">
        <div>
          <div class="d-flex align-center gap-2">
            <v-chip v-if="getProduct.isStock" color="success" elevation="0" size="small" variant="elevated">
              In Stock
            </v-chip>
            <v-chip v-else color="error">Out of Stock</v-chip>
            <span class="text-subtitle-2">{{ getProduct.gender }}</span>
          </div>

          <h3 class="text-h3 my-2 mb-3">
            {{ getProduct.name }}
          </h3>
        </div>
        <p class="v-col-lg-10 px-0">{{ getProduct.description }}</p>

        <div class="d-flex align-center gap-2">
          <p class="text-decoration-line-through text-h6">${{ getProduct.offerPrice }}</p>
          <h4 class="text-h4">${{ getProduct.salePrice }}</h4>
        </div>

        <div class="text-medium-emphasis align-center d-flex mt-3 gap-2">
          <v-rating v-model="getProduct.rating" color="warning" density="compact" half-increments size="small" />
          <span>(236 reviews)</span>
        </div>

        <v-divider class="my-5" />

        <v-row>
          <v-col class="d-flex align-center" cols="6" sm="2">
            <h6 class="text-h6">
              Colors
              <span class="text-error">*</span>
            </h6>
          </v-col>
          <v-col cols="6" sm="10">
            <template v-for="(color, i) in getProduct.colors" :key="i">
              <v-avatar
                class="mr-1 cursor-pointer"
                :color="color"
                size="x-small"
                variant="flat"
                @click="selectColor(i)"
              >
                <template v-if="setColor == i">
                  <CheckIcon size="13" />
                </template>
              </v-avatar>
            </template>
          </v-col>
          <v-col class="d-flex align-center" cols="6" sm="2">
            <h6 class="text-h6">Quantity</h6>
          </v-col>
          <v-col cols="6" sm="10">
            <v-btn-toggle divided variant="outlined">
              <v-btn color="secondary" size="x-small" @click="store.decrementQty(getProduct.id)">
                <MinusIcon size="18" />
              </v-btn>

              <v-btn color="secondary" size="x-small">
                {{ getProduct.qty }}
              </v-btn>

              <v-btn color="secondary" size="x-small" @click="store.incrementQty(getProduct.id)">
                <PlusIcon size="18" />
              </v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>
        <v-divider class="my-5" />
        <v-row class="mt-6">
          <v-col cols="12" sm="4">
            <v-btn
              block
              color="primary"
              size="large"
              to="/apps/ecommerce/checkout"
              @click="store.AddToCart(getProduct)"
            >
              Buy Now
            </v-btn>
          </v-col>
          <v-col cols="12" sm="4">
            <v-btn block color="error" size="large" @click="store.AddToCart(getProduct)">Add To Cart</v-btn>
          </v-col>
        </v-row>
        <div class="mt-8">
          <h6 class="text-subtitle-1">Dispatched in 2-3 weeks</h6>
          <router-link class="text-subtitle-1 text-decoration-none" to="/">
            Why the longer time for delivery?
          </router-link>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<style lang="scss">
.productCustomize tr td {
  padding: 15px 20px;
  vertical-align: center;
}
</style>

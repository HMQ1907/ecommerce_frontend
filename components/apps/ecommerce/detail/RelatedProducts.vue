<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import ProductItemVue from '../listing/ProductItem.vue'
import { useEcomStore } from '@/stores/apps/eCommerce'
import 'vue3-carousel/dist/carousel.css'

const store = useEcomStore()

onMounted(() => {
  store.fetchProducts()
})

const getProducts = computed(() => {
  return store.products
})
const settings = ref({
  itemsToShow: 1,
  snapAlign: 'center',
})
const breakpoints = ref({
  700: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 4,
    snapAlign: 'center',
  },
  2000: {
    itemsToShow: 5,
    snapAlign: 'start',
  },
})
function AddCart(p: any) {
  store.AddToCart(p)
}
</script>

<template>
  <h4 class="text-h4 mt-8 mb-4">Related Products</h4>

  <v-row>
    <v-col v-for="product in getProducts?.slice(0, 4)" :key="product.id" cols="12" lg="3" sm="6">
      <product-item-vue
        :desc="product.description"
        :goto="1"
        :image="product.image"
        :name="product.name"
        :offer-price="product.offerPrice"
        :rating="product.rating"
        :sale-price="product.salePrice"
        @handlecart="AddCart(product)"
      />
    </v-col>
  </v-row>
</template>
<style>
.relatedCar .carousel__slide {
  padding: 10px;
}
</style>

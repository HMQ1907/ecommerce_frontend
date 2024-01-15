<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
  name: String,
  image: String,
  desc: String,
  rating: Number,
  salePrice: Number,
  offerPrice: Number,
  goto: Number || String || Object || Array,
})
const successsnackbar = ref(false)
const rate = ref(props.rating)
</script>

<template>
  <v-card class="rounded-md card-hover overflow-hidden" elevation="10">
    <router-link :to="`/apps/ecommerce/product/detail/${goto}`">
      <img alt="product" class="w-100" :src="image" />
    </router-link>
    <div class="d-flex justify-end mr-3 mt-n6">
      <v-tooltip location="bottom" text="Add to Cart">
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            class="ml-auto"
            color="primary"
            icon
            size="x-small"
            @click="$emit('handlecart', (successsnackbar = true))"
          >
            <BasketIcon size="18" />
          </v-btn>
        </template>
      </v-tooltip>
    </div>
    <v-card-item class="pt-1">
      <h6 class="text-h6">{{ name }}</h6>

      <div class="d-flex align-center justify-space-between mt-1">
        <div class="d-flex align-center gap-2">
          <h6 class="text-h6">${{ salePrice }}</h6>
          <p class="text-decoration-line-through text-medium-emphasis">${{ offerPrice }}</p>
        </div>
        <v-rating v-model="rate" color="warning" density="compact" half-increments size="small" />
      </div>
    </v-card-item>
    <v-snackbar
      v-model="successsnackbar"
      class="text-white"
      color="success"
      location="bottom right"
      rounded="md"
      variant="flat"
    >
      Item Added to The Cart
    </v-snackbar>
  </v-card>
</template>
<style>
.descriptionH {
  height: 40px;
  overflow: hidden;
}
</style>

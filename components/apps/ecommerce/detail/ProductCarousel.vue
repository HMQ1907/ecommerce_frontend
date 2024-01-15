<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { useEcomStore } from '@/stores/apps/eCommerce'
import 'vue3-carousel/dist/carousel.css'

const store = useEcomStore()
const route = useRoute()

const getDetailImage = computed(() => {
  return store.products[route.params.id - 1].image
})

const slideShow = [
  {
    image: getDetailImage.value,
    id: 1,
  },
  {
    image: '/images/products/s1.jpg',
    id: 2,
  },
  {
    image: '/images/products/s3.jpg',
    id: 3,
  },
  {
    image: '/images/products/s4.jpg',
    id: 4,
  },
  {
    image: '/images/products/s5.jpg',
    id: 5,
  },
  {
    image: '/images/products/s6.jpg',
    id: 6,
  },
  {
    image: '/images/products/s7.jpg',
    id: 7,
  },
  {
    image: '/images/products/s8.jpg',
    id: 8,
  },
  {
    image: '/images/products/s2.jpg',
    id: 9,
  },
]

const currentSlide = ref(0)
function slideTo(val) {
  currentSlide.value = val
}
</script>

<template>
  <div>
    <carousel id="gallery" v-model="currentSlide" :items-to-show="1" :wrap-around="false">
      <slide v-for="(slide, i) in slideShow" :key="i">
        <div class="carousel__item">
          <img alt="product" class="w-100 rounded-md" :src="slide.image" />
        </div>
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>

    <carousel
      id="thumbnails"
      ref="carousel"
      v-model="currentSlide"
      :current-slide="currentSlide"
      :items-to-show="6"
      :transition="500"
      :wrap-around="true"
    >
      <slide v-for="(slide, i) in slideShow" :key="i">
        <div class="carousel__item cursor-pointer" @click="slideTo(slide.id - 1)">
          <img alt="product" class="w-100" :src="slide.image" />
        </div>
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>
<style lang="scss">
#thumbnails {
  .carousel__slide {
    border: 2px solid transparent;
    line-height: 0px;
  }
  .carousel__slide--active {
    border: 2px solid rgb(var(--v-theme-primary));
  }
}
</style>

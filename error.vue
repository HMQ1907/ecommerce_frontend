<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})
const { data } = useAuth()

const error = useError()
const message = computed(() => {
  if (error.value.statusCode === 403) {
    return 'You can not access this page.'
  } else if (error.value.statusCode === 404) {
    return 'This page you are looking for could not be found.'
  } else {
    return 'Error. Please contact administrator.'
  }
})
</script>

<template>
  <div class="d-flex justify-center align-center text-center h-100">
    <div>
      <img alt="404" max-width="500" src="/images/backgrounds/errorimg.svg" />
      <h1 class="text-h1 pt-3">Opps!!!</h1>
      <h4 class="text-h4 my-8">{{ message }}</h4>
      <v-btn class="mb-4" color="primary" flat :to="'/'">Trở về trang chủ</v-btn>
    </div>
  </div>
</template>

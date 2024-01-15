<script setup lang="ts">
import { onMounted } from 'vue'

const props = defineProps({
  images: {
    type: [Array, String],
    default: null,
  },
  size: {
    type: [String, Number],
    default: 200,
  },
})

const silentRef = ref(null)
const onOpen = (item: any, index = 0) => {
  const $silentBox = silentRef.value
  $silentBox.openOverlay(item, index)
}

onMounted(() => {
  if (props.images.length !== 0) {
    const $silentBox = silentRef.value
    $silentBox.openOverlay(props.images[0])
  }
})
const hideTest = () => {
  console.log('on hide')
}
const openTest = () => {
  console.log('on open')
}
</script>

<template>
  <silent-box
    ref="silentRef"
    class="tw-flex tw-items-center tw-gap-0.5"
    :gallery="images"
    @silentbox-overlay-hidden="hideTest"
    @silentbox-overlay-opened="openTest"
  >
    <template #silentbox-item="{ silentboxItem }">
      <img
        :alt="silentboxItem.src"
        class="tw-hidden"
        :src="silentboxItem.thumbnail || silentboxItem.src"
        :width="size"
      />
    </template>
  </silent-box>
</template>

<style lang="scss">
#silentbox-overlay {
  z-index: 9999;
  .silentbox-video__embed {
    height: 100%;
  }
}
</style>

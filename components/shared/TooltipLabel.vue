<script setup lang="ts">
const props = defineProps({
  item: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: null,
  },
  labelClass: {
    type: String,
    default: '',
  },
  index: {
    type: [String, Number],
    default: null,
  },
})

const isDisabled = (item: any, index: any) => {
  const box = document.getElementById(`${item}-${index}`)
  if (box) {
    const boxRect = box.getBoundingClientRect()
    return boxRect.width < parseInt(props.width)
  } else {
    return false
  }
}
</script>

<template>
  <div class="tw-truncate" :style="{ maxWidth: width + 'px' }">
    <v-tooltip :disabled="isDisabled(item, index)" :text="item">
      <template #activator="{ props }">
        <span :id="`${item}-${index}`" :class="labelClass" v-bind="props">
          {{ item }}
        </span>
      </template>
    </v-tooltip>
  </div>
</template>

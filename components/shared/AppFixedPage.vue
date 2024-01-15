<script setup lang="ts">
import { MaximizeIcon, MaximizeOffIcon } from 'vue-tabler-icons'
import { useCustomizerStore } from '@/stores/customizer'

const props = defineProps({
  title: {
    type: String,
    default: null,
  },
  fixedClass: {
    type: String,
    default: 'fixed-page',
  },
  width: {
    type: String,
    default: 'tw-w-full',
  },
  fullScreen: {
    type: Boolean,
    default: false,
  },
})

const customizer = useCustomizerStore()

const clickFullScreen = () => {
  customizer.SET_MINI_SIDEBAR(!customizer.mini_sidebar)
  customizer.boxed = !customizer.boxed
  // 0.1 for turn off sidebar
  customizer.railWidth = 0.1
}
</script>

<template>
  <div :class="[fixedClass, width]">
    <div class="tw-h-full tw-flex tw-flex-col tw-p-2 tw-pt-3" :class="!title ? 'tw-gap-1' : 'tw-gap-2'">
      <h4 v-if="title" class="tw-text-[23px] tw-text-[#424242] tw-font-normal tw-leading-8 tw-uppercase">
        {{ title }}
      </h4>
      <div v-if="$slots.filter" class="tw-flex tw-items-center tw-justify-between">
        <slot name="filter" />
      </div>
      <div
        v-if="$slots.leftAction || $slots.rightAction"
        class="tw-flex tw-flex-wrap tw-gap-2"
        :class="$slots.leftAction ? 'tw-justify-between' : ' tw-justify-end'"
      >
        <slot v-if="$slots.leftAction" name="leftAction" />

        <div class="tw-flex tw-items-center tw-gap-1">
          <slot v-if="$slots.rightAction" name="rightAction" />
          <v-btn v-if="fullScreen" class="tw-px-2" color="#F5F5F5" flat @click.stop="clickFullScreen">
            <maximize-off-icon v-if="customizer.mini_sidebar" size="20" />
            <maximize-icon v-else size="20" />
            <span class="tw-text-sm tw-font-normal tw-ml-1">
              {{ customizer.mini_sidebar ? $t('fixedPage.exitFullScreen') : $t('fixedPage.fullScreen') }}
            </span>
          </v-btn>
        </div>
      </div>
      <div v-if="$slots.listAction" class="tw-flex">
        <slot name="listAction" />
      </div>
      <div class="tw-flex tw-flex-grow tw-overflow-hidden">
        <slot name="table" />
      </div>
    </div>
  </div>
</template>

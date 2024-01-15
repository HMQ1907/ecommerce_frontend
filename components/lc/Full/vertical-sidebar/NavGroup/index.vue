<script setup>
import { useAbility } from '@casl/vue'
import { useCustomizerStore } from '@/stores/customizer'
const props = defineProps({ item: Object })
const customizer = useCustomizerStore()
const { can } = useAbility()
const visible = computed(() => {
  if (!props.item.meta) return true
  return can(props.item.meta?.action, props.item.meta?.resource)
})
</script>

<template>
  <!--  <v-list-subheader class="smallCap text-uppercase text-subtitle-2 mt-5 font-weight-bold text-white" color="darkText">-->
  <!--    {{ props.item.header }}-->
  <!--  </v-list-subheader>-->
  <v-list-subheader
    v-if="!customizer.mini_sidebar && visible"
    class="tw-text-xs tw-font-normal tw-text-[#BDBDBD] tw-pt-[14px] tw-pb-[6px] tw-tracking-[0.4px]"
    :class="customizer.mini_sidebar ? '' : 'nav-group-item'"
  >
    {{ $t(props.item.header) }}
  </v-list-subheader>
</template>

<style lang="scss">
.v-list--density-compact .nav-group-item {
  justify-content: space-between;
  .v-list-subheader__text {
    margin: 0 8px;
  }

  padding-left: 0 !important;
  padding-right: 0 !important;
  padding-inline-end: 0 !important;
  padding-inline-start: 0 !important;
  &:before {
    content: '';
    width: 12px;
    height: 1px;
    background: #bdbdbd;
  }
  &:after {
    content: '';
    width: 94px;
    height: 1px;
    background: #bdbdbd;
  }
}
</style>

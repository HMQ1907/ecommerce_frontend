<script setup>
import { useAbility } from '@casl/vue'
import Icon from '../Icon.vue'
import defineAbilitiesFor from '@/abilities'
import { useCustomizerStore } from '@/stores/customizer'

const props = defineProps({ item: Object, level: Number })
const customizer = useCustomizerStore()
const { can } = useAbility()
const { data } = useAuth()
const ability = useAbility()

watch(
  () => data.value,
  (val) => {
    const scope = val.scope || []
    const abilities = defineAbilitiesFor(scope)
    ability.update(abilities.rules)
  },
  {
    deep: true,
    immediate: true,
  }
)

// const checkPermission = (meta) => {
//   if (!meta) return true
//   return can(meta.action, meta.resource)
// }

const visible = computed(() => {
  if (!props.item.meta) return true
  return can(props.item.meta?.action, props.item.meta?.resource)
})
</script>

<template>
  <!---Single Item-->
  <v-list-item
    v-if="visible"
    v-scroll-to="{ el: '#top' }"
    class="tw-my-1 sidebar-menu"
    :disabled="item.disabled"
    height="40"
    :href="item.type === 'external' ? item.to : ''"
    min-height="40"
    rounded
    style="border-radius: 0 20px 20px 0"
    :target="item.type === 'external' ? '_blank' : ''"
    :to="item.type === 'external' ? '' : item.to"
  >
    <template #prepend v-if="!customizer.mini_sidebar">
      <icon color="white" :item="item.icon" :level="level" />
    </template>
    <template #prepend v-if="customizer.mini_sidebar">
      <v-tooltip :text="$t(item.title)" location="end">
        <template v-slot:activator="{ props }">
          <span v-bind="props"><icon color="white" :item="item.icon" :level="level" /></span>
        </template>
      </v-tooltip>
    </template>
    <v-list-item-title class="tw-font-normal tw-tracking-[0.5px]" :class="level > 0 ? 'tw-text-sm' : 'tw-text-base'">
      <span>{{ $t(item.title) }}</span>
      <v-chip
        v-if="item.badge"
        class="tw-ml-1 tw-text-base tw-font-normal tw-tracking-[0.5px]"
        :color="item.badge.color"
        variant="text"
      >
        ({{ customizer.serviceRequest }})
      </v-chip>
    </v-list-item-title>
    <!---If Caption-->
    <v-list-item-subtitle v-if="item.subCaption" class="text-caption mt-n1 hide-menu">
      {{ item.subCaption }}
    </v-list-item-subtitle>
    <!---If any chip or label-->

    <template v-if="item.chip && !customizer.mini_sidebar" #append>
      <img
        alt="radio_button_checked.svg"
        class="radio-check"
        height="20"
        src="/images/svgs/radio_button_checked.svg"
        width="20"
      />
      <img
        alt="radio_button_checked.svg"
        class="radio-uncheck"
        height="20"
        src="/images/svgs/radio_button_unchecked.svg"
        width="20"
      />
    </template>

    <!--    <template v-if="item.chip" #append>-->
    <!--      <v-chip-->
    <!--        :class="'sidebarchip hide-menu bg-' + item.chipBgColor"-->
    <!--        :color="item.chipColor"-->
    <!--        :prepend-icon="item.chipIcon"-->
    <!--        :size="item.chipIcon ? 'small' : 'small'"-->
    <!--        :variant="item.chipVariant"-->
    <!--      >-->
    <!--        {{ item.chip }}-->
    <!--      </v-chip>-->
    <!--    </template>-->
  </v-list-item>
</template>

<style lang="scss">
.radio-check {
  position: absolute;
  animation: check-transform 1s infinite alternate;
}
.radio-uncheck {
  position: absolute;
  animation: uncheck-transform 1s infinite alternate;
}
@keyframes check-transform {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes uncheck-transform {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>

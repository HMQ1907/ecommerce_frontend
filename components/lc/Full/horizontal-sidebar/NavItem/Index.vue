<script setup>
import Icon from '../../vertical-sidebar/Icon.vue'
const props = defineProps({ item: Object, level: Number })
</script>

<template>
  <!---Single Item-->
  <router-link class="navItemLink rounded-md" :disabled="item.disabled" :to="`${item.to}`">
    <!---If icon-->
    <i class="navIcon"><icon :item="item.icon" :level="level" /></i>
    <span>{{ item.title }}</span>
    <!---If Caption-->
    <small v-if="item.subCaption" class="text-caption mt-n1 hide-menu">
      {{ item.subCaption }}
    </small>
    <!---If any chip or label-->
    <template v-if="item.chip">
      <v-chip
        class="sidebarchip hide-menu ml-auto"
        :color="item.chipColor"
        :prepend-icon="item.chipIcon"
        :size="item.chipIcon ? 'small' : 'small'"
        :variant="item.chipVariant"
      >
        {{ item.chip }}
      </v-chip>
    </template>
  </router-link>
</template>

<script setup>
import Icon from '../Icon.vue'
import { useCustomizerStore } from '@/stores/customizer'
const props = defineProps({ item: Object, level: Number })
const customizer = useCustomizerStore()
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!---Item Childern -->
  <!-- ---------------------------------------------- -->
  <v-list-group no-action>
    <!-- ---------------------------------------------- -->
    <!---Dropdown  -->
    <!-- ---------------------------------------------- -->
    <template #activator="{ props }">
      <v-list-item
        v-bind="props"
        class="tw-my-1 sidebar-menu"
        rounded
        style="border-radius: 0 20px 20px 0"
        :value="item.title"
      >
        <!---If icon-->
        <template v-if="!customizer.mini_sidebar" #prepend>
          <icon color="white" :item="item.icon" :level="level" size="24" />
        </template>
        <template v-if="customizer.mini_sidebar" #prepend>
          <v-tooltip location="end" :text="$t(item.title)">
            <template #activator="{ props }">
              <span v-bind="props"><icon color="white" :item="item.icon" :level="level" size="24" /></span>
            </template>
          </v-tooltip>
        </template>
        <!---Title  -->
        <v-list-item-title class="tw-text-base tw-font-normal tw-tracking-[0.5px]">
          {{ $t(item.title) }}
        </v-list-item-title>
        <!---If Caption-->
        <v-list-item-subtitle v-if="item.subCaption" class="text-caption mt-n1 hide-menu">
          {{ item.subCaption }}
        </v-list-item-subtitle>
      </v-list-item>
    </template>
    <!-- ---------------------------------------------- -->
    <!---Sub Item-->
    <!-- ---------------------------------------------- -->
    <template v-for="(subitem, i) in item.children" v-if="item.children" :key="i">
      <LcFullVerticalSidebarNavCollapse v-if="subitem.children" :item="subitem" :level="level + 1" />
      <LcFullVerticalSidebarNavItem v-else :item="subitem" :level="level + 1" />
    </template>
  </v-list-group>

  <!-- ---------------------------------------------- -->
  <!---End Item Sub Header -->
  <!-- ---------------------------------------------- -->
</template>

<script setup>
import Icon from '../../vertical-sidebar/Icon.vue'
const props = defineProps({ item: Object, level: Number })
</script>
<template>
  <!---Dropdown  -->
  <a class="navItemLink rounded-md cursor-pointer">
    <!---Icon  -->
    <i class="navIcon"><icon :item="item.icon" :level="level" /></i>
    <!---Title  -->
    <span class="mr-auto">{{ item.title }}</span>
    <!---If Caption-->
    <small v-if="item.subCaption" class="text-caption mt-n1 hide-menu">
      {{ item.subCaption }}
    </small>
    <i class="ddIcon ml-2 d-flex align-center"><ChevronDownIcon size="15" /></i>
  </a>
  <!---Sub Item-->
  <ul :class="`ddMenu ddLevel-${level + 1}`">
    <li v-for="(subitem, i) in item.children" v-if="item.children" :key="i" class="navItem">
      <Index v-if="subitem.children" :item="subitem" :level="level + 1" />
      <LcFullHorizontalSidebarNavItem v-else :item="subitem" :level="level + 1" />
    </li>
  </ul>
  <!---End Item Sub Header -->
</template>

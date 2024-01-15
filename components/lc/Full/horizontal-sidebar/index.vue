<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { useDisplay } from 'vuetify'
import HorizontalItems from './horizontalItems'
import { useCustomizerStore } from '@/stores/customizer'
const customizer = useCustomizerStore()
const sidebarMenu = shallowRef(HorizontalItems)
const { mdAndUp } = useDisplay()
</script>

<template>
  <template v-if="mdAndUp">
    <div class="horizontalMenu bg-muted position-relative">
      <div :class="customizer.boxed ? 'maxWidth' : 'px-6'">
        <ul class="gap-1 horizontal-navbar px-0">
          <!---Menu Loop -->
          <li v-for="(item, i) in sidebarMenu" :key="i" class="navItem">
            <!---If Has Child -->
            <LcFullHorizontalSidebarNavCollapse v-if="item.children" :item="item" :level="0" />
            <!---Single Item-->
            <LcFullHorizontalSidebarNavItem v-else :item="item" />
            <!---End Single Item-->
          </li>
        </ul>
      </div>
    </div>
  </template>
  <div v-else class="mobile-menu">
    <LcFullVerticalSidebar />
  </div>
</template>
<style lang="scss"></style>

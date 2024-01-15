<script setup lang="ts">
import { shallowRef } from 'vue'
import { Menu2Icon } from 'vue-tabler-icons'
import sidebarItems from './sidebarItem'
import { useCustomizerStore } from '@/stores/customizer'
const customizer = useCustomizerStore()
const { data } = useAuth()

const sidebarMenu = shallowRef(sidebarItems)

const smallSidebar = () => {
  customizer.SET_MINI_SIDEBAR(!customizer.mini_sidebar)
  customizer.boxed = !customizer.boxed
  // 75 for small sidebar
  customizer.railWidth = 58
}

// const hasAccess = (item: any) => {
//   if (!item.meta) {
//     return true
//   }
//   return item.meta.roles.includes(data.value.roles[0])
// }
</script>

<template>
  <v-navigation-drawer
    v-model="customizer.Sidebar_drawer"
    app
    class="leftSidebar"
    elevation="0"
    left
    mobile-breakpoint="960"
    :rail="customizer.mini_sidebar"
    :rail-width="customizer.railWidth"
    width="260"
  >
    <!-- ---------------------------------------------- -->
    <!---Navigation -->
    <!-- ---------------------------------------------- -->
    <perfect-scrollbar class="scrollnavbar">
      <!--      <div class="sidebar_profile border-bottom">-->
      <!--        <v-list class="bg-muted">-->
      <!--          <v-list-item class="pa-4 ml-1">-->
      <!--            <v-list-item-title class="text-h6">{{ data.user?.name }}</v-list-item-title>-->
      <!--            <v-list-item-subtitle class="text-subtitle-1">Web Designer</v-list-item-subtitle>-->
      <!--            <template #prepend class="me-0">-->
      <!--              <v-avatar class="me-0" size="45">-->
      <!--                <img src="/images/profile/user2.jpg" width="50" />-->
      <!--              </v-avatar>-->
      <!--            </template>-->
      <!--          </v-list-item>-->
      <!--        </v-list>-->
      <!--      </div>-->
      <v-list
        class="tw-py-1.5 tw-min-h-[calc(100vh_-_64px)] tw-bg-primary"
        :class="customizer.mini_sidebar ? 'tw-pr-0.5' : 'tw-pr-2'"
        density="compact"
      >
        <!---Menu Loop -->
        <template v-for="item in sidebarMenu">
          <!--          <template v-if="hasAccess(item)">-->
          <!---Item Sub Header -->
          <LcFullVerticalSidebarNavGroup v-if="item.header" :key="item.title" :item="item" />
          <!---If Has Child -->
          <LcFullVerticalSidebarNavCollapse v-else-if="item.children" class="leftPadding" :item="item" :level="0" />
          <!---Single Item-->
          <LcFullVerticalSidebarNavItem v-else class="leftPadding" :item="item" />
          <!---End Single Item-->
          <!--          </template>-->
        </template>
      </v-list>
    </perfect-scrollbar>
    <v-btn
      class="tw-absolute tw-bottom-[4px] tw-left-[6px]"
      color="white"
      icon
      variant="text"
      @click.stop="smallSidebar"
    >
      <menu2-icon size="24" />
    </v-btn>
  </v-navigation-drawer>
</template>

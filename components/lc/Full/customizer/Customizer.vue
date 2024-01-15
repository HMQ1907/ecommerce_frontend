<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from 'vuetify'
import {
  CheckIcon,
  LayoutColumnsIcon,
  LayoutDistributeHorizontalIcon,
  LayoutDistributeVerticalIcon,
  LayoutNavbarIcon,
  LayoutSidebarLeftCollapseIcon,
} from 'vue-tabler-icons'
import { useCustomizerStore } from '@/stores/customizer'

const theme = useTheme()
const customizer = useCustomizerStore()

// themes color options
const themeColors = ref([
  {
    name: 'BLUE_THEME',
    bg: 'themeBlue',
  },
  {
    name: 'AQUA_THEME',
    bg: 'themeAqua',
  },
  {
    name: 'PURPLE_THEME',
    bg: 'themePurple',
  },
  {
    name: 'GREEN_THEME',
    bg: 'themeGreen',
  },
  {
    name: 'CYAN_THEME',
    bg: 'themeCyan',
  },
  {
    name: 'ORANGE_THEME',
    bg: 'themeOrange',
  },
])

// Dark Theme Colors
const DarkthemeColors = ref([
  { name: 'DARK_BLUE_THEME', bg: 'themeDarkBlue' },
  { name: 'DARK_AQUA_THEME', bg: 'themeDarkAqua' },
  { name: 'DARK_PURPLE_THEME', bg: 'themeDarkPurple' },
  { name: 'DARK_GREEN_THEME', bg: 'themeDarkGreen' },
  { name: 'DARK_CYAN_THEME', bg: 'themeDarkCyan' },
  { name: 'DARK_ORANGE_THEME', bg: 'themeDarkOrange' },
])
</script>

<!------------------------------------->
<!-- Customizer -->
<!------------------------------------->
<template>
  <v-navigation-drawer v-model="customizer.Customizer_drawer" app elevation="10" location="right" temporary width="320">
    <div class="pa-6">
      <h5 class="text-h5">Settings</h5>
    </div>
    <v-divider />
    <perfect-scrollbar style="height: calc(100vh - 90px)">
      <div class="pa-6">
        <h6 class="text-h6 mb-2">Sidebar Layout</h6>
        <v-btn-toggle
          v-model="customizer.setHorizontalLayout"
          class="my-2 btn-group-custom"
          color="primary"
          group
          rounded="0"
        >
          <v-btn class="rounded-md" elevation="9" :value="false" variant="text">
            <layout-columns-icon class="mr-2" size="21" stroke-width="1.5" />
            Vertical
          </v-btn>
          <v-btn class="rounded-md ml-4" elevation="9" :value="true" variant="text">
            <layout-navbar-icon class="mr-2" size="21" stroke-width="1.5" />
            Horizontal
          </v-btn>
        </v-btn-toggle>
        <h6 class="text-h6 mt-8 mb-5">Theme Color</h6>
        <v-item-group v-model="customizer.actTheme" class="ml-n2 v-row" mandatory>
          <v-col v-for="theme in themeColors" :key="theme.name" class="pa-2" cols="4">
            <v-item v-slot="{ isSelected, toggle }" :value="theme.name">
              <v-sheet
                class="border cursor-pointer d-block text-center px-5 py-4 hover-btns"
                elevation="9"
                rounded="md"
                @click="toggle"
              >
                <v-avatar :class="theme.bg" size="25">
                  <check-icon v-if="isSelected" color="white" size="18" />
                </v-avatar>
              </v-sheet>
            </v-item>
          </v-col>
        </v-item-group>
        <h6 class="text-h6 mt-11 mb-5">Theme Dark Color</h6>
        <v-item-group v-model="customizer.actTheme" class="ml-n2 v-row" mandatory>
          <v-col v-for="theme in DarkthemeColors" :key="theme.name" class="pa-2" cols="4">
            <v-item v-slot="{ isSelected, toggle }" :value="theme.name">
              <v-sheet
                class="border cursor-pointer d-block text-center px-5 py-4 hover-btns"
                elevation="9"
                rounded="md"
                @click="toggle"
              >
                <v-avatar :class="theme.bg" size="25">
                  <check-icon v-if="isSelected" color="white" size="18" />
                </v-avatar>
              </v-sheet>
            </v-item>
          </v-col>
        </v-item-group>
        <h6 class="text-h6 mt-11 mb-2">Container Option</h6>
        <v-btn-toggle v-model="customizer.boxed" class="my-2 btn-group-custom" color="primary" group rounded="0">
          <v-btn class="rounded-md" elevation="9" :value="true" variant="text">
            <layout-distribute-vertical-icon class="mr-2" size="21" stroke-width="1.5" />
            Boxed
          </v-btn>
          <v-btn class="rounded-md ml-4" elevation="9" :value="false" variant="text">
            <layout-distribute-horizontal-icon class="mr-2" size="21" stroke-width="1.5" />
            Full
          </v-btn>
        </v-btn-toggle>
        <!---Horizontal demo hide this option --->
        <v-sheet v-if="customizer.setHorizontalLayout != true">
          <h6 class="text-h6 mt-11 mb-2">Sidebar Type</h6>

          <v-btn-toggle
            v-model="customizer.mini_sidebar"
            class="my-2 btn-group-custom"
            color="primary"
            group
            rounded="0"
          >
            <v-btn class="rounded-md" elevation="9" :value="false" variant="text">
              <LayoutSidebarIcon class="mr-2" size="21" stroke-width="1.5" />
              Full
            </v-btn>
            <v-btn class="rounded-md ml-4" elevation="9" :value="true" variant="text">
              <layout-sidebar-left-collapse-icon class="mr-2" size="21" stroke-width="1.5" />
              Collapse
            </v-btn>
          </v-btn-toggle>
        </v-sheet>

        <h6 class="text-h6 mt-11 mb-2">Card with</h6>
        <v-btn-toggle
          v-model="customizer.setBorderCard"
          class="my-2 btn-group-custom"
          color="primary"
          group
          rounded="0"
        >
          <v-btn class="rounded-md" elevation="9" :value="false" variant="text">
            <layout-sidebar-left-collapse-icon class="mr-2" size="21" stroke-width="1.5" />
            Shadow
          </v-btn>
          <v-btn class="rounded-md ml-4" elevation="9" :value="true" variant="text">
            <LayoutSidebarIcon class="mr-2" size="21" stroke-width="1.5" />
            Border
          </v-btn>
        </v-btn-toggle>
      </div>
    </perfect-scrollbar>
  </v-navigation-drawer>
</template>

<style lang="scss"></style>

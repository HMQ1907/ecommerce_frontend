<script setup lang="ts">
import { ref, watch } from 'vue'
import { GridDotsIcon, LanguageIcon, SearchIcon, Menu2Icon, BellRingingIcon, ShoppingCartIcon } from 'vue-tabler-icons'
import { useCustomizerStore } from '@/stores/customizer'
import { useEcomStore } from '@/stores/apps/eCommerce'
// Icon Imports
const customizer = useCustomizerStore()
const showSearch = ref(false)
const drawer = ref(false)
const appsdrawer = ref(false)
const priority = ref(customizer.setHorizontalLayout ? 0 : 0)
function searchbox() {
  showSearch.value = !showSearch.value
}
watch(priority, (newPriority) => {
  // yes, console.log() is a side effect
  priority.value = newPriority
})
// count items
const store = useEcomStore()
const getCart = computed(() => {
  return store.cart
})
</script>

<template>
  <v-app-bar elevation="10" height="70" :priority="priority">
    <div :class="customizer.boxed ? 'maxWidth v-toolbar__content px-lg-0 px-0' : 'v-toolbar__content px-6'">
      <div class="d-sm-flex d-none">
        <LcFullLogo />
      </div>
      <div class="d-sm-none d-flex mr-2">
        <LcFullLogoIcon />
      </div>
      <v-btn
        class="hidden-lg-and-up ms-3"
        icon
        rounded="sm"
        size="small"
        variant="flat"
        @click.stop="customizer.SET_SIDEBAR_DRAWER"
      >
        <menu2-icon size="25" />
      </v-btn>

      <!-- search mobile -->
      <v-sheet v-if="showSearch" class="search-sheet v-col-12">
        <LcFullVerticalHeaderSearchbar :closesearch="searchbox" />
      </v-sheet>

      <!-- ------------------------------------------------>
      <!-- Search part -->
      <!-- ------------------------------------------------>
      <v-sheet class="d-none d-lg-block">
        <LcFullVerticalHeaderSearchbar />
      </v-sheet>

      <!---/Search part -->
      <v-spacer />
      <!-- ---------------------------------------------- -->
      <!---right part -->
      <!-- ---------------------------------------------- -->

      <!-- ---------------------------------------------- -->
      <!-- translate -->
      <!-- ---------------------------------------------- -->
      <LcFullVerticalHeaderLanguageDD />

      <!-- ---------------------------------------------- -->
      <!-- ShoppingCart -->
      <!-- ---------------------------------------------- -->
      <v-btn color="primary" icon to="/apps/ecommerce/checkout" variant="text">
        <v-badge color="error" :content="getCart?.length">
          <shopping-cart-icon size="22" stroke-width="1.5" />
        </v-badge>
      </v-btn>

      <!-- ---------------------------------------------- -->
      <!-- Notification -->
      <!-- ---------------------------------------------- -->

      <LcFullVerticalHeaderNotificationDD />

      <!-- ---------------------------------------------- -->
      <!-- User Profile -->
      <!-- ---------------------------------------------- -->
      <div class="ml-3 mr-sm-0">
        <LcFullVerticalHeaderProfileDD />
      </div>
    </div>
  </v-app-bar>
</template>

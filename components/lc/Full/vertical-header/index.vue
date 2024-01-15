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
  <v-app-bar id="top" elevation="10" height="64" :priority="priority">
    <div class="d-sm-flex d-none">
      <LcFullLogo />
    </div>
    <div class="d-sm-none d-flex mr-2">
      <LcFullLogoIcon />
    </div>
    <v-btn class="hidden-lg-and-up ms-3" icon size="small" variant="flat" @click.stop="customizer.SET_SIDEBAR_DRAWER">
      <menu2-icon size="25" />
    </v-btn>

    <!-- ---------------------------------------------- -->
    <!-- Search part -->
    <!-- ---------------------------------------------- -->
    <!--    <v-sheet class="">-->
    <!--      <LcFullVerticalHeaderSearchbar />-->
    <!--    </v-sheet>-->

    <v-spacer />
    <!-- ---------------------------------------------- -->
    <!---right part -->
    <!-- ---------------------------------------------- -->
    <!-- ---------------------------------------------- -->
    <!-- translate -->
    <!-- ---------------------------------------------- -->
    <!--    <LcFullVerticalHeaderLanguageDD />-->
    <LcFullVerticalHeaderBranchDD />

    <!-- ---------------------------------------------- -->
    <!-- ShoppingCart -->
    <!-- ---------------------------------------------- -->
    <!--    <v-btn color="primary" icon to="/apps/ecommerce/checkout" variant="text">-->
    <!--      <v-badge color="error" :content="getCart?.length">-->
    <!--        <shopping-cart-icon size="22" stroke-width="1.5" />-->
    <!--      </v-badge>-->
    <!--    </v-btn>-->

    <!-- ------------------------------------------------>
    <!-- Notification -->
    <!-- ------------------------------------------------>
    <LcFullVerticalHeaderNotificationDD v-if="!$vuetify.display.xs" />

    <!-- ---------------------------------------------- -->
    <!-- User Profile -->
    <!-- ---------------------------------------------- -->
    <div class="ml-3">
      <LcFullVerticalHeaderProfileDD />
    </div>
  </v-app-bar>
</template>

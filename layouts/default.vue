<script setup lang="ts">
import { ModalsContainer } from 'vue-final-modal'
import { useCustomizerStore } from '@/stores/customizer'

const { $api } = useNuxtApp()
const customizer = useCustomizerStore()
const title = ref('PVOIL Lao')

useHead({
  meta: [{ content: title }],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk}` : 'PVOIL Lao'
  },
})

// onMounted(() => {
//   const { getToken, onMessage } = useFcm()
//
//   getToken().then((token) => {
//     if (token) {
//       $api.device.createDevice({ token })
//     }
//   })
//
//   onMessage((e) => {
//     console.log(e)
//   })
// })
</script>

<template>
  <v-locale-provider>
    <v-app
      :class="[
        customizer.actTheme,
        customizer.mini_sidebar ? 'mini-sidebar' : '',
        customizer.setHorizontalLayout ? 'horizontalLayout' : 'verticalLayout',
        customizer.setBorderCard ? 'cardBordered' : '',
      ]"
      :theme="customizer.actTheme"
    >
      <LcFullCustomizer />
      <LcFullVerticalHeader v-if="!customizer.setHorizontalLayout" />
      <LcFullVerticalSidebar v-if="!customizer.setHorizontalLayout" />
      <LcFullHorizontalHeader v-if="customizer.setHorizontalLayout" />
      <LcFullHorizontalSidebar v-if="customizer.setHorizontalLayout" />
      <v-main>
        <v-container class="page-wrapper tw-bg-white" fluid>
          <div :class="customizer.boxed ? 'maxWidth' : ''">
            <nuxt-page />
            <!--            <v-btn-->
            <!--              class="customizer-btn"-->
            <!--              color="primary"-->
            <!--              icon-->
            <!--              size="large"-->
            <!--              variant="flat"-->
            <!--              @click.stop="customizer.SET_CUSTOMIZER_DRAWER(!customizer.Customizer_drawer)"-->
            <!--            >-->
            <!--              <SettingsIcon />-->
            <!--            </v-btn>-->
          </div>
        </v-container>
        <modals-container />
      </v-main>
      <!--      <LcFullVerticalSidebarBottomNav v-if="$vuetify.display.xs" />-->
    </v-app>
  </v-locale-provider>
</template>

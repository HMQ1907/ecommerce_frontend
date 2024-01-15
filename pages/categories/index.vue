<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useModal } from 'vue-final-modal'
import { useAbility } from '@casl/vue'
import CategoryModel from '@/components/categories/CategoryModel'

const { t } = useI18n()
const { can } = useAbility()
const { open, close } = useModal({
  component: CategoryModel,
  attrs: {
    clickToClose: false,
    title: t('categories.title'),
    escToClose: false,
    reserveScrollBarGap: false,
    zIndexFn: () => 1010,
    onClosed() {
      close()
    },
  },
})
</script>
<template>
  <v-btn @click="open">ADD</v-btn>
</template>

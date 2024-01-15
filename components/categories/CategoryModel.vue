<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import AppModal from '@/components/shared/AppModal'
import CategoryForm from '@/components/categories/CategoryForm'

defineProps<{
  title?: string
}>()
const emit = defineEmits(['closed', 'submit'])
const { t } = useI18n()
</script>

<template>
  <app-modal
    height="1000px"
    hide-submit
    :submit-text="$t('categories.action.save')"
    :title="title"
    width="600px"
    @cancel="emit('closed')"
  >
    <category-form />
  </app-modal>
</template>

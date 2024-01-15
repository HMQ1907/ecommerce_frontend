<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  actions: {
    type: Array,
    default: () => [],
  },
})
const { t } = useI18n()
const validActions = computed(() =>
  props.actions.filter((action) => action.name && !action.disabled && !action.permission)
)
</script>

<template>
  <v-menu bottom left>
    <template #activator="{ props }">
      <div class="tw-flex tw-items-center tw-justify-end">
        <slot />
        <v-btn v-if="validActions.length > 0" density="compact" v-bind="props" icon variant="text">
          <DotsVerticalIcon size="18" />
        </v-btn>
      </div>
    </template>
    <v-card>
      <v-list v-for="(action, index) in validActions" :key="index" class="pa-1">
        <v-list-item
          :class="[`${action.color}--text`]"
          :disabled="action.disabled"
          height="32"
          max-height="32"
          min-height="32"
          width="116"
          @click="action.click"
        >
          <v-list-item-title class="tw-flex tw-items-center tw-gap-1">
            <v-icon :color="action.color" left size="24">{{ action.icon }}</v-icon>
            <span class="tw-text-sm tw-font-normal">
              {{ t(`common.action.${action.name}`) }}
            </span>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

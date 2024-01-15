<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAbility } from '@casl/vue'

const props = defineProps({
  actions: {
    type: Array,
    default: () => [],
  },
})
const { t } = useI18n()
const { can } = useAbility()

const validActions = computed(() =>
  props.actions.filter(
    (action: any) => action.name && !action.disabled && (can(action.permission) || !action.permission)
  )
)
</script>

<template>
  <div class="tw-flex tw-justify-center tw-items-center">
    <v-tooltip v-if="validActions.length === 1" bottom>
      <template #activator="{ props }">
        <v-icon
          v-bind="props"
          :color="validActions[0].color"
          :disabled="validActions[0].disabled"
          small
          @click="validActions[0].click"
        >
          {{ validActions[0].icon }}
        </v-icon>
      </template>
      <span class="tw-text-white">{{ $t(`common.action.${validActions[0].name}`) }}</span>
    </v-tooltip>
    <v-menu v-if="validActions.length > 1" bottom left>
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
            @click="action.click"
          >
            <v-list-item-title class="tw-flex tw-items-center tw-gap-1">
              <v-icon :color="action.color" left size="24">{{ action.icon }}</v-icon>
              <span class="tw-text-sm tw-font-normal">
                {{ $t(`common.action.${action.name}`) }}
              </span>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

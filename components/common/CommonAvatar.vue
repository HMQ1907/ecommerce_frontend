<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps({
  params: {
    type: Object,
    default: () => ({}),
  },
  properties: {
    type: Object,
    default: () => ({}),
  },
  events: {
    type: Object,
    default: () => ({}),
  },
})
const emit = defineEmits(['click'])

const params = ref(props.params)
const { row } = params.value

const getShortName = (name: string) => {
  if (!name) {
    return ''
  }

  const words = name.split(' ')
  if (words.length >= 2) {
    const firstInitial = words[0][0]
    const lastInitial = words[words.length - 1][0] || words[words.length - 2][0]
    return (firstInitial + lastInitial).toUpperCase()
  } else if (words.length === 1) {
    return words[0][0].toUpperCase()
  } else {
    return '' // Return an empty string for an empty phrase
  }
}

const properties = computed(() => ({
  color: props.properties.color || 'primary',
  size: props.properties.color || 26,
  disabled: props.properties.disabled,
  items: props.properties.items.map((item: any) => ({
    ...item,
    shortName: getShortName(item.name),
    image: item.image,
  })),
}))

const hasEvents = computed(() => Object.keys(props.events).length !== 0)
const cursorClass = computed(() => {
  if (properties.value.disabled) {
    return 'tw-cursor-no-drop'
  } else if (hasEvents.value || properties.value.items.length !== 0) {
    return 'tw-cursor-pointer'
  } else {
    return 'tw-cursor-default'
  }
})

const onClick = (index: any) => {
  if (!properties.value.disabled && hasEvents.value) {
    emit('click', row, index)
  }
}
</script>

<template>
  <v-menu bottom left>
    <template #activator="{ props }">
      <div class="tw-flex tw-items-center tw-justify-center">
        <v-avatar
          v-for="(item, index) in properties.items.slice(0, 3)"
          :key="index"
          class="tw-mr-0.5"
          :class="cursorClass"
          :color="properties.color"
          :size="properties.size"
          v-bind="props"
          @click="onClick(index)"
        >
          <template v-if="index === 2">
            <span class="tw-text-white tw-text-[10px] tw-font-normal">+{{ properties.items.length - 2 }}</span>
          </template>
          <template v-else-if="index < 2">
            <v-img
              v-if="item?.image"
              alt="avatar"
              class="rounded-t-md align-end text-right"
              cover
              :height="properties.size"
              :src="item?.image"
              :width="properties.size"
            />
            <span v-else class="tw-text-white tw-text-[10px] tw-font-normal">
              {{ item?.shortName }}
            </span>
          </template>
        </v-avatar>
      </div>
    </template>
    <v-card :max-height="400">
      <v-list v-for="(item, index) in properties.items" :key="index" class="pa-1">
        <v-list-item height="32" max-height="32" min-height="32">
          <v-list-item-title class="tw-flex tw-items-center tw-gap-1">
            <span class="tw-text-sm tw-font-normal">
              {{ item.name }}
            </span>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

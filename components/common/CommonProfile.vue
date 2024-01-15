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
  size: props.properties.size || 24,
  shortName: getShortName(props.properties?.title),
  title: props.properties?.title,
  titleClass: props.properties?.titleClass,
  subTitle: props.properties?.subTitle,
  image: props.properties?.image,
  disabled: props.properties?.disabled,
}))

const hasEvents = computed(() => Object.keys(props.events).length !== 0)
const cursorClass = computed(() => {
  if (properties.value.disabled) {
    return 'tw-cursor-no-drop'
  } else if (hasEvents.value) {
    return 'tw-cursor-pointer'
  } else {
    return 'tw-cursor-default'
  }
})

const onClick = (e: number) => {
  if (!properties.value.disabled && hasEvents.value) {
    emit('click', row, e)
  }
}
</script>

<template>
  <div class="tw-flex tw-gap-1 tw-items-center">
    <div>
      <v-img
        v-if="properties?.image"
        alt="Avatar"
        class="rounded-t-md align-end text-right tw-cursor-pointer"
        :class="cursorClass"
        cover
        :height="properties.size"
        :src="properties?.image"
        :width="properties.size"
        @click="onClick"
      />
      <v-avatar v-else :class="cursorClass" :color="properties.color" :size="properties.size" @click="onClick">
        <span class="tw-text-white tw-text-xs tw-font-normal" :class="cursorClass">
          {{ properties.shortName }}
        </span>
      </v-avatar>
    </div>
    <div>
      <p class="tw-mb-0 tw-text-sm tw-cursor-pointer" :class="[cursorClass, properties.titleClass]" @click="onClick">
        {{ properties.title }}
      </p>
      <p class="tw-mb-0 tw-text-primary tw-text-xs tw-leading-4">{{ properties.subTitle }}</p>
    </div>
  </div>
</template>

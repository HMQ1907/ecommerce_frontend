<script setup lang="ts">
import { debounce } from 'lodash'

const props = defineProps({
  value: {
    type: [Number, String, Array, Object],
    default: null,
  },
  items: {
    type: Array,
    default: () => [],
  },
  label: {
    type: String,
    default: null,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  returnObject: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  itemTitle: {
    type: String,
    default: 'name',
  },
  itemValue: {
    type: String,
    default: 'id',
  },
  autoSelectFirst: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

defineOptions({
  inheritAttrs: false,
})

const emit = defineEmits(['input', 'change', 'search', 'clear', 'focused', 'modelValue'])

const innerValue = computed({
  get: () => props.value,
  set: (val) => emit('input', val),
})

const handleSearchInput = debounce((keyword) => {
  emit('search', keyword)
}, 400)

const handleModelValue = (val: any) => {
  emit('modelValue', val)
}
</script>

<template>
  <v-autocomplete
    v-bind="$attrs"
    :auto-select-first="autoSelectFirst"
    :disabled="disabled"
    :item-title="itemTitle"
    :item-value="itemValue"
    :items="items"
    :label="label"
    :loading="loading"
    :model-value="innerValue"
    :multiple="multiple"
    :return-object="returnObject"
    :validation-name="$attrs.label || $attrs['validation-name']"
    @change="emit('change', $event)"
    @click:clear="emit('clear')"
    @update:focused="emit('focused')"
    @update:model-value="handleModelValue"
    @update:search="handleSearchInput"
  >
    <template #selection="{ item, index }">
      <template v-if="multiple">
        <template v-if="[0].includes(index)">
          <div class="d-flex d-inline">
            <v-chip v-if="$attrs.chips" class="tw-truncate tw-text-[13px]" small>
              {{
                innerValue.length === 1 || index === innerValue.length - 1 || index === 2
                  ? `${item.value[itemTitle]}`
                  : `${item.value[itemTitle]},`
              }}
            </v-chip>
            <span v-else class="tw-truncate tw-text-[13px]">
              {{
                innerValue.length === 1 || index === innerValue.length - 1 || index === 2
                  ? `${item.value[itemTitle]}`
                  : `${item.value[itemTitle]},`
              }}
            </span>
          </div>
        </template>
        <span v-else-if="index === 1" class="grey--text caption tw-whitespace-nowrap tw-text-[13px]">
          (+{{ innerValue.length - 1 }} {{ $t('common.input.more') }})
        </span>
      </template>
      <span v-else class="tw-truncate tw-text-[13px]">{{ item.value[itemTitle] }}</span>
    </template>
  </v-autocomplete>
</template>

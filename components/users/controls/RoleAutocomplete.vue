<script setup lang="ts">
import { chain, debounce, keyBy, merge } from 'lodash'
import useGetRoles from '@/composables/use-get-roles'
import constants from '@/mixins/constants'

const props = defineProps({
  itemTitle: {
    type: String,
    default: 'display_name',
  },
  itemValue: {
    type: String,
    default: 'id',
  },
  label: {
    type: String,
    default: '',
  },
  defaultItems: {
    type: Array,
    default: () => [],
  },
  defaultParams: {
    type: Object,
    default: () => ({}),
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['input'])

const attrs = useAttrs()

const chips = computed(() => props.multiple)

const innerValue = computed({
  get: () => attrs.modelValue,
  set: (val) => emit('input', val),
})

// Default item when update mode
const defaultItem = computed(() => {
  if (attrs.modelValue) {
    return props.defaultItems.map((item: any) => ({
      [props.itemTitle]: item[props.itemTitle],
      [props.itemValue]: item[props.itemValue],
    }))
  }

  return []
})

const search = ref('')
const enabled = ref(false)
const queryBuilder = computed(() => ({
  filters: {
    q: search.value,
  },
  sorts: ['display_name'],
  page: 1,
  limit: constants.autocompleteLimit,
}))

const { items, isLoading, refetch } = useGetRoles(queryBuilder, {
  staleTime: 1000 * 60 * 15,
})

const mergedItems = computed(() => {
  const data = items.value
  const merged = chain(merge(keyBy(defaultItem.value, props.itemValue), keyBy(data, props.itemValue)))
  return merged.values().value()
})

const handleSearchInput = debounce((keyword) => {
  if (keyword) {
    search.value = keyword
  }
}, 250)

const onClear = () => {
  queryBuilder.value.filters.q = ''
  refetch.value()
}

const onBlur = () => {
  if (queryBuilder.value.filters.q) {
    onClear()
  }
}
</script>

<template>
  <v-autocomplete
    v-model="innerValue"
    :chips="chips"
    :clearable="clearable"
    :item-title="itemTitle"
    :item-value="itemValue"
    :items="mergedItems"
    :label="label"
    :loading="isLoading"
    :multiple="multiple"
    :no-data-text="$t('common.model.noData')"
    no-filter
    @blur="onBlur"
    @click:clear="onClear"
    @update:search="handleSearchInput"
  >
    <template v-if="chips" #chip="{ item, index, props }">
      <v-chip v-if="index === 2" v-bind="props">+{{ innerValue.length - 2 }} {{ $t('common.input.more') }}</v-chip>
      <v-chip v-else-if="index < 2" v-bind="props">{{ item.title }}</v-chip>
    </template>
  </v-autocomplete>
</template>

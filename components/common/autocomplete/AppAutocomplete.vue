<script setup lang="ts">
import { chain, debounce, keyBy, merge, map, filter } from 'lodash'

const props = defineProps({
  itemTitle: {
    type: String,
    default: 'name',
  },
  itemValue: {
    type: String,
    default: 'id',
  },
  items: {
    type: Array,
    default: () => [],
  },
  defaultItems: {
    type: Array,
    default: () => [],
  },
  disabledItems: {
    type: Array,
    default: () => [],
  },
  returnObject: {
    type: Boolean,
    default: false,
  },
  cacheItems: {
    type: Boolean,
    default: false,
  },
  dependency: {
    type: [String, Number, Array, Object],
    default: () => [],
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: true,
  },
  showSelectAll: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['input', 'search', 'update:model-value'])

const attrs = useAttrs()

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

// Disabled item
const disabledItem = computed(() => {
  if (props.disabledItems) {
    return props.disabledItems.map((item: any) => ({
      [props.itemTitle]: item[props.itemTitle],
      [props.itemValue]: item[props.itemValue],
    }))
  }

  return []
})

const mergedItems = computed(() => {
  const merged = chain(merge(keyBy(defaultItem.value, props.itemValue), keyBy(props.items, props.itemValue)))
  const mergedItems = merged.values().value()
  const disabledIds = map(disabledItem.value, props.itemValue)
  return filter(mergedItems, (merged: any) => !disabledIds.includes(merged.id))
})

// Cache all items
const totalItems = ref([])
const selectAll = ref(false)

watch(
  () => mergedItems.value,
  (val) => {
    // if (props.cacheItems) {
    totalItems.value = chain(val).concat(totalItems.value).uniqBy(props.itemValue).value() as any
    // } else {
    //   totalItems.value = val as any
    // }
  },
  {
    deep: true,
    immediate: true,
  }
)

const handleSearchInput = debounce((keyword) => {
  // TODO: If innerValue is not null, don't search (&& !innerValue.value)
  if (keyword) {
    emit('search', keyword)
  }
}, 250)

const handleChange = (val: any) => {
  emit('update:model-value', val || null)
}

const clearCache = () => {
  totalItems.value = []
}

watch(
  () => props.dependency,
  () => {
    clearCache()
  },
  {
    deep: true,
  }
)

const toggle = () => {
  if (selectAll.value) {
    emit('update:model-value', [])
  } else {
    emit('update:model-value', totalItems.value)
  }
  selectAll.value = !selectAll.value
}
</script>

<template>
  <v-autocomplete
    v-model="innerValue"
    :chips="multiple"
    :clearable="clearable"
    :item-title="itemTitle"
    :item-value="itemValue"
    :items="totalItems"
    :loading="loading"
    :multiple="multiple"
    :no-data-text="$t('common.model.noData')"
    :return-object="returnObject"
    @click:clear="emit('clear')"
    @update:modelValue="handleChange"
    @update:search="handleSearchInput"
  >
    <template v-for="(_, slot) of $slots" #[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
    <template v-if="multiple" #chip="{ item, index, props }">
      <v-chip v-if="index === 2" color="primary" v-bind="props">
        +{{ innerValue.length - 2 }} {{ $t('common.input.more') }}
      </v-chip>
      <v-chip v-else-if="index < 2" color="primary" v-bind="props">{{ item.title }}</v-chip>
    </template>
    <template v-if="showSelectAll" #prepend-item>
      <v-list-item title="Select All" @click="toggle">
        <template #prepend>
          <v-checkbox-btn v-model="selectAll" />
        </template>
      </v-list-item>
    </template>
  </v-autocomplete>
</template>

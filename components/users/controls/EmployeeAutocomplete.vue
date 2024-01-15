<script setup lang="ts">
import { debounce } from 'lodash'
import useGetEmployees from '@/composables/use-get-employees'
import AppAutocomplete from '@/components/common/autocomplete/AppAutocomplete'
import constants from '@/mixins/constants'

const props = defineProps({
  itemTitle: {
    type: String,
    default: 'full_name',
  },
  itemValue: {
    type: String,
    default: 'id',
  },
  defaultItems: {
    type: Array,
    default: () => [],
  },
  disabledItems: {
    type: Array,
    default: () => [],
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  returnObject: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['input'])

const attrs = useAttrs()

const innerValue = computed({
  get: () => attrs.modelValue,
  set: (val) => emit('input', val),
})

const search = ref('')
const queryBuilder = computed(() => ({
  filters: {
    q: search.value,
  },
  sorts: [],
  page: 1,
  limit: constants.autocompleteLimit,
}))
const { items, isLoading, refetch } = useGetEmployees(queryBuilder, {
  staleTime: 1000 * 60 * 15,
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
</script>

<template>
  <app-autocomplete
    v-model="innerValue"
    :default-items="defaultItems"
    :disabled-items="disabledItems"
    :item-title="itemTitle"
    :item-value="itemValue"
    :items="items"
    :loading="isLoading"
    :multiple="multiple"
    :return-object="returnObject"
    @clear="onClear"
    @search="handleSearchInput"
  />
</template>

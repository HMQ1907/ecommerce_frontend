<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { debounce } from 'lodash'
import constants from '@/mixins/constants'
import useGetDepartments from '@/composables/use-get-departments'
import AppAutocomplete from '@/components/common/autocomplete/AppAutocomplete'

const props = defineProps({
  itemTitle: {
    type: String,
    default: 'name',
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
  disabled: {
    type: Boolean,
    default: false,
  },
  isChart: {
    type: Boolean,
    default: false,
  },
  defaultParams: {
    type: Object,
    default: () => ({}),
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
    is_chart: props.isChart,
    q: search.value,
    ...props.defaultParams,
  },
  sorts: ['-created_at'],
  page: 1,
  limit: constants.autocompleteLimit,
}))
const { items, isLoading, refetch } = useGetDepartments(queryBuilder, {
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
    :disabled="disabled"
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

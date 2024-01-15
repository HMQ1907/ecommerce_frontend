<script setup lang="ts">
import { debounce } from 'lodash'
import { computed } from 'vue'
import useGetEmployees from '@/composables/use-get-employees'
import AppAutocomplete from '@/components/common/autocomplete/AppAutocomplete'
import constants from '@/mixins/constants'
import AppAvatarLetter from '~/components/shared/AppAvatarLetter.vue'

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
  disabled: {
    type: Boolean,
    default: false,
  },
  defaultParams: {
    type: Object,
    default: () => ({}),
  },
  selectAll: {
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
const dependency = computed(() => props.defaultParams.designation_id)
const queryBuilder = computed(() => ({
  filters: {
    q: search.value,
    ...props.defaultParams,
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
    :dependency="dependency"
    :disabled="disabled"
    :disabled-items="disabledItems"
    :item-title="itemTitle"
    :item-value="itemValue"
    :items="items"
    :loading="isLoading"
    :multiple="multiple"
    :return-object="returnObject"
    :show-select-all="selectAll"
    @clear="onClear"
    @search="handleSearchInput"
  >
    <template #item="{ props, item }">
      <v-list-item
        v-bind="props"
        :subtitle="item?.raw?.department_name"
        :title="`${item?.raw?.full_name} (${item?.raw?.designation_name})`"
      >
        <template #prepend>
          <app-avatar-letter :name="item?.raw?.full_name" :size="36" />
        </template>
      </v-list-item>
    </template>
    <template v-for="(_, slot) of $slots" #[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </app-autocomplete>
</template>

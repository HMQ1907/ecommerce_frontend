<script setup lang="ts">
import { useQuery } from 'vue-query'
import { transformSearchQuery } from '@/utils/searchQueryTransformer'
import FetchingAutocomplete from '@/components/common/autocomplete/FetchingAutocomplete.vue'

const { $api } = useNuxtApp()

const queryBuilder = ref({
  q: '',
  branch_id: 1,
})

const { data, refetch } = useQuery(
  ['departments'],
  () =>
    $api.departments.getDepartments({
      filter: queryBuilder.value,
    }),
  {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 15,
    enabled: false,
  }
)

const items = computed(() => data.value?.data || [])

const searchAssignmentTypes = (filter: string, count: number) => {
  const query = transformSearchQuery(filter)
  if (query !== undefined) {
    queryBuilder.value.q = query
  } else {
    queryBuilder.value.q = ''
  }
  return refetch.value()
}
</script>

<template>
  <fetching-autocomplete :fetch="searchAssignmentTypes" item-title="name" mode="model">
    <template #item="{ props, item }">
      <v-list-item :title="item.title" v-bind="props" />
    </template>
  </fetching-autocomplete>
</template>

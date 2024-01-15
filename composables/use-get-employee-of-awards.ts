import { computed } from 'vue'
import { UnwrapRef } from 'vue-demi'
import { useQuery } from 'vue-query'
import { map, zip } from 'lodash'
import Parser from '@/utils/parser'

function sortsParser(sortBy: string | [], sortType: string | []) {
  if (!sortBy) {
    return []
  }

  if (Array.isArray(sortBy)) {
    return map(zip(sortBy, sortType), ([sortBy, sortType]) => {
      return sortType === 'desc' ? `-${sortBy}` : sortBy
    })
  }

  return [sortType === 'desc' ? `-${sortBy}` : sortBy]
}

export default function useGetEmployeeAwards(id?: any, options?: any) {
  const { $api } = useNuxtApp()

  const query = useQuery(
    ['employee-awards', id],
    () => {
      return $api.employeeAwards.getEmployeeOfAwards(id)
    },
    {
      refetchOnWindowFocus: false,
      ...options,
    }
  )

  const items = computed(() => query.data.value?.data || [])

  return {
    ...query,
    items,
  }
}

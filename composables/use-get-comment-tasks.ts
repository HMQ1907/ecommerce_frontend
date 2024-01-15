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

export default function useGetCommentTasks(id: number) {
  const { $api } = useNuxtApp()

  const query = useQuery(
    ['comment-tasks'],
    () => {
      return $api.projectTasks.getComments(id)
    },
    {
      refetchOnWindowFocus: false,
    }
  )

  const items = computed(() => query.data.value?.data || [])
  const totalItems = computed(() => query.data.value?.pagination?.total || 0)

  return {
    ...query,
    items,
    totalItems,
  }
}

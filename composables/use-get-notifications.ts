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

export default function useGetNotifications(params?: UnwrapRef<any>, options?: any) {
  const { $api } = useNuxtApp()
  const query = useQuery(
    ['notifications', params],
    () => {
      return $api.notification.notifications()
    },
    {
      // refecth in 1 minute
      refetchInterval: () => 1000 * 60,
      ...options,
    }
  )

  const items = computed(() => query.data.value?.data || [])
  const totalItems = computed(() => query.data.value?.pagination?.total || 0)
  const unreadCount = computed(() => query.data.value?.unread_count || 0)

  return {
    ...query,
    items,
    totalItems,
    unreadCount,
  }
}

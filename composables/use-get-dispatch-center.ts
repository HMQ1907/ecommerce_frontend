import { computed } from 'vue'
import { useQuery } from 'vue-query'

export default function useGetDispatchCenter() {
  const { $api } = useNuxtApp()

  const query = useQuery(
    ['dispatch-center'],
    () => {
      return $api.plans.dispatchCenter()
    },
    {
      refetchOnWindowFocus: true,
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

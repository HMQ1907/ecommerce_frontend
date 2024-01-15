import { computed } from 'vue'
import { UnwrapRef } from 'vue-demi'
import { useQuery } from 'vue-query'

export default function useGetDashboardFluctuateEmployee(params?: UnwrapRef<any>, options?: any) {
  const { $api } = useNuxtApp()
  const query = useQuery(
    ['fluctuate-employee', params],
    () => {
      return $api.employees.reportSalary(params)
    },
    {
      refetchOnWindowFocus: false,
      cacheTime: 1000 * 60 * 60 * 24, // 1day
      ...options,
    }
  )

  const items = computed(() => query.data.value?.data || [])

  return {
    ...query,
    items,
  }
}

import { UnwrapRef } from 'vue-demi'
import { useQuery } from 'vue-query'

export default function useGetDistricts(params?: UnwrapRef<any>, options?: any) {
  const { $api } = useNuxtApp()

  const query = useQuery(['districts', params], () => $api.vietnamZone.getDistricts(params.value), {
    ...options,
    refetchOnWindowFocus: false,
  })

  const items = computed(() => query.data.value?.data || [])
  const totalItems = computed(() => query.data.value?.pagination?.total || 0)

  return {
    ...query,
    items,
    totalItems,
  }
}

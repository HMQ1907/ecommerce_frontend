import { UnwrapRef } from 'vue-demi'
import { useQuery } from 'vue-query'

export default function useGetProvinces(params?: UnwrapRef<any>, options?: any) {
  const { $api } = useNuxtApp()

  const query = useQuery(['provinces', params], () => $api.vietnamZone.getProvinces(params.value), {
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

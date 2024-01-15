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

export default function useGetSalaryComponents(params?: UnwrapRef<any>, options?: any) {
  const { $api } = useNuxtApp()

  const query = useQuery(
    ['salary-components', params],
    () => {
      const { sortBy, sortType } = params.value
      const sorts = sortsParser(sortBy, sortType)

      const query = new Parser({
        includes: [],
        appends: [],
        fields: {},
        filters: {},
        sorts,
        page: params.value.page,
        limit: params.value.rowsPerPage,
        payload: null,
        ...params.value,
      }).query()

      return $api.payrollConfig.getSalaryComponents(query)
    },
    {
      refetchOnWindowFocus: false,
      ...options,
    }
  )

  const items = computed(() => query.data.value?.data || [])
  const allowances = computed(
    () => query.data.value?.data.filter((item: any) => item.value_type === 'variable') || []
  )
  const businessFees = computed(() => query.data.value?.data.filter((item: any) => item.weight_formulate === 1) || [])
  const supportInsurances = computed(() => query.data.value?.data.filter((item: any) => item.is_company === 1) || [])
  const insurances = computed(
    () =>
      query.data.value?.data.filter(
        (item: any) => item.is_company === 0 && item.weight_formulate === 0 && item.value_type === 'percent'
      ) || []
  )
  const totalItems = computed(() => query.data.value?.pagination?.total || 0)

  return {
    ...query,
    items,
    allowances,
    businessFees,
    supportInsurances,
    insurances,
    totalItems,
  }
}

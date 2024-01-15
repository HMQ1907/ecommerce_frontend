<script setup lang="ts">
import type { Header } from 'vue3-easy-data-table'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import AppTable from '@/components/shared/AppTable'
import DatePicker from '@/components/common/DatePicker'

import useGetCustomerPlans from '~/composables/use-get-customer-plans'

const { t } = useI18n()

const dayjs = useDayjs()
const startOfMonth = ref({
  year: dayjs().year(),
  month: dayjs().month(),
})
const endOfMonth = ref({
  year: dayjs().year(),
  month: dayjs().month(),
})

const queryBuilder = computed(() => ({
  filters: {
    type: 'month',
    date_from: dayjs()
      .year(startOfMonth.value.year)
      .month(startOfMonth.value.month)
      .startOf('month')
      .format('YYYY-MM-DD'),
    date_to: dayjs().year(endOfMonth.value.year).month(endOfMonth.value.month).endOf('month').format('YYYY-MM-DD'),
  },
}))

const headers: Header[] = [
  { text: t('reports.model.month'), value: 'key', sortable: false },
  { text: t('reports.model.customer'), value: 'customers', sortable: false },
  { text: t('reports.model.totalPlans'), value: 'total', sortable: false },
]

const { items, totalItems, isLoading, refetch } = useGetCustomerPlans(queryBuilder)
</script>

<template>
  <div>
    <div class="d-flex white-space tw-gap-2 tw-py-[4px] tw-mb-1">
      <date-picker v-model="startOfMonth" class="tw-h-[32px]" month-picker />
      <date-picker v-model="endOfMonth" class="tw-h-[32px]" month-picker />
      <v-btn icon variant="text" width="40" @click="refetch">
        <RefreshIcon size="20" />
      </v-btn>
    </div>
    <app-table
      class="customize-scroll tw-h-full tw-max-h-[calc(100vh_-_400px)] md:tw-max-h-full"
      fixed-header
      :headers="headers"
      hide-footer
      :items="items"
      :loading="isLoading"
      :rows-per-page="99999"
      show-index
    >
      <template #header-total="{ text }">
        <div class="tw-w-full text-center">{{ text }}</div>
      </template>
      <template #item-key="{ key }">
        <span>{{ dayjs(key).format('MM/YYYY') }}</span>
      </template>
      <template #item-customers="{ customers }">
        <div class="tw-w-full tw-flex tw-flex-col">
          <div v-for="customer in customers" :key="customer.id" class="wrap-text tw-my-1">
            <v-tooltip :text="customer.name">
              <template #activator="{ props }">
                <span v-bind="props">{{ customer.name }}</span>
              </template>
            </v-tooltip>
          </div>
        </div>
      </template>
      <template #item-total="{ customers }">
        <div class="tw-w-full tw-flex tw-flex-col">
          <div v-for="customer in customers" :key="customer.id" class="tw-my-1 tw-text-center">
            <span>{{ customer.total ?? 0 }}</span>
          </div>
        </div>
      </template>
    </app-table>
  </div>
</template>
<style lang="scss">
.wrap-text {
  -webkit-line-clamp: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  white-space: pre-line;
}
</style>

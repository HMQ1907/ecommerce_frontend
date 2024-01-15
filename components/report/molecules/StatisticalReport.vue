<script setup lang="ts">
import type { Header } from 'vue3-easy-data-table'
import { useI18n } from 'vue-i18n'
import { computed, ref } from 'vue'
import { ServerOptions } from 'vue3-easy-data-table'
import AppTable from '@/components/shared/AppTable'
import DatePicker from '@/components/common/DatePicker'
import useGetStatisticalReport from '@/composables/use-get-statistical-report'

const { t } = useI18n()

const headers: Header[] = [
  { text: t('tableReports.model.customerName'), value: 'customer_name', sortable: true },
  { text: t('tableReports.model.categoryName'), value: 'category_name', sortable: true },
  { text: t('tableReports.model.productName'), value: 'product_name', sortable: true },
  { text: t('tableReports.model.shipName'), value: 'ship_name', sortable: true },
  { text: t('tableReports.model.planQuantity'), value: 'plan_quantity', sortable: true },
  { text: t('tableReports.model.startDatePlan'), value: 'start_date_plan', sortable: true },
  { text: t('tableReports.model.startDate'), value: 'start_date', sortable: true },
  { text: t('tableReports.model.finishDate'), value: 'finish_date', sortable: true },
  { text: t('tableReports.model.actualQuantity'), value: 'actual_quantity', sortable: true },
  { text: t('tableReports.model.difference'), value: 'difference', sortable: true },
  { text: t('tableReports.model.percent'), value: 'percent', sortable: true },
]

const dayjs = useDayjs()

const serverOptions = ref<ServerOptions>({
  page: 1,
  rowsPerPage: 99999,
  sortBy: '-created_at',
  sortType: 'asc',
})
const date = ref([dayjs().startOf('month').format('YYYY-MM-DD'), dayjs().format('YYYY-MM-DD')])

const dateFormatted = computed(() =>
  date.value.map((day: string) =>
    day ? dayjs(day).format('YYYY-MM-DD') : dayjs(date.value.find((e: any) => e)).format('YYYY-MM-DD')
  )
)

const queryBuilder = computed(() => ({
  filters: {
    type: 'day',
    date_between: dateFormatted.value,
  },
  ...serverOptions.value,
}))

const { items, totalItems, isLoading, refetch } = useGetStatisticalReport(queryBuilder)
</script>

<template>
  <v-card class="tw-flex tw-flex-col" variant="outlined">
    <div class="tw-flex white-space tw-gap-1 tw-py-2 tw-px-1">
      <date-picker v-model="date" class="tw-h-[32px] tw-w-[200px]" range />
      <v-btn icon variant="text" width="40" @click="refetch">
        <RefreshIcon size="20" />
      </v-btn>
    </div>
    <app-table
      v-model:server-options="serverOptions"
      class="statistical-report tw-grow"
      :headers="headers"
      hide-footer
      :items="items"
      :loading="isLoading"
      show-index
    >
      <template #item-customer_name="{ customer_name }">
        <div class="two-line tw-whitespace-normal tw-max-h-[40px]">
          <v-tooltip :text="customer_name">
            <template #activator="{ props }">
              <span v-bind="props">{{ customer_name }}</span>
            </template>
          </v-tooltip>
        </div>
      </template>
      <template #item-category_name="{ category_name }">
        <div class="two-line tw-whitespace-normal tw-max-h-[40px]">
          <v-tooltip :text="category_name">
            <template #activator="{ props }">
              <span v-bind="props">{{ category_name }}</span>
            </template>
          </v-tooltip>
        </div>
      </template>
      <template #item-product_name="{ product_name }">
        <div class="two-line tw-whitespace-normal tw-max-h-[40px]">
          <v-tooltip :text="product_name">
            <template #activator="{ props }">
              <span v-bind="props">{{ product_name }}</span>
            </template>
          </v-tooltip>
        </div>
      </template>
      <template #item-ship_name="{ ship_name }">
        <div class="two-line tw-whitespace-normal tw-max-h-[40px]">
          <v-tooltip :text="ship_name">
            <template #activator="{ props }">
              <span v-bind="props">{{ ship_name }}</span>
            </template>
          </v-tooltip>
        </div>
      </template>
      <template #item-finish_date="{ finish_date }">
        <div class="two-line tw-whitespace-normal tw-max-h-[40px]">
          <div>{{ finish_date?.slice(0, 11) }}</div>
        </div>
      </template>
    </app-table>
  </v-card>
</template>

<style lang="scss">
.two-line {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.statistical-report {
  height: calc(100vh - 260px);

  td:nth-child(1),
  th:nth-child(1) {
    width: 2%;
  }
  td:nth-child(2),
  th:nth-child(2) {
    width: 24%;
  }
  td:nth-child(3),
  th:nth-child(3),
  td:nth-child(4),
  th:nth-child(4),
  td:nth-child(5),
  th:nth-child(5),
  td:nth-child(6),
  th:nth-child(6),
  td:nth-child(7),
  th:nth-child(7),
  td:nth-child(8),
  th:nth-child(8),
  td:nth-child(9),
  th:nth-child(9),
  td:nth-child(10),
  th:nth-child(10),
  td:nth-child(11),
  th:nth-child(11) {
    width: 8%;
  }
  td:nth-child(12),
  th:nth-child(12) {
    width: 2%;
  }
}
</style>

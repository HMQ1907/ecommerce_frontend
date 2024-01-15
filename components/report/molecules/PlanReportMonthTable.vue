<script setup lang="ts">
import type { Header } from 'vue3-easy-data-table'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import AppTable from '@/components/shared/AppTable'
import useGetOverDuePlans from '@/composables/use-get-over-due-plans'
import DatePicker from '@/components/common/DatePicker'

const { t } = useI18n()
const headers: Header[] = [
  { text: t('reports.model.month'), value: 'key', sortable: false },
  { text: t('reports.model.overDuePlans'), value: 'total', sortable: false },
]

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

const { items, totalItems, isLoading, refetch } = useGetOverDuePlans(queryBuilder)
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
      <template #item-total="{ total }">
        <div class="tw-w-full text-center">{{ total }}</div>
      </template>
    </app-table>
  </div>
</template>
<style lang="scss">
.customize-scroll {
  .vue3-easy-data-table__main {
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
.v-input--density-compact .v-input__control {
  --v-input-control-height: 40px;
  --dp-month-year-row-height: 40px; /*Height of the month-year select row*/
  --dp-month-year-row-button-size: 40px; /*Specific height for the next/previous buttons*/
  input {
    padding-top: 0;
    padding-bottom: 0;
  }
}
</style>

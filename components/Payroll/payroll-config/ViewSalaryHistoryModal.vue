<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed, ref } from 'vue'
import AppModal from '@/components/shared/AppModal.vue'
import DatePicker from '@/components/common/DatePicker.vue'
import table from '@/mixins/table'
import useGetEmployeeSalaryHistories from '@/composables/use-get-employee-salary-histories'

const props = defineProps({
  item: {
    type: Object,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
  components: {
    type: Array,
    default: () => [],
  },
})
const { $api } = useNuxtApp()
const { t } = useI18n()
const dayjs = useDayjs()
const date = ref([])

const dateFormatted = computed(() =>
  date.value.map((day: string) =>
    day ? dayjs(day).format('YYYY-MM-DD') : dayjs(date.value.find((e: any) => e)).format('YYYY-MM-DD')
  )
)

const emit = defineEmits(['closed'])

const headers = ref([
  {
    title: t('common.model.created_at'),
    field: 'date',
    key: 'date',
    align: 'center',
    minWidth: '80px',
  },
  {
    title: t('payrollConfig.model.basicSalary'),
    field: 'current_basic_salary',
    key: 'current_basic_salary',
    align: 'center',
    sortBy: '',
    minWidth: '150px',
    formatter: 'formatCurrency',
  },
  {
    title: t('payrollConfig.model.mainAllowance'),
    align: 'center',
    minWidth: '100px',
    children: props.components?.map((e: any) => ({
      title: e.name,
      field: `${e.id}`,
      key: e.id,
      align: 'center',
      minWidth: '110px',
      cellRender: {
        name: 'EmployeeSalaryAllowance',
        props: (row: any) => ({
          variables: row?.variable_salaries || [],
        }),
      },
    })),
  },
  {
    title: t('payrollConfig.model.totalIncome'),
    field: 'total_income',
    key: 'total_income',
    align: 'center',
    sortBy: '',
    minWidth: '150px',
    cellRender: {
      name: 'EmployeeSalaryTotalIncome',
      props: (row: any) => ({
        variables: row?.variable_salaries || [],
        currentBasic: Number(row?.current_basic_salary || 0),
      }),
    },
  },
  {
    title: t('payrollConfig.model.socialSecurity'),
    field: 'social_security',
    key: 'social_security',
    align: 'center',
    minWidth: '100px',
    formatter: 'formatCurrency',
  },
])

const queryBuilder = computed(() => ({
  filters: {
    salary_date_between: dateFormatted.value,
  },
  sorts: ['-created_at'],
  page: 1,
  limit: table.limit,
}))
const { items, totalItems, isLoading, isFetching, refetch } = useGetEmployeeSalaryHistories(props.item.id, queryBuilder)
</script>

<template>
  <app-modal hide-submit :loading="isLoading" :title="props.title" width="1200" @cancel="emit('closed')">
    <v-card class="tw-min-h-[500px]" dense variant="flat">
      <div class="d-flex tw-py-1 mb-2 tw-gap-2 justify-end">
        <date-picker v-model="date" class="tw-h-[32px] tw-w-[200px]" :label="t('common.filter.rangeDate')" range />
        <v-btn icon variant="text" width="40" @click="refetch">
          <RefreshIcon size="20" />
        </v-btn>
      </div>
      <common-table
        v-model:page="queryBuilder.page"
        v-model:page-size="queryBuilder.limit"
        v-model:selected="queryBuilder.page"
        border
        :headers="headers"
        height="400"
        :items="items"
        :loading="isLoading"
        sequence
        :total-items="totalItems"
      />
    </v-card>
  </app-modal>
</template>

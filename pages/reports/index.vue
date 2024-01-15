<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
import { chain } from 'lodash'
import { useAbility } from '@casl/vue'
import AppFilter from '@/components/shared/AppFilter'
import AppFixedPage from '@/components/shared/AppFixedPage'

const { t } = useI18n()
const isSubmitting = ref(false)
const { $api } = useNuxtApp()
const toast = useToast()
const dayjs = useDayjs()
const { can } = useAbility()

const schema = ref([
  {
    defaultValue: dayjs().format('YYYY'),
    name: 'year',
    label: t('common.filter.year'),
    type: 'date',
    enabled: true,
    readonly: false,
    class: 'tw-w-[250px]',
    props: {
      pickerType: 'year',
    },
  },
  {
    defaultValue: 'employee',
    name: 'position_type',
    label: t('employees.model.type'),
    type: 'select',
    enabled: true,
    readonly: false,
    class: 'tw-w-[250px]',
    clearable: true,
    props: {
      items: [
        { title: t('employees.model.employee'), value: 'employee' },
        { title: t('employees.model.manager'), value: 'manager' },
      ],
      itemTitle: 'title',
      itemValue: 'value',
    },
  },
])
const query = ref({
  filters: chain(schema.value).keyBy('name').mapValues('defaultValue').value(),
})
const exportSalaryReport = () => {
  isSubmitting.value = true
  $api.departments
    .exportSalaryReport(query.value)
    .then((res) => {
      const url = URL.createObjectURL(
        new Blob([res], {
          type: 'application/vnd.ms-excel',
        })
      )
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'salary-report.xlsx')
      document.body.appendChild(link)
      link.click()
      toast.success(t('departments.action.export'))
    })
    .finally(() => {
      isSubmitting.value = false
    })
}
const exportRemunerationReport = () => {
  isSubmitting.value = true
  $api.departments
    .exportRemunerationReport(query.value)
    .then((res) => {
      const url = URL.createObjectURL(
        new Blob([res], {
          type: 'application/vnd.ms-excel',
        })
      )
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'remuneration-report.xlsx')
      document.body.appendChild(link)
      link.click()
      toast.success(t('departments.action.export'))
    })
    .finally(() => {
      isSubmitting.value = false
    })
}
const exportSalaryReports = () => {
  isSubmitting.value = true
  $api.employees
    .exportSalaryReport(query.value)
    .then((res) => {
      const url = URL.createObjectURL(
        new Blob([res], {
          type: 'application/vnd.ms-excel',
        })
      )
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'salary-report-v2.xlsx')
      document.body.appendChild(link)
      link.click()
      toast.success(t('departments.action.export'))
    })
    .finally(() => {
      isSubmitting.value = false
    })
}
const exportGenderReport = () => {
  isSubmitting.value = true
  $api.departments
    .exportGenderReport(query.value)
    .then((res) => {
      const url = URL.createObjectURL(
        new Blob([res], {
          type: 'application/vnd.ms-excel',
        })
      )
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'gender-report.xlsx')
      document.body.appendChild(link)
      link.click()
      toast.success(t('departments.action.export'))
    })
    .finally(() => {
      isSubmitting.value = false
    })
}
</script>

<template>
  <app-fixed-page :title="$t('reports.title')">
    <template #leftAction>
      <app-filter v-model:value="query" :display="3" :schema="schema" />
    </template>
    <template #rightAction>
      <v-btn
        v-if="can('view', 'report')"
        class="tw-w-5 tw-h-5 tw-px-2 tw-py-0 tw-rounded-[4px] tw-bg-[#F5F5F5] tw-w-[168px]"
        color="success"
        :loading="isSubmitting"
        size="40"
        @click="exportSalaryReports"
      >
        <DownloadIcon size="20" />
        <span class="tw-text-sm tw-text-white tw-font-medium create-button">
          {{ t('departments.model.exportSalaryReportNew') }}
        </span>
      </v-btn>
      <!--      <v-btn class="tw-bg-success" :loading="isSubmitting" @click="exportSalaryReport">-->
      <!--        <span class="tw-text-sm tw-text-white tw-font-medium">-->
      <!--          {{ $t('departments.model.exportSalaryReport') }}-->
      <!--        </span>-->
      <!--      </v-btn>-->
      <!--      <v-btn class="tw-bg-success" :loading="isSubmitting" @click="exportRemunerationReport">-->
      <!--        <span class="tw-text-sm tw-text-white tw-font-medium">-->
      <!--          {{ $t('departments.model.exportRemunerationReport') }}-->
      <!--        </span>-->
      <!--      </v-btn>-->
      <!--      <v-btn class="tw-bg-warning" :loading="isSubmitting" @click="exportGenderReport">-->
      <!--        <span class="tw-text-sm tw-text-white tw-font-medium">{{ $t('department.model.genderDepartments') }}</span>-->
      <!--      </v-btn>-->
    </template>
  </app-fixed-page>
</template>

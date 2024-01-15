<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import dayjs from 'dayjs'
import filters from '@/plugins/filters/currency'
import AppAvatarLetter from '@/components/shared/AppAvatarLetter'

const { $api } = useNuxtApp()
const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const fetchData = $api.employees.getEmployee(route.params.id)
const employee = ref({})
const shortName = ref('')

onMounted(async () => {
  const { data } = await fetchData
  employee.value = data
  shortName.value = employee.value.full_name
    .split(' ')
    .map((word: string) => word.charAt(0).toUpperCase())
    .join('')
})

const items = ref([
  {
    title: 'Personal Details',
    value: 1,
    appendIcon: 'mdi-clipboard-account',
    route: 'employees-id-personal',
  },
  {
    title: 'Company Information',
    value: 2,
    appendIcon: 'mdi-home-modern',
    route: 'employees-id-company',
  },
  {
    title: 'Bank Information',
    value: 3,
    appendIcon: 'mdi-bank',
    route: 'employees-id-bank-account',
  },
  {
    title: 'Contract Details',
    value: 4,
    appendIcon: 'mdi-file-document-edit-outline',
    route: 'employees-id-contract',
  },
  // {
  //   title: 'Transfer',
  //   value: 5,
  //   appendIcon: 'mdi-bank-transfer',
  //   route: 'employees-id-tranfer',
  // },
  // {
  //   title: 'Allowance',
  //   value: 6,
  //   appendIcon: 'mdi-cash-plus',
  //   route: 'employees-id-allowance',
  // },
  // {
  //   title: 'Termination Allowance',
  //   value: 7,
  //   appendIcon: 'mdi-cash-refund',
  //   route: 'employees-id-termination',
  // },
  // {
  //   title: 'Document',
  //   value: 8,
  //   appendIcon: 'mdi-text-box-multiple-outline',
  //   route: 'employees-id-document',
  // },
])
</script>

<template>
  <div class="fixed-page tw-w-full">
    <div class="tw-h-full tw-flex tw-flex-col tw-p-2 tw-pt-3 tw-gap-2">
      <div class="d-flex justify-space-between">
        <h4 class="tw-text-[23px] tw-text-[#424242] tw-font-normal tw-leading-8 tw-uppercase">
          {{ $t('employees.profile.title') }}
        </h4>
      </div>
      <div>
        <v-card class="py-8 px-12">
          <div class="d-flex tw-justify-around">
            <v-avatar class="tw-items-center" color="primary" size="100">
              <span class="tw-text-white tw-text-sm tw-tracking-[0.5px] tw-font-normal">{{ shortName }}</span>
            </v-avatar>
            <div class="d-flex pl-10 flex-column">
              <div class="tw-text-[1.5rem]">{{ employee.full_name }}</div>
              <div class="tw-text-[.935rem] tw-text-[#afb1b6] tw-pt-1">{{ employee.designation?.name }}</div>
              <div class="tw-text-[.935rem] tw-text-[#afb1b6] tw-pt-1">{{ employee.employee_code }}</div>
            </div>
            <div class="d-flex pl-10 flex-column">
              <div class="d-flex tw-items-center">
                <v-icon class="mr-2" color="primary" size="30">mdi-briefcase-outline</v-icon>
                <div class="d-flex flex-column">
                  <span>{{ t('employees.model.department') }}</span>
                  <span v-if="employee.department" class="tw-text-[.935rem]">
                    {{ employee?.department?.name }}
                  </span>
                  <span v-else class="tw-text-[.935rem] tw-text-[#afb1b6] tw-pt-1">
                    {{ t('employees.model.department') }}
                  </span>
                </div>
              </div>
              <div class="d-flex tw-items-center tw-pt-4">
                <v-icon class="mr-2" color="primary" size="30">mdi-clock-outline</v-icon>
                <div class="d-flex flex-column">
                  <span>{{ t('employees.model.DOB') }}</span>
                  <span v-if="employee.date_of_birth" class="tw-text-[.935rem]">
                    {{ dayjs(employee.date_of_birth).format('DD/MM/YYYY') }}
                  </span>
                  <span v-else class="tw-text-[.935rem] tw-text-[#afb1b6] tw-pt-1">DD/MM/YYYY</span>
                </div>
              </div>
            </div>
            <div class="d-flex pl-10 flex-column tw-pr-10">
              <div class="d-flex tw-items-center">
                <v-icon class="mr-2" color="primary" size="30">mdi-currency-usd</v-icon>
                <div class="d-flex flex-column">
                  <span>{{ t('employees.model.salary') }}</span>
                  <div class="tw-text-[.935rem]">
                    {{ filters.currency(employee.basic_salary, employee.currency_code) }}
                    <span class="tw-text-blue-500">{{ t('employees.model.current') }}</span>
                  </div>
                </div>
              </div>
              <div class="d-flex tw-items-center tw-pt-4">
                <v-icon class="mr-2" color="primary" size="30">mdi-calendar-check-outline</v-icon>
                <div class="d-flex flex-column">
                  <span>{{ t('employees.model.joiningDate') }}</span>
                  <span v-if="employee.date_to_job" class="tw-text-[.935rem]">
                    {{ dayjs(employee.date_to_job).format('DD/MM/YYYY') }}
                  </span>
                  <span v-else class="tw-text-[.935rem] tw-text-[#afb1b6] tw-pt-1">DD/MM/YYYY</span>
                </div>
              </div>
            </div>
          </div>
        </v-card>
        <v-row class="tw-pt-4">
          <v-col cols="3">
            <v-card class="mx-auto">
              <v-list class="d-flex tw-justify-center tw-bg-[#fbfcff] tw-h-[100px] tw-items-center">
                <v-avatar color="info" size="60">
                  <v-icon icon="mdi-account-circle" />
                </v-avatar>
              </v-list>
              <v-divider />
              <v-list-item
                v-for="item in items"
                :key="item.value"
                :to="{ name: item.route, params: { id: $route.params.id } }"
              >
                <template #prepend>
                  <v-icon :icon="item.appendIcon" />
                </template>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col cols="9">
            <v-card>
              <NuxtPage />
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

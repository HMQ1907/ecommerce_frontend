<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import useGetDashboardStatistic from '@/composables/use-get-dashboard-statistic'

const { t } = useI18n()
const { $api } = useNuxtApp()
const loading = ref(false)
const { data } = useAuth()
const dayjs = useDayjs()

const query = ref({
  year: dayjs().year(),
  branch_id: data.value.branch_id,
})

const { items } = useGetDashboardStatistic(query.value)
</script>

<template>
  <div class="user-status tw-flex tw-w-full tw-gap-3 tw-pt-3">
    <v-card
      class="tw-w-[calc(25%_-_18px)] tw-rounded tw-border-l-[6px] tw-border-l-yellow-600 tw-bg-yellow-200"
      max-height="100"
      outlined
    >
      <v-card-title class="d-flex justify-space-between tw-pb-[6px]">
        <v-progress-circular v-if="loading" indeterminate :size="30" />
        <span v-else class="text-h4 tw-tracking-[1.25px] tw-font-medium">{{ items.total_employee }}</span>
        <v-btn icon>
          <v-icon color="warning" x-large>mdi-account-group-outline</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="tw-text-base tw-text-black">
        {{ $t('employees.model.totalEmployee') }}
      </v-card-text>
    </v-card>

    <v-card
      class="tw-w-[calc(25%_-_18px)] tw-rounded tw-border-l-[6px] tw-border-l-green-600 tw-bg-green-200"
      max-height="100"
      outlined
    >
      <v-card-title class="d-flex justify-space-between tw-pb-[6px]">
        <v-progress-circular v-if="loading" indeterminate :size="30" />
        <span v-else class="text-h4 tw-tracking-[1.25px] tw-font-medium">{{ items.total_manager }}</span>
        <v-btn icon>
          <v-icon color="success" x-large>mdi-account-check-outline</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="tw-text-base tw-text-black">
        {{ $t('employees.model.totalManager') }}
      </v-card-text>
    </v-card>

    <v-card
      class="tw-w-[calc(25%_-_18px)] tw-rounded tw-border-l-[6px] tw-border-l-gray-500 tw-bg-gray-300"
      max-height="100"
      outlined
    >
      <v-card-title class="d-flex justify-space-between tw-pb-[6px]">
        <v-progress-circular v-if="loading" indeterminate :size="30" />
        <span v-else class="text-h4 tw-tracking-[1.25px] tw-font-medium">
          {{ items.total_employee_contractor }}
        </span>
        <v-btn icon>
          <v-icon color="gray" x-large>mdi-account-badge-outline</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="tw-text-base tw-text-black">
        {{ $t('employees.model.totalContract') }}
      </v-card-text>
    </v-card>

    <v-card
      class="tw-w-[calc(25%_-_18px)] tw-rounded tw-border-l-[6px] tw-border-l-blue-500 tw-bg-blue-300"
      max-height="100"
      outlined
    >
      <v-card-title class="d-flex justify-space-between tw-pb-[6px]">
        <v-progress-circular v-if="loading" indeterminate :size="30" />
        <span v-else class="text-h4 tw-tracking-[1.25px] tw-font-medium">
          {{ items.total_employee_staff }}
        </span>
        <v-btn icon>
          <v-icon color="gray" x-large>mdi-account-outline</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="tw-text-base tw-text-black">
        {{ $t('employees.model.totalStaff') }}
      </v-card-text>
    </v-card>

    <v-card
      class="tw-w-[calc(25%_-_18px)] tw-rounded tw-border-l-[6px] tw-border-l-red-600 tw-bg-red-200"
      max-height="100"
      outlined
    >
      <v-card-title class="d-flex justify-space-between tw-pb-[6px]">
        <v-progress-circular v-if="loading" indeterminate :size="30" />
        <span v-else class="text-h4 tw-tracking-[1.25px] tw-font-medium">
          {{ items.total_employee_removal }}
        </span>
        <v-btn icon>
          <v-icon color="red" x-large>mdi-account-arrow-right-outline</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="tw-text-base tw-text-black">
        {{ $t('employees.model.totalRemoval') }}
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped lang="scss"></style>

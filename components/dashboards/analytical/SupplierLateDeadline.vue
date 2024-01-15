<script setup lang="ts">
import { ServerOptions } from 'vue3-easy-data-table'
import useGetSupplierLates from '@/composables/use-get-supplier-late'

const serverOptions = ref<ServerOptions>({
  page: 1,
  rowsPerPage: 25,
  sortBy: 'created_at',
  sortType: 'asc',
})
const params = ref({
  filters: '',
})

const queryBuilder = computed(() => ({
  ...serverOptions.value,
  ...params.value,
}))
const { items, totalItems, isLoading } = useGetSupplierLates(queryBuilder)
</script>

<template>
  <VCard elevation="10">
    <v-card-text class="pa-0 tw-h-[450px] tw-min-h-full tw-relative tw-overflow-auto tw-overflow-x-hidden">
      <v-card-title
        class="tw-px-1.5 sm:tw-px-2 tw-pt-1.5 tw-pb-[0] tw-opacity-100 tw-sticky tw-top-[0px] tw-bg-white tw-z-[1]"
      >
        <template #default>
          <div class="bg-[#FFFFFF] d-flex justify-space-between align-center">
            <p class="tw-text-sm tw-font-medium tw-text-[#424242]">{{ $t('dashboard.supplierLateDeadline.title') }}</p>
            <v-icon class="tw-text-red-600" size="24">mdi-alert-outline</v-icon>
          </div>
        </template>
      </v-card-title>
      <div class="tw-absolute tw-top-1/2 tw-left-1/2 tw-translate-y-[-50%] tw-translate-x-[-50%]">
        <v-progress-circular color="green" :indeterminate="isLoading" />
      </div>
      <div
        v-if="items.length <= 0 && !isLoading"
        class="tw-absolute tw-top-1/2 tw-left-1/2 tw-translate-y-[-50%] tw-translate-x-[-50%]"
      >
        <span>{{ $t('common.model.noData') }}</span>
      </div>
      <div v-if="items.length > 0 && !isLoading">
        <v-list class="" lines="three">
          <v-list-item v-for="(item, index) in items" :key="index" class="tw-py-[6px] tw-px-1.5 sm:tw-px-2">
            <v-list-item-title class="tw-mb-0 sm:tw-mb-[12px]">
              <template #default>
                <div>
                  <v-row dense>
                    <v-col>
                      <span
                        class="tw-text-base tw-w-[300px] tw-font-medium tw-text-[#CF3034] tw-mr-6 tw-whitespace-normal"
                      >
                        {{ item.name }}
                      </span>
                      <span class="tw-text-base tw-tw-text-[#424242] sm:tw-text-[#0000006B] tw-mr-6">
                        {{ item.solution }}
                      </span>
                    </v-col>
                  </v-row>
                </div>
              </template>
            </v-list-item-title>

            <v-list-item-subtitle class="tw-opacity-100">
              <template #default>
                <div>
                  <v-row dense>
                    <v-col cols="3" sm="3">
                      <p class="tw-text-xs tw-text-[#00000099] tw-font-normal">Loại Hàng</p>
                      <p class="tw-text-sm tw-text-black">{{ item.category }}</p>
                    </v-col>
                    <v-col cols="3" sm="3">
                      <p class="tw-text-xs tw-text-[#00000099] tw-font-normal">Deadline</p>
                      <p class="tw-text-sm tw-text-[#FF5252]">
                        {{ item.clock_out.slice(0, 5) }} - {{ item.date.slice(5) }}
                      </p>
                    </v-col>
                    <v-col cols="3" sm="3">
                      <p class="tw-text-xs tw-text-[#00000099] tw-font-normal">Sản lượng</p>
                      <p class="tw-text-sm tw-text-black">{{ item.actual_quantity }}</p>
                    </v-col>
                    <v-col cols="3" sm="3">
                      <p class="tw-text-xs tw-text-[#00000099] tw-font-normal">Phụ trách</p>
                      <p class="tw-text-sm tw-text-black">{{ item.employee_name }}</p>
                    </v-col>
                  </v-row>
                </div>
              </template>
            </v-list-item-subtitle>
            <v-divider v-if="items.length - 1 > index" class="tw-mt-0.5 sm:tw-mt-1" />
          </v-list-item>
        </v-list>
      </div>
    </v-card-text>
  </VCard>
</template>

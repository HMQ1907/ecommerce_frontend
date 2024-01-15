<script setup lang="ts">
import { ServerOptions } from 'vue3-easy-data-table'
import useGetStatistics from '@/composables/use-get-statistics'
import filters from '@/plugins/filters/status'

const serverOptions = ref<ServerOptions>({
  page: 1,
  rowsPerPage: 9999,
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
const { items, totalItems, isLoading } = useGetStatistics(queryBuilder)
</script>
<template>
  <div class="tw-flex tw-flex-wrap tw-gap-2 sm:tw-gap-3 tw-w-full tw-p-0.5">
    <VCard class="statistic-card" elevation="10">
      <v-card-text class="tw-py-[2px] tw-px-1.5">
        <v-row dense>
          <v-col cols="12">
            <div class="d-flex justify-space-between align-center">
              <div>
                <h4 class="text-primary tw-font-normal tw-text-base tw-tracking-[0.5px]">
                  {{ $t('dashboard.statistics.totalOrder') }}
                </h4>
                <h2 class="tw-text-[34px] tw-mt-1 tw-font-medium tw-leading-10">
                  {{ filters.price(items.total_plan) }}
                </h2>
              </div>
              <img
                alt="icon"
                class="tw-w-[34px] tw-h-[34px] sm:tw-w-[40px] sm:tw-h-[40px]"
                src="/images/svgs/list_alt.svg"
              />
            </div>
          </v-col>
          <v-col class="tw-pt-0" cols="12">
            <div class="d-flex tw-gap-[10px] tw-items-center">
              <template v-if="items.percent_plan > 0">
                <span class="tw-text-success tw-text-xl">{{ filters.price(items.percent_plan) }}%</span>
                <img alt="icon" src="/images/svgs/trending_up.svg" />
              </template>
              <template v-else>
                <span class="tw-text-error tw-text-xl">{{ filters.price(items.percent_plan) }}%</span>
                <img alt="icon" src="/images/svgs/trending_down.svg" />
              </template>
              <span class="tw-text-[#00000094] tw-text-sm">{{ $t('dashboard.model.fromLastMonth') }}</span>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </VCard>
    <VCard class="statistic-card" elevation="10">
      <v-card-text class="tw-py-[2px] tw-px-1.5">
        <v-row dense>
          <v-col cols="12">
            <div class="d-flex justify-space-between align-center">
              <div>
                <h4 class="text-primary tw-font-normal tw-text-base tw-tracking-[0.5px]">
                  {{ $t('dashboard.statistics.totalPlan') }}
                </h4>
                <h2 class="tw-text-[34px] tw-mt-1 tw-font-medium tw-leading-10">
                  {{ filters.price(items.total_product) }}
                </h2>
              </div>
              <img
                alt="icon"
                class="tw-w-[44px] tw-h-[44px] sm:tw-w-[50px] sm:tw-h-[50px]"
                src="/images/svgs/cargo-ship-1.svg"
              />
            </div>
          </v-col>
          <v-col class="tw-pt-0" cols="12">
            <div class="d-flex tw-gap-[10px] tw-items-center">
              <template v-if="items.percent_product > 0">
                <span class="tw-text-success tw-text-xl">{{ filters.price(items.percent_product) }}%</span>
                <img alt="icon" src="/images/svgs/trending_up.svg" />
              </template>
              <template v-else>
                <span class="tw-text-error tw-text-xl">{{ filters.price(items.percent_product) }}%</span>
                <img alt="icon" src="/images/svgs/trending_down.svg" />
              </template>
              <span class="tw-text-[#00000094] tw-text-sm">{{ $t('dashboard.model.fromLastMonth') }}</span>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </VCard>
    <VCard class="statistic-card" elevation="10">
      <v-card-text class="tw-py-[2px] tw-px-1.5">
        <v-row dense>
          <v-col cols="12">
            <div class="d-flex justify-space-between align-center">
              <div>
                <h4 class="text-primary tw-font-normal tw-text-base tw-tracking-[0.5px]">
                  {{ $t('dashboard.statistics.totalShip') }}
                </h4>
                <h2 class="tw-text-[34px] tw-mt-1 tw-font-medium tw-leading-10">
                  {{ filters.price(items.total_ships) }}
                </h2>
              </div>
              <img
                alt="icon"
                class="tw-w-[44px] tw-h-[44px] sm:tw-w-[50px] sm:tw-h-[50px]"
                src="/images/svgs/cargo-ship-1.svg"
              />
            </div>
          </v-col>
          <v-col class="tw-pt-0" cols="12">
            <div class="d-flex tw-gap-[10px] tw-items-center">
              <template v-if="items.percent_ships > 0">
                <span class="tw-text-success tw-text-xl">{{ filters.price(items.percent_ships) }}%</span>
                <img alt="icon" src="/images/svgs/trending_up.svg" />
              </template>
              <template v-else>
                <span class="tw-text-error tw-text-xl">{{ filters.price(items.percent_ships) }}%</span>
                <img alt="icon" src="/images/svgs/trending_down.svg" />
              </template>
              <span class="tw-text-[#00000094] tw-text-sm">{{ $t('dashboard.model.fromLastMonth') }}</span>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </VCard>
    <VCard class="statistic-card" elevation="10">
      <v-card-text class="tw-py-[2px] tw-px-1.5">
        <v-row dense>
          <v-col cols="12">
            <div class="d-flex justify-space-between align-center">
              <div>
                <h4 class="text-primary tw-font-normal tw-text-base tw-tracking-[0.5px]">
                  {{ $t('dashboard.statistics.totalAttendance') }}
                </h4>
                <h2 class="tw-text-[34px] tw-mt-1 tw-font-medium tw-leading-10">{{ items.total_attendance }}</h2>
              </div>
              <img
                alt="icon"
                class="tw-w-[44px] tw-h-[44px] sm:tw-w-[50px] sm:tw-h-[50px]"
                src="/images/svgs/alarm_on.svg"
              />
            </div>
          </v-col>
          <v-col class="tw-pt-0" cols="12">
            <div class="d-flex tw-gap-[10px] tw-items-center">
              <template v-if="items.percent_attendance > 0">
                <span class="tw-text-success tw-text-xl">{{ filters.price(items.percent_attendance) }}%</span>
                <img alt="icon" src="/images/svgs/trending_up.svg" />
              </template>
              <template v-else>
                <span class="tw-text-error tw-text-xl">{{ filters.price(items.percent_attendance) }}%</span>
                <img alt="icon" src="/images/svgs/trending_down.svg" />
              </template>
              <span class="tw-text-[#00000094] tw-text-sm">{{ $t('dashboard.model.fromLastMonth') }}</span>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </VCard>
    <VCard class="statistic-card" elevation="10">
      <v-card-text class="tw-py-[2px] tw-px-1.5">
        <v-row dense>
          <v-col cols="12">
            <div class="d-flex justify-space-between align-center">
              <div>
                <h4 class="text-primary tw-font-normal tw-text-base tw-tracking-[0.5px]">
                  {{ $t('dashboard.statistics.totalCustomer') }}
                </h4>
                <h2 class="tw-text-[34px] tw-mt-1 tw-font-medium tw-leading-10">
                  {{ filters.price(items.total_customer) || 0 }}
                </h2>
              </div>
              <img
                alt="icon"
                class="tw-w-[44px] tw-h-[44px] sm:tw-w-[50px] sm:tw-h-[50px]"
                src="/images/svgs/group.svg"
              />
            </div>
          </v-col>
          <v-col class="tw-pt-0" cols="12">
            <div class="d-flex tw-gap-[10px] tw-items-center">
              <template v-if="items.percent_customer > 0">
                <span class="tw-text-success tw-text-xl">{{ filters.price(items.percent_customer) }}%</span>
                <img alt="icon" src="/images/svgs/trending_up.svg" />
              </template>
              <template v-else>
                <span class="tw-text-error tw-text-xl">{{ filters.price(items.percent_customer) }}%</span>
                <img alt="icon" src="/images/svgs/trending_down.svg" />
              </template>
              <span class="tw-text-[#00000094] tw-text-sm">{{ $t('dashboard.model.fromLastMonth') }}</span>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </VCard>
  </div>
</template>

<style lang="scss" scoped>
.statistic-card {
  width: 100%;
  @media all and (min-width: 600px) {
    width: calc(50% - 12px);
  }
  @media all and (min-width: 1024px) {
    width: calc(33.3333% - 16px);
  }
  @media all and (min-width: 1500px) {
    width: calc(20% - 19.2px);
  }
}
</style>

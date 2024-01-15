<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { VTextField, VAutocomplete, VSelect } from 'vuetify/lib/components/index.mjs'
import { cloneDeep } from 'lodash'
import EmployeeAutocomplete from '@/components/common/autocomplete/EmployeeAutocomplete'
import DepartmentAutocomplete from '@/components/common/autocomplete/DepartmentAutocomplete'
import DesignationAutocomplete from '@/components/common/autocomplete/DesignationAutocomplete'

const props = defineProps({
  filters: {
    type: Object,
    default: () => ({}),
  },
  schema: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['apply', 'reset', 'exit'])
const { t } = useI18n()
const queryFilter = ref(cloneDeep(props.filters))

const renderComponent = (type: string) => {
  switch (type) {
    case 'select':
      return VSelect
    case 'autocomplete':
      return VAutocomplete
    case 'EmployeeAutocomplete':
      return EmployeeAutocomplete
    case 'DepartmentAutocomplete':
      return DepartmentAutocomplete
    case 'DesignationAutocomplete':
      return DesignationAutocomplete
    default:
      return VTextField
  }
}

const inputType = (item: object) => {
  switch (item.type) {
    case 'number':
      return 'number'
    case 'date':
      return 'date'
    case 'time':
      return 'time'
    default:
      return 'text'
  }
}
</script>

<template>
  <v-card class="mx-auto" width="386">
    <v-card-title class="tw-p-2 tw-bg-[#E0E0E0]">
      <div class="tw-text-[#000000de] tw-text-xl tw-font-medium tw-tracking-[0.25px]">
        {{ t('common.filter.title') }}
      </div>
    </v-card-title>
    <v-divider />
    <v-card-text class="tw-px-3 tw-py-2">
      <v-row dense>
        <template v-for="(item, i) in schema" :key="`${item.name}-${i}`">
          <v-col :cols="item.cols || 12">
            <div v-if="item.enabled">
              <component
                :is="renderComponent(item.type)"
                v-model="queryFilter[item.name]"
                :clearable="item.clearable"
                :disabled="item.readonly"
                :label="item.label"
                :type="inputType(item)"
                v-bind="item.props"
              />
            </div>
          </v-col>
        </template>
      </v-row>
      <slot name="menu" />
    </v-card-text>
    <v-divider />
    <v-card-actions class="tw-py-1 tw-px-3">
      <v-spacer />
      <v-btn class="tw-bg-[#F5F5F5]" @click="emit('exit')">
        <span class="tw-text-sm tw-text-[#424242] tw-uppercase tw-font-medium">
          {{ t('common.filter.exit') }}
        </span>
      </v-btn>
      <v-btn class="tw-bg-primary" @click="emit('apply', queryFilter)">
        <span class="tw-text-sm tw-text-white tw-uppercase tw-font-medium">
          {{ t('common.action.filter') }}
        </span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

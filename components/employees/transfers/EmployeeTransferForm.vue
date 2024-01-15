<script setup lang="ts">
import { PropType } from '@vue/runtime-core'
import { useI18n } from 'vue-i18n'
import { EmployeeTransferType } from '@/types/employees/EmployeeTransfersTypes'
import BranchAutocomplete from '@/components/common/autocomplete/BranchAutocomplete.vue'
import DepartmentAutocomplete from '@/components/common/autocomplete/DepartmentAutocomplete.vue'
import DesignationAutocomplete from '@/components/common/autocomplete/DesignationAutocomplete.vue'
import EmployeeAutocomplete from '@/components/common/autocomplete/EmployeeAutocomplete.vue'
import VCurrency from '~/components/common/VCurrency.vue'

const props = defineProps({
  value: {
    type: Object as PropType<EmployeeTransferType>,
    required: true,
  },
  item: {
    type: Object as PropType<EmployeeTransferType>,
    default: () => ({}),
  },
  type: {
    type: String,
    default: '',
  },
  setFieldValue: {
    type: Function,
    default: () => {},
  },
})

const { t } = useI18n()
const emit = defineEmits(['update:value'])

const form = computed<EmployeeTransferType>({
  get: () => props.value,
  set: (val) => emit('update:value', val),
})

const toBranchChanged = () => {
  props.setFieldValue('to_department_id', null)
}

const employee = ref(null)
const currency = ref('LAK')

watch(
  () => employee.value,
  (val) => {
    if (val) {
      props.setFieldValue('employee_id', val.id)
      currency.value = val.currency_code
    }
  },
  {
    deep: true,
  }
)
</script>

<template>
  <v-row dense>
    <v-col cols="12">
      <v-row dense>
        <v-col cols="12">
          <p>{{ t('transfers.model.transferFrom') }}</p>
        </v-col>
        <v-col cols="12">
          <employee-autocomplete v-model="employee" clearable :label="t('transfers.model.employee')" return-object />
        </v-col>
        <v-col cols="12">
          <p>{{ t('transfers.model.transferTo') }}</p>
        </v-col>
        <v-col cols="12" sm="4">
          <branch-autocomplete
            v-bind="form.to_branch_id"
            :label="t('transfers.model.toBranch')"
            @update:model-value="toBranchChanged"
          />
        </v-col>
        <v-col cols="12" sm="4">
          <department-autocomplete
            v-bind="form.to_department_id"
            :default-params="{ branch_id: form.to_branch_id.modelValue }"
            :disabled="form.to_branch_id.modelValue === null"
            :label="t('transfers.model.toDepartment')"
          />
        </v-col>
        <v-col cols="12" sm="4">
          <designation-autocomplete v-bind="form.to_designation_id" :label="t('transfers.model.toDesignation')" />
        </v-col>
        <v-col cols="12">
          <v-textarea v-bind="form.description" :label="t('transfers.model.description')" rows="3" variant="outlined" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-bind="form.transfer_date" :label="t('transfers.model.transferDate')" type="date" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-bind="form.notice_date" :label="t('transfers.model.noticeDate')" type="date" />
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field v-bind="form.job" :label="t('transfers.model.job')" type="number" />
        </v-col>
        <v-col cols="12" sm="4">
          <v-currency
            v-bind="form.new_salary"
            :currency="currency"
            :label="t('transfers.model.newSalary')"
            persistent-hint
          />
        </v-col>
        <v-col cols="12" sm="4">
          <v-currency
            v-bind="form.new_position_allowance"
            :currency="currency"
            :label="t('transfers.model.newPositionAllowance')"
            persistent-hint
          />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

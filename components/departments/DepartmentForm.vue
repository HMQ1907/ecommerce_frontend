<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { PropType } from '@vue/runtime-core'
import { DepartmentTypes } from '@/types/departments/DepartmentTypes'
import EmployeeAutocomplete from '@/components/common/autocomplete/EmployeeAutocomplete.vue'
import DepartmentAutocomplete from '@/components/common/autocomplete/DepartmentAutocomplete.vue'

const props = defineProps({
  value: {
    type: Object as PropType<DepartmentTypes>,
    required: true,
  },
  item: {
    type: Object as PropType<DepartmentTypes>,
    default: () => ({
      employee: {},
      department: {},
    }),
  },
})

const { t } = useI18n()
const emit = defineEmits(['update:value'])

const form = computed<DepartmentTypes>({
  get: () => props.value,
  set: (val) => emit('update:value', val),
})

const employee = ref(props.item.employee)
const department = ref(props.item.department)

const statuses = [
  { title: t('products.status.active'), value: 'active' },
  { title: t('products.status.inactive'), value: 'inactive' },
]
</script>

<template>
  <v-form>
    <v-row dense>
      <v-col cols="12">
        <v-label class="font-weight-medium">{{ t('departments.model.departmentInformation') }}</v-label>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field v-bind="form.name" :label="t('departments.model.name')" variant="outlined" />
      </v-col>
      <v-col cols="12" sm="6">
        <employee-autocomplete
          v-bind="form.manager_id"
          v-model:employee="employee"
          clearable
          :label="t('departments.model.manager')"
        />
      </v-col>
      <v-col cols="12" sm="6">
        <department-autocomplete
          v-bind="form.parent_id"
          v-model:department="department"
          is-chart
          :label="t('departments.model.parent')"
        />
      </v-col>
      <v-col cols="12" sm="6">
        <v-select
          v-bind="form.status"
          item-title="title"
          item-value="value"
          :items="statuses"
          :label="t('departments.label.status')"
        />
      </v-col>
    </v-row>
  </v-form>
</template>

<style scoped>
.hide-spin-buttons >>> input[type='number'] {
  -moz-appearance: textfield;
}
.hide-spin-buttons >>> input::-webkit-outer-spin-button,
.hide-spin-buttons >>> input::-webkit-inner-spin-button {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>

<script setup lang="ts">
import { ref, defineProps, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import VCurrency from '@/components/common/VCurrency'
import { SalaryType } from '@/types/payroll/PayrollTypes'
import filters from '@/plugins/filters/currency'

interface Props {
  value: any | undefined
  item: any | undefined
  update: any | undefined
  components: any | undefined
  errors: any | undefined
}

const props = withDefaults(defineProps<Props>(), {
  value: {
    type: Object,
    required: true,
  },
  item: {
    type: Object,
    default: () => ({
      salary: {},
    }),
  },
  update: {
    type: Boolean,
    default: false,
  },
  components: {
    type: Array,
    default: () => [],
  },
  errors: {
    type: Object,
    default: () => ({}),
  },
})

const emit = defineEmits(['update:value'])

const { t } = useI18n()

const form = computed<SalaryType>({
  get: () => props.value,
  set: (val) => emit('update:value', val),
})

const components = ref(props.components)
const statuses = [
  { title: 'USD', value: 'USD' },
  { title: 'KIP', value: 'LAK' },
]
</script>

<template>
  <v-form>
    <v-row dense>
      <v-col cols="12">
        <span class="font-weight-medium tw-text-sm">{{ t('payrollConfig.model.basicSalary') }}</span>
      </v-col>
      <v-col cols="6">
        <v-currency
          v-bind="form.basic_salary"
          :currency="item.currency_code"
          :label="t('payrollConfig.model.basicSalary')"
          persistent-hint
        />
      </v-col>
      <v-col cols="6">
        <v-select v-bind="form.currency_code" :items="statuses" :label="t('payrollConfig.model.currencyCode')" />
      </v-col>
      <v-col cols="12">
        <span class="font-weight-medium tw-text-sm">{{ t('payrollConfig.model.mainAllowance') }}</span>
      </v-col>
      <FieldArray v-slot="{ fields }" name="variable_salaries">
        <v-col v-for="(field, index) in fields" :key="field.key" cols="12" sm="6">
          <v-currency
            v-model="field.value.variable_value"
            :currency="item.currency_code"
            :error-messages="errors[`variable_salaries[${index}].variable_value`]"
            :label="field.value.variable_component?.name"
            persistent-hint
          />
        </v-col>
      </FieldArray>
    </v-row>
  </v-form>
</template>

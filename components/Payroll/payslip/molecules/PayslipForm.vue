<script setup lang="ts">
import { ref, defineProps, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
import { VxeTableInstance } from 'vxe-table'
import VCurrency from '@/components/common/VCurrency'
import { validator as payslipValidator } from '@/validators/payslip-schema'

interface Props {
  value: any | undefined
  item: any | undefined
  update: any | undefined
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
      employee: {
        code: null,
      },
    }),
  },
  update: {
    type: Boolean,
    default: false,
  },
  errors: {
    type: Object,
    default: () => ({}),
  },
})
const emit = defineEmits(['update:value'])

const toast = useToast()
const { t } = useI18n()
const dayjs = useDayjs()
const amountTable = ref<VxeTableInstance>()

const form = computed({
  get: () => props.value,
  set: (val) => emit('update:value', val),
})

const amounts = ref([
  {
    name: t('payslip.model.amountOT'),
    value: form.value.salary_json.modelValue.amount_ot,
  },
])

const statuses = [
  { value: t('payslip.status.generated'), key: 'generated' },
  { value: t('payslip.status.paid'), key: 'paid' },
]

const editConfig = ref({
  trigger: 'click',
  mode: 'row',
  showStatus: true,
})

const headers = ref([
  {
    title: t('payslip.model.amountOT'),
    field: 'value',
    key: 'value',
    align: 'left',
    sortBy: '',
    formatter: 'formatCurrency',
    editRender: {
      name: '$input',
      props: {
        type: 'number',
      },
    },
    validator: ({ cellValue }: any) => payslipValidator.amount(t('payslip.model.amount'), cellValue, 0, 1000000000),
  },
])

watch(
  () => amounts.value[0].value,
  (val) => {
    if (val) {
      form.value.salary_json.modelValue.amount_ot = val
    }
  }
)

const validateTable = () => {
  const $table = amountTable.value
  if ($table) {
    return $table.validate()
  }
}

defineExpose({
  validateTable,
})
</script>

<template>
  <v-form>
    <h2 class="text-center mb-3">{{ item.employee.code }} - {{ item.employee.full_name }}</h2>
    <h3 class="mb-2">
      {{ t('payslip.title') }}:
      <span class="tw-font-normal">
        {{ t('payslip.model.from') }} {{ dayjs(item.salary_from).format('DD/MM/YYYY') }} {{ t('payslip.model.to') }}
        {{ dayjs(item.salary_to).format('DD/MM/YYYY') }}
      </span>
    </h3>
    <h3 class="mb-2">
      {{ t('payslip.model.workingDay') }}:
      <span class="tw-font-normal">
        {{ item.salary_json.actual_working_days }} / {{ item.salary_json.expected_working_days }}
      </span>
    </h3>
    <v-row dense>
      <v-col cols="12" md="6">
        <v-select
          v-bind="form.status"
          item-title="value"
          item-value="key"
          :items="statuses"
          :label="t('payslip.model.status')"
        />
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          :disabled="form.status.modelValue === 'generated'"
          v-bind="form.paid_on"
          :label="t('payslip.model.paidOn')"
          type="date"
        />
      </v-col>
      <v-col cols="12">
        <h3 class="mb-2">{{ t('payslip.model.amountOT') }}:</h3>
        <common-table ref="amountTable" :headers="headers" hide-pagination :items="amounts" sequence />
      </v-col>
      <!--      <v-col cols="12" md="6">-->
      <!--        <div class="d-flex align-center justify-space-between pa-1 mb-2 tw-bg-gray-300">-->
      <!--          <h4>{{ t('payslip.model.earningExtra') }}</h4>-->
      <!--          <h4>{{ t('payslip.model.amount') }}</h4>-->
      <!--        </div>-->
      <!--        <FieldArray v-slot="{ remove, push, fields }" name="extra_json.earnings">-->
      <!--          <v-row v-for="(field, index) in fields" :key="field.key" dense>-->
      <!--            <v-col class="px-2" cols="6">-->
      <!--              <v-text-field-->
      <!--                v-model="field.value.name"-->
      <!--                :error-messages="errors[`extra_json.earnings[${index}].name`]"-->
      <!--                :label="t('common.model.name')"-->
      <!--              />-->
      <!--            </v-col>-->
      <!--            <v-col class="d-flex align-center px-1" cols="6">-->
      <!--              <v-currency-->
      <!--                v-model="field.value.value"-->
      <!--                class="tw-w-[calc(100%-_28px)]"-->
      <!--                :error-messages="errors[`extra_json.earnings[${index}].value`]"-->
      <!--                :label="t('payslip.model.amount')"-->
      <!--              />-->
      <!--              <v-btn color="error" icon="mdi-delete-outline" variant="plain" @click="remove(index)" />-->
      <!--            </v-col>-->
      <!--          </v-row>-->
      <!--          <v-btn class="pa-0" color="primary" variant="plain" @click="push({ name: '', value: 0 })">-->
      <!--            <v-icon class="mr-1" small>mdi-plus-circle-outline</v-icon>-->
      <!--            {{ t('payslip.action.add') }}-->
      <!--          </v-btn>-->
      <!--        </FieldArray>-->
      <!--      </v-col>-->
      <v-col cols="12" md="12">
        <div class="d-flex align-center justify-space-between pa-1 mb-2 tw-bg-gray-300">
          <h4>{{ t('payslip.model.deductionExtra') }}</h4>
          <h4>{{ t('payslip.model.amount') }}</h4>
        </div>
        <FieldArray v-slot="{ remove, push, fields }" name="extra_json.deductions">
          <v-row v-for="(field, index) in fields" :key="field.key" dense>
            <v-col class="px-2" cols="6">
              <v-text-field
                v-model="field.value.name"
                :error-messages="errors[`extra_json.deductions[${index}].name`]"
                :label="t('common.model.name')"
              />
            </v-col>
            <v-col class="d-flex align-center px-1" cols="6">
              <v-currency
                v-model="field.value.value"
                class="tw-w-[calc(100%-_28px)]"
                :currency="item.currency_code"
                :error-messages="errors[`extra_json.deductions[${index}].value`]"
                :label="t('payslip.model.amount')"
              />
              <v-btn color="error" icon="mdi-delete-outline" variant="plain" @click="remove(index)" />
            </v-col>
          </v-row>
          <v-btn class="pa-0" color="primary" variant="plain" @click="push({ name: '', value: 0 })">
            <v-icon class="mr-1" small>mdi-plus-circle-outline</v-icon>
            {{ t('payslip.action.add') }}
          </v-btn>
        </FieldArray>
      </v-col>
    </v-row>
  </v-form>
</template>

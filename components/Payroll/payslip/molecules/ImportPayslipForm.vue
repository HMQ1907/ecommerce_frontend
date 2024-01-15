<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ImportPayslipTypes } from '@/types/payroll/PayslipTypes'
import DatePicker from '@/components/common/DatePicker'

const { t } = useI18n()
const props = defineProps({
  useFieldModel: {
    type: Function as PropType<(field: string) => any>,
    required: true,
  },
  value: {
    type: Object as PropType<ImportPayslipTypes>,
    required: true,
  },
})
const emit = defineEmits(['update:value'])

const form = computed<ImportPayslipTypes>({
  get: () => props.value,
  set: (val) => emit('update:value', val),
})
</script>

<template>
  <v-form lazy-validation>
    <v-row dense>
      <v-col cols="8">
        <v-file-input
          v-bind="form.file"
          accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          :label="t('payslip.model.selectFile')"
          prepend-icon="mdi-folder-upload"
          show-size
        />
      </v-col>
      <v-col cols="4">
        <date-picker
          v-bind="form.month"
          class="tw-w-[200px]"
          :label="t('common.filter.month')"
          picker-type="month"
          readonly
        />
      </v-col>
    </v-row>
    <v-card-actions class="d-flex justify-space-between align-center px-2 pt-0">
      <div>
        {{ t('payslip.model.downloadTemplateFile') }}
        <a download href="/files/import_workings.xlsx" target="_blank">{{ t('payslip.model.templateFileExcel') }}</a>
      </div>
    </v-card-actions>
  </v-form>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core'
import { useI18n } from 'vue-i18n'
import AppFilePond from '@/components/common/AppFilePond.vue'
import { EmployeeContractType } from '@/types/employees/EmployeeContractsTypes'
import { EmployeeType } from '@/types/employees/EmployeeTypes'

const props = defineProps({
  value: {
    type: Object as PropType<EmployeeContractType>,
    required: true,
  },
  item: {
    type: Object as PropType<EmployeeContractType>,
    default: {},
  },
  type: {
    type: String,
    default: '',
  },
})

const { t } = useI18n()
const emit = defineEmits(['update:value', 'processed', 'add-file-start'])

const form = computed<EmployeeType>({
  get: () => props.value,
  set: (val) => emit('update:value', val),
})

const contractTypes = [
  { title: t('contracts.type.fullTime'), value: 'full_time' },
  { title: t('contracts.type.partTime'), value: 'part_time' },
]

const handleProcessed = () => {
  emit('processed')
}

const handleAddFileStart = () => {
  emit('add-file-start')
}
</script>

<template>
  <v-row dense>
    <v-col cols="12">
      <v-row dense>
        <v-col cols="12" sm="6">
          <v-select v-bind="form.type" :items="contractTypes" :label="t('contracts.model.type')" variant="outlined" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-bind="form.number" :label="t('contracts.model.number')" variant="outlined" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-bind="form.contract_from" :label="t('contracts.model.contractFrom')" type="date" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-bind="form.contract_to" :label="t('contracts.model.contractTo')" type="date" />
        </v-col>
        <v-col cols="12">
          <div class="tw-w-full">
            <app-file-pond
              v-bind="form.contract_file"
              :accept="'image/*, video/*, application/*'"
              multiple
              @add-file-start="handleAddFileStart"
              @processed="handleProcessed"
            />
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss"></style>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
import { debounce } from 'lodash'

interface Props {
  value: any | undefined
  item: any | undefined
  setFieldValue: any | undefined
}

const props = withDefaults(defineProps<Props>(), {})
const emit = defineEmits(['update:value'])

const toast = useToast()
const { t } = useI18n()

const form = computed({
  get: () => props.value,
  set: (val) => emit('update:value', val),
})
</script>

<template>
  <v-form>
    <v-row dense>
      <v-col cols="5">
        <v-text-field v-bind="form.rate_vnd" :label="t('payslip.model.rateVND')" type="number" />
      </v-col>
      <v-col cols="3">
        <v-text-field :label="t('payslip.model.from')" model-value="LAK - Lao Kip" :readonly="true" />
      </v-col>
      <v-col class="d-flex justify-center" cols="1">
        <v-icon class="tw-p-2 tw-border border-solid tw-border-gray-300 rounded-xl mt-1" medium>mdi-arrow-right</v-icon>
      </v-col>
      <v-col cols="3">
        <v-text-field :label="t('payslip.model.to')" model-value="VND - Vietnamese" :readonly="true" />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="5">
        <v-text-field v-bind="form.rate_usd" :label="t('payslip.model.rateUSD')" type="number" />
      </v-col>
      <v-col cols="3">
        <v-text-field :label="t('payslip.model.from')" model-value="USD - US Dollar" :readonly="true" />
      </v-col>
      <v-col class="d-flex justify-center" cols="1">
        <v-icon class="tw-p-2 tw-border border-solid tw-border-gray-300 rounded-xl mt-1" medium>mdi-arrow-right</v-icon>
      </v-col>
      <v-col cols="3">
        <v-text-field :label="t('payslip.model.to')" model-value="LAK - Lao Kip" :readonly="true" />
      </v-col>
    </v-row>
  </v-form>
</template>

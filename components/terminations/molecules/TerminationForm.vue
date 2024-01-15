<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import EmployeeAutocomplete from '@/components/common/autocomplete/EmployeeAutocomplete'
import VEditor from '@/components/common/VEditor'

const props = defineProps({
  value: {
    type: Object,
    required: true,
  },
  item: {
    type: Object,
    default: () => ({}),
  },
})

const emit = defineEmits(['update:value'])

const { t } = useI18n()

const form = computed({
  get: () => props.value,
  set: (val) => emit('update:value', val),
})
</script>
<template>
  <v-form>
    <v-row dense>
      <v-col cols="12">
        <employee-autocomplete v-bind="form.employee_id" clearable :label="t('termination.model.employeeName')" />
      </v-col>
      <v-col cols="6">
        <v-text-field v-bind="form.type" :label="t('termination.model.terminationType')" />
      </v-col>
      <v-col cols="6">
        <v-text-field v-bind="form.subject" :label="t('termination.model.subject')" />
      </v-col>
      <!--      <v-col cols="12">-->
      <!--        <employee-autocomplete v-bind="form.terminated_by" clearable :label="t('termination.model.terminatedBy')" />-->
      <!--      </v-col>-->
      <v-col cols="4">
        <v-text-field v-bind="form.termination_date" :label="t('termination.model.terminationDate')" type="date" />
      </v-col>
      <v-col cols="4">
        <v-text-field v-bind="form.notice_date" :label="t('termination.model.noticeDate')" type="date" />
      </v-col>
      <v-col cols="4">
        <v-text-field
          v-bind="form.remaining_vacation_days"
          :label="t('termination.model.remainingVactionDays')"
          type="number"
        />
      </v-col>
      <v-col cols="12">
        <v-editor v-bind="form.description" :label="t('termination.model.description')" />
      </v-col>
    </v-row>
  </v-form>
</template>

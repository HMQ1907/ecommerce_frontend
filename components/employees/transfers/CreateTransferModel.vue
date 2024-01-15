<script setup lang="ts">
import { PropType } from '@vue/runtime-core'
import { useQueryClient } from 'vue-query'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
import * as yup from 'yup'
import AppModal from '@/components/shared/AppModal.vue'
import { EmployeeTransferType } from '@/types/employees/EmployeeTransfersTypes'
import EmployeeTransferForm from '@/components/employees/transfers/EmployeeTransferForm.vue'

const props = defineProps({
  item: {
    type: Object as PropType<EmployeeTransferType>,
    default: () => ({
      id: undefined,
      employee_id: undefined,
      to_branch_id: undefined,
      to_department_id: undefined,
      to_designation_id: undefined,
      transfer_date: undefined,
      notice_date: undefined,
      description: undefined,
      job: undefined,
      new_salary: undefined,
      new_position_allowance: undefined,
    }),
  },
  title: {
    type: String,
    default: null,
  },
})

const emit = defineEmits(['closed', 'submit', 'update:modelValue'])
const { $api } = useNuxtApp()
const isSubmitting = ref(false)
const queryClient = useQueryClient()
const { t } = useI18n()
const toast = useToast()

const schema = yup.object({
  employee_id: yup.number().nullable().required().label(t('transfers.model.employee')),
  to_branch_id: yup.number().nullable().required().label(t('transfers.model.toBranch')),
  to_department_id: yup.number().nullable().required().label(t('transfers.model.toDepartment')),
  to_designation_id: yup.number().nullable().required().label(t('transfers.model.toDesignation')),
  transfer_date: yup.date().nullable().required().label(t('transfers.model.transferDate')),
  notice_date: yup.date().nullable().required().label(t('transfers.model.noticeDate')),
  job: yup.number().nullable().required().label(t('transfers.model.job')).max(2147483647),
  new_salary: yup.number().nullable().required().label(t('transfers.model.newSalary')).max(2147483647),
  new_position_allowance: yup
    .number()
    .nullable()
    .required()
    .label(t('transfers.model.newPositionAllowance'))
    .max(2147483647),
})

const { defineComponentBinds, handleSubmit, setErrors, setFieldValue } = useForm({
  validationSchema: schema,
  initialValues: {
    employee_id: null,
    to_branch_id: null,
    to_department_id: null,
    to_designation_id: null,
    transfer_date: null,
    notice_date: null,
    description: null,
    job: null,
    new_salary: null,
    new_position_allowance: null,
  } as EmployeeTransferType,
})

const vuetifyConfig = (state: any) => ({
  props: {
    'error-messages': state.errors,
  },
})

const form = ref({
  employee_id: defineComponentBinds('employee_id', vuetifyConfig),
  to_branch_id: defineComponentBinds('to_branch_id', vuetifyConfig),
  to_department_id: defineComponentBinds('to_department_id', vuetifyConfig),
  to_designation_id: defineComponentBinds('to_designation_id', vuetifyConfig),
  transfer_date: defineComponentBinds('transfer_date', vuetifyConfig),
  notice_date: defineComponentBinds('notice_date', vuetifyConfig),
  description: defineComponentBinds('description', vuetifyConfig),
  job: defineComponentBinds('job', vuetifyConfig),
  new_salary: defineComponentBinds('new_salary', vuetifyConfig),
  new_position_allowance: defineComponentBinds('new_position_allowance', vuetifyConfig),
})

const submit = handleSubmit((values) => {
  isSubmitting.value = true
  $api.employeeTransfers
    .createEmployeeTransfer(values)
    .then(() => {
      queryClient.invalidateQueries('employee-transfers')
      toast.success(t('common.message.createSuccess'))
      emit('closed')
    })
    .catch((err) => {
      setErrors(err)
    })
    .finally(() => {
      isSubmitting.value = false
    })
})
</script>

<template>
  <app-modal
    :loading="isSubmitting"
    :submit-text="$t('transfers.action.create')"
    :title="title"
    width="800px"
    @cancel="emit('closed')"
    @submit="submit"
  >
    <employee-transfer-form :set-field-value="setFieldValue" :value="form" />
  </app-modal>
</template>

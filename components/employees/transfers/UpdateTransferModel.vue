<script setup lang="ts">
import { PropType } from '@vue/runtime-core'
import { useQueryClient } from 'vue-query'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
import * as yup from 'yup'
import { EmployeeContractType } from '@/types/employees/EmployeeContractsTypes'
import AppModal from '@/components/shared/AppModal.vue'
import { EmployeeTransferType } from '@/types/employees/EmployeeTransfersTypes'
import EmployeeTransferForm from '@/components/employees/transfers/EmployeeTransferForm.vue'

const props = defineProps({
  item: {
    type: Object as PropType<EmployeeTransferType>,
    default: () => ({
      id: undefined,
      employee_id: undefined,
      from_branch_id: undefined,
      to_branch_id: undefined,
      from_department_id: undefined,
      to_department_id: undefined,
      from_designation_id: undefined,
      to_designation_id: undefined,
      transfer_date: undefined,
      notice_date: undefined,
      description: undefined,
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
const route = useRoute()

const schema = yup.object({
  employee_id: yup.number().nullable().required().label(t('transfers.model.employee')),
  from_branch_id: yup.number().nullable().required().label(t('transfers.model.fromBranch')),
  to_branch_id: yup.number().nullable().required().label(t('transfers.model.toBranch')),
  from_department_id: yup.number().nullable().required().label(t('transfers.model.fromDepartment')),
  to_department_id: yup.number().nullable().required().label(t('transfers.model.toDepartment')),
  from_designation_id: yup.number().nullable().required().label(t('transfers.model.fromDesignation')),
  to_designation_id: yup.number().nullable().required().label(t('transfers.model.toDesignation')),
  transfer_date: yup.date().nullable().required().label(t('transfers.model.transferDate')),
  notice_date: yup.date().nullable().required().label(t('transfers.model.noticeDate')),
  new_salary: yup.number().nullable().required().label(t('transfers.model.newSalary')).max(2147483647),
  new_position_allowance: yup
    .number()
    .nullable()
    .required()
    .label(t('transfers.model.newPositionAllowance'))
    .max(2147483647),
})

const { defineComponentBinds, handleSubmit, setErrors } = useForm({
  validationSchema: schema,
  initialValues: {
    id: props.item?.id,
    employee_id: props.item?.employee_id,
    from_branch_id: props.item?.from_branch.id,
    to_branch_id: props.item?.to_branch.id,
    from_department_id: props.item?.from_department.id,
    to_department_id: props.item?.to_department.id,
    from_designation_id: props.item?.from_designation.id,
    to_designation_id: props.item?.to_designation.id,
    transfer_date: props.item?.transfer_date,
    notice_date: props.item?.notice_date,
    description: props.item?.description,
    new_salary: props.item?.new_salary,
    new_position_allowance: props.item?.new_position_allowance,
  } as EmployeeTransferType,
})

const vuetifyConfig = (state: any) => ({
  props: {
    'error-messages': state.errors,
  },
})

const form = ref({
  employee_id: defineComponentBinds('employee_id', vuetifyConfig),
  from_branch_id: defineComponentBinds('from_branch_id', vuetifyConfig),
  to_branch_id: defineComponentBinds('to_branch_id', vuetifyConfig),
  from_department_id: defineComponentBinds('from_department_id', vuetifyConfig),
  to_department_id: defineComponentBinds('to_department_id', vuetifyConfig),
  from_designation_id: defineComponentBinds('from_designation_id', vuetifyConfig),
  to_designation_id: defineComponentBinds('to_designation_id', vuetifyConfig),
  transfer_date: defineComponentBinds('transfer_date', vuetifyConfig),
  notice_date: defineComponentBinds('notice_date', vuetifyConfig),
  description: defineComponentBinds('description', vuetifyConfig),
  new_salary: defineComponentBinds('new_salary', vuetifyConfig),
  new_position_allowance: defineComponentBinds('new_position_allowance', vuetifyConfig),
})

const submit = handleSubmit((values) => {
  isSubmitting.value = true
  $api.employeeTransfers
    .updateEmployeeTransfer(values.id, values)
    .then(() => {
      queryClient.invalidateQueries('employee-transfers')
      toast.success(t('common.message.updateSuccess'))
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
    :submit-text="$t('contracts.action.update')"
    :title="title"
    width="800px"
    @cancel="emit('closed')"
    @submit="submit"
  >
    <employee-transfer-form :item="item" :value="form" />
  </app-modal>
</template>

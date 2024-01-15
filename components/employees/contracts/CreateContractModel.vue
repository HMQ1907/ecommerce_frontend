<script setup lang="ts">
import { PropType } from '@vue/runtime-core'
import { useQueryClient } from 'vue-query'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
import * as yup from 'yup'
import { EmployeeContractType } from '@/types/employees/EmployeeContractsTypes'
import AppModal from '@/components/shared/AppModal.vue'
import EmployeeContractForm from '@/components/employees/EmployeeContractForm.vue'

const props = defineProps({
  item: {
    type: Object as PropType<EmployeeContractType>,
    default: () => ({
      id: undefined,
      type: undefined,
      number: undefined,
      contract_file: [],
      contract_from: undefined,
      contract_to: undefined,
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
  type: yup.string().nullable().required().label(t('contracts.model.type')),
  number: yup.string().nullable().required().label(t('contracts.model.number')),
  contract_from: yup.string().nullable().required().label(t('contracts.model.contractFrom')),
  contract_to: yup
    .string()
    .test('contract_to', t('contracts.model.dateMin'), function (value) {
      const startDateValue = this.parent.contract_from
      if (!startDateValue || !value) {
        return true
      }
      return value >= startDateValue
    })
    .nullable()
    .required()
    .label(t('contracts.model.contract_to')),
})

const { defineComponentBinds, handleSubmit, setErrors } = useForm({
  validationSchema: schema,
  initialValues: {
    employee_id: route.params.id,
    type: null,
    number: null,
    contract_from: null,
    contract_to: null,
    contract_file: [],
  } as EmployeeContractType,
})

const vuetifyConfig = (state: any) => ({
  props: {
    'error-messages': state.errors,
  },
})

const form = ref({
  type: defineComponentBinds('type', vuetifyConfig),
  number: defineComponentBinds('number', vuetifyConfig),
  contract_from: defineComponentBinds('contract_from', vuetifyConfig),
  contract_to: defineComponentBinds('contract_to', vuetifyConfig),
  contract_file: defineComponentBinds('contract_file', vuetifyConfig),
})

const submit = handleSubmit((values) => {
  isSubmitting.value = true
  $api.employeeContracts
    .createEmployeeContract(values)
    .then(() => {
      queryClient.invalidateQueries('employee-contract-files')
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
    :submit-text="$t('contracts.action.create')"
    :title="title"
    width="800px"
    @cancel="emit('closed')"
    @submit="submit"
  >
    <employee-contract-form :value="form" />
  </app-modal>
</template>

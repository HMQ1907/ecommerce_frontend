<script setup lang="ts">
import { useToast } from 'vue-toastification'
import { useI18n } from 'vue-i18n'
import { useQueryClient } from 'vue-query'
import * as yup from 'yup'
import { EmployeeType } from '@/types/employees/EmployeeTypes'
import EmployeeForm from '@/components/employees/EmployeeForm.vue'
import EmployeeContractForm from '~/components/employees/EmployeeContractForm.vue'

const toast = useToast()
const { $api } = useNuxtApp()
const { t } = useI18n()
const queryClient = useQueryClient()
const isSubmitting = ref(false)

const schema = yup.object({
  first_name: yup.string().nullable().required().max(50).label(t('employees.model.firstName')),
  last_name: yup.string().nullable().required().max(50).label(t('employees.model.lastName')),
  user: yup.object({
    email: yup.string().nullable().required().max(50).email().label(t('employees.model.email')),
  }),
  phone: yup.string().nullable().min(10).max(13).required().label(t('employees.model.phone')),
  education: yup.string().nullable().max(255).required().label(t('employees.model.education')),
  branch_id: yup.string().nullable().required().label(t('employees.model.branch')),
  department_id: yup.string().nullable().required().label(t('employees.model.department')),
  designation_id: yup.string().nullable().required().label(t('employees.model.designation')),
  status: yup.string().nullable().required().label(t('employees.model.status')),
  type: yup.string().nullable().required().label(t('employees.model.type')),
  contracts: yup.array().of(
    yup.object({
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
        .label(t('contracts.model.contractTo')),
    })
  ),
})

const { defineComponentBinds, handleSubmit, setErrors, resetForm, resetField } = useForm({
  validationSchema: schema,
  initialValues: {
    branch_id: null,
    department_id: null,
    designation_id: null,
    employee_code: null,
    first_name: null,
    last_name: null,
    gender: 'male',
    date_of_birth: null,
    avatar: null,
    phone: null,
    address: null,
    date_to_company: null,
    status: 'active',
    type: 'staff',
    position_type: 'employee',
    allowance: null,
    indicator: null,
    date_to_job: null,
    job: null,
    date_of_engagement: null,
    education: null,
    jg: null,
    service: null,
    user: {
      email: null,
    },
    bank_accounts: [
      {
        account_holder_name: null,
        account_number: null,
        bank_name: null,
        bank_identifier_code: null,
        branch_location: null,
        tax_payer_id: null,
      },
    ],
    contracts: [
      {
        type: 'full_time',
        number: null,
        contract_file: [],
        contract_from: null,
        contract_to: null,
      },
    ],
  } as EmployeeType,
})

const vuetifyConfig = (state: any) => ({
  props: {
    'error-messages': state.errors,
  },
})

const form = ref({
  branch_id: defineComponentBinds('branch_id', vuetifyConfig),
  department_id: defineComponentBinds('department_id', vuetifyConfig),
  designation_id: defineComponentBinds('designation_id', vuetifyConfig),
  employee_code: defineComponentBinds('employee_code', vuetifyConfig),
  first_name: defineComponentBinds('first_name', vuetifyConfig),
  last_name: defineComponentBinds('last_name', vuetifyConfig),
  gender: defineComponentBinds('gender', vuetifyConfig),
  date_of_birth: defineComponentBinds('date_of_birth', vuetifyConfig),
  avatar: defineComponentBinds('avatar', vuetifyConfig),
  phone: defineComponentBinds('phone', vuetifyConfig),
  address: defineComponentBinds('address', vuetifyConfig),
  date_to_company: defineComponentBinds('date_to_company', vuetifyConfig),
  status: defineComponentBinds('status', vuetifyConfig),
  type: defineComponentBinds('type', vuetifyConfig),
  allowance: defineComponentBinds('allowance', vuetifyConfig),
  indicator: defineComponentBinds('indicator', vuetifyConfig),
  date_to_job: defineComponentBinds('date_to_job', vuetifyConfig),
  date_of_engagement: defineComponentBinds('date_of_engagement', vuetifyConfig),
  education: defineComponentBinds('education', vuetifyConfig),
  job: defineComponentBinds('job', vuetifyConfig),
  jg: defineComponentBinds('jg', vuetifyConfig),
  service: defineComponentBinds('service', vuetifyConfig),
  user: {
    email: defineComponentBinds('user.email', vuetifyConfig),
  },
  bank_accounts: [
    {
      account_holder_name: defineComponentBinds('bank_accounts[0].account_holder_name', vuetifyConfig),
      account_number: defineComponentBinds('bank_accounts[0].account_number', vuetifyConfig),
      bank_name: defineComponentBinds('bank_accounts[0].bank_name', vuetifyConfig),
      bank_identifier_code: defineComponentBinds('bank_accounts[0].bank_identifier_code', vuetifyConfig),
      branch_location: defineComponentBinds('bank_accounts[0].branch_location', vuetifyConfig),
      tax_payer_id: defineComponentBinds('bank_accounts[0].tax_payer_id', vuetifyConfig),
    },
  ],
  contracts: [
    {
      type: defineComponentBinds('contracts[0].type', vuetifyConfig),
      number: defineComponentBinds('contracts[0].number', vuetifyConfig),
      contract_file: defineComponentBinds('contracts[0].contract_file', vuetifyConfig),
      contract_from: defineComponentBinds('contracts[0].contract_from', vuetifyConfig),
      contract_to: defineComponentBinds('contracts[0].contract_to', vuetifyConfig),
    },
  ],
})

const addBankAccount = () => {
  form.value.bank_accounts.push({
    account_holder_name: defineComponentBinds(
      `bank_accounts[${form.value.bank_accounts.length}].account_holder_name`,
      vuetifyConfig
    ),
    account_number: defineComponentBinds(
      `bank_accounts[${form.value.bank_accounts.length}].account_number`,
      vuetifyConfig
    ),
    bank_name: defineComponentBinds(`bank_accounts[${form.value.bank_accounts.length}].bank_name`, vuetifyConfig),
    bank_identifier_code: defineComponentBinds(
      `bank_accounts[${form.value.bank_accounts.length}].bank_identifier_code`,
      vuetifyConfig
    ),
    branch_location: defineComponentBinds(
      `bank_accounts[${form.value.bank_accounts.length}].branch_location`,
      vuetifyConfig
    ),
    tax_payer_id: defineComponentBinds(`bank_accounts[${form.value.bank_accounts.length}].tax_payer_id`, vuetifyConfig),
  })
}

const removeBankAccount = (index) => {
  form.value.bank_accounts.splice(index, 1)
  resetField(`bank_accounts[${index}]`)
}

const submit = handleSubmit((values) => {
  $api.employees
    .createEmployee(values)
    .then(() => {
      queryClient.invalidateQueries('employees')
      toast.success(t('common.message.createSuccess'))
      resetForm()
    })
    .catch((err) => {
      setErrors(err)
    })
})

const addFileStart = () => {
  isSubmitting.value = true
}

const uploadFileProcessed = () => {
  isSubmitting.value = false
}
</script>

<template>
  <div class="fixed-page tw-w-full">
    <div class="tw-h-full tw-flex tw-flex-col tw-p-2 tw-pt-3 tw-gap-2">
      <div class="d-flex justify-space-between">
        <h4 class="tw-text-[23px] tw-text-[#424242] tw-font-normal tw-leading-8 tw-uppercase">
          {{ $t('employees.action.create.title') }}
        </h4>
        <v-btn class="tw-bg-primary" :loading="isSubmitting" @click="submit">
          <span class="tw-text-sm tw-text-white tw-font-medium create-button">
            {{ t('common.action.save') }}
          </span>
        </v-btn>
      </div>
      <div>
        <employee-form
          :type="'create'"
          :value="form"
          @add-bank-account="addBankAccount()"
          @add-file-start="addFileStart"
          @processed="uploadFileProcessed"
          @remove-bank-account="removeBankAccount"
        />
      </div>
    </div>
  </div>
</template>

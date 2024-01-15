<script setup lang="ts">
import { defineProps } from 'vue'
import { useI18n } from 'vue-i18n'
import { useQueryClient } from 'vue-query'
import { useToast } from 'vue-toastification'
import * as yup from 'yup'
import { useForm } from 'vee-validate'
import EmployeeForm from '@/components/employees/EmployeeForm.vue'
import { EmployeeType } from '@/types/employees/EmployeeTypes'

const props = defineProps({
  title: {
    type: String,
    default: null,
  },
})

const toast = useToast()
const { $api } = useNuxtApp()
const { t } = useI18n()
const queryClient = useQueryClient()
const isSubmitting = ref(false)
const router = useRouter()
const route = useRoute()
const item = ref({})

onBeforeMount(() => {
  getEmployee()
})

const getEmployee = async () => {
  const { data } = await $api.employees.getEmployee(route.params.id)
  item.value = data
  item.value.bank_accounts.forEach((item, index) => {
    if (index > 0) {
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
        tax_payer_id: defineComponentBinds(
          `bank_accounts[${form.value.bank_accounts.length}].tax_payer_id`,
          vuetifyConfig
        ),
      })
    }
  })
  setFieldValue('id', item?.value.id)
  setFieldValue('designation_id', item?.value.designation.id)
  setFieldValue('branch_id', item?.value.branch.id)
  setFieldValue('employee_code', item?.value.employee_code)
  setFieldValue('first_name', item?.value.first_name)
  setFieldValue('last_name', item?.value.last_name)
  setFieldValue('gender', item?.value.gender)
  setFieldValue('date_of_birth', item?.value.date_of_birth)
  setFieldValue('phone', item?.value.phone)
  setFieldValue('address', item?.value.address)
  setFieldValue('date_to_company', item?.value.date_to_company)
  setFieldValue('status', item?.value.status)
  setFieldValue('type', item?.value.type)
  setFieldValue('allowance', item?.value.allowance)
  setFieldValue('indicator', item?.value.indicator)
  setFieldValue('date_to_job', item?.value.date_to_job)
  setFieldValue('job', item?.value.job)
  setFieldValue('date_of_engagement', item?.value.date_of_engagement)
  setFieldValue('education', item?.value.education)
  setFieldValue('jg', item?.value.jg)
  setFieldValue('service', item?.value.service)
  setFieldValue('user.email', item?.value.user?.email)
  setFieldValue('user.roles', item?.value.user?.roles)
  setFieldValue('bank_accounts', item?.value.bank_accounts)
}

const schema = yup.object({
  branch_id: yup.string().nullable().required().label(t('employees.model.branch')),
  designation_id: yup.string().nullable().required().label(t('employees.model.designation')),
  employee_code: yup.string().nullable().required().max(50).label(t('employees.model.employeeCode')),
  first_name: yup.string().nullable().required().max(50).label(t('employees.model.firstName')),
  last_name: yup.string().nullable().required().max(50).label(t('employees.model.lastName')),
  phone: yup.number().nullable().required().label(t('employees.model.phone')),
  user: yup.object({
    email: yup.string().nullable().required().max(50).email().label(t('employees.model.email')),
  }),
  education: yup.string().nullable().required().max(200).label(t('employees.model.education')),
  address: yup.string().nullable().required().max(200).label(t('employees.model.address')),
  date_of_birth: yup.string().nullable().required().label(t('employees.model.dateOfBirth')),
  status: yup.string().nullable().required().label(t('employees.model.status')),
})

const { defineComponentBinds, handleSubmit, setErrors, setFieldValue, resetField } = useForm({
  validationSchema: schema,
  initialValues: {
    id: undefined,
    branch: undefined,
    designation: undefined,
    employee_code: undefined,
    first_name: undefined,
    last_name: undefined,
    gender: undefined,
    date_of_birth: undefined,
    avatar: undefined,
    phone: undefined,
    address: undefined,
    date_to_company: undefined,
    status: undefined,
    type: undefined,
    allowance: undefined,
    indicator: undefined,
    date_to_job: undefined,
    job: undefined,
    date_of_engagement: undefined,
    education: undefined,
    jg: undefined,
    service: undefined,
    user: {
      email: undefined,
      roles: undefined,
    },
    bank_accounts: undefined,
  } as EmployeeType,
})

const vuetifyConfig = (state: any) => ({
  props: {
    'error-messages': state.errors,
  },
})

const form = ref({
  designation_id: defineComponentBinds('designation_id', vuetifyConfig),
  branch_id: defineComponentBinds('branch_id', vuetifyConfig),
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
    roles: defineComponentBinds('user.roles', vuetifyConfig),
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
    .updateEmployee(values.id, values)
    .then(() => {
      queryClient.invalidateQueries('employees')
      toast.success(t('common.message.updateSuccess'))
      router.push({ name: 'employees-index' })
    })
    .catch((err) => {
      setErrors(err)
    })
})
</script>

<template>
  <div class="fixed-page tw-w-full">
    <div class="tw-h-full tw-flex tw-flex-col tw-p-2 tw-pt-3 tw-gap-2">
      <div class="d-flex justify-space-between">
        <h4 class="tw-text-[23px] tw-text-[#424242] tw-font-normal tw-leading-8 tw-uppercase">
          {{ $t('employees.action.edit.title') }}
        </h4>
        <v-btn class="tw-bg-primary" @click="submit">
          <span class="tw-text-sm tw-text-white tw-font-medium create-button">
            {{ t('common.action.save') }}
          </span>
        </v-btn>
      </div>
      <div>
        <employee-form
          :item="item"
          :value="form"
          @add-bank-account="addBankAccount"
          @remove-bank-account="removeBankAccount"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

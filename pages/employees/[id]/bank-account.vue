<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useQueryClient } from 'vue-query'
import { useToast } from 'vue-toastification'
import { useAbility } from '@casl/vue'
import { EmployeeType } from '@/types/employees/EmployeeTypes'
const { can } = useAbility()

const route = useRoute()
const toast = useToast()
const queryClient = useQueryClient()
const { t } = useI18n()
const { $api } = useNuxtApp()

const employee = ref({})
const loading = ref(false)
const loadingUpdate = ref(false)

const fetchData = () => {
  loading.value = true
  $api.employees
    .getEmployee(route.params.id)
    .then(({ data }) => {
      employee.value = data
      employee.value.bank_accounts.forEach((item, index) => {
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
      })
      setFieldValue('id', employee?.value.id)
      setFieldValue('bank_accounts', employee?.value.bank_accounts)
    })
    .finally(() => {
      loading.value = false
    })
}

onMounted(async () => {
  await fetchData()
})

const { defineComponentBinds, handleSubmit, setErrors, resetField, setFieldValue } = useForm({
  initialValues: {
    id: undefined,
    bank_accounts: undefined,
  } as EmployeeType,
})

const vuetifyConfig = (state: any) => ({
  props: {
    'error-messages': state.errors,
  },
})

const form = ref({
  bank_accounts: [],
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
  loadingUpdate.value = true
  $api.employees
    .updateBankAccount(values.id, values)
    .then(() => {
      queryClient.invalidateQueries('employees')
      toast.success(t('common.message.updateSuccess'))
    })
    .catch((err) => {
      setErrors(err)
    })
    .finally(() => {
      loadingUpdate.value = false
    })
})
</script>

<template>
  <v-card>
    <v-card-title>
      <span class="lstick tw-top-[28px]" />
      <div class="d-flex justify-space-between tw-items-center">
        <h3 class="text-h5 title mb-1 tw-mt-[4px]">{{ t('employees.action.create.bankAccountDetail') }}</h3>
        <v-btn color="primary" icon @click="addBankAccount">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
    </v-card-title>
    <v-divider />
    <v-card-text v-if="form.bank_accounts.length > 0">
      <v-form>
        <div v-for="(bankAccount, index) in form.bank_accounts" :key="index">
          <v-row dense>
            <v-col cols="11">
              <v-row dense>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-bind="form.bank_accounts[index].account_holder_name"
                    :label="t('employees.bankAccount.accountHolderName')"
                    variant="outlined"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-bind="form.bank_accounts[index].account_number"
                    class="hide-spin-buttons"
                    :label="t('employees.bankAccount.accountNumber')"
                    type="number"
                    variant="outlined"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-bind="form.bank_accounts[index].bank_name"
                    :label="t('employees.bankAccount.bankName')"
                    variant="outlined"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-bind="form.bank_accounts[index].bank_identifier_code"
                    :label="t('employees.bankAccount.bankIdentifierCode')"
                    variant="outlined"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-bind="form.bank_accounts[index].branch_location"
                    :label="t('employees.bankAccount.branchLocation')"
                    variant="outlined"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-bind="form.bank_accounts[index].tax_payer_id"
                    :label="t('employees.bankAccount.taxPayerId')"
                    variant="outlined"
                  />
                </v-col>
              </v-row>
            </v-col>
            <v-col class="tw-flex tw-items-center" cols="1">
              <v-btn color="error" size="50" variant="outlined" @click="removeBankAccount(index)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-divider v-if="index !== form.bank_accounts.length - 1" class="tw-my-2" />
        </div>
      </v-form>
    </v-card-text>

    <v-card-text v-if="form.bank_accounts.length === 0 && !loading">
      <div class="d-flex justify-center">
        <span class="tw-text-[#afb1b6]">{{ t('common.message.noData') }}</span>
      </div>
    </v-card-text>

    <v-divider />

    <v-card-actions>
      <v-spacer />
      <v-btn v-if="can('edit', 'employees')" class="tw-bg-primary" :loading="loadingUpdate" @click="submit">
        <span class="tw-text-sm tw-text-white tw-font-medium create-button">
          {{ t('common.action.save') }}
        </span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped lang="scss"></style>

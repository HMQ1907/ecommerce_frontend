<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { PropType } from '@vue/runtime-core'
import { EmployeeType } from '@/types/employees/EmployeeTypes'
import BranchAutocomplete from '@/components/common/autocomplete/BranchAutocomplete.vue'
import DepartmentAutocomplete from '@/components/common/autocomplete/DepartmentAutocomplete'
import DesignationAutocomplete from '@/components/common/autocomplete/DesignationAutocomplete.vue'
import RoleAutocomplete from '@/components/users/controls/RoleAutocomplete.vue'
import AppFilePond from '@/components/common/AppFilePond.vue'

const props = defineProps({
  value: {
    type: Object as PropType<EmployeeType>,
    required: true,
  },
  item: {
    type: Object as PropType<EmployeeType>,
    default: () => ({}),
  },
  type: {
    type: String,
    default: '',
  },
})

const { t } = useI18n()
const emit = defineEmits([
  'update:value',
  'addBankAccount',
  'removeBankAccount:index',
  'addContract',
  'removeContract:index',
])

const form = computed<EmployeeType>({
  get: () => props.value,
  set: (val) => emit('update:value', val),
})

const statuses = [
  { title: t('employees.status.active'), value: 'active' },
  { title: t('employees.status.inactive'), value: 'inactive' },
]

const employeeTypes = [
  { title: t('employees.type.staff'), value: 'staff' },
  { title: t('employees.type.contractor'), value: 'contractor' },
  { title: t('employees.type.expat'), value: 'expat' },
  { title: t('employees.type.removal'), value: 'removal' },
]

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
  <v-form>
    <v-row dense>
      <v-col cols="12" sm="6">
        <v-card class="tw-mb-2" elevation="10">
          <v-card-title>
            <span class="lstick tw-top-[24px]" />
            <h3 class="text-h5 title mb-1 tw-mt-[4px]">{{ t('employees.action.create.personalDetail') }}</h3>
          </v-card-title>
          <v-divider />
          <v-card-text>
            <v-row dense>
              <v-col cols="12" sm="6">
                <v-text-field v-bind="form.first_name" :label="t('employees.model.firstName')" variant="outlined" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-bind="form.last_name" :label="t('employees.model.lastName')" variant="outlined" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-bind="form.phone"
                  class="hide-spin-buttons"
                  :label="t('employees.model.phone')"
                  type="number"
                  variant="outlined"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-bind="form.date_of_birth" :label="t('employees.model.DOB')" type="date" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-bind="form.user.email"
                  autocomplete="new-email"
                  :label="t('employees.model.email')"
                  type="email"
                  variant="outlined"
                />
              </v-col>
              <v-col cols="12" md="6">
                <div class="d-flex">
                  <span class="tw-mt-[10px] tw-text-[14px]">{{ $t('employees.model.gender') }}</span>
                  <v-radio-group defaults-target="male" hide-details inline v-bind="form.gender">
                    <v-radio :label="$t('employees.gender.male')" value="male" />
                    <v-radio :label="$t('employees.gender.female')" value="female" />
                    <v-radio :label="$t('employees.gender.others')" value="others" />
                  </v-radio-group>
                </div>
              </v-col>
              <v-col cols="12">
                <v-text-field v-bind="form.education" :label="t('employees.model.education')" variant="outlined" />
              </v-col>
              <v-col cols="12">
                <v-textarea v-bind="form.address" :label="t('employees.model.address')" rows="3" variant="outlined" />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-card elevation="10">
          <v-card-title>
            <span class="lstick tw-top-[28px]" />
            <div class="d-flex justify-space-between tw-items-center">
              <h3 class="text-h5 title mb-1 tw-mt-[4px]">{{ t('employees.action.create.bankAccountDetail') }}</h3>
              <v-btn color="primary" icon @click="$emit('addBankAccount')">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </div>
          </v-card-title>
          <v-divider />
          <v-card-text>
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
                  <v-btn color="error" size="50" variant="outlined" @click="$emit('removeBankAccount', index)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
              <v-divider v-if="index !== form.bank_accounts.length - 1" class="tw-my-2" />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card class="tw-mb-2" elevation="10">
          <v-card-title>
            <span class="lstick tw-top-[24px]" />
            <h3 class="text-h5 title mb-1 tw-mt-[4px]">{{ t('employees.action.create.companyDetail') }}</h3>
          </v-card-title>
          <v-divider />
          <v-card-text>
            <v-row dense>
              <v-col cols="12" md="6">
                <branch-autocomplete v-bind="form.branch_id" :label="$t('employees.model.branch')" />
              </v-col>
              <v-col cols="12" sm="6">
                <department-autocomplete
                  v-bind="form.department_id"
                  :default-params="{ branch_id: form.branch_id.modelValue }"
                  :label="t('employees.model.department')"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <designation-autocomplete v-bind="form.designation_id" :label="$t('employees.model.designation')" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-bind="form.indicator" :label="t('employees.model.indicator')" variant="outlined" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-select v-bind="form.type" :items="employeeTypes" :label="t('employees.model.type')" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-bind="form.date_to_company" :label="t('employees.model.dateToCompany')" type="date" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-bind="form.allowance"
                  :label="t('employees.model.allowance')"
                  type="number"
                  variant="outlined"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-bind="form.date_to_job"
                  :label="t('employees.model.dateToJob')"
                  type="date"
                  variant="outlined"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-bind="form.date_of_engagement"
                  :label="t('employees.model.dateOfEngagement')"
                  type="date"
                  variant="outlined"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-bind="form.job" :label="t('employees.model.job')" type="number" variant="outlined" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-bind="form.jg" :label="t('employees.model.jg')" type="number" variant="outlined" />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-card elevation="10">
          <v-card-title>
            <span class="lstick tw-top-[28px]" />
            <div class="d-flex justify-space-between tw-items-center">
              <h3 class="text-h5 title mb-1 tw-mt-[4px]">{{ t('contracts.title') }}</h3>
            </div>
          </v-card-title>
          <v-divider />
          <v-card-text>
            <div v-for="(contract, index) in form.contracts" :key="index">
              <v-row dense>
                <v-col cols="12">
                  <v-row dense>
                    <v-col cols="12" sm="6">
                      <v-select
                        v-bind="form.contracts[index].type"
                        :items="contractTypes"
                        :label="t('contracts.model.type')"
                        variant="outlined"
                      />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-bind="form.contracts[index].number"
                        :label="t('contracts.model.number')"
                        variant="outlined"
                      />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-bind="form.contracts[index].contract_from"
                        :label="t('contracts.model.contractFrom')"
                        type="date"
                      />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-bind="form.contracts[index].contract_to"
                        :label="t('contracts.model.contractTo')"
                        type="date"
                      />
                    </v-col>
                    <v-col cols="12">
                      <div class="tw-w-full">
                        <app-file-pond
                          v-bind="form.contracts[index].contract_file"
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
              <v-divider v-if="index !== form.contracts.length - 1" class="tw-my-2" />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-form>
</template>

<style scoped>
.hide-spin-buttons >>> input[type='number'] {
  -moz-appearance: textfield;
}

.hide-spin-buttons >>> input::-webkit-outer-spin-button,
.hide-spin-buttons >>> input::-webkit-inner-spin-button {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>

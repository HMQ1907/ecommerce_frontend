<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useQueryClient } from 'vue-query'
import { useToast } from 'vue-toastification'
import { useAbility } from '@casl/vue'
import * as yup from 'yup'
import { EmployeeType } from '@/types/employees/EmployeeTypes'
import DesignationAutocomplete from '@/components/common/autocomplete/DesignationAutocomplete.vue'
import BranchAutocomplete from '@/components/common/autocomplete/BranchAutocomplete.vue'
import RoleAutocomplete from '@/components/users/controls/RoleAutocomplete.vue'
const { can } = useAbility()

const route = useRoute()
const toast = useToast()
const queryClient = useQueryClient()
const { t } = useI18n()
const { $api } = useNuxtApp()

const employee = ref({})
const fetchData = () => {
  $api.employees.getEmployee(route.params.id).then(({ data }) => {
    employee.value = data
    setFieldValue('id', employee?.value.id)
    setFieldValue('branch_id', employee?.value.branch.id)
    setFieldValue('date_to_company', employee?.value.date_to_company)
    setFieldValue('status', employee?.value.status)
    setFieldValue('type', employee?.value.type)
    setFieldValue('position_type', employee?.value.position_type)
    setFieldValue('allowance', employee?.value.allowance)
    setFieldValue('indicator', employee?.value.indicator)
    setFieldValue('is_insurance', employee?.value.is_insurance)
    setFieldValue('date_to_job', employee?.value.date_to_job)
    setFieldValue('job', employee?.value.job)
    setFieldValue('date_of_engagement', employee?.value.date_of_engagement)
    setFieldValue('jg', employee?.value.jg)
    setFieldValue('user.roles', employee?.value.user?.roles)
  })
}

onMounted(async () => {
  await fetchData()
})

const schema = yup.object({
  branch_id: yup.string().nullable().required().label(t('employees.model.branch')),
})

const { defineComponentBinds, handleSubmit, setErrors, setFieldValue } = useForm({
  validationSchema: schema,
  initialValues: {
    id: undefined,
    branch: undefined,
    designation: undefined,
    date_to_company: undefined,
    status: undefined,
    type: undefined,
    position_type: undefined,
    allowance: undefined,
    indicator: undefined,
    is_insurance: true,
    date_to_job: undefined,
    date_to_job_group: undefined,
    job: undefined,
    jg: undefined,
    user: {
      roles: undefined,
    },
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
  date_to_company: defineComponentBinds('date_to_company', vuetifyConfig),
  status: defineComponentBinds('status', vuetifyConfig),
  type: defineComponentBinds('type', vuetifyConfig),
  position_type: defineComponentBinds('position_type', vuetifyConfig),
  allowance: defineComponentBinds('allowance', vuetifyConfig),
  indicator: defineComponentBinds('indicator', vuetifyConfig),
  is_insurance: defineComponentBinds('is_insurance', vuetifyConfig),
  date_to_job: defineComponentBinds('date_to_job', vuetifyConfig),
  date_to_job_group: defineComponentBinds('date_to_job_group', vuetifyConfig),
  job: defineComponentBinds('job', vuetifyConfig),
  jg: defineComponentBinds('jg', vuetifyConfig),
  user: {
    roles: defineComponentBinds('user.roles', vuetifyConfig),
  },
})

const submit = handleSubmit((values) => {
  $api.employees
    .updateCompany(values.id, values)
    .then(() => {
      queryClient.invalidateQueries('employees')
      toast.success(t('common.message.updateSuccess'))
    })
    .catch((err) => {
      setErrors(err)
    })
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

const positionTypes = [
  { title: t('employees.model.employee'), value: 'employee' },
  { title: t('employees.model.manager'), value: 'manager' },
]
</script>

<template>
  <v-card>
    <v-card-title>
      <span class="lstick tw-top-[24px]" />
      <h3 class="text-h5 title mb-1 tw-mt-[4px]">{{ t('employees.action.create.companyDetail') }}</h3>
    </v-card-title>
    <v-divider />
    <v-card-text>
      <v-row dense>
        <v-col cols="12" md="6">
          <branch-autocomplete v-bind="form.branch_id" clearable :label="$t('employees.model.branch')" />
        </v-col>
        <v-col cols="12" md="6">
          <v-select v-bind="form.position_type" :items="positionTypes" :label="t('employees.model.positionType')" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-select v-bind="form.type" :items="employeeTypes" :label="t('employees.model.type')" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-bind="form.date_to_company" :label="t('employees.model.dateToCompany')" type="date" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-bind="form.indicator" :label="t('employees.model.indicator')" variant="outlined" />
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
            v-bind="form.date_to_job_group"
            :label="t('employees.model.dateToJobGroup')"
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
        <v-col cols="12" sm="6">
          <v-checkbox v-bind="form.is_insurance" density="compact" :label="t('employees.model.isInsurance')" />
        </v-col>
        <v-col class="d-flex" cols="12">
          <v-spacer />
          <v-btn v-if="can('edit', 'employees')" class="tw-bg-primary" @click="submit">
            <span class="tw-text-sm tw-text-white tw-font-medium create-button">
              {{ t('common.action.save') }}
            </span>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style scoped lang="scss"></style>

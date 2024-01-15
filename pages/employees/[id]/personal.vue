<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useQueryClient } from 'vue-query'
import { useToast } from 'vue-toastification'
import { useAbility } from '@casl/vue'
import * as yup from 'yup'
import { EmployeeType } from '@/types/employees/EmployeeTypes'
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
    setFieldValue('first_name', employee?.value.first_name)
    setFieldValue('last_name', employee?.value.last_name)
    setFieldValue('gender', employee?.value.gender)
    setFieldValue('date_of_birth', employee?.value.date_of_birth)
    setFieldValue('phone', employee?.value.phone)
    setFieldValue('address', employee?.value.address)
    setFieldValue('education', employee?.value.education)
    setFieldValue('email', employee?.value.email)
  })
}

onMounted(async () => {
  await fetchData()
})

const schema = yup.object({
  first_name: yup.string().nullable().required().max(50).label(t('employees.model.firstName')),
  last_name: yup.string().nullable().required().max(50).label(t('employees.model.lastName')),
  email: yup.string().nullable().max(50).email().label(t('employees.model.email')),
  phone: yup.string().nullable().min(10).max(13).required().label(t('employees.model.phone')),
  education: yup.string().nullable().max(255).required().label(t('employees.model.education')),
})
const { defineComponentBinds, handleSubmit, setErrors, resetForm, setFieldValue } = useForm({
  validationSchema: schema,
  initialValues: {
    first_name: undefined,
    last_name: undefined,
    gender: 'male',
    date_of_birth: undefined,
    phone: undefined,
    address: undefined,
    education: undefined,
    email: undefined,
  } as EmployeeType,
})

const vuetifyConfig = (state: any) => ({
  props: {
    'error-messages': state.errors,
  },
})

const form = ref({
  first_name: defineComponentBinds('first_name', vuetifyConfig),
  last_name: defineComponentBinds('last_name', vuetifyConfig),
  gender: defineComponentBinds('gender', vuetifyConfig),
  date_of_birth: defineComponentBinds('date_of_birth', vuetifyConfig),
  phone: defineComponentBinds('phone', vuetifyConfig),
  address: defineComponentBinds('address', vuetifyConfig),
  education: defineComponentBinds('education', vuetifyConfig),
  email: defineComponentBinds('email', vuetifyConfig),
})

const submit = handleSubmit((values) => {
  $api.employees
    .updatePersonal(values.id, values)
    .then(() => {
      queryClient.invalidateQueries('employees')
      toast.success(t('common.message.updateSuccess'))
    })
    .catch((err) => {
      setErrors(err)
    })
})
</script>

<template>
  <v-card>
    <v-card-title>{{ t('employees.model.personalDetails') }}</v-card-title>
    <v-divider />
    <v-card-text>
      <v-form>
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
            <v-text-field v-bind="form.email" :label="t('employees.model.email')" type="email" variant="outlined" />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field v-bind="form.date_of_birth" :label="t('employees.model.DOB')" type="date" />
          </v-col>
          <v-col cols="12" md="6">
            <div class="d-flex">
              <span class="tw-mt-[10px] tw-text-[14px]">{{ $t('employees.model.gender') }}</span>
              <v-radio-group v-bind="form.gender" defaults-target="male" hide-details inline>
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
        <v-col class="d-flex" cols="12">
          <v-spacer />
          <v-btn v-if="can('edit', 'employees')" class="tw-bg-primary" @click="submit">
            <span class="tw-text-sm tw-text-white tw-font-medium create-button">
              {{ t('common.action.save') }}
            </span>
          </v-btn>
        </v-col>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<style scoped lang="scss"></style>

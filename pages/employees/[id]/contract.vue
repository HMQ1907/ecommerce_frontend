<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useQueryClient } from 'vue-query'
import { useToast } from 'vue-toastification'
import { useAbility } from '@casl/vue'
import { useModal } from 'vue-final-modal'
import { createDialog } from 'vuetify3-dialog'
import * as yup from 'yup'
import CreateContractModal from '@/components/employees/contracts/CreateContractModel.vue'
import { EmployeeContractType } from '@/types/employees/EmployeeContractsTypes'
import EmployeeContractForm from '@/components/employees/EmployeeContractForm.vue'
import table from '@/mixins/table'
import useGetEmployeeContractFiles from '@/composables/use-get-employee-contract-files'

const { can } = useAbility()
const toast = useToast()
const queryClient = useQueryClient()
const { t } = useI18n()
const { $api } = useNuxtApp()
const route = useRoute()

const employeeContract = ref({})
const loading = ref(false)
const loadingUpdate = ref(false)
const id = computed(() => route?.params?.id)

const queryBuilder = ref({
  filters: '',
  sorts: ['-created_at'],
  page: 1,
  limit: table.limit,
})

const fetchData = () => {
  loading.value = true
  $api.employeeContracts
    .getEmployeeContractByEmployeeId(route.params.id)
    .then(({ data }) => {
      employeeContract.value = data
      setFieldValue('id', employeeContract.value.id)
      setFieldValue('type', employeeContract.value.type)
      setFieldValue('number', employeeContract.value.number)
      setFieldValue('contract_from', employeeContract.value.contract_from)
      setFieldValue('contract_to', employeeContract.value.contract_to)
    })
    .finally(() => {
      loading.value = false
    })
}

onMounted(async () => {
  await fetchData()
})

const { open, close } = useModal({
  component: CreateContractModal,
  attrs: {
    clickToClose: false,
    escToClose: false,
    title: t('contracts.action.create'),
    reserveScrollBarGap: false,
    zIndexFn: () => 1010,
    onClosed() {
      close()
      fetchData()
      queryClient.invalidateQueries('employee-contract-files')
    },
  },
})

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

const { defineComponentBinds, handleSubmit, setErrors, setFieldValue } = useForm({
  validationSchema: schema,
  initialValues: {
    id: undefined,
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
  id: defineComponentBinds('id', vuetifyConfig),
  type: defineComponentBinds('type', vuetifyConfig),
  number: defineComponentBinds('number', vuetifyConfig),
  contract_from: defineComponentBinds('contract_from', vuetifyConfig),
  contract_to: defineComponentBinds('contract_to', vuetifyConfig),
  contract_file: defineComponentBinds('contract_file', vuetifyConfig),
})

const headers = ref([
  {
    title: t('contracts.model.image'),
    field: 'url',
    key: 'url',
    align: 'center',
    minWidth: '160px',
    cellRender: {
      name: 'EmployeeContractViewImage',
    },
  },
  {
    title: t('contracts.model.type'),
    field: 'extension',
    key: 'extension',
    align: 'center',
  },
  {
    title: t('contracts.model.file'),
    field: 'filename',
    key: 'filename',
    align: 'center',
    minWidth: '120px',
  },
  {
    title: t('contracts.model.date'),
    field: 'created_at',
    key: 'created_at',
    align: 'center',
    formatter: 'formatDate',
  },
  {
    title: '',
    field: 'action',
    key: 'action',
    align: 'center',
    fixed: 'right',
    cellRender: {
      name: 'CommonAction',
      props: (row: any) => ({
        actions: [
          {
            name: 'download',
            color: 'primary',
            icon: 'mdi-download-outline',
            click: () => window.open(row.url, '_blank'),
          },
          {
            name: 'delete',
            color: 'error',
            icon: 'mdi-delete-outline',
            click: () => deleteEmployeeContractFile(employeeContract.value.id, row.id),
          },
        ],
      }),
    },
  },
])

const { items, totalItems, isLoading, isFetching, refetch } = useGetEmployeeContractFiles(id, queryBuilder)

const deleteEmployeeContractFile = async (id: any, fileId: any) => {
  const isConfirmed = await createDialog({
    level: 'warning',
    title: t('contracts.deleteItem.title'),
    text: t('contracts.deleteItem.text'),
    cardOptions: {
      class: 'delete-dialog',
    },
    buttons: [
      { key: false, title: t('contracts.action.cancel'), color: 'grey' },
      { key: true, title: t('contracts.action.confirm'), color: 'warning' },
    ],
  })

  if (isConfirmed) {
    $api.employeeContracts.deleteEmployeeContractFiles(id, fileId).then(() => {
      queryClient.invalidateQueries('employee-contract-files')
      toast.success(t('common.message.deleteSuccess'))
    })
  }
}

const submit = handleSubmit((values) => {
  loadingUpdate.value = true
  $api.employeeContracts
    .updateEmployeeContract(values.id, values)
    .then(() => {
      queryClient.invalidateQueries('employee-contract-files')
      toast.success(t('common.message.updateSuccess'))
    })
    .catch((err) => {
      setErrors(err)
    })
    .finally(() => {
      loadingUpdate.value = false
    })
})

const addFileStart = () => {
  loadingUpdate.value = true
}

const uploadFileProcessed = () => {
  loadingUpdate.value = false
}
</script>

<template>
  <v-card>
    <v-card-title>
      <span class="lstick tw-top-[28px]" />
      <div class="d-flex justify-space-between tw-items-center">
        <h3 class="text-h5 title mb-1 tw-mt-[4px]">{{ t('contracts.title') }}</h3>
        <v-btn color="primary" icon @click="open">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
    </v-card-title>
    <v-divider />
    <div v-if="loading" class="d-flex justify-center tw-my-2">
      <v-progress-circular indeterminate :size="47" />
    </div>
    <v-card-text v-if="employeeContract !== null && !loading">
      <employee-contract-form
        :item="employeeContract"
        :value="form"
        @add-file-start="addFileStart"
        @processed="uploadFileProcessed"
      />
    </v-card-text>

    <v-card-text v-if="employeeContract === null && !loading">
      <div class="d-flex justify-center">
        <span class="tw-text-[#afb1b6]">{{ t('common.message.noData') }}</span>
      </div>
    </v-card-text>
    <div class="tw-mx-2">
      <common-table
        v-model:page="queryBuilder.page"
        v-model:page-size="queryBuilder.limit"
        :headers="headers"
        height
        hide-pagination
        :items="items"
        :loading="isLoading"
        sequence
        :total-items="totalItems"
        @refetch="refetch"
      />
    </div>
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

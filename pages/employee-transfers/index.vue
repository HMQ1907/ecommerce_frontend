<script setup lang="ts">
import { useToast } from 'vue-toastification'
import { useI18n } from 'vue-i18n'
import { useAbility } from '@casl/vue'
import { useQueryClient } from 'vue-query'
import { chain, get } from 'lodash'
import { ref } from 'vue'
import { createDialog } from 'vuetify3-dialog'
import { useModal } from 'vue-final-modal'
import useGetEmployeeTransfers from '@/composables/use-get-employee-transfers'
import AppFixedPage from '@/components/shared/AppFixedPage.vue'
import AppFilter from '@/components/shared/AppFilter.vue'
import table from '@/mixins/table'
import CreateTransferModel from '@/components/employees/transfers/CreateTransferModel.vue'
import UpdateTransferModal from '@/components/employees/transfers/UpdateTransferModel.vue'

// definePageMeta({
//   action: 'view',
//   resource: 'employee-transfers',
// })

const dayjs = useDayjs()
const toast = useToast()
const { t } = useI18n()
const { $api } = useNuxtApp()
const { can } = useAbility()
const queryClient = useQueryClient()
const router = useRouter()

const headers = ref([
  {
    title: t('transfers.model.employee'),
    field: 'employee.full_name',
    key: 'employee.full_name',
    align: 'left',
    fixed: 'left',
  },
  {
    title: t('transfers.model.branch'),
    field: 'branch',
    key: 'branch',
    align: 'center',
    fixed: 'center',
    children: [
      {
        title: t('transfers.model.fromBranch'),
        field: 'from_branch.name',
        key: 'from_branch.name',
        align: 'center',
        fixed: 'center',
      },
      {
        title: t('transfers.model.toBranch'),
        field: 'to_branch.name',
        key: 'to_branch.name',
        align: 'center',
        fixed: 'center',
      },
    ],
  },
  {
    title: t('transfers.model.designation'),
    field: 'designation',
    key: 'designation',
    align: 'center',
    fixed: 'center',
    children: [
      {
        title: t('transfers.model.fromDesignation'),
        field: 'from_designation.name',
        key: 'from_designation.name',
        align: 'center',
        fixed: 'center',
      },
      {
        title: t('transfers.model.toDesignation'),
        field: 'to_designation.name',
        key: 'to_designation.name',
        align: 'center',
        fixed: 'center',
      },
    ],
  },
  {
    title: t('transfers.model.department'),
    field: 'department',
    key: 'department',
    align: 'center',
    fixed: 'center',
    children: [
      {
        title: t('transfers.model.fromDepartment'),
        field: 'from_department.name',
        key: 'from_department.name',
        align: 'center',
        fixed: 'center',
      },
      {
        title: t('transfers.model.toDepartment'),
        field: 'to_department.name',
        key: 'to_department.name',
        align: 'center',
        fixed: 'center',
      },
    ],
  },
  {
    title: t('transfers.model.transferDate'),
    field: 'transfer_date',
    key: 'transfer_date',
    align: 'left',
    fixed: 'left',
    formatter: 'formatDate',
  },
  {
    title: t('transfers.model.noticeDate'),
    field: 'notice_date',
    key: 'notice_date',
    align: 'left',
    fixed: 'left',
    formatter: 'formatDate',
  },
  {
    title: t('common.model.action'),
    field: 'action',
    key: 'action',
    align: 'center',
    fixed: 'right',
    width: '60px',
    cellRender: {
      name: 'CommonAction',
      props: (row: any) => ({
        actions: [
          {
            name: 'edit',
            color: 'primary',
            disabled: !can('edit', 'employee_transfers'),
            icon: 'mdi-pencil-outline',
            click: () => editItem(row),
          },
          {
            name: 'delete',
            color: 'error',
            disabled: !can('delete', 'employee_transfers'),
            icon: 'mdi-delete-outline',
            click: () => deleteItem(row),
          },
        ],
      }),
    },
  },
])

const editConfig = ref({
  trigger: 'click',
  mode: 'row',
  showStatus: true,
})

const schema = ref([
  {
    defaultValue: '',
    name: 'q',
    label: t('employees.action.search'),
    type: 'text',
    enabled: true,
    readonly: false,
    class: 'md:tw-w-[230px] xl:tw-w-[450px]',
    clearable: true,
    props: {
      prependInnerIcon: 'mdi-magnify',
    },
  },
])

const queryBuilder = ref({
  filters: chain(schema.value).keyBy('name').mapValues('defaultValue').value(),
  sorts: ['-created_at'],
  page: 1,
  limit: table.limit,
})

const { items, totalItems, isLoading, isFetching, refetch } = useGetEmployeeTransfers(queryBuilder)

const { open, close } = useModal({
  component: CreateTransferModel,
  attrs: {
    clickToClose: false,
    escToClose: false,
    title: t('transfers.action.create'),
    zIndexFn: () => 1010,
    onClosed() {
      close()
    },
  },
})

const editItem = (item: any) => {
  const { open, close } = useModal({
    component: UpdateTransferModal,
    attrs: {
      clickToClose: false,
      escToClose: false,
      item,
      title: t('transfers.action.update'),
      zIndexFn: () => 1010,
      onClosed() {
        close()
      },
    },
  })
  open()
}

const deleteItem = async (item: any) => {
  const isConfirmed = await createDialog({
    level: 'warning',
    title: t('employees.message.deleteTitle'),
    text: t('employees.message.deleteText', { name: item.full_name }),
    cardOptions: {
      class: 'delete-dialog',
    },
    buttons: [
      { key: false, title: t('common.action.cancel'), color: 'grey' },
      { key: true, title: t('common.action.confirm'), color: 'warning' },
    ],
  })

  if (isConfirmed) {
    $api.employeeTransfers.deleteEmployeeTransfer(item.id).then(() => {
      toast.success(t('common.message.deleteSuccess'))
      refetch.value()
    })
  }
}
</script>

<template>
  <app-fixed-page :title="$t('transfers.title')">
    <template #leftAction>
      <app-filter
        v-model:value="queryBuilder"
        addition-button-class="tw-flex lg:tw-hidden"
        :schema="schema"
        @apply="refetch"
      >
        <v-btn class="tw-flex md:tw-hidden tw-w-5 tw-h-5 tw-px-2 tw-py-0 tw-rounded-[4px] tw-bg-primary" flat size="40">
          <FilePlusIcon class="tw-text-white" />
        </v-btn>
      </app-filter>
    </template>
    <template #rightAction>
      <div class="gap-2 justify-end tw-items-center tw-hidden md:tw-flex">
        <v-btn v-if="can('create', 'employee_transfers')" class="tw-bg-primary tw-w-[168px]" @click="open">
          <span class="tw-text-sm tw-text-white tw-font-medium create-button">
            {{ t('transfers.action.create') }}
          </span>
        </v-btn>
      </div>
    </template>
    <template #table>
      <common-table
        v-model:page="queryBuilder.page"
        v-model:page-size="queryBuilder.limit"
        :edit-config="editConfig"
        :headers="headers"
        :items="items"
        :loading="isLoading"
        sequence
        :total-items="totalItems"
        @refetch="refetch"
      />
    </template>
  </app-fixed-page>
</template>

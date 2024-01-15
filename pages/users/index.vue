<script setup lang="ts">
import { chain } from 'lodash'
import { useI18n } from 'vue-i18n'
import { useModal } from 'vue-final-modal'
import { useAbility } from '@casl/vue'
import { useToast } from 'vue-toastification'
import { createDialog } from 'vuetify3-dialog'
import useGetUser from '@/composables/use-get-user'
import AppFixedPage from '@/components/shared/AppFixedPage'
import AppFilter from '@/components/shared/AppFilter'
import CreateUserModal from '@/components/users/CreateUserModal'
import UpdateUserModal from '@/components/users/UpdateUserModal'
import RolesButton from '@/components/users/controls/RolesButton'
import table from '@/mixins/table'

definePageMeta({
  action: 'view',
  resource: 'users',
})

const { $api } = useNuxtApp()
const { t } = useI18n()
const { can } = useAbility()
const toast = useToast()
const dayjs = useDayjs()

const headers = ref([
  {
    title: t('employees.model.branch'),
    field: 'branch_name',
    key: 'branch_name',
    align: 'left',
    minWidth: '140px',
  },
  {
    title: t('users.model.user'),
    field: 'name',
    key: 'name',
    align: 'left',
    minWidth: '140px',
  },
  {
    title: t('users.model.email'),
    field: 'email',
    key: 'email',
    align: 'center',
    minWidth: '100px',
  },
  {
    title: t('users.model.role'),
    field: 'role',
    key: 'role',
    align: 'left',
    minWidth: '140px',
    editRender: {
      name: 'EmployeeRoles',
      props: (row: any) => ({
        user: row,
        disabled: !can('edit', 'users'),
      }),
    },
  },
  {
    title: t('users.model.status'),
    field: 'status',
    key: 'status',
    align: 'left',
    minWidth: '140px',
    cellRender: {
      name: 'CommonSwitch',
      props: {
        openValue: 'active',
        closeValue: 'inactive',
        disabled: true,
      },
    },
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
            color: 'info',
            disabled: !can('edit', 'users'),
            icon: 'mdi-pencil-outline',
            click: () => editItem(row),
          },
          {
            name: 'delete',
            color: 'error',
            disabled: !can('delete', 'users'),
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
    label: t('common.filter.searchByName'),
    type: 'text',
    enabled: true,
    readonly: false,
    class: 'md:tw-w-[230px] xl:tw-w-[450px]',
    clearable: true,
    props: {
      prependInnerIcon: 'mdi-magnify',
    },
  },
  {
    defaultValue: null,
    name: 'roles',
    label: t('users.model.role'),
    type: 'RoleAutocomplete',
    class: 'md:tw-w-[230px] xl:tw-w-[450px] ',
    enabled: true,
    clearable: true,
    readonly: false,
  },
])

const selectedItems = ref([])
const queryBuilder = ref({
  filters: chain(schema.value).keyBy('name').mapValues('defaultValue').value(),
  sorts: ['-created_at'],
  includes: ['roles'],
  page: 1,
  limit: table.limit,
})
const { items, totalItems, isLoading, isFetching, refetch } = useGetUser(queryBuilder)

const filterByRole = (name: string) => {
  queryBuilder.value.filters.role = name
  refetch.value()
}

const { open, close } = useModal({
  component: CreateUserModal,
  attrs: {
    title: 'Tạo mới người dùng',
    clickToClose: false,
    escToClose: false,
    // reserveScrollBarGap: false,
    zIndexFn: () => 1010,
    onClosed() {
      close()
    },
  },
})

const editItem = (item: any) => {
  const { open, close } = useModal({
    component: UpdateUserModal,
    attrs: {
      item,
      title: 'Sửa người dùng',
      clickToClose: false,
      escToClose: false,
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
    title: 'Bạn có chắc chắn muốn xóa?',
    text: `Bạn có muốn xóa người dùng ${item.name}`,
    cardOptions: {
      class: 'delete-dialog',
    },
    buttons: [
      { key: false, title: 'Hủy', color: 'grey' },
      { key: true, title: 'Xác nhận', color: 'warning' },
    ],
  })

  if (isConfirmed) {
    $api.users.deleteUser(item.id).then(() => {
      toast.success(t('common.message.updateSuccess'))
      refetch.value()
    })
  }
}
</script>

<template>
  <app-fixed-page :title="t('users.title.list')">
    <template #leftAction>
      <app-filter
        v-model:value="queryBuilder"
        addition-button-class="tw-flex lg:tw-hidden"
        :schema="schema"
        @apply="refetch"
      >
        <v-btn
          v-if="can('create', 'users')"
          class="tw-flex md:tw-hidden tw-w-5 tw-h-5 tw-px-2 tw-py-0 tw-rounded-[4px] tw-bg-primary"
          flat
          size="40"
          @click="open"
        >
          <FilePlusIcon class="tw-text-white" />
        </v-btn>
        <template #menu>
          <roles-button class="tw-flex-col" @click="filterByRole" />
        </template>
      </app-filter>
    </template>
    <template #rightAction>
      <div class="gap-2 justify-end tw-items-center tw-hidden md:tw-flex">
        <v-btn :disabled="isFetching" icon variant="text" @click="refetch">
          <RefreshIcon size="20" />
        </v-btn>
        <v-btn v-if="can('create', 'users')" class="tw-bg-primary" @click="open">
          <span class="tw-text-sm tw-text-white tw-font-medium">{{ t('users.action.create') }}</span>
        </v-btn>
      </div>
    </template>
    <template #table>
      <common-table
        v-model:page="queryBuilder.page"
        v-model:page-size="queryBuilder.limit"
        v-model:selected="selectedItems"
        v-model:sorts="queryBuilder.sorts"
        checkbox
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

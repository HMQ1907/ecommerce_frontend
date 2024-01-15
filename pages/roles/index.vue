<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useModal } from 'vue-final-modal'
import { createDialog } from 'vuetify3-dialog'
import { useToast } from 'vue-toastification'
import { useAbility } from '@casl/vue'
import AppFixedPage from '@/components/shared/AppFixedPage'
import useGetRoles from '@/composables/use-get-roles'
import CreateRoleModal from '@/components/roles/CreateRoleModal'
import UpdateRoleModal from '@/components/roles/UpdateRoleModal'
import table from '@/mixins/table'

definePageMeta({
  action: 'view',
  resource: 'roles',
})

const { t } = useI18n()
const { can } = useAbility()
const { $api } = useNuxtApp()
const toast = useToast()

const headers = ref([
  {
    title: t('roles.model.display_name'),
    field: 'display_name',
    key: 'display_name',
    align: 'left',
    minWidth: '120px',
    cellRender: {
      name: 'CommonText',
      props: (row: any): any => ({
        element: 'span',
        title: row.display_name,
        classText: 'tw-text-primary',
      }),
      events: {
        click: ({ row }: any) => onEdit(row),
      },
    },
  },
  {
    title: t('roles.model.description'),
    field: 'description',
    key: 'description',
    align: 'left',
    minWidth: '150px',
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
            disabled: !can('edit', 'employees'),
            icon: 'mdi-pencil-outline',
            click: () => onEdit(row),
          },
          {
            name: 'delete',
            color: 'error',
            disabled: !row.is_deletable,
            permission: !can('delete', 'employees'),
            icon: 'mdi-delete-outline',
            click: () => onDelete(row),
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

const queryBuilder = ref({
  sorts: ['-created_at'],
  page: 1,
  limit: table.limit,
})
const { items, totalItems, isLoading, isFetching, refetch } = useGetRoles(queryBuilder)

const { open, close } = useModal({
  component: CreateRoleModal,
  attrs: {
    clickToClose: false,
    escToClose: false,
    title: t('roles.model.createRoles'),
    zIndexFn: () => 1010,
    onClosed() {
      close()
    },
  },
})

const onEdit = (item: any) => {
  const { open, close } = useModal({
    component: UpdateRoleModal,
    attrs: {
      clickToClose: false,
      escToClose: false,
      item,
      title: t('roles.model.updateRoles'),
      zIndexFn: () => 1010,
      onClosed() {
        close()
      },
    },
  })
  open()
}

const onDelete = async (item: any) => {
  const isConfirmed = await createDialog({
    level: 'warning',
    title: t('roles.model.deleteAccept'),
    text: t('roles.model.deleteText', { _role_: item.display_name }),
    cardOptions: {
      class: 'delete-dialog',
    },
    buttons: [
      { key: false, title: t('roles.model.closed'), color: 'grey' },
      { key: true, title: t('roles.model.accept'), color: 'warning' },
    ],
  })

  if (isConfirmed) {
    $api.roles.deleteRole(item.id).then(() => {
      toast.success(t('common.message.updateSuccess'))
      refetch.value()
    })
  }
}
</script>

<template>
  <app-fixed-page :title="t('roles.title')">
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
      />
    </template>
  </app-fixed-page>
</template>

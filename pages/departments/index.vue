<script setup lang="ts">
import { useToast } from 'vue-toastification'
import { useI18n } from 'vue-i18n'
import { useAbility } from '@casl/vue'
import { useQueryClient } from 'vue-query'
import { chain, cloneDeep } from 'lodash'
import { ref } from 'vue'
import { useModal } from 'vue-final-modal'
import { createDialog } from 'vuetify3-dialog'
import useGetDepartments from '@/composables/use-get-departments'
import AppFixedPage from '@/components/shared/AppFixedPage.vue'
import AppFilter from '@/components/shared/AppFilter.vue'
import CreateDepartmentModal from '@/components/departments/CreateDepartmentModal.vue'
import UpdateDepartmentModal from '@/components/departments/UpdateDepartmentModal.vue'
import table from '@/mixins/table'

definePageMeta({
  action: 'view',
  resource: 'departments',
})

const dayjs = useDayjs()
const toast = useToast()
const { t } = useI18n()
const { $api } = useNuxtApp()
const { can } = useAbility()
const queryClient = useQueryClient()

const headers = ref([
  {
    title: t('employees.model.branch'),
    field: 'branch_name',
    key: 'branch_name',
    align: 'left',
    minWidth: '120px',
  },
  {
    title: t('departments.model.name'),
    field: 'name',
    key: 'name',
    align: 'left',
    minWidth: '220px',
    treeNode: true,
  },
  // {
  //   title: t('departments.model.manager'),
  //   field: 'manager.full_name',
  //   key: 'manager_name',
  //   align: 'left',
  //   minWidth: '160px',
  // },
  {
    title: t('employees.model.employee'),
    field: 'employees',
    key: 'employees',
    align: 'left',
    width: '250px',
    cellRender: {
      name: 'CommonVChip',
      props: (row: any): any => ({
        items: row.employees.map((e: any) => {
          return {
            name: e.first_name + ' ' + e.last_name,
            image: e.avatar,
          }
        }),
      }),
    },
  },
  {
    title: t('departments.model.status'),
    field: 'status',
    key: 'status',
    align: 'center',
    minWidth: '60px',
    cellRender: {
      name: 'TableChip',
      props: (row) => {
        return {
          color: row.status === 'active' ? 'success' : 'error',
          title: t(`departments.status.${row.status}`),
        }
      },
    },
  },
  {
    title: t('departments.model.createAt'),
    field: 'created_at',
    key: 'created_at',
    align: 'center',
    minWidth: '120px',
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
            color: 'info',
            // disabled: !can('edit', 'employees'),
            icon: 'mdi-pencil-outline',
            click: () => editItem(row),
          },
          {
            name: 'delete',
            color: 'error',
            // disabled: !can('delete', 'employees'),
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
    label: t('departments.action.search'),
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
    defaultValue: 0,
    name: 'is_chart',
    hide: true,
  },
  // {
  //   defaultValue: 1,
  //   name: 'branch_id',
  //   label: t('employees.model.branch'),
  //   type: 'BranchAutocomplete',
  //   enabled: true,
  //   readonly: false,
  //   class: 'tw-w-30 sm:tw-w-[200px]',
  //   clearable: false,
  //   props: {
  //     autoSelectFirst: true,
  //     itemText: 'name',
  //     itemValue: 'id',
  //   },
  // },
])

const queryBuilder = ref({
  filters: chain(schema.value).keyBy('name').mapValues('defaultValue').value(),
  is_chart: 1,
  sorts: ['-created_at'],
  page: 1,
  limit: table.limit,
})

const { items, totalItems, isLoading, isFetching, refetch } = useGetDepartments(queryBuilder)

const tableData = ref([])
watch(
  () => items.value,
  () => {
    tableData.value = cloneDeep(items.value)
  },
  {
    immediate: true,
    deep: true,
  }
)

const { open, close } = useModal({
  component: CreateDepartmentModal,
  attrs: {
    clickToClose: false,
    escToClose: false,
    title: t('departments.action.create'),
    branchId: queryBuilder.value.filters.branch_id,
    zIndexFn: () => 1010,
    onClosed() {
      close()
    },
  },
})

const editItem = (item: any) => {
  const { open, close } = useModal({
    component: UpdateDepartmentModal,
    attrs: {
      clickToClose: false,
      escToClose: false,
      item,
      title: t('departments.action.update'),
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
    title: t('departments.message.deleteTitle'),
    text: t('departments.message.deleteText', { name: item.name }),
    cardOptions: {
      class: 'delete-dialog',
    },
    buttons: [
      { key: false, title: t('common.action.cancel'), color: 'grey' },
      { key: true, title: t('common.action.confirm'), color: 'warning' },
    ],
  })

  if (isConfirmed) {
    $api.departments.deleteDepartment(item.id).then(() => {
      toast.success(t('common.message.updateSuccess'))
      refetch.value()
    })
  }
}

const cellStyleOption = ref({
  rowClassNameOption: ({ row }: any) => {
    const cellClass = []

    return cellClass.join(' ')
  },
})

const loadChildrenMethod = ({ row }) => {
  return $api.departments
    .getDepartment(row.id, {
      include: ['children'],
    })
    .then(({ data }) => {
      return data.children
    })
}

const treeConfig = ref({
  transform: true,
  expandAll: true,
  lazy: false,
  iconOpen: 'vxe-icon-square-minus',
  iconClose: 'vxe-icon-square-plus',
  rowField: 'id',
  parentField: 'parent_id',
  hasChild: 'has_child',
  loadMethod: loadChildrenMethod,
})
</script>

<template>
  <app-fixed-page :title="$t('departments.title.list')">
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
        <v-btn class="tw-bg-primary tw-w-[168px]" @click="open">
          <span class="tw-text-sm tw-text-white tw-uppercase tw-font-medium create-button">
            {{ t('departments.action.create') }}
          </span>
        </v-btn>
      </div>
    </template>
    <template #listAction>
      <v-btn-toggle class="tw-pa-1" color="primary">
        <v-tooltip bottom color="primary">
          <template #activator="{ on, attrs }">
            <v-btn v-bind="attrs" exact small :to="{ name: 'departments' }" v-on="on">
              <v-icon small>mdi-format-list-bulleted</v-icon>
            </v-btn>
          </template>
          <span>{{ $t('departments.title.list') }}</span>
        </v-tooltip>
        <v-tooltip bottom color="primary">
          <template #activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              exact
              small
              :to="{ name: 'departments-chart', query: { branch_id: queryBuilder.filters.branch_id } }"
              v-on="on"
            >
              <v-icon small>mdi-sitemap-outline</v-icon>
            </v-btn>
          </template>
          <span>{{ $t('departments.model.viewChart') }}</span>
        </v-tooltip>
      </v-btn-toggle>
    </template>
    <template #table>
      <common-table
        v-model:page="queryBuilder.page"
        v-model:page-size="queryBuilder.limit"
        :edit-config="editConfig"
        :headers="headers"
        :items="items"
        :keep-source="true"
        :loading="isLoading"
        :row-class-name-option="cellStyleOption.rowClassNameOption"
        sequence
        sequence-align="left"
        :sequence-size="100"
        :total-items="totalItems"
        :tree-config="treeConfig"
        @refetch="refetch"
      />
    </template>
  </app-fixed-page>
</template>

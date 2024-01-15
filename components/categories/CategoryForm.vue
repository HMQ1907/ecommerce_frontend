<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { createDialog } from 'vuetify3-dialog'
import { useToast } from 'vue-toastification'
import { useQueryClient } from 'vue-query'
import table from '@/mixins/table'
import AppFixedPage from '@/components/shared/AppFixedPage'
import useGetCategories from '@/composables/use-get-categories'
import { validator as categoryValidator } from '@/validators/category'

const { t } = useI18n()
const { $api } = useNuxtApp()
const toast = useToast()
const queryClient = useQueryClient()
const emit = defineEmits(['closed', 'submit'])

const editConfig = ref({
  trigger: 'click',
  mode: 'row',
  showStatus: true,
})

const headers = ref([
  {
    title: t('categories.model.name'),
    field: 'category_name',
    key: 'category_name',
    align: 'left',
    minWidth: '140px',
    editRender: {
      name: '$input',
      events: {
        blur: (e: any, data: any) => onInputChange(e, data),
      },
    },
    validator: ({ cellValue }: any) => categoryValidator.name(t('categories.model.name'), cellValue),
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
            name: 'delete',
            color: 'error',
            icon: 'mdi-delete-outline',
            click: () => deleteRow(row),
          },
        ],
      }),
    },
  },
])

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
])

const queryBuilder = ref({
  filters: '',
  sorts: ['-created_at'],
  page: 1,
  limit: table.limit,
})

const loading = ref(false)

const { items, totalItems, isLoading, isFetching, refetch } = useGetCategories(queryBuilder)

const deleteRow = async (row: any) => {
  const isConfirmed = await createDialog({
    level: 'warning',
    title: t('categories.action.delete'),
    text: t('categories.action.deleteItem'),
    cardOptions: {
      class: 'delete-dialog',
    },
    buttons: [
      { key: false, title: t('customer.action.cancel'), color: 'grey' },
      { key: true, title: t('customer.action.confirm'), color: 'warning' },
    ],
  })
  if (isConfirmed) {
    loading.value = true
    $api.productCategories
      .deleteCategory(row.id)
      .then(() => {
        toast.success(t('common.message.updateSuccess'))
        refetch.value()
      })
      .finally(() => {
        loading.value = false
      })
  }
}
const onInputChange = ({ row }: any, { value }: any) => {
  if (value.trim().length !== 0) {
    loading.value = true
    $api.productCategories
      .updateCategory(row.id, {
        category_name: value,
      })
      .then(() => {
        queryClient.invalidateQueries('project-categories')
        toast.success(t('categories.action.update'))
        emit('closed')
      })
      .finally(() => {
        loading.value = false
      })
  }
}
const textCategory = ref('')
const addRow = () => {
  if (textCategory.value.trim().length !== 0) {
    loading.value = true
    $api.productCategories
      .createCategory({ category_name: textCategory.value })
      .then(() => {
        queryClient.invalidateQueries('project-categories')
        toast.success(t('common.message.createSuccess'))
      })
      .finally(() => {
        textCategory.value = ''
        loading.value = false
      })
  }
}
</script>

<template>
  <common-table
    v-model:page="queryBuilder.page"
    v-model:page-size="queryBuilder.limit"
    v-model:selected="queryBuilder.page"
    class="tw-h-[40vh]"
    :edit-config="editConfig"
    :headers="headers"
    :items="items"
    :loading="isLoading || loading"
    sequence
    :total-items="totalItems"
  />
  <v-progress-linear class="tw-my-2" />
  <div class="tw-flex">
    <v-text-field v-model="textCategory" :label="$t('categories.model.label')" />
    <v-btn class="tw-mx-2" color="primary" variant="outlined" @click="addRow">
      {{ t('categories.action.createItem') }}
    </v-btn>
  </div>
</template>

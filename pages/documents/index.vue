<script setup lang="ts">
import { useToast } from 'vue-toastification'
import { useI18n } from 'vue-i18n'
import { useAbility } from '@casl/vue'
import { useQueryClient } from 'vue-query'
import { chain } from 'lodash'
import { useModal } from 'vue-final-modal'
import { createDialog } from 'vuetify3-dialog'
import useGetDocuments from '@/composables/use-get-documents'
import AppFixedPage from '@/components/shared/AppFixedPage'
import AppFilter from '@/components/shared/AppFilter'
import CreateDocumentModal from '@/components/documents/CreateDocumentModal'
import UpdateDocumentModal from '@/components/documents/UpdateDocumentModal'
import table from '@/mixins/table'
import { fileDownloader } from '@/utils/file-downloader'
import PreviewModal from '@/components/shared/PreviewModal'

// definePageMeta({
//   action: 'view',
//   resource: 'documents',
// })

const dayjs = useDayjs()
const toast = useToast()
const { t } = useI18n()
const { $api } = useNuxtApp()
const { can } = useAbility()
const queryClient = useQueryClient()

const headers = ref([
  {
    title: t('documents.model.category'),
    field: 'category_name',
    key: 'category_name',
    align: 'left',
    minWidth: '80px',
  },
  {
    title: t('documents.model.name'),
    field: 'name',
    key: 'name',
    align: 'left',
    minWidth: '160px',
    cellRender: {
      name: 'DocumentViewFile',
      props: (row: any): any => ({
        title: row.name,
        icon: 'mdi-open-in-new',
      }),
      events: {
        click: ({ row }: any) => viewFile(row),
      },
    },
  },
  {
    title: t('documents.model.mimeType'),
    field: 'media.mime_type',
    key: 'mime_type',
    align: 'left',
    minWidth: '120px',
  },
  {
    title: t('documents.model.documentNumber'),
    field: 'document_number',
    key: 'document_number',
    align: 'left',
    minWidth: '100px',
  },
  {
    title: t('documents.model.content'),
    field: 'content',
    key: 'content',
    align: 'left',
    type: 'html',
    minWidth: '120px',
  },
  {
    title: t('documents.model.size'),
    field: 'media.human_size',
    key: 'human_size',
    align: 'left',
    minWidth: '80px',
  },
  {
    title: t('documents.model.issuedDate'),
    field: 'issued_date',
    key: 'issued_date',
    align: 'left',
    minWidth: '80px',
    formatter: 'formatDate',
  },
  {
    title: t('documents.model.createdAt'),
    field: 'created_at',
    key: 'created_at',
    align: 'left',
    minWidth: '80px',
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
            name: 'download',
            color: 'info',
            icon: 'mdi-download-outline',
            disabled: !can('download', 'documents'),
            click: () => download(row),
          },
          {
            name: 'edit',
            color: 'info',
            icon: 'mdi-pencil-outline',
            disabled: !can('edit', 'documents'),
            click: () => updateDocument(row),
          },
          {
            name: 'delete',
            color: 'error',
            disabled: !can('delete', 'documents'),
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
    label: t('documents.action.search'),
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
    name: 'category_id',
    label: t('documents.model.category'),
    type: 'DocumentCategoryAutocomplete',
    enabled: true,
    readonly: false,
    class: 'tw-w-30 sm:tw-w-[200px]',
    clearable: true,
    props: {
      itemText: 'name',
      itemValue: 'id',
    },
  },
  {
    defaultValue: [],
    name: 'date_between',
    type: 'date',
    enabled: true,
    readonly: false,
    clearable: true,
    class: 'tw-w-[50%] md:tw-w-[230px] xl:tw-w-[450px]',
    props: {
      range: true,
      label: t('documents.model.createdAt'),
    },
  },
])

const queryBuilder = ref({
  filters: chain(schema.value).keyBy('name').mapValues('defaultValue').value(),
  sorts: ['-created_at'],
  page: 1,
  limit: table.limit,
})

const { items, totalItems, isLoading, isFetching, refetch } = useGetDocuments(queryBuilder)

const createDocument = () => {
  const { open, close } = useModal({
    component: CreateDocumentModal,
    attrs: {
      clickToClose: false,
      escToClose: false,
      title: t('documents.action.create'),
      reserveScrollBarGap: false,
      zIndexFn: () => 1010,
      onClosed() {
        close()
      },
    },
  })
  open()
}

const updateDocument = (item: any) => {
  const { open, close } = useModal({
    component: UpdateDocumentModal,
    attrs: {
      clickToClose: false,
      escToClose: false,
      title: t('documents.action.create'),
      item,
      reserveScrollBarGap: false,
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
    title: t('documents.action.delete.title'),
    text: t('documents.action.delete.text', { name: item.name }),
    cardOptions: {
      class: 'delete-dialog',
    },
    buttons: [
      { key: false, title: t('common.action.cancel'), color: 'grey' },
      { key: true, title: t('common.action.confirm'), color: 'warning' },
    ],
  })

  if (isConfirmed) {
    $api.documents.deleteDocument(item.id).then(() => {
      toast.success(t('common.message.updateSuccess'))
      refetch.value()
    })
  }
}
const download = (item: any) => {
  $api.documents.downloadDocument(item.id).then((data) => {
    fileDownloader(data, item.media?.filename)
  })
}

const viewFile = (item: any) => {
  const { open, close } = useModal({
    component: PreviewModal,
    attrs: {
      src: item.media?.url,
      media: item.media,
      escToClose: true,
      preventClick: true,
      clickToClose: false,
      zIndexFn: () => 1010,
      onClosed() {
        close()
      },
    },
  })
  open()
}

const tab = ref(0)
const documentTypes = [
  {
    title: t('documents.model.from'),
    tab: 0,
  },
  {
    title: t('documents.model.to'),
    tab: 1,
  },
]

watch(
  () => tab.value,
  () => {
    queryBuilder.value.filters.type = documentTypes[tab.value].tab === 0 ? 'from' : 'to'
  },
  {
    immediate: true,
  }
)
</script>

<template>
  <app-fixed-page :title="$t('documents.title')">
    <template #leftAction>
      <app-filter v-model:value="queryBuilder" :display="3" :schema="schema" @apply="refetch">
        <v-btn class="tw-flex md:tw-hidden tw-w-5 tw-h-5 tw-px-2 tw-py-0 tw-rounded-[4px] tw-bg-primary" flat size="40">
          <FilePlusIcon class="tw-text-white" />
        </v-btn>
      </app-filter>
    </template>
    <template #rightAction>
      <div class="gap-2 justify-end tw-items-center tw-hidden md:tw-flex">
        <v-btn :disabled="isFetching" icon variant="text" @click="refetch">
          <RefreshIcon size="20" />
        </v-btn>
        <v-btn v-if="can('create', 'documents')" class="tw-bg-primary tw-w-[168px]" @click="createDocument">
          <span class="tw-text-sm tw-text-white tw-font-medium create-button">
            {{ t('documents.action.create') }}
          </span>
        </v-btn>
      </div>
    </template>
    <template #table>
      <div class="tw-w-full">
        <v-tabs v-model="tab" background-color="primary" dark>
          <v-tab v-for="item in documentTypes" :key="item.tab">
            {{ item.title }}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item v-if="tab === 0" :key="0">
            <common-table
              v-model:page="queryBuilder.page"
              v-model:page-size="queryBuilder.limit"
              class="tw-h-[90%]"
              :edit-config="editConfig"
              :headers="headers"
              :items="items"
              :loading="isLoading"
              sequence
              :total-items="totalItems"
            />
          </v-tab-item>
          <v-tab-item v-if="tab === 1" :key="1" class="tw-h-full">
            <common-table
              v-model:page="queryBuilder.page"
              v-model:page-size="queryBuilder.limit"
              class="tw-h-[90%]"
              :edit-config="editConfig"
              :headers="headers"
              :items="items"
              :loading="isLoading"
              sequence
              :total-items="totalItems"
            />
          </v-tab-item>
        </v-tabs-items>
      </div>
    </template>
  </app-fixed-page>
</template>

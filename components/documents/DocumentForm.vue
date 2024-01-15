<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import AppFilePond from '@/components/common/AppFilePond'
import { DocumentTypes } from '@/types/documents/DocumentTypes'
import BranchAutocomplete from '@/components/common/autocomplete/BranchAutocomplete.vue'
import DocumentCategoryAutocomplete from '@/components/documents/controls/DocumentCategoryAutocomplete'
import VEditor from '@/components/common/VEditor'

const props = defineProps({
  value: {
    type: Object as PropType<DocumentTypes>,
    required: true,
  },
  item: {
    type: Object as PropType<DocumentTypes>,
    default: () => ({
      categories: [],
    }),
  },
  update: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:value'])
const { t } = useI18n()
const form = computed<DocumentTypes>({
  get: () => props.value,
  set: (val) => emit('update:value', val),
})

const files = computed(() => {
  if (!props.item.attachment_id) return []

  return [
    {
      source: props.item.media?.url,
      options: {
        type: 'local',
        file: {
          name: props.item.media?.filename,
          size: props.item.media?.size,
          type: props.item.media?.mime_type,
        },
        metadata: {
          poster: props.item.media?.url,
        },
      },
    },
  ]
})

const documentTypes = [
  {
    title: t('documents.model.from'),
    value: 'from',
  },
  {
    title: t('documents.model.to'),
    value: 'to',
  },
]
</script>

<template>
  <v-row dense>
    <v-col cols="12" sm="4">
      <document-category-autocomplete
        v-bind="form.category_id"
        clearable
        :default-items="item.categories"
        :label="$t('documents.model.category')"
      />
    </v-col>
    <v-col cols="12" sm="4">
      <v-text-field v-bind="form.name" :label="$t('documents.model.name')" />
    </v-col>
    <v-col cols="12" sm="4">
      <v-select
        v-bind="form.type"
        item-text="text"
        item-value="value"
        :items="documentTypes"
        :label="$t('documents.model.type')"
      />
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field v-bind="form.document_number" :label="$t('documents.model.documentNumber')" />
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        v-bind="form.issued_date"
        :label="$t('documents.model.issuedDate')"
        type="date"
        variant="outlined"
      />
    </v-col>
    <v-col cols="12">
      <span>{{ $t('documents.model.content') }}</span>
      <v-editor v-bind="form.content" />
    </v-col>
    <v-col cols="12">
      <span>{{ t('documents.model.addFile') }}</span>
      <div class="tw-w-full">
        <app-file-pond
          v-bind="form.attachment"
          accept="image/*,video/*,audio/*, text/plain, application/msword, application/pdf, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          as-file
          :grid="false"
          :init-files="files"
        />
      </div>
    </v-col>
  </v-row>
</template>

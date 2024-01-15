<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
import { ref } from 'vue'
import { useQueryClient } from 'vue-query'
import AppFilePond from '@/components/common/AppFilePond'

const toast = useToast()
const { $api } = useNuxtApp()
const { t } = useI18n()
const props = defineProps({
  files: {
    type: Array,
    default: () => [],
  },
  accept: {
    type: String,
    default: 'image/*,video/*,audio/*,application/pdf',
  },
  id: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:value', 'refresh'])

const id = parseInt(props.id)

const showUploadSection = ref(false)
const isSubmitting = ref(false)
const isSubmitRemove = ref(false)
const queryClient = useQueryClient()

const onUpload = () => {
  showUploadSection.value = true
}

const onClose = () => {
  showUploadSection.value = false
}

const files = computed(() => {
  if (!props.files.url) return []

  return [
    {
      source: props.files.url,
      options: {
        type: 'local',
        file: {},
        metadata: {
          poster: props.files.url,
        },
      },
    },
  ]
})

const form = ref({
  media_ids: [],
})

const submit = () => {
  isSubmitting.value = true
  if (form.value.media_ids.length !== 0) {
    $api.projects
      .updateProjectFile(id, form.value)
      .then(() => {
        toast.success(t('common.message.createSuccess'))
        queryClient.invalidateQueries('project-files')
        emit('refresh')
      })
      .finally(() => {
        isSubmitting.value = false
        isSubmitRemove.value = true
      })
  } else {
    toast.error(t('projectFiles.message.text'))
    isSubmitting.value = false
  }
}
</script>

<template>
  <v-card variant="outlined">
    <v-card-title>
      <span>{{ t('products.model.files') }}</span>
    </v-card-title>
    <div class="tw-w-full tw-p-2">
      <div v-if="!showUploadSection" class="hover-style tw-mb-1" @click="onUpload">
        <v-icon>mdi-plus-circle-outline</v-icon>
        <span class="tw-ml-1">{{ t('common.action.uploadFile') }}</span>
      </div>
      <template v-if="showUploadSection">
        <div class="tw-mb-1">
          <span>{{ t('common.action.uploadFile') }}</span>
        </div>
        <app-file-pond
          v-model="form.media_ids"
          :accept="props.accept"
          :init-files="files"
          :is-submit-remove="isSubmitRemove"
          multiple
        />
        <div class="d-flex mt-4 justify-end">
          <v-btn class="mr-2" @click="onClose">{{ $t('common.action.cancel') }}</v-btn>
          <v-btn class="mr-2" color="primary" :loading="isSubmitting" @click="submit">
            {{ $t('common.action.create') }}
          </v-btn>
        </div>
      </template>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
.hover-style {
  cursor: pointer;
}
</style>

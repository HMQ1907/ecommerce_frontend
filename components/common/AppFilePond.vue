<script setup lang="ts">
import axios from '@/utils/axios'
import { useI18n } from 'vue-i18n'
import VueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginMediaPreview from 'filepond-plugin-media-preview'
import 'filepond-plugin-media-preview/dist/filepond-plugin-media-preview.min.css'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import FilePondPluginFilePoster from 'filepond-plugin-file-poster'
import 'filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css'
// import FilePondPluginGetFile from 'filepond-plugin-get-file'
// import 'filepond-plugin-get-file/dist/filepond-plugin-get-file.min.css'
import { extensionToIcon } from '@/utils/file-icon'

const FilePond = VueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginMediaPreview,
  FilePondPluginImagePreview,
  FilePondPluginFilePoster
  // FilePondPluginGetFile
)

const props = defineProps({
  modelValue: {
    type: [String, Number, Array, Object, File],
    default: null,
  },
  initFiles: {
    type: Array,
    default: () => [],
  },
  accept: {
    type: String,
    default: 'image/*',
  },
  required: {
    type: Boolean,
    default: false,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  preview: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  asFile: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: 'Drag & Drop your files or <span class="filepond--label-action"> Browse </span>',
  },
  height: {
    type: Number,
    default: 50,
  },
  panelLayout: {
    type: String,
    default: null,
  },
  grid: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['update:model-value', 'processed', 'removed'])

const { t } = useI18n()
const { data } = useAuth()

const innerValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:model-value', val),
})

const labelIdle = computed(() => {
  return `${t('upload.action.dropHereOrClick')} <span class="filepond--label-action"> ${t(
    'upload.action.browse'
  )} </span> ${t('upload.action.thoroughYourMachine')}`
})

const pond = ref(null)

const files = computed(() => {
  if (innerValue.value instanceof File) {
    return pond.value.getFiles()
  }

  return props.initFiles
})

const runtimeConfig = useRuntimeConfig()
const baseUrl = runtimeConfig.public.apiBase

const server = computed(() => {
  if (props.asFile) return undefined

  return {
    url: baseUrl,
    process: {
      url: '/upload',
      method: 'POST',
      withCredentials: false,
      headers: {
        Authorization: `Bearer ${data.value.jwt}`,
      },
      timeout: 7000,
      onload: handleLoad,
      onerror: null,
      ondata: null,
    },
    revert: handleRemove,
    remove: handleRemove,
  }
})

const handleInit = () => {
  console.log('handleInit')
  // FilePond instance methods are available on `pond.value`
}

const handleProcessFile = (error: any, file: any) => {
  console.log('handleProcessFile')

  if (error) {
    return
  }

  const thumb = extensionToIcon(file.fileType, file.fileExtension) || URL.createObjectURL(file.file)
  file.setMetadata('poster', thumb, true)

  const value = props.asFile ? file.file : file.serverId

  if (props.multiple) {
    innerValue.value.push(value)
  } else {
    innerValue.value = value
  }
}

const handleProcessFiles = () => {
  console.log('handleProcessFiles')

  emit('processed')

  // if (props.multiple) {
  //   innerValue.value = []
  // } else {
  //   innerValue.value = null
  // }
}

const handleActivateFile = (file: any) => {
  console.log('handleActivateFile')

  window.open(getFileUrl(file))
}

const handleAddFile = (error: any, file: any) => {
  console.log('handleAddFile')

  if (error) {
    return
  }

  if (props.asFile && file.file instanceof File) {
    innerValue.value = file.file
  }
}

const handleLoad = (res: any) => {
  let data
  try {
    data = JSON.parse(res).data
  } catch (e) {}

  return data?.id
}

const handleRemove = (id: any, load: any, error: any) => {
  return axios
    .delete(`/media/${id}`)
    .then(() => {
      emit('removed', id)
      load()
    })
    .catch((err) => {
      error(err)
    })
}

const handleAddFileStart = () => {
  console.log('handleAddFileStart')

  emit('add-file-start')
}

const getFileUrl = (file: any) => {
  let url = file.getMetadata('url')
  if (!url && file.file instanceof File) {
    url = URL.createObjectURL(file.file)
  }
  return url
}
</script>

<template>
  <file-pond
    ref="pond"
    :accepted-file-types="accept"
    :allow-audio-preview="preview"
    :allow-image-preview="preview"
    :allow-multiple="multiple"
    :allow-video-preview="preview"
    :class="{ 'filepond-card': panelLayout !== 'circle' && grid }"
    :credits="null"
    :disabled="disabled"
    :file-poster-height="height"
    :files="files"
    :image-preview-height="height"
    :label-idle="labelIdle"
    name="file"
    :required="required"
    :server="server"
    :store-as-file="asFile"
    :style-panel-layout="panelLayout"
    @activatefile="handleActivateFile"
    @addfile="handleAddFile"
    @addfilestart="handleAddFileStart"
    @init="handleInit"
    @processfile="handleProcessFile"
    @processfiles="handleProcessFiles"
  />
</template>

<style lang="scss">
.filepond {
  &--wrapper {
    @apply tw-relative tw-border tw-border-dashed tw-border-gray-400 tw-rounded;
  }

  &--root {
    margin-bottom: 0 !important;
  }
}

.filepond-card {
  .filepond {
    &--list {
      @apply tw-grid tw-grid-cols-6;
    }

    &--item {
      @apply tw-relative;
      transform: none !important;
    }
  }
}
</style>

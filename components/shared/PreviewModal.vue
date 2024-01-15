<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import fileExtension from 'file-extension/file-extension.min'
import { useI18n } from 'vue-i18n'
import { MediaType } from '@/types/MediaType'
import AppFilePreview from '@/components/common/AppFilePreview'

const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  extension: {
    type: String,
    default: '',
  },
  media: {
    type: [Array, Object] as PropType<MediaType[]>,
    default: () => [],
  },
  size: {
    type: [String, Number],
    default: 200,
  },
})
const emit = defineEmits(['closed'])

const { t } = useI18n()

const previewRef = ref(null)
const media = ref(props.media)

const previewAccept = ref(['mp4', 'jpg', 'png', 'jpeg', 'webp', 'svg', 'ogg', 'webm', 'mov', 'flv', 'wmv', 'mkv'])
const officeAccept = ref(['pdf', 'xlsx', 'xls', 'doc', 'docx'])
const isVideo = ref(['mp4', 'webm', 'mov', 'flv', 'wmv', 'mkv'])
const type = computed(() => props.extension || fileExtension(props.src))
const isOffice = computed(() => officeAccept.value.includes(type.value))
const isMedia = computed(() => previewAccept.value.includes(type.value))

const imageView = computed(() => {
  if (!media.value || media.value.length === 0) {
    return []
  }

  // case media is array
  if (Array.isArray(media.value)) {
    return media.value.map((e: MediaType) => ({
      src: e.url,
      description: e.filename,
      autoplay: isVideo.value.includes(type.value),
      controls: isVideo.value.includes(type.value),
    }))
  }

  return [
    {
      src: media.value?.url,
      description: media.value?.filename,
      autoplay: isVideo.value.includes(type.value),
      controls: isVideo.value.includes(type.value),
    },
  ]
})

const srcIframe = computed(() => {
  if (type.value === 'pdf') {
    return props.src
  }

  return `https://view.officeapps.live.com/op/view.aspx?src=${props.src}`
})

onMounted(() => {
  if (!isOffice.value && !isMedia.value) {
    openInNewWindow(props.src)
  }
})

const openInNewWindow = (src: string) => {
  emit('closed')
  const newWindow = window.open()
  newWindow.document.write(`<iframe src="${src}" allowfullscreen height="100%" width="100%"></iframe>`)
}
</script>

<template>
  <app-file-preview v-if="isMedia" ref="previewRef" :images="imageView" :size="size" />
  <vue-final-modal v-else content-transition="vfm-fade" overlay-transition="vfm-fade">
    <v-card class="card-preview tw-relative tw-w-screen tw-h-screen tw-max-w-full">
      <i
        class="mdi mdi-window-close"
        :class="[
          { 'tw-text-stone-700': type === 'doc' || type === 'docx' },
          { ' tw-text-white  tw-right-[132px] tw-top-[12px]': type === 'pdf' },
          { 'tw-text-black tw-right-[60px]': type === 'xlsx' || type === 'xls' },
        ]"
        @click="emit('closed')"
      />
      <v-card-text v-if="isOffice" class="tw-h-screen tw-p-[0px]">
        <iframe frameborder="0" height="100%" :src="srcIframe" width="100%" />
      </v-card-text>
    </v-card>
  </vue-final-modal>
</template>

<style lang="scss" scoped>
.card-preview {
  border-radius: 0 !important;

  .mdi-window-close {
    top: 8px;
    font-size: 22px;
    right: 60px;
    cursor: pointer;
    position: absolute;
    z-index: 9;
  }
}
</style>

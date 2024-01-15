<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import EditorMenubar from '@/components/common/editor/EditorMenubar.vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:model-value', 'blur'])

const editor = useEditor({
  extensions: [StarterKit],
  content: props.modelValue,
  editable: !props.disabled,
})

onMounted(() => {
  editor.value.on('update', () => {
    emit('update:model-value', editor.value.getHTML())
  })
})
</script>

<template>
  <div>
    <label v-if="label" for="editor-label">{{ label }}</label>
    <div v-if="editor">
      <editor-menubar :editor="editor" />
    </div>
    <editor-content id="editor-label" :editor="editor" />
  </div>
</template>

<style lang="scss">
.ProseMirror {
  min-height: 140px;
  height: 100%;
}
</style>

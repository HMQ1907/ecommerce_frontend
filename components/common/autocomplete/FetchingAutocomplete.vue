<script setup lang="ts" generic="T extends { id: string }, C extends { id: string }">
import { debounce } from 'lodash'

export interface ListItem<T> {
  raw: T
  value: string
  title: string
}

const props = defineProps({
  mode: {
    type: String as PropType<'model' | 'add' | 'add-context'>,
    required: true,
  },
  menuMode: {
    type: String as PropType<'initial' | 'repeating'>,
    required: false,
  },
  menuDelay: {
    type: Number as PropType<number>,
    required: false,
    default: 0,
  },
  modelValue: {
    type: String,
    required: false,
  },
  fetch: {
    type: Function as PropType<(filter: string, count: number, context?: C) => Promise<T[]>>,
    required: true,
  },
  contextFetch: {
    type: Function as PropType<(filter: string, count: number) => Promise<C[]>>,
    required: false,
  },
  dependency: {
    type: [String, Number, Array, Object],
    required: false,
    default: () => [],
  },
  initialItems: {
    type: Array as PropType<T[]>,
    required: false,
    default: () => [],
  },
  initialContext: {
    type: Object as PropType<C>,
    required: false,
  },
})

const emit = defineEmits<{
  (event: 'selected-item', value: T): void
  (event: 'update:modelValue', value: string | undefined): void
}>()

const context = ref(props.initialContext ? transformToContextItem(props.initialContext as C) : undefined) as Ref<
  C | undefined
>
const contextMode = computed(() => props.mode == 'add-context')
const contextSearchMode = computed(() => {
  return contextMode.value && context.value == undefined
})
const initialContextModel = computed(() => {
  if (contextMode.value) {
    if (context.value != undefined) {
      return [context.value]
    } else {
      return []
    }
  } else {
    return []
  }
})

const items = ref(contextMode.value ? initialContextModel.value : props.initialItems) as Ref<(T | C)[]>
const search = ref<undefined | string>('')
const menu = ref<boolean>(!!props.menuMode && !props.menuDelay)
const updatedModelValue = ref(false)

const proxiedModel = ref(contextMode.value ? initialContextModel.value.map((it) => it.id) : props.modelValue)
watch(
  () => props.modelValue,
  (model) => {
    proxiedModel.value = model
  }
)
watch(
  () => proxiedModel.value,
  (model) => {
    if (model != props.modelValue) {
      selectedElement(model)
    }
  }
)

const hasSelection = computed(() => {
  return props.mode == 'model' && proxiedModel.value != undefined
})

watch(search, async (search) => {
  if (!updatedModelValue.value) {
    await updateSearch(search ?? '')
  } else {
    updatedModelValue.value = false
  }
})

watch(
  () => props.dependency,
  async () => {
    await updateSearch(search.value ?? '')
  }
)

const updateSearch = debounce(async (search: string) => {
  let newItems: (T | C)[]
  // if (contextSearchMode.value) {
  //   newItems = (await props.contextFetch!(search, 10)).map((item) => transformToContextItem(item))
  // } else {
  //   const untransformedContext = context.value != undefined ? untransformContextItem(context.value as C) : undefined
  //   const { data } = await props.fetch(search, 10, untransformedContext)
  //   console.log(data)
  //   newItems = data?.data || []
  // }
  const untransformedContext = context.value != undefined ? untransformContextItem(context.value as C) : undefined
  const { data } = await props.fetch(search, 10, untransformedContext)

  if (contextMode.value && !contextSearchMode.value) {
    items.value = [context.value as C, ...(data?.data || [])]
  } else {
    items.value = data?.data || []
  }
}, 250)

function resetFromFocus(focused: boolean) {
  if (focused && hasSelection.value) {
    resetSearch()
  }
}

async function resetSearch() {
  updatedModelValue.value = true
  updateSearch('')
}

function selectedElement(value: any) {
  let id: string | undefined
  if (typeof value === 'string') {
    id = value
  } else if (Array.isArray(value)) {
    id = value.at(-1)
  } else {
    id = undefined
  }
  const item = items.value.find((item) => item.id == id)
  if (props.mode == 'model') {
    emit('update:modelValue', id)
  } else if (props.mode == 'add') {
    if (item != undefined) {
      emit('selected-item', item as T)
    }
    proxiedModel.value = undefined
    search.value = ''
  } else {
    if (value.length == 0) {
      context.value = undefined
    } else if (value.length == 1) {
      context.value = item as C
      items.value = [context.value as C]
    } else {
      if (item != undefined) {
        emit('selected-item', item as T)
      }
      ;(proxiedModel.value as string[]).pop()
    }
    search.value = ''
    menu.value = false
  }

  if (props.menuMode == 'repeating') {
    nextTick(() => {
      menu.value = true
    })
  }
  resetSearch()
}

function transformToContextItem(item: C): C {
  return {
    ...item,
    id: `context-${item.id}`,
  }
}

function untransformContextItem(item: C): C {
  return {
    ...item,
    id: item.id.replace('context-', ''),
  }
}

onMounted(async () => {
  if (!!props.menuMode && props.menuDelay > 0) {
    setTimeout(() => {
      menu.value = true
    }, props.menuDelay)
  }
  await updateSearch('')
})
</script>

<template>
  <v-autocomplete
    v-model="(proxiedModel as any)"
    v-model:menu="menu"
    v-model:search="search"
    :chips="contextMode"
    :custom-filter="(item: any) => item.value != context?.id"
    :filter-keys="['id']"
    item-value="id"
    :items="items"
    :menu-props="{ maxWidth: 0 }"
    :multiple="contextMode"
    @update:focused="resetFromFocus"
  >
    <template #item="{ props, item }">
      <slot
        v-if="!contextSearchMode && item.value != context?.id"
        :item="(item as ListItem<T>)"
        name="item"
        :props="props"
      />
      <slot v-else-if="contextSearchMode" :item="(item as ListItem<C>)" name="context-item" :props="props" />
    </template>
  </v-autocomplete>
</template>

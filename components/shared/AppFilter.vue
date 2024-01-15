<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { isEqual, cloneDeep, debounce } from 'lodash'
import { VTextField, VAutocomplete, VSelect } from 'vuetify/lib/components/index.mjs'
import FilterMenu from '@/components/shared/FilterMenu'
import EmployeeAutocomplete from '@/components/common/autocomplete/EmployeeAutocomplete'
import RoleAutocomplete from '@/components/users/controls/RoleAutocomplete'
import DatePicker from '@/components/common/DatePicker'
import BranchAutocomplete from '@/components/common/autocomplete/BranchAutocomplete'
import DepartmentAutocomplete from '@/components/common/autocomplete/DepartmentAutocomplete'
import DocumentCategoryAutocomplete from '@/components/documents/controls/DocumentCategoryAutocomplete'
import DesignationAutocomplete from '@/components/common/autocomplete/DesignationAutocomplete'

const props = defineProps({
  value: {
    type: Object,
    default: () => ({}),
  },
  schema: {
    type: Array,
    default: () => [],
  },
  filterClass: {
    type: String,
    default: '',
  },
  additionButtonClass: {
    type: String,
    default: '',
  },
  display: {
    type: [Number, String],
    default: null,
  },
})

const emit = defineEmits(['update:value', 'apply', 'reset', 'additionApply'])
const dayjs = useDayjs()
const { t } = useI18n()
const query = ref(cloneDeep(props.value))

const defaultValues = ref(cloneDeep(query.value.filters))
const filtering = computed(() => !isEqual(defaultValues.value, query.value.filters))

const validSchema = computed(() => props.schema.filter((e: any) => !e.hide))

const { $vuetify } = useNuxtApp()
const slideCount = computed(() => {
  if (props.display && !$vuetify.display.smAndDown.value) {
    return props.display
  } else {
    switch ($vuetify.display.name.value) {
      case 'xxl':
        return 2
      case 'xl':
        return 2
      case 'lg':
        return 2
      case 'md':
        return 2
      case 'sm':
        return 2
      default:
        return 1
    }
  }
})

const renderComponent = (type: string) => {
  switch (type) {
    case 'select':
      return VSelect
    case 'autocomplete':
      return VAutocomplete
    case 'EmployeeAutocomplete':
      return EmployeeAutocomplete
    case 'DepartmentAutocomplete':
      return DepartmentAutocomplete
    case 'BranchAutocomplete':
      return BranchAutocomplete
    case 'DocumentCategoryAutocomplete':
      return DocumentCategoryAutocomplete
    case 'date':
      return DatePicker
    case 'RoleAutocomplete':
      return RoleAutocomplete
    case 'DesignationAutocomplete':
      return DesignationAutocomplete
    default:
      return VTextField
  }
}

const inputType = (item: any) => {
  switch (item.type) {
    case 'number':
      return 'number'
    case 'date':
      return 'date'
    case 'time':
      return 'time'
    default:
      return 'text'
  }
}

const handleReset = () => {
  props.schema.forEach((e: any) => {
    e.value = e.defaultValue
    query.value.filters[e.name] = e.defaultValue
  })

  emit('reset')

  handleApply()
}

const handleClear = (e: any) => {
  const defaultItem = props.schema.find((item: any) => item.name === e.name)
  query.value.filters[e.name] = defaultItem.defaultValue

  handleApply()
}

const handleApply = () => {
  emit('update:value', cloneDeep(query.value))
}

const inputChange = debounce(() => {
  handleApply()
}, 800)

const menu = ref(false)

const handleExit = () => {
  menu.value = false
  handleApply()
}

const filterMenuApply = (items: any) => {
  query.value.filters = cloneDeep(items)
  emit('additionApply')

  handleApply()
}
</script>

<template>
  <div class="tw-flex tw-justify-between tw-items-center tw-w-full md:tw-w-auto">
    <div class="tw-flex tw-items-center tw-gap-2 tw-w-full md:tw-w-auto" :class="filterClass">
      <div class="tw-flex tw-items-center tw-gap-2 tw-w-full md:tw-w-auto">
        <template v-for="item in validSchema.slice(0, slideCount)" :key="item.name">
          <component
            :is="renderComponent(item.type)"
            v-model="query.filters[item.name]"
            :class="item.class || 'tw-w-30 md:tw-w-36'"
            :clearable="item.clearable"
            :disabled="item.readonly"
            :label="item.label"
            v-bind="item.props"
            :type="inputType(item)"
            @click:clear="handleClear(item)"
            @update:model-value="item.type === 'text' ? inputChange() : handleApply()"
          />
        </template>
      </div>
      <v-btn v-if="filtering" class="tw-hidden md:tw-flex" color="primary" icon variant="tonal" @click="handleReset">
        <FilterOffIcon size="20" />
      </v-btn>

      <v-menu
        v-model="menu"
        class="filter-menu"
        :close-on-content-click="false"
        location="end"
        transition="slide-x-transition"
      >
        <template #activator="{ props }">
          <v-btn
            v-if="validSchema.length > slideCount || !!$slots.menu"
            v-bind="props"
            class="tw-w-5 tw-h-5 tw-px-2 tw-py-0 tw-rounded-[4px] tw-bg-[#F5F5F5]"
            :class="additionButtonClass"
            flat
            size="40"
          >
            <AdjustmentsHorizontalIcon size="24" />
          </v-btn>
          <v-divider v-if="validSchema.length > slideCount || !!$slots.menu" class="tw-hidden md:tw-block" vertical />
        </template>
        <filter-menu
          class="tw-z-[1010]"
          :filters="query.filters"
          :schema="validSchema.slice(slideCount)"
          @apply="filterMenuApply"
          @exit="handleExit"
          @reset="handleReset"
        >
          <template #menu>
            <slot name="menu" />
          </template>
        </filter-menu>
      </v-menu>
      <v-overlay v-model="menu" class="tw-z-[1008] tw-opacity-[0.46] tw-bg-[#212121]" persistent />
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.filter-menu {
  .v-overlay__content {
    right: 0 !important;
    @media all and (min-width: 600px) {
      left: unset !important;
      right: 24px !important;
    }
  }
}
</style>

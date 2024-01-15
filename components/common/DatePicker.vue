<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import customParseFormat from 'dayjs/plugin/customParseFormat'

const props = defineProps({
  modelValue: {
    type: [String, Object, Array],
    default: null,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  enableTime: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  inline: {
    type: Boolean,
    default: false,
  },
  pickerType: {
    type: String,
    default: '',
  },
  range: {
    type: Boolean,
    default: false,
  },
  autoApply: {
    type: Boolean,
    default: true,
  },
  fieldClass: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
})

const dayjs = useDayjs()
// TODO: Extend dayjs with the customParseFormat plugin
dayjs.extend(customParseFormat)
const emit = defineEmits(['update:model-value'])

const innerValue = computed({
  get: () => props.modelValue,
  set: (val) => {
    return emit('update:model-value', formatter(val))
  },
})

const monthPicker = computed(() => props.pickerType === 'month')
const yearPicker = computed(() => props.pickerType === 'year')
const formatDate = computed(() => {
  if (monthPicker.value) {
    return 'YYYY-MM'
  } else if (yearPicker.value) {
    return 'YYYY'
  } else {
    return 'YYYY-MM-DD'
  }
})

const formatter = (val: any) => {
  // TODO: empty value
  if (!val && props.range) {
    return []
  } else if (!val) {
    return null
  }

  if (val.length > 0 && val.some((s: any) => !s)) {
    // TODO: Date range width one value is null
    return val.map((day: string) =>
      day ? dayjs(day).format(formatDate.value) : dayjs(val.find((e: any) => e)).format(formatDate.value)
    )
  } else if (val.length > 0 && val.every((s: any) => s) && monthPicker.value) {
    // Month picker with range
    return val.map((e: any) => dayjs().year(e.year).month(e.month).format(formatDate.value))
  } else if (val.length > 0 && val.every((s: any) => s) && yearPicker.value) {
    // Year picker with range
    return val.map((e: any) => e)
  } else if (val.length > 0 && val.every((s: any) => s)) {
    // TODO: Date range has 2 value
    return val.map((e: any) => dayjs(e).format(formatDate.value))
  } else if (monthPicker.value) {
    // TODO: Month picker
    return dayjs().year(val.year).month(val.month).format(formatDate.value)
  } else if (yearPicker.value) {
    // TODO: Year picker
    return val
    // return dayjs().year(val.year).format(formatDate.value)
  } else {
    // TODO: Not a date range, get date with format
    return dayjs(val).format(formatDate.value)
  }
}

const textFieldFormat = computed(() => {
  if (!innerValue.value) {
    return innerValue.value
  }

  // Type is month and no range
  if (monthPicker.value && !props.range) {
    return dayjs(innerValue.value, formatDate.value).format('MM-YYYY')
  }

  // Type is month and range
  if (innerValue.value.length > 0 && monthPicker.value) {
    return innerValue.value.map((e: any) => dayjs(e).format('MM-YYYY')).join(' ~ ')
  }

  // Year is month and no range
  if (yearPicker.value && !props.range) {
    return innerValue.value
    // return dayjs(innerValue.value, formatDate.value).format('YYYY')
  }

  // Year picker with range
  if (innerValue.value.length > 0 && yearPicker.value) {
    // Date range has 2 value with month picker
    return innerValue.value.map((e: any) => e).join(' ~ ')
  }

  if (yearPicker.value) {
    // Type is year
    return dayjs(innerValue.value, formatDate.value).format('YYYY')
  } else if (props.range) {
    // Type is range
    if (!innerValue.value) {
      return []
    } else if (innerValue.value.length > 0 && innerValue.value.some((s: any) => !s)) {
      // Date range width one value is null
      return innerValue.value
        .map((day: string) =>
          day ? dayjs(day).format(formatDate.value) : dayjs(val.find((e: any) => e)).format('DD-MM-YYYY')
        )
        .join(' ~ ')
    } else if (innerValue.value.length > 0 && innerValue.value.every((s: any) => s)) {
      // Date range has 2 value
      return innerValue.value.map((e: any) => dayjs(e).format('DD-MM-YYYY')).join(' ~ ')
    }
  } else if (props.range) {
    // Type is range with one value
    return dayjs(innerValue.value, formatDate.value).format('DD-MM-YYYY')
  } else {
    // Not a date range, get date with format
    return dayjs(innerValue.value).format('DD-MM-YYYY')
  }
})
</script>

<template>
  <vue-date-picker
    v-model="innerValue"
    :auto-apply="autoApply"
    class="density-input"
    :clearable="clearable"
    :enable-time-picker="enableTime"
    :inline="inline"
    :month-picker="monthPicker"
    position="left"
    :range="range"
    :year-picker="yearPicker"
  >
    <template #dp-input="{ value, onInput, onEnter, onTab, onClear, onBlur, onKeypress, onPaste, isMenuOpen }">
      <v-text-field
        :append-inner-icon="value ? '' : 'mdi-calendar-blank-outline'"
        class="date-picker"
        :class="fieldClass"
        :label="label"
        :model-value="textFieldFormat"
        :readonly="readonly"
      />
    </template>
  </vue-date-picker>
</template>

<style lang="scss">
.date-picker {
  input {
    width: 110px;
  }

  .text-primary {
    .v-field__outline__notch {
      height: 38px !important;
    }
  }

  .v-field__outline {
    .v-field__outline__notch {
      height: 39px;
    }
  }

  .v-icon {
    cursor: pointer;
  }
}
</style>

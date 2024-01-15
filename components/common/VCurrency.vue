<script setup lang="ts">
import { CurrencyDisplay, useCurrencyInput } from 'vue-currency-input'

const props = defineProps({
  modelValue: Number,
  locale: {
    type: String,
    default: 'lo-LA',
  },
  currency: {
    type: String,
    default: 'LAK',
  },
})

const options = ref({
  locale: props.locale,
  currency: props.currency,
  currencyDisplay: CurrencyDisplay.narrowSymbol,
  hideCurrencySymbolOnFocus: false,
  hideGroupingSeparatorOnFocus: false,
})

const { inputRef, formattedValue, setOptions, setValue } = useCurrencyInput(options.value)

watch(
  () => props.modelValue,
  (value) => {
    setValue(value)
  }
)
watch(
  () => props.currency,
  (value) => {
    options.value.currency = value
    setOptions(options.value)
  }
)
</script>

<template>
  <VTextField ref="inputRef" v-model="formattedValue" />
</template>

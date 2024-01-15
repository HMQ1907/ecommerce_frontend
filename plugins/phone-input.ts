import 'flag-icons/css/flag-icons.min.css'
import 'v-phone-input/dist/v-phone-input.css'
import { createVPhoneInput } from 'v-phone-input'

const vPhoneInput = createVPhoneInput({
  label: 'Số điện thoại',
  countryIconMode: 'svg',
  countryLabel: 'Quốc gia',
  defaultCountry: 'VN',
  countryAriaLabel: ({ label }) => `Quốc gia dành cho ${label}`,
  invalidMessage: ({ label, example }) => `${label} phải là số điện thoại hợp lệ (ví dụ: ${example}).`,
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vPhoneInput)
})

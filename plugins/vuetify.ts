import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { md } from 'vuetify/iconsets/md'
import '@mdi/font/css/materialdesignicons.css'
import '@material-design-icons/font'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import { Vuetify3Dialog } from 'vuetify3-dialog'
import VueApexCharts from 'vue3-apexcharts'
import VueTablerIcons from 'vue-tabler-icons'
import Toast from 'vue-toastification'
import VueKonva from 'vue-konva'
// add loading
import { LoadingPlugin } from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import AppLoading from '@/components/common/AppLoading'
// SilentBox for view images and videos
import VueSilentbox from 'vue-silentbox'
import 'vue-silentbox/dist/style.css'

import VCalendar from 'v-calendar'

import Maska from 'maska'
import 'vue3-carousel/dist/carousel.css'
import '@/assets/scss/style.scss'
import 'vue-toastification/dist/index.css'

// Modal
import { createVfm } from 'vue-final-modal'
// Table
import Vue3EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'
// i18
import { createI18n } from 'vue-i18n'
import VueScrollTo from 'vue-scrollto'
import { abilitiesPlugin } from '@casl/vue'
import { Ability } from '@casl/ability'
import XEUtils from 'xe-utils'
import VXETable from 'vxe-table'
import enUS from 'vxe-table/lib/locale/lang/en-US'
import messages from '@/utils/locales/messages'
// ScrollTop
import { BLUE_THEME, AQUA_THEME, PURPLE_THEME, GREEN_THEME, CYAN_THEME, ORANGE_THEME } from '@/theme/LightTheme'
import {
  DARK_BLUE_THEME,
  DARK_AQUA_THEME,
  DARK_ORANGE_THEME,
  DARK_PURPLE_THEME,
  DARK_GREEN_THEME,
  DARK_CYAN_THEME,
} from '@/theme/DarkTheme'
import defineAbilitiesFor from '~/abilities'
// Table
import { renderer } from '@/plugins/renderer/common'
import { renderer as employeeSalaryRenderer } from '@/plugins/renderer/employee-salaries'
import { renderer as payslipRenderer } from '@/plugins/renderer/payslips'
import { renderer as employeeRenderer } from '@/plugins/renderer/employees'
import { renderer as EmployeeContractRenderer } from '@/plugins/renderer/employee-contracts'
import { renderer as documentRenderer } from '@/plugins/renderer/documents'
import { renderer as overtimeRenderer } from '@/plugins/renderer/overtimes'
import { renderer as awardRenderer } from '@/plugins/renderer/awards'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'BLUE_THEME',
      themes: {
        BLUE_THEME,
        AQUA_THEME,
        PURPLE_THEME,
        GREEN_THEME,
        CYAN_THEME,
        ORANGE_THEME,
        DARK_BLUE_THEME,
        DARK_AQUA_THEME,
        DARK_ORANGE_THEME,
        DARK_PURPLE_THEME,
        DARK_GREEN_THEME,
        DARK_CYAN_THEME,
      },
    },
    defaults: {
      VCard: {
        rounded: 'md',
      },
      VAutocomplete: {
        variant: 'outlined',
        density: 'compact',
        color: 'primary',
        clearable: true,
        hideDetails: 'auto',
      },
      VTextField: {
        variant: 'outlined',
        density: 'compact',
        color: 'primary',
        clearable: false,
        hideDetails: 'auto',
        type: 'text',
      },
      VTextarea: {
        variant: 'outlined',
        density: 'compact',
        color: 'primary',
        hideDetails: 'auto',
      },
      VSelect: {
        variant: 'outlined',
        density: 'compact',
        color: 'primary',
        hideDetails: 'auto',
      },
      VBtnToggle: {
        variant: 'outlined',
        density: 'compact',
        color: 'primary',
        hideDetails: 'auto',
      },
      VListItem: {
        minHeight: '45px',
      },
      VTooltip: {
        location: 'top',
      },
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
        md,
      },
    },
  })

  const i18n = createI18n({
    locale: 'en',
    messages: {
      ...messages,
      // Table
      en: {
        ...enUS,
        ...messages.en,
      },
    },
    legacy: false,
    silentTranslationWarn: true,
    silentFallbackWarn: true,
  })
  const vfm = createVfm()
  nuxtApp.vueApp.use(vuetify)
  nuxtApp.vueApp.use(Vuetify3Dialog, {
    vuetify,
  })
  nuxtApp.vueApp.component('EasyDataTable', Vue3EasyDataTable)
  nuxtApp.vueApp.use(PerfectScrollbar)

  // loading
  nuxtApp.vueApp.use(
    LoadingPlugin,
    {
      opacity: 0.5,
      backgroundColor: '#ffffff',
      zIndex: 1005,
    },
    {
      default: h(AppLoading),
    }
  )

  nuxtApp.vueApp.use(VueApexCharts)
  nuxtApp.vueApp.use(VueTablerIcons)
  nuxtApp.vueApp.use(VCalendar, {})
  nuxtApp.vueApp.use(Maska)
  nuxtApp.vueApp.use(i18n)
  nuxtApp.vueApp.use(vfm)
  nuxtApp.vueApp.use(Toast, {})
  nuxtApp.vueApp.use(VueKonva, { prefix: 'konva' })
  // ScrollTop Use
  // app.use(VueScrollTo);
  nuxtApp.vueApp.use(VueScrollTo, {
    duration: 1000,
    easing: 'ease',
  })

  VXETable.formats.mixin({
    formatDate({ cellValue }) {
      return XEUtils.toDateString(cellValue, 'yyyy-MM-dd')
    },
    formatDateTime({ cellValue }) {
      return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:ss:mm')
    },
    formatCurrency({ row, cellValue }, digits = 0) {
      if (row.currency_code) {
        return new Intl.NumberFormat('lo-LA', {
          style: 'currency',
          currency: row.currency_code,
          currencyDisplay: 'narrowSymbol',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(XEUtils.toNumber(cellValue))
      }

      return XEUtils.commafy(XEUtils.toNumber(cellValue), { digits }) + ' ₭'
    },
  })
  VXETable.renderer.mixin({
    ...renderer,
    ...employeeSalaryRenderer,
    ...payslipRenderer,
    ...employeeRenderer,
    ...EmployeeContractRenderer,
    ...documentRenderer,
    ...overtimeRenderer,
    ...awardRenderer,
  })
  VXETable.setup({
    i18n: (key, args) => i18n.global.t(key, args),
  })
  nuxtApp.vueApp.use(VXETable)
  nuxtApp.vueApp.use(VueSilentbox)

  let abilities = new Ability()
  const { data, status } = useAuth()
  if (status.value === 'authenticated') {
    const scope = data.value?.scope || []
    abilities = defineAbilitiesFor(scope)
  }

  nuxtApp.vueApp.use(abilitiesPlugin, abilities, {
    useGlobalProperties: true,
  })
})

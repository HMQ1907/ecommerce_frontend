import { computed } from 'vue'
import * as themeColors from '@/theme/LightTheme'
import * as DarkThemeColors from '@/theme/DarkTheme'
import { useCustomizerStore } from '@/stores/customizer'

const getPrimary = computed(() => {
  const custmizer = useCustomizerStore()

  if (custmizer.actTheme === 'AQUA_THEME') {
    return themeColors.AQUA_THEME.colors.primary
  } else if (custmizer.actTheme === 'PURPLE_THEME') {
    return themeColors.PURPLE_THEME.colors.primary
  } else if (custmizer.actTheme === 'GREEN_THEME') {
    return themeColors.GREEN_THEME.colors.primary
  } else if (custmizer.actTheme === 'CYAN_THEME') {
    return themeColors.CYAN_THEME.colors.primary
  } else if (custmizer.actTheme === 'ORANGE_THEME') {
    return themeColors.ORANGE_THEME.colors.primary
  } else if (custmizer.actTheme === 'DARK_AQUA_THEME') {
    return DarkThemeColors.DARK_AQUA_THEME.colors.primary
  } else if (custmizer.actTheme === 'DARK_PURPLE_THEME') {
    return DarkThemeColors.DARK_PURPLE_THEME.colors.primary
  } else if (custmizer.actTheme === 'DARK_GREEN_THEME') {
    return DarkThemeColors.DARK_GREEN_THEME.colors.primary
  } else if (custmizer.actTheme === 'DARK_CYAN_THEME') {
    return DarkThemeColors.DARK_CYAN_THEME.colors.primary
  } else if (custmizer.actTheme === 'DARK_ORANGE_THEME') {
    return DarkThemeColors.DARK_ORANGE_THEME.colors.primary
  } else if (custmizer.actTheme === 'DARK_BLUE_THEME') {
    return DarkThemeColors.DARK_BLUE_THEME.colors.primary
  } else {
    return themeColors.BLUE_THEME.colors.primary
  }
})

const getLightPrimary = computed(() => {
  const custmizer = useCustomizerStore()

  if (custmizer.actTheme === 'AQUA_THEME') {
    return themeColors.AQUA_THEME.colors.lightprimary
  } else if (custmizer.actTheme === 'PURPLE_THEME') {
    return themeColors.PURPLE_THEME.colors.lightprimary
  } else if (custmizer.actTheme === 'GREEN_THEME') {
    return themeColors.GREEN_THEME.colors.lightprimary
  } else if (custmizer.actTheme === 'CYAN_THEME') {
    return themeColors.CYAN_THEME.colors.lightprimary
  } else if (custmizer.actTheme === 'ORANGE_THEME') {
    return themeColors.ORANGE_THEME.colors.lightprimary
  }
  if (custmizer.actTheme === 'DARK_AQUA_THEME') {
    return DarkThemeColors.DARK_AQUA_THEME.colors.lightprimary
  } else if (custmizer.actTheme === 'DARK_PURPLE_THEME') {
    return DarkThemeColors.DARK_PURPLE_THEME.colors.lightprimary
  } else if (custmizer.actTheme === 'DARK_GREEN_THEME') {
    return DarkThemeColors.DARK_GREEN_THEME.colors.lightprimary
  } else if (custmizer.actTheme === 'DARK_CYAN_THEME') {
    return DarkThemeColors.DARK_CYAN_THEME.colors.lightprimary
  } else if (custmizer.actTheme === 'DARK_ORANGE_THEME') {
    return DarkThemeColors.DARK_ORANGE_THEME.colors.lightprimary
  } else if (custmizer.actTheme === 'DARK_BLUE_THEME') {
    return DarkThemeColors.DARK_BLUE_THEME.colors.lightprimary
  } else {
    return themeColors.BLUE_THEME.colors.lightprimary
  }
})

const getSecondary = computed(() => {
  const custmizer = useCustomizerStore()

  if (custmizer.actTheme === 'AQUA_THEME') {
    return themeColors.AQUA_THEME.colors.secondary
  } else if (custmizer.actTheme === 'PURPLE_THEME') {
    return themeColors.PURPLE_THEME.colors.secondary
  } else if (custmizer.actTheme === 'GREEN_THEME') {
    return themeColors.GREEN_THEME.colors.secondary
  } else if (custmizer.actTheme === 'CYAN_THEME') {
    return themeColors.CYAN_THEME.colors.secondary
  } else if (custmizer.actTheme === 'ORANGE_THEME') {
    return themeColors.ORANGE_THEME.colors.secondary
  } else if (custmizer.actTheme === 'DARK_AQUA_THEME') {
    return DarkThemeColors.DARK_AQUA_THEME.colors.secondary
  } else if (custmizer.actTheme === 'DARK_PURPLE_THEME') {
    return DarkThemeColors.DARK_PURPLE_THEME.colors.secondary
  } else if (custmizer.actTheme === 'DARK_GREEN_THEME') {
    return DarkThemeColors.DARK_GREEN_THEME.colors.secondary
  } else if (custmizer.actTheme === 'DARK_CYAN_THEME') {
    return DarkThemeColors.DARK_CYAN_THEME.colors.secondary
  } else if (custmizer.actTheme === 'DARK_ORANGE_THEME') {
    return DarkThemeColors.DARK_ORANGE_THEME.colors.secondary
  } else if (custmizer.actTheme === 'DARK_BLUE_THEME') {
    return DarkThemeColors.DARK_BLUE_THEME.colors.secondary
  } else {
    return themeColors.BLUE_THEME.colors.secondary
  }
})

const getLightSecondary = computed(() => {
  const custmizer = useCustomizerStore()

  if (custmizer.actTheme === 'AQUA_THEME') {
    return themeColors.AQUA_THEME.colors.lightsecondary
  } else if (custmizer.actTheme === 'PURPLE_THEME') {
    return themeColors.PURPLE_THEME.colors.lightsecondary
  } else if (custmizer.actTheme === 'GREEN_THEME') {
    return themeColors.GREEN_THEME.colors.lightsecondary
  } else if (custmizer.actTheme === 'CYAN_THEME') {
    return themeColors.CYAN_THEME.colors.lightsecondary
  } else if (custmizer.actTheme === 'ORANGE_THEME') {
    return themeColors.ORANGE_THEME.colors.lightsecondary
  }
  if (custmizer.actTheme === 'DARK_AQUA_THEME') {
    return DarkThemeColors.DARK_AQUA_THEME.colors.lightsecondary
  } else if (custmizer.actTheme === 'DARK_PURPLE_THEME') {
    return DarkThemeColors.DARK_PURPLE_THEME.colors.lightsecondary
  } else if (custmizer.actTheme === 'DARK_GREEN_THEME') {
    return DarkThemeColors.DARK_GREEN_THEME.colors.lightsecondary
  } else if (custmizer.actTheme === 'DARK_CYAN_THEME') {
    return DarkThemeColors.DARK_CYAN_THEME.colors.lightsecondary
  } else if (custmizer.actTheme === 'DARK_ORANGE_THEME') {
    return DarkThemeColors.DARK_ORANGE_THEME.colors.lightsecondary
  } else if (custmizer.actTheme === 'DARK_BLUE_THEME') {
    return DarkThemeColors.DARK_BLUE_THEME.colors.lightsecondary
  } else {
    return themeColors.BLUE_THEME.colors.lightsecondary
  }
})

const getLight100 = computed(() => {
  const custmizer = useCustomizerStore()

  if (
      custmizer.actTheme === 'AQUA_THEME' ||
      custmizer.actTheme === 'PURPLE_THEME' ||
      custmizer.actTheme === 'GREEN_THEME' ||
      custmizer.actTheme === 'CYAN_THEME' ||
      custmizer.actTheme === 'ORANGE_THEME'
  ) {
    return themeColors.AQUA_THEME.colors.grey100
  } else if (
      custmizer.actTheme === 'DARK_AQUA_THEME' ||
      custmizer.actTheme === 'DARK_PURPLE_THEME' ||
      custmizer.actTheme === 'DARK_GREEN_THEME' ||
      custmizer.actTheme === 'DARK_CYAN_THEME' ||
      custmizer.actTheme === 'DARK_ORANGE_THEME' ||
      custmizer.actTheme === 'DARK_BLUE_THEME'
  ) {
    return DarkThemeColors.DARK_AQUA_THEME.colors.grey100
  } else {
    return themeColors.BLUE_THEME.colors.grey100
  }
})

const getAccent = computed(() => {
  const custmizer = useCustomizerStore()

  if (custmizer.actTheme === 'AQUA_THEME') {
    return themeColors.AQUA_THEME.colors.accent
  } else if (custmizer.actTheme === 'PURPLE_THEME') {
    return themeColors.PURPLE_THEME.colors.accent
  } else if (custmizer.actTheme === 'GREEN_THEME') {
    return themeColors.GREEN_THEME.colors.accent
  } else if (custmizer.actTheme === 'CYAN_THEME') {
    return themeColors.CYAN_THEME.colors.accent
  } else if (custmizer.actTheme === 'ORANGE_THEME') {
    return themeColors.ORANGE_THEME.colors.accent
  } else if (custmizer.actTheme === 'DARK_AQUA_THEME') {
    return DarkThemeColors.DARK_AQUA_THEME.colors.accent
  } else if (custmizer.actTheme === 'DARK_PURPLE_THEME') {
    return DarkThemeColors.DARK_PURPLE_THEME.colors.accent
  } else if (custmizer.actTheme === 'DARK_GREEN_THEME') {
    return DarkThemeColors.DARK_GREEN_THEME.colors.accent
  } else if (custmizer.actTheme === 'DARK_CYAN_THEME') {
    return DarkThemeColors.DARK_CYAN_THEME.colors.accent
  } else if (custmizer.actTheme === 'DARK_ORANGE_THEME') {
    return DarkThemeColors.DARK_ORANGE_THEME.colors.accent
  } else if (custmizer.actTheme === 'DARK_BLUE_THEME') {
    return DarkThemeColors.DARK_BLUE_THEME.colors.accent
  } else {
    return themeColors.BLUE_THEME.colors.accent
  }
})

const getInfo = computed(() => {
  const custmizer = useCustomizerStore()

  if (custmizer.actTheme === 'AQUA_THEME') {
    return themeColors.AQUA_THEME.colors.info
  } else if (custmizer.actTheme === 'PURPLE_THEME') {
    return themeColors.PURPLE_THEME.colors.info
  } else if (custmizer.actTheme === 'GREEN_THEME') {
    return themeColors.GREEN_THEME.colors.info
  } else if (custmizer.actTheme === 'CYAN_THEME') {
    return themeColors.CYAN_THEME.colors.info
  } else if (custmizer.actTheme === 'ORANGE_THEME') {
    return themeColors.ORANGE_THEME.colors.info
  } else if (custmizer.actTheme === 'DARK_AQUA_THEME') {
    return DarkThemeColors.DARK_AQUA_THEME.colors.info
  } else if (custmizer.actTheme === 'DARK_PURPLE_THEME') {
    return DarkThemeColors.DARK_PURPLE_THEME.colors.info
  } else if (custmizer.actTheme === 'DARK_GREEN_THEME') {
    return DarkThemeColors.DARK_GREEN_THEME.colors.info
  } else if (custmizer.actTheme === 'DARK_CYAN_THEME') {
    return DarkThemeColors.DARK_CYAN_THEME.colors.info
  } else if (custmizer.actTheme === 'DARK_ORANGE_THEME') {
    return DarkThemeColors.DARK_ORANGE_THEME.colors.info
  } else if (custmizer.actTheme === 'DARK_BLUE_THEME') {
    return DarkThemeColors.DARK_BLUE_THEME.colors.info
  } else {
    return themeColors.BLUE_THEME.colors.info
  }
})

const getSuccess = computed(() => {
  const custmizer = useCustomizerStore()

  if (custmizer.actTheme === 'AQUA_THEME') {
    return themeColors.AQUA_THEME.colors.success
  } else if (custmizer.actTheme === 'PURPLE_THEME') {
    return themeColors.PURPLE_THEME.colors.success
  } else if (custmizer.actTheme === 'GREEN_THEME') {
    return themeColors.GREEN_THEME.colors.success
  } else if (custmizer.actTheme === 'CYAN_THEME') {
    return themeColors.CYAN_THEME.colors.success
  } else if (custmizer.actTheme === 'ORANGE_THEME') {
    return themeColors.ORANGE_THEME.colors.success
  } else if (custmizer.actTheme === 'DARK_AQUA_THEME') {
    return DarkThemeColors.DARK_AQUA_THEME.colors.success
  } else if (custmizer.actTheme === 'DARK_PURPLE_THEME') {
    return DarkThemeColors.DARK_PURPLE_THEME.colors.success
  } else if (custmizer.actTheme === 'DARK_GREEN_THEME') {
    return DarkThemeColors.DARK_GREEN_THEME.colors.success
  } else if (custmizer.actTheme === 'DARK_CYAN_THEME') {
    return DarkThemeColors.DARK_CYAN_THEME.colors.success
  } else if (custmizer.actTheme === 'DARK_ORANGE_THEME') {
    return DarkThemeColors.DARK_ORANGE_THEME.colors.success
  } else if (custmizer.actTheme === 'DARK_BLUE_THEME') {
    return DarkThemeColors.DARK_BLUE_THEME.colors.success
  } else {
    return themeColors.BLUE_THEME.colors.success
  }
})

const getError = computed(() => {
  const custmizer = useCustomizerStore()

  if (custmizer.actTheme === 'AQUA_THEME') {
    return themeColors.AQUA_THEME.colors.error
  } else if (custmizer.actTheme === 'PURPLE_THEME') {
    return themeColors.PURPLE_THEME.colors.error
  } else if (custmizer.actTheme === 'GREEN_THEME') {
    return themeColors.GREEN_THEME.colors.error
  } else if (custmizer.actTheme === 'CYAN_THEME') {
    return themeColors.CYAN_THEME.colors.error
  } else if (custmizer.actTheme === 'ORANGE_THEME') {
    return themeColors.ORANGE_THEME.colors.error
  } else if (custmizer.actTheme === 'DARK_AQUA_THEME') {
    return DarkThemeColors.DARK_AQUA_THEME.colors.error
  } else if (custmizer.actTheme === 'DARK_PURPLE_THEME') {
    return DarkThemeColors.DARK_PURPLE_THEME.colors.error
  } else if (custmizer.actTheme === 'DARK_GREEN_THEME') {
    return DarkThemeColors.DARK_GREEN_THEME.colors.error
  } else if (custmizer.actTheme === 'DARK_CYAN_THEME') {
    return DarkThemeColors.DARK_CYAN_THEME.colors.error
  } else if (custmizer.actTheme === 'DARK_ORANGE_THEME') {
    return DarkThemeColors.DARK_ORANGE_THEME.colors.error
  } else if (custmizer.actTheme === 'DARK_BLUE_THEME') {
    return DarkThemeColors.DARK_BLUE_THEME.colors.error
  } else {
    return themeColors.BLUE_THEME.colors.error
  }
})

const getWarning = computed(() => {
  const custmizer = useCustomizerStore()

  if (custmizer.actTheme === 'AQUA_THEME') {
    return themeColors.AQUA_THEME.colors.warning
  } else if (custmizer.actTheme === 'PURPLE_THEME') {
    return themeColors.PURPLE_THEME.colors.warning
  } else if (custmizer.actTheme === 'GREEN_THEME') {
    return themeColors.GREEN_THEME.colors.warning
  } else if (custmizer.actTheme === 'CYAN_THEME') {
    return themeColors.CYAN_THEME.colors.warning
  } else if (custmizer.actTheme === 'ORANGE_THEME') {
    return themeColors.ORANGE_THEME.colors.warning
  } else if (custmizer.actTheme === 'DARK_AQUA_THEME') {
    return DarkThemeColors.DARK_AQUA_THEME.colors.warning
  } else if (custmizer.actTheme === 'DARK_PURPLE_THEME') {
    return DarkThemeColors.DARK_PURPLE_THEME.colors.warning
  } else if (custmizer.actTheme === 'DARK_GREEN_THEME') {
    return DarkThemeColors.DARK_GREEN_THEME.colors.warning
  } else if (custmizer.actTheme === 'DARK_CYAN_THEME') {
    return DarkThemeColors.DARK_CYAN_THEME.colors.warning
  } else if (custmizer.actTheme === 'DARK_ORANGE_THEME') {
    return DarkThemeColors.DARK_ORANGE_THEME.colors.warning
  } else if (custmizer.actTheme === 'DARK_BLUE_THEME') {
    return DarkThemeColors.DARK_BLUE_THEME.colors.warning
  } else {
    return themeColors.BLUE_THEME.colors.warning
  }
})
export {
  getPrimary,
  getSecondary,
  getLightPrimary,
  getLightSecondary,
  getLight100,
  getInfo,
  getAccent,
  getSuccess,
  getError,
  getWarning,
}

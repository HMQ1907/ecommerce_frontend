export type ConfigProps = {
  Sidebar_drawer: any
  Customizer_drawer: boolean
  mini_sidebar: boolean
  setHorizontalLayout: boolean
  actTheme: string
  boxed: boolean
  setBorderCard: boolean
  railWidth: number
  serviceRequest: number
}

const config: ConfigProps = {
  Sidebar_drawer: null,
  Customizer_drawer: false,
  mini_sidebar: false,
  setHorizontalLayout: false, // Horizontal layout
  actTheme: 'BLUE_THEME',
  boxed: true,
  setBorderCard: false,
  railWidth: 58,
  serviceRequest: 0,
}

export default config

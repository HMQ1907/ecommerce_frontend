// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  spaLoadingTemplate: 'spa-loading-template.html',
  typescript: {
    shim: false,
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: '123',
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: process.env.BASE_API_URL,
      pusherKey: process.env.PUSHER_APP_KEY,
      pusherCluster: process.env.PUSHER_APP_CLUSTER,
    },
  },
  css: ['vue-final-modal/style.css'],
  build: {
    //   extractCSS: false,
    // transpile: ['vuetify'],
  },
  modules: [
    '@sidebase/nuxt-auth',
    // '@bg-dev/nuxt-fcm',
    '@pinia/nuxt',
    '@invictus.codes/nuxt-vuetify',
    'dayjs-nuxt',
    '@nuxtjs/tailwindcss',
    // '@vite-pwa/nuxt',
    '@vee-validate/nuxt',
  ],
  plugins: [
    '@/plugins/axios',
    '@/plugins/api',
    '@/plugins/vue-query',
    '@/plugins/mitt',
    '@/plugins/pusher',
    '@/plugins/phone-input',
  ],
  auth: {
    origin: process.env.ORIGIN,
    enableGlobalAppMiddleware: true,
    enableSessionRefreshPeriodically: false,
    // Whether to refresh the session whenever a window focus event happens, i.e, when your user refocuses the window. Set this to `false` to turn this off
    enableSessionRefreshOnWindowFocus: true,
  },
  fcm: {
    firebaseConfig: {
      apiKey: process.env.FIREBASE_API_KEY || '',
      projectId: process.env.FIREBASE_PROJECT_ID || '',
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || '',
      appId: process.env.FIREBASE_APP_ID || '',
    },
    vapidKey: process.env.FCM_PUBLIC_KEY,
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'PVOIL Lao',
      short_name: 'PVOIL Lao',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    devOptions: {
      enabled: false,
      type: 'module',
    },
  },
  app: {
    head: {
      title: 'PVOIL Lao',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1, interactive-widget=resizes-content',
        },
      ],
    },
  },
  nitro: {
    serveStatic: true,
  },
  devServerHandlers: [],
  // hooks: {
  //   'vite:extendConfig': (config: any) => {
  //     config.plugins.push(
  //       vuetify({
  //         styles: { configFile: resolve('./assets/scss/variables.scss') },
  //       })
  //     )
  //   },
  // },
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },

    moduleOptions: {
      styles: {
        configFile: '~/assets/scss/_variables.scss',
      },
    },
  },
})

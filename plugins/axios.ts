import axios from 'axios'
import { stringify } from 'qs'

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig()
  const baseUrl = runtimeConfig.public.apiBase

  const client = axios.create({
    baseURL: baseUrl,
    timeout: 10000, // 10s
    // withCredentials: true,
  })

  client.interceptors.request.use((config) => {
    const { data } = useAuth()
    const token = data.value?.jwt
    if (token) {
      // @ts-ignore
      config.headers.Authorization = `Bearer ${token}`
    }

    config.paramsSerializer = (params) => stringify(params, { encode: false, arrayFormat: 'comma' })

    return config
  })

  client.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      const { signOut } = useAuth()

      const code = error.response?.status
      if (code === 401) {
        signOut({ callbackUrl: '/auth/login' })
      }

      throw error

      // if (code === 423) {
      //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
      //   return new Promise((resolve, reject) => {
      //     app.context.$dialog.showAndWait(ConfirmPassword).then((result) => {
      //       if (result === 'cancel') {
      //         return reject(error)
      //       }
      //
      //       const { config } = error
      //
      //       return $axios
      //         .request(config)
      //         .then((response) => {
      //           resolve(response)
      //         })
      //         .catch((err) => {
      //           reject(err)
      //         })
      //     })
      //   })
      // }
      //
      // if (!isEmpty(error.response?.data)) {
      //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
      //   return new Promise((resolve, reject) => {
      //     if (error.response?.data?.error?.fields) {
      //       store.commit('form/VALIDATION_ERRORS', error.response?.data?.error?.fields)
      //     }
      //
      //     app.context.$dialog.notify.error(error.response?.data?.error?.message || i18n.t('common.message.serverError'))
      //
      //     reject(error)
      //   })
      // }
    }
  )

  return {
    provide: {
      axios: client,
    },
  }
})

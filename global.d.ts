import { ISODateString } from 'next-auth/core/types'
import { Api } from '@/api'
import { AppAbility } from '@/types/AppAbility'

declare module '#app/nuxt' {
  interface NuxtApp {
    $api: Api<any>
  }
}

declare module 'next-auth' {
  interface DefaultSession {
    user?: {
      id?: string | null
      name?: string | null
      email?: string | null
      access_token?: string | null
    }
    scope?: []
    jwt?: string
    expires: ISODateString
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $ability: AppAbility
    $can(this: this, ...args: Parameters<this['$ability']['can']>): boolean
  }
}
export {}

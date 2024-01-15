import CredentialsProvider from 'next-auth/providers/credentials'
import { NuxtAuthHandler } from '#auth'
import { TokenResponse } from '@/types/auth/TokenType'
import axios from '@/utils/axios'

export default NuxtAuthHandler({
  pages: {
    // Change the default behavior to use `/login` as the path for the sign-in page
    signIn: '/auth/login',
  },
  // secret needed to run nuxt-auth in production mode (used to encrypt data)
  secret: process.env.NUXT_SECRET,
  providers: [
    // @ts-ignore Import is exported on .default during SSR, so we need to call it this way. May be fixed via Vite at some point
    CredentialsProvider.default({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: '(hint: jsmith)' },
        password: { label: 'Password', type: 'password', placeholder: '(hint: hunter2)' },
      },
      async authorize(credentials: any) {
        try {
          const runtimeConfig = useRuntimeConfig()
          const { data: res } = await axios.post<TokenResponse>(
            runtimeConfig.public.apiBase + '/auth/login',
            credentials
          )

          // If no error and we have user data, return it
          if (res.success && res.data?.user) {
            return {
              ...res.data?.user,
              access_token: res.data?.token,
              scope: res.data?.scope,
              roles: res.data?.user.roles,
              branch_id: res.data?.user.branch_id,
              employee: res.data?.user.employee,
            }
          }
          // Return null if user data could not be retrieved
          return null
        } catch (e) {
          throw createError({
            statusCode: 403,
            statusMessage: 'Credentials not working',
          })
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, trigger, user }) => {
      const runtimeConfig = useRuntimeConfig()
      if (trigger !== 'signIn') {
        const { data } = await axios.get(runtimeConfig.public.apiBase + '/auth/user', {
          headers: {
            Authorization: `Bearer ${token.jwt}`,
          },
        })
        const { branch_id, employee, roles, scope, id } = data.data
        token = { ...token, jwt: token.jwt, branch_id, employee, roles, scope, id }
      }

      if (user) {
        token.branch_id = user ? user.branch_id || '' : ''
        token.employee = user ? (user as any).employee || {} : {}
        token.roles = user ? (user as any).roles || [] : []
        token.scope = user ? (user as any).scope || [] : []
        token.jwt = user ? (user as any).access_token || '' : ''
        token.id = user ? user.id || '' : ''
      }
      return Promise.resolve(token)
    },
    session: ({ session, token }) => {
      ;(session as any).branch_id = token.branch_id
      ;(session as any).employee = token.employee
      ;(session as any).roles = token.roles
      ;(session as any).scope = token.scope
      ;(session as any).jwt = token.jwt
      ;(session as any).id = token.id
      return Promise.resolve(session)
    },
  },
})

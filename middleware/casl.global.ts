import { useAbility } from '@casl/vue'

export default defineNuxtRouteMiddleware((to, from) => {
  const { status } = useAuth()
  const { can } = useAbility()

  if (status.value === 'authenticated') {
    if (to.matched.length === 0) {
      return createError({ statusCode: 404, statusMessage: 'Not Found' })
    }

    const canNavigate = to.matched.some((route: any) => {
      if (route.meta.resource) {
        return can(route.meta.action || 'view', route.meta.resource)
      }

      return true
    })

    if (!canNavigate) {
      return createError({ statusCode: 403, statusMessage: 'Forbidden' })
    }
  }
})

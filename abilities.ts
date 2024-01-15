import { defineAbility } from '@casl/ability'

export default function (scope: []) {
  return defineAbility((can) => {
    scope.forEach((e: string) => {
      const [action, resource] = e.split('.').reverse()
      can(action, resource)
    })
  })
}

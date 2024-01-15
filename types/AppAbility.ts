import { Ability, AbilityClass } from '@casl/ability'

type Actions = 'create' | 'view' | 'edit' | 'delete'
type Subjects = 'employees' | 'customers'

export type AppAbility = Ability<[Actions, Subjects]>
export const AppAbility = Ability as AbilityClass<AppAbility>

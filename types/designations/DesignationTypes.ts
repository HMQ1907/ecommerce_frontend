import { DepartmentTypes } from '@/types/departments/DepartmentTypes'

export type DesignationType = {
  id?: number
  department_id?: number
  name?: string
  description?: string
  department?: DepartmentTypes
}

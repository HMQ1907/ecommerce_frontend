export interface DepartmentStateProps {
  departments: Department[]
  error?: object | string | null
}

export type Department = {
  name: string
  parent_id: number
  manager_id: number
  status: number
}

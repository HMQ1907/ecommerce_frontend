import { EmployeeBankAccountType } from '@/types/employees/EmployeeBankAccountTypes'
import { BranchType } from '@/types/branchs/BranchTypes'
import { DesignationType } from '@/types/designations/DesignationTypes'
import { UserType } from '@/types/users/UserTypes'
import { EmployeeContractType } from '~/types/employees/EmployeeContractsTypes'

export type Gender = 'male' | 'female' | 'other'

export type Type = 'probation' | 'permanent' | 'contract'

export type PositionType = 'employee' | 'manager'

export type EmployeeType = {
  id?: number
  user_id?: number
  branch_id?: number
  department_id?: number
  designation_id?: number
  designation?: DesignationType
  branch?: BranchType
  employee_code?: string
  first_name?: string
  last_name?: string
  full_name?: string
  currency_code?: string
  gender?: Gender
  email?: string
  date_of_birth?: string
  avatar?: string
  phone?: string
  address?: string
  date_to_company?: string
  status?: string
  type?: Type
  position_type?: PositionType
  allowance?: number
  indicator?: string
  date_to_job?: string
  job?: number
  date_of_engagement?: string
  education?: string
  jg?: number
  actual_working_days?: number
  normal_retirement_date?: number
  date_to_job_group?: string
  created_by?: number
  updated_by?: number
  deleted_by?: number
  created_at?: string
  updated_at?: string
  deleted_at?: string
  bank_accounts?: EmployeeBankAccountType[]
  contracts?: EmployeeContractType[]
}

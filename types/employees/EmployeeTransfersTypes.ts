export type EmployeeTransferType = {
  id?: number
  employee_id?: number
  from_branch_id?: number
  to_branch_id?: number
  from_department_id?: number
  to_department_id?: number
  from_designation_id?: number
  to_designation_id?: number
  transfer_date?: string
  notice_date?: string
  description?: string
  job?: number
  new_salary?: number
  new_position_allowance?: number
}

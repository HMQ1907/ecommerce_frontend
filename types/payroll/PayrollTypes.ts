export type SalaryType = {
  employee_id?: number
  currency_code?: string
  basic_salary?: number
  social_security?: number
  variable_salaries?: any
}

export type SalaryDetailType = {
  variable_component_id?: number
  variable_component?: any
  variable_value?: number
}

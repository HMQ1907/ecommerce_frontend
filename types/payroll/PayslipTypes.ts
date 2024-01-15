export type ExtraComponentType = {
  name?: string
  value?: number
}

export type ExtraJsonType = {
  earnings?: ExtraComponentType[]
  deductions?: ExtraComponentType[]
}

export type PayslipType = {
  employee_id?: number
  employee?: any
  salary_from?: string
  salary_to?: string
  status?: string
  paid_on?: string
  salary_json?: any
  extra_json?: ExtraJsonType
}

export type ImportPayslipTypes = {
  month?: string
  file?: any
}

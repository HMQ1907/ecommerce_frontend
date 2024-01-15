import * as yup from 'yup'

export const payrollConfigSchema = (t: any) => {
  return yup.object({
    employee_id: yup.number().required(),
    basic_salary: yup
      .number()
      .transform((value) => (Number.isNaN(value) ? null : value))
      .min(0)
      .max(1000000000)
      .nullable()
      .required()
      .label(t('payrollConfig.model.basicSalary')),
    social_security: yup
      .number()
      .transform((value) => (Number.isNaN(value) ? null : value))
      .min(0)
      .max(1000000000)
      .nullable()
      .required()
      .label(t('payrollConfig.model.socialInsuranceSalary')),
    variable_salaries: yup
      .array()
      .of(
        yup.object().shape({
          variable_component_id: yup.number().required(),
          variable_value: yup
            .number()
            .transform((value) => (Number.isNaN(value) ? null : value))
            .min(0)
            .max(1000000000)
            .required()
            .label(t('payrollConfig.model.familyAllowance')),
        })
      )
      .nullable()
      .required()
      .label(t('payrollConfig.model.mainAllowance')),
  })
}

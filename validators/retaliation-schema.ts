import * as yup from 'yup'

export const retaliationSchema: yup.BaseSchema = (t: any) => {
  return yup.object({
    employee_id: yup.string().nullable().required().label(t('retaliations.model.employee')),
    apply_salary_date: yup.date().nullable().required().label(t('retaliations.model.applySalaryDate')),
    increment_date: yup
      .date()
      .test('apply_salary_date', t('retaliations.model.dateMin'), function (value) {
        const startDateValue = this.parent.apply_salary_date
        if (!startDateValue || !value) {
          return true
        }
        return value >= startDateValue
      })
      .nullable()
      .required()
      .label(t('retaliations.model.incrementDate')),
    previous_salary: yup
      .number()
      .transform((value) => (Number.isNaN(value) ? null : value))
      .min(0)
      .max(1000000000)
      .nullable()
      .required()
      .label(t('retaliations.model.previousSalary')),
    new_salary: yup
      .number()
      .transform((value) => (Number.isNaN(value) ? null : value))
      .min(0)
      .max(1000000000)
      .nullable()
      .required()
      .label(t('retaliations.model.newSalary')),
  })
}

import * as yup from 'yup'

export const payslipSchema = (t: any) => {
  return yup.object({
    status: yup.string().required().label(t('payslip.model.status')),
    paid_on: yup.string().nullable().label(t('payslip.model.paidOn')),
    extra_json: yup.object().shape({
      earnings: yup
        .array()
        .of(
          yup.object().shape({
            name: yup.string().required().label(t('common.model.name')),
            value: yup
              .number()
              .transform((value) => (Number.isNaN(value) ? null : value))
              .min(0)
              .max(1000000000)
              .required()
              .positive()
              .label(t('payslip.model.amount')),
          })
        )
        .nullable()
        .required()
        .label(t('payrollConfig.model.mainAllowance')),
      deductions: yup
        .array()
        .of(
          yup.object().shape({
            name: yup.string().required().label(t('common.model.name')),
            value: yup
              .number()
              .transform((value) => (Number.isNaN(value) ? null : value))
              .min(0)
              .max(1000000000)
              .positive()
              .required()
              .label(t('payslip.model.amount')),
          })
        )
        .nullable()
        .required()
        .label(t('payrollConfig.model.mainAllowance')),
    }),
  })
}

export const validator = {
  amount: (label: string, val: any, min: number, max: number) => {
    return yup.number().label(label).required().min(min).max(max).validate(val)
  },
  hour: (label: string, val: any, min: number, max: number) => {
    return yup.number().label(label).required().min(min).max(max).validate(val)
  },
}

export const importPayslipSchema = (t: any) => {
  return yup.object({
    file: yup.mixed().required().label(t('payslip.model.selectFileFormat')),
    month: yup
      .string()
      .required()
      .transform((value) => value || '')
      .label(t('common.filter.month')),
  })
}

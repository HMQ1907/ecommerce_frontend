import * as yup from 'yup'
export const number = yup.number().transform((value: any) => (Number.isNaN(value) ? null : value))

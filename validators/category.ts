import { string } from 'yup'

export const validator = {
  name: (label: any, val: any) => {
    return string().label(label).required().max(100).validate(val)
  },
}

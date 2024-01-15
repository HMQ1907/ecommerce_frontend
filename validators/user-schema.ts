import * as yup from 'yup'

export const userSchema = (t: any) => {
  return yup.object({
    branch_id: yup.number().required().label(t('employees.model.branch')),
    name: yup.string().max(20).required().label(t('users.model.fullName')),
    email: yup.string().max(100).email().required().label(t('users.model.email')),
    roles: yup.number().nullable().required().label(t('users.model.role')),
    password: yup.string().max(30).label(t('users.model.password')),
    password_confirm: yup
      .string()
      .oneOf([yup.ref('password')], t('users.model.passwordNotMatch'))
      .label(t('users.model.passwordConfirm')),
  })
}

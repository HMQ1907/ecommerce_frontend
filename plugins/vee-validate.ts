import * as yup from 'yup'
import { setLocale } from 'yup'
import { configure, useForm, ComponentModellessBinds, GenericObject } from 'vee-validate'
import { localize } from '@vee-validate/i18n'
import { toTypedSchema } from '@vee-validate/yup'
import en from '@vee-validate/i18n/dist/locale/en.json'

type FieldType = Ref<
  ComponentModellessBinds & { 'onUpdate:modelValue': (value: string | undefined) => void } & {
    modelValue: string | undefined
  } & GenericObject
>

configure({
  generateMessage: localize('en', en),
  validateOnInput: true,
  validateOnBlur: true,
})

setLocale({
  mixed: {
    required: '${label} is a required field',
  },
})

const componentValid = (initialValues: Ref<Record<string, any>>, yupSchema: yup.ObjectShape) => {
  const { meta, values, errors, defineComponentBinds } = useForm({
    initialValues,
    validationSchema: toTypedSchema(yup.object(yupSchema)),
  })

  const fields: Record<string, FieldType> = {}

  Object.keys(initialValues.value).forEach((key) => (fields[key] = defineComponentBinds(key)))

  initialValues.value = values

  return { errors, fields, meta }
}

const setup = () => {}

export { setup, componentValid }

export default yup

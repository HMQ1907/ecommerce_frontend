import * as yup from 'yup'

export const documentSchema: yup.BaseSchema = (t: any) => {
  return yup.object({
    category_id: yup.string().nullable().required().label(t('documents.model.category')),
    name: yup.string().max(255).nullable().required().label(t('documents.model.name')),
  })
}

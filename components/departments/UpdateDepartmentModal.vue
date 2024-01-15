<script setup lang="ts">
import { useForm } from 'vee-validate'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
import * as yup from 'yup'
import { useQueryClient } from 'vue-query'
import { defineProps } from 'vue/dist/vue'
import AppModal from '@/components/shared/AppModal'
import { DepartmentTypes } from '@/types/departments/DepartmentTypes'
import DepartmentForm from '@/components/departments/DepartmentForm'

const props = defineProps({
  item: {
    type: Object,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
})
const emit = defineEmits(['closed', 'submit'])
const toast = useToast()
const { $api } = useNuxtApp()
const { t } = useI18n()
const queryClient = useQueryClient()
const isSubmitting = ref(false)

const schema = yup.object({
  name: yup.string().nullable().required().label(t('customers.model.name')),
  manager_id: yup.number().nullable().required().label(t('departments.model.manager')),
  parent_id: yup.number().nullable().required().label(t('departments.model.parent')),
  status: yup.string().nullable().required().label(t('departments.model.status')),
})

const { defineComponentBinds, setErrors, handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    id: props.item?.id,
    name: props.item?.name,
    _lft: props.item?._lft,
    _rgt: props.item?._rgt,
    manager_id: props.item?.manager_id,
    parent_id: props.item?.parent_id,
    status: props.item?.status,
    created_at: props.item?.created_at,
  } as DepartmentTypes,
})

const vuetifyConfig = (state: any) => ({
  props: {
    'error-messages': state.errors,
  },
})

const form = ref({
  name: defineComponentBinds('name', vuetifyConfig),
  manager_id: defineComponentBinds('manager_id', vuetifyConfig),
  parent_id: defineComponentBinds('parent_id', vuetifyConfig),
  status: defineComponentBinds('status', vuetifyConfig),
})

const onSubmit = handleSubmit((values) => {
  isSubmitting.value = true
  $api.departments
    .updateDepartment(values.id, values)
    .then(() => {
      queryClient.invalidateQueries('departments')
      toast.success(t('common.message.updateSuccess'))
      emit('closed')
    })
    .catch((err) => {
      setErrors(err)
    })
    .finally(() => {
      isSubmitting.value = false
    })
})
</script>

<template>
  <app-modal
    :loading="isSubmitting"
    :submit-text="$t('departments.action.update')"
    :title="props.title"
    width="800px"
    @cancel="emit('closed')"
    @submit="onSubmit"
  >
    <department-form :item="item" :value="form" />
  </app-modal>
</template>

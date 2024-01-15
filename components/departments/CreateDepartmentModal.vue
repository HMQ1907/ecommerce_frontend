<script setup lang="ts">
import { useForm } from 'vee-validate'
import { useI18n } from 'vue-i18n'
import * as yup from 'yup'
import { useToast } from 'vue-toastification'
import { useQueryClient } from 'vue-query'
import { PropType } from '@vue/runtime-core'
import AppModal from '@/components/shared/AppModal'
import { DepartmentTypes } from '@/types/departments/DepartmentTypes'
import DepartmentForm from '@/components/departments/DepartmentForm.vue'

const props = defineProps({
  item: {
    type: Object as PropType<DepartmentTypes>,
    default: () => ({
      name: undefined,
      _lft: undefined,
      _rgt: undefined,
      manager_id: undefined,
      parent_id: undefined,
      status: undefined,
      created_at: undefined,
    }),
  },
  branchId: {
    type: Number,
    required: true,
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
  name: yup.string().nullable().required().label(t('departments.model.name')),
  manager_id: yup.number().nullable().required().label(t('departments.model.manager')),
  parent_id: yup.number().nullable().required().label(t('departments.model.parent')),
  status: yup.string().nullable().required().label(t('departments.model.status')),
})

const { defineComponentBinds, handleSubmit, setErrors } = useForm({
  validationSchema: schema,
  initialValues: {
    name: null,
    _lft: null,
    _rgt: null,
    branch_id: props.branchId,
    manager_id: null,
    parent_id: null,
    status: 'active',
    created_at: null,
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

const submit = handleSubmit((values) => {
  isSubmitting.value = true
  $api.departments
    .createDepartment(values)
    .then(() => {
      queryClient.invalidateQueries('departments')
      toast.success(t('common.message.createSuccess'))
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
    :submit-text="$t('departments.action.create')"
    :title="title"
    width="800px"
    @cancel="emit('closed')"
    @submit="submit"
  >
    <department-form :value="form" />
  </app-modal>
</template>

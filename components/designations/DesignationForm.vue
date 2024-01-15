<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const props = defineProps({
  value: {
    type: Object,
    required: true,
  },
  item: {
    type: Object,
    default: () => ({}),
  },
})

const emit = defineEmits(['update:value'])

const { t } = useI18n()

const form = computed({
  get: () => props.value,
  set: (val) => emit('update:value', val),
})
</script>
<template>
  <v-form>
    <v-row dense>
      <v-col cols="8">
        <v-text-field v-bind="form.name" :label="t('designations.model.name')" />
      </v-col>
      <v-col cols="4">
        <v-text-field v-bind="form.code" :label="t('designations.model.code')" />
      </v-col>
      <v-col cols="12">
        <v-text-field v-bind="form.description" :label="t('designations.model.description')" variant="outlined" />
      </v-col>
    </v-row>
  </v-form>
</template>

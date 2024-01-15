<script setup lang="ts">
import { pick } from 'lodash'
import { useAttrs } from 'vue'
import { AddressType, PropertiesType } from '@/types/users/AddressTypes'
import ProvinceAutocomplete from '@/components/public/ProvinceAutocomplete'
import DistrictAutocomplete from '@/components/public/DistrictAutocomplete'
import WardAutocomplete from '@/components/public/WardAutocomplete'

const emit = defineEmits(['update:model-value'])

const props = defineProps({
  addresses: {
    type: Object,
    default: () => {},
  },
})
const attrs = useAttrs()

attrs.modelValue.properties = props.addresses.properties
attrs.modelValue.street = props.addresses.street

const form = computed<AddressType>({
  get: () => {
    const address = attrs.modelValue as AddressType
    if (!address.properties) {
      address.properties = {} as PropertiesType
    }
    return address
  },
  set: (val) => emit('update:model-value', val),
})

const provinceChanged = () => {
  form.value.properties.district_id = null
  form.value.properties.ward_id = null

  form.value.state = null
  form.value.street_extra = null
}

const districtChanged = () => {
  form.value.properties.ward_id = null

  form.value.street_extra = null
}
</script>

<template>
  <v-row dense>
    <v-col cols="12">
      <v-text-field v-model="form.street" :label="$t('customers.model.street')" />
    </v-col>
    <v-col cols="12" md="4">
      <province-autocomplete
        v-model="form.properties.province_id"
        v-model:title="form.city"
        :label="$t('customers.model.province')"
        @update:model-value="provinceChanged"
      />
    </v-col>
    <v-col cols="12" md="4">
      <district-autocomplete
        v-model="form.properties.district_id"
        v-model:title="form.state"
        :default-params="pick(form.properties, 'province_id')"
        :label="$t('customers.model.district')"
        @update:model-value="districtChanged"
      />
    </v-col>
    <v-col cols="12" md="4">
      <ward-autocomplete
        v-model="form.properties.ward_id"
        v-model:title="form.street_extra"
        :default-params="pick(form.properties, 'district_id')"
        :label="$t('customers.model.ward')"
      />
    </v-col>
  </v-row>
</template>

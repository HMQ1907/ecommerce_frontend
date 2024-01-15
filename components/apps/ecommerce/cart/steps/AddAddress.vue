<script setup lang="ts">
import { ref } from 'vue'
import { Form } from 'vee-validate'

const props = defineProps({
  dialog: Boolean,
})
const emit = defineEmits(['update:dialog'])

const value = computed({
  get() {
    return props.dialog
  },
  set(value) {
    emit('update:dialog', value)
  },
})
const name = ref('')
const inline = ref('home')
const isdefault = ref(false)
const rules: any = ref({
  name: (value: string) => value.length > 2 || 'More than two letters required',
})
</script>

<template>
  <v-dialog v-model="value" max-width="600">
    <v-card>
      <v-card-text>
        <div class="d-flex justify-space-between">
          <h3 class="text-h3">Add Billing Address</h3>
          <v-btn flat icon size="small" @click="$emit('handledialog')"><XIcon size="16" /></v-btn>
        </div>
      </v-card-text>
      <v-divider />
      <v-card-text>
        <form class="py-3">
          <v-row>
            <v-col cols="12" lg="6">
              <v-text-field
                v-model="name"
                :color="name.length > 2 ? 'success' : 'primary'"
                hide-details="auto"
                label="First Name"
                :rules="[rules.required, rules.name]"
                variant="outlined"
              />
            </v-col>
            <v-col cols="12" lg="6">
              <v-radio-group v-model="inline" hide-details="auto" inline>
                <v-radio color="primary" label="Home" value="home" />
                <v-radio color="secondary" label="Office" value="office" />
              </v-radio-group>
            </v-col>
            <v-col cols="12" lg="12">
              <v-text-field
                v-model="name"
                :color="name.length > 2 ? 'success' : 'primary'"
                hide-details="auto"
                label="Building No"
                :rules="[rules.required, rules.name]"
                variant="outlined"
              />
            </v-col>
            <v-col cols="12" lg="12">
              <v-text-field
                v-model="name"
                :color="name.length > 2 ? 'success' : 'primary'"
                hide-details="auto"
                label="Street"
                :rules="[rules.required, rules.name]"
                variant="outlined"
              />
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                v-model="name"
                :color="name.length > 2 ? 'success' : 'primary'"
                hide-details="auto"
                label="City"
                :rules="[rules.required, rules.name]"
                variant="outlined"
              />
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                v-model="name"
                :color="name.length > 2 ? 'success' : 'primary'"
                hide-details="auto"
                label="State"
                :rules="[rules.required, rules.name]"
                variant="outlined"
              />
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                v-model="name"
                :color="name.length > 2 ? 'success' : 'primary'"
                hide-details="auto"
                label="Country"
                :rules="[rules.required, rules.name]"
                variant="outlined"
              />
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                v-model="name"
                :color="name.length > 2 ? 'success' : 'primary'"
                hide-details="auto"
                label="Area code"
                :rules="[rules.required, rules.name]"
                variant="outlined"
              />
            </v-col>
            <v-col cols="12" lg="12">
              <v-text-field
                v-model="name"
                :color="name.length > 2 ? 'success' : 'primary'"
                hide-details="auto"
                label="Contact"
                :rules="[rules.required, rules.name]"
                variant="outlined"
              />
            </v-col>
            <v-col cols="12" lg="12">
              <v-switch v-model="isdefault" label="Default" />
            </v-col>
            <v-col class="text-right" cols="12" lg="12">
              <v-btn color="error" type="submit" variant="text">Cancel</v-btn>
              <v-btn color="primary" type="submit">Submit</v-btn>
            </v-col>
          </v-row>
        </form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

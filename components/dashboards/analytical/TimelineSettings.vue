<script setup lang="ts">
import { ref } from 'vue'
const dtext = ref('George deo')
const emailtext = ref('')
const password = ref('')
const placetext = ref('')
const show1 = ref(false)
const items = ref(['IT', 'Blade Runner', 'Thor'])
const rules = ref({
  required: (value: string) => !!value || 'Required.',
  min: (v: string) => v.length >= 8 || 'Min 8 characters',
  emailMatch: () => "The email and password you entered don't match",
})
</script>
<template>
  <div class="py-4">
    <v-row>
      <v-col cols="12">
        <v-label>Name</v-label>
        <v-text-field v-model="dtext" hide-details type="text" />
      </v-col>
      <v-col cols="12">
        <v-label>Email</v-label>
        <v-text-field v-model="emailtext" hide-details type="email" />
      </v-col>
      <v-col cols="12">
        <v-label>Password</v-label>
        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          counter
          hide-details
          hint="At least 8 characters"
          name="input-10-1"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          @click:append="show1 = !show1"
        />
      </v-col>
      <v-col cols="12">
        <v-label>Address</v-label>
        <v-text-field v-model="placetext" hide-details placeholder="Enter Address" type="text" />
      </v-col>
      <v-col cols="12">
        <v-label>Select</v-label>
        <v-select hide-details :items="items" />
      </v-col>
      <v-col cols="12"><v-btn class="mt-3" color="primary" variant="flat">Submit</v-btn></v-col>
    </v-row>
  </div>
</template>

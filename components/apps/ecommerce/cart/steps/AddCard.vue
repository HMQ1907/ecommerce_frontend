<script setup lang="ts">
import { ref } from 'vue'

const textbank = ref('')
const textcno = ref('')
const textdate = ref('')
const textcvv = ref('')
</script>

<template>
  <v-card>
    <v-card-item class="py-4">
      <div class="d-flex align-center justify-space-between">
        <h4 class="text-18 font-weight-medium">Add Payment Card</h4>
        <v-btn color="transparent" icon variant="flat" @click="$emit('dialogcard')">
          <XIcon stroke-width="1.5" width="20" />
        </v-btn>
      </div>
    </v-card-item>
    <v-divider />
    <v-card-text>
      <v-radio-group inline>
        <v-radio color="primary" label="Visa" value="1" />
        <v-radio color="secondary" label="MasterCard" value="2" />
      </v-radio-group>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="textbank" color="primary" hide-details label="Bank" required variant="outlined" />
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="textcno"
            color="primary"
            hide-details
            label="Card Number"
            required
            variant="outlined"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="textdate"
            color="primary"
            hide-details
            label="Expiry Date"
            required
            variant="outlined"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-model="textcvv" color="primary" hide-details label="cvv" required variant="outlined" />
        </v-col>
      </v-row>
      <v-radio-group class="mt-4" inline>
        <v-radio color="primary" label="Credit Card" value="1" />
        <v-radio color="secondary" label="Debit" value="2" />
        <v-radio color="secondary" label="Net Banking" value="3" />
      </v-radio-group>
    </v-card-text>
    <v-card-actions class="justify-end">
      <v-btn color="error" @click="$emit('dialogcard')">Cancel</v-btn>
      <v-btn color="primary" variant="flat" @click="$emit('dialogcard')">Submit</v-btn>
    </v-card-actions>
  </v-card>
</template>

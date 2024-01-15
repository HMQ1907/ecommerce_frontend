<script setup lang="ts">
import { ref } from 'vue'

/* Location Select */
const select = ref('United States')
const location = ref(['United States', 'United Kingdom', 'India', 'Russia'])

/* Currency Select */
const Currencyselect = ref('US Dollar ($)')
const Currency = ref(['US Dollar ($)', 'United Kingdom (Pound)', 'India (INR)', 'Russia (Ruble)'])

/* change password */
const currenypwd = ref('123456789142')
const newpwd = ref('123456789142')
const confirmpwd = ref('123456789142')

/* personal detail */
const namemodel = ref('Mathew Anderson')
const storemodel = ref('Maxima Studio')
const storemail = ref('info@modernize.com')
const storephone = ref('+91 12345 65478')
const storeaddress = ref('814 Howard Street, 120065, India')
</script>

<template>
  <v-card elevation="10">
    <v-row class="ma-sm-n2 ma-n1">
      <v-col cols="12" sm="6">
        <v-card elevation="10">
          <v-card-item>
            <h5 class="text-h5">Change Profile</h5>
            <div class="text-subtitle-1 text-medium-emphasis mt-2">Change your profile picture from here</div>
            <div class="text-center mt-6 mb-6">
              <v-avatar size="120">
                <img alt="image" height="120" src="/images/profile/user-1.jpg" />
              </v-avatar>
            </div>
            <div class="d-flex justify-center">
              <v-btn class="mx-2" color="primary" flat>Upload</v-btn>
              <v-btn class="mx-2" color="error" flat variant="outlined">Reset</v-btn>
            </div>
            <div class="text-subtitle-1 text-medium-emphasis text-center my-sm-8 my-6">
              Allowed JPG, GIF or PNG. Max size of 800K
            </div>
          </v-card-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card elevation="10">
          <v-card-item>
            <h5 class="text-h5">Change Password</h5>
            <div class="text-subtitle-1 text-medium-emphasis mt-2">To change your password please confirm here</div>
            <div class="mt-5">
              <v-label class="mb-2 font-weight-medium">Current Password</v-label>
              <v-text-field v-model="currenypwd" color="primary" type="password" variant="outlined" />
              <v-label class="mb-2 font-weight-medium">New Password</v-label>
              <v-text-field v-model="newpwd" color="primary" type="password" variant="outlined" />
              <v-label class="mb-2 font-weight-medium">Confirm Password</v-label>
              <v-text-field v-model="confirmpwd" color="primary" hide-details type="password" variant="outlined" />
            </div>
          </v-card-item>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card elevation="10">
          <v-card-item>
            <h5 class="text-h5">Personal Details</h5>
            <div class="text-subtitle-1 text-medium-emphasis mt-2">
              To change your personal detail , edit and save from here
            </div>
            <div class="mt-5">
              <v-row>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">Your Name</v-label>
                  <v-text-field v-model="namemodel" color="primary" hide-details type="text" variant="outlined" />
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">Store Name</v-label>
                  <v-text-field v-model="storemodel" color="primary" hide-details type="text" variant="outlined" />
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">Location</v-label>
                  <v-select
                    v-model="select"
                    hide-details
                    item-title="state"
                    item-value="abbr"
                    :items="location"
                    label="Select"
                    return-object
                    single-line
                    variant="outlined"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">Currency</v-label>
                  <v-select
                    v-model="Currencyselect"
                    hide-details
                    item-title="state"
                    item-value="abbr"
                    :items="Currency"
                    label="Select"
                    return-object
                    single-line
                    variant="outlined"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">Email</v-label>
                  <v-text-field v-model="storemail" color="primary" hide-details type="email" variant="outlined" />
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">Phone</v-label>
                  <v-text-field v-model="storephone" color="primary" hide-details type="text" variant="outlined" />
                </v-col>
                <v-col cols="12">
                  <v-label class="mb-2 font-weight-medium">Address</v-label>
                  <v-text-field v-model="storeaddress" color="primary" hide-details type="text" variant="outlined" />
                </v-col>
              </v-row>
            </div>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
    <div class="d-flex justify-end mt-5">
      <v-btn class="mr-4" color="primary" flat size="large">Save</v-btn>
      <v-btn class="bg-lighterror text-error" flat size="large">Cancel</v-btn>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
/* import tabler icons */
import { CirclePlusIcon, PackageIcon, CreditCardIcon, PencilMinusIcon } from 'vue-tabler-icons'

/* Billing info */
const businessname = ref('Visitor Analytics')
const businesssector = ref('Arts, Media & Entertainment')
const billingcountry = ref('Romania')
</script>
<template>
  <v-row class="justify-center ma-n2">
    <!----Billing Information----->
    <v-col cols="12" md="9">
      <v-card elevation="10">
        <v-card-item>
          <h4 class="text-h4">Billing Information</h4>
          <div class="mt-6">
            <v-row>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">Business Name*</v-label>
                <v-text-field v-model="businessname" color="primary" hide-details type="text" variant="outlined" />
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">Business Sector*</v-label>
                <v-text-field v-model="businesssector" color="primary" hide-details type="text" variant="outlined" />
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">Business Address*</v-label>
                <v-text-field color="primary" hide-details type="text" variant="outlined" />
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">Country*</v-label>
                <v-text-field v-model="billingcountry" color="primary" hide-details type="text" variant="outlined" />
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">First Name*</v-label>
                <v-text-field color="primary" hide-details type="text" variant="outlined" />
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">Last Name*</v-label>
                <v-text-field color="primary" hide-details type="text" variant="outlined" />
              </v-col>
            </v-row>
          </div>
        </v-card-item>
      </v-card>
    </v-col>
    <!-----Date & Time------->
    <v-col cols="12" md="9">
      <v-card elevation="10">
        <v-card-item>
          <h4 class="text-h4">
            Current Plan :
            <span class="text-success">Executive</span>
          </h4>
          <div class="text-subtitle-1 text-medium-emphasis text-10 my-3">
            Thanks for being a premium member and supporting our development.
          </div>
          <div class="d-flex align-center mt-7">
            <v-avatar class="mr-2" color="lightprimary" rounded="md" size="48">
              <package-icon size="22" />
            </v-avatar>
            <div class="pl-4">
              <h5 class="text-subtitle-1 text-medium-emphasis mb-1">Current Plan</h5>
              <h6 class="text-h6">750.000 Monthly Visits</h6>
            </div>
            <div class="ml-auto">
              <v-btn class="lightprimary d-flex" icon size="35" variant="flat">
                <v-avatar size="35">
                  <circle-plus-icon size="22" />
                </v-avatar>
                <v-tooltip activator="parent" location="bottom">Add</v-tooltip>
              </v-btn>
            </div>
          </div>
          <div class="d-flex mt-5">
            <v-btn class="mr-4" color="primary" flat>Change Plan</v-btn>
            <v-btn class="text-error" flat variant="outlined">Reset Plan</v-btn>
          </div>
        </v-card-item>
      </v-card>
    </v-col>
    <!-----Payment Method------->
    <v-col cols="12" md="9">
      <v-card elevation="10">
        <v-card-item>
          <h4 class="text-h4">Payment Method</h4>
          <div class="text-subtitle-1 text-medium-emphasis text-10 my-3">On 26 December, 2023</div>
          <div class="d-flex align-center mt-7">
            <v-avatar class="mr-2" color="lightprimary" rounded="md" size="48">
              <credit-card-icon size="22" />
            </v-avatar>
            <div class="pl-4">
              <h6 class="text-h6 mb-3 mt-n1">Visa</h6>
              <h5 class="text-subtitle-1">*****2102</h5>
            </div>
            <div class="ml-auto">
              <v-btn class="lightprimary d-flex" icon size="35" variant="flat">
                <v-avatar size="35">
                  <pencil-minus-icon size="22" />
                </v-avatar>
                <v-tooltip activator="parent" location="bottom">Edit</v-tooltip>
              </v-btn>
            </div>
          </div>
          <div class="mt-4">
            <div class="text-subtitle-1 text-medium-emphasis text-10 mb-3">
              If you updated your payment method, it will only be dislpayed here after your next billing cycle.
            </div>
            <v-btn class="text-error" flat variant="outlined">Cancel Subscription</v-btn>
          </div>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
  <div class="d-flex justify-end mt-5">
    <v-btn class="mr-4" color="primary" flat size="large">Save</v-btn>
    <v-btn class="bg-lighterror text-error" flat size="large">Cancel</v-btn>
  </div>
</template>

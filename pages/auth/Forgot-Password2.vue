<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})
</script>

<template>
  <div class="authentication">
    <v-container class="pa-3" fluid>
      <v-row class="h-100vh d-flex justify-center align-center">
        <v-col class="d-flex align-center" cols="12" lg="4" xl="5">
          <v-card class="px-sm-1 px-0 mx-auto" elevation="10" max-width="450" rounded="md">
            <v-card-item class="pa-sm-8">
              <div class="d-flex justify-center my-5"><LcFullLogoDark /></div>
              <p class="text-subtitle-1 text-center text-10">
                Please enter the email address associated with your account and We will email you a link to reset your
                password.
              </p>
              <AuthResetForm />
              <v-btn block class="mt-5 text-primary" color="lightprimary" flat size="large" to="/auth/login2">
                Back to Login
              </v-btn>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

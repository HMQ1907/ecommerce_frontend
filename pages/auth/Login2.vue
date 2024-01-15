<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})
</script>
<template>
  <div class="authentication">
    <v-container class="pa-3" fluid>
      <v-row class="h-100vh d-flex justify-center align-center">
        <v-col class="d-flex align-center" cols="12">
          <v-card class="px-sm-1 px-0 mx-auto" elevation="10" max-width="450" rounded="md">
            <v-card-item class="pa-sm-8">
              <div class="d-flex justify-center py-4 mb-5"><LcFullLogoDark /></div>
              <AuthLoginForm />
              <h6 class="text-h6 text-medium-emphasis d-flex justify-center align-center mt-3">
                New to AdminPro?
                <v-btn
                  class="pl-0 text-primary text-body-1 opacity-1 pl-2 font-weight-medium"
                  height="auto"
                  to="/auth/register2"
                  variant="plain"
                >
                  Create an account
                </v-btn>
              </h6>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

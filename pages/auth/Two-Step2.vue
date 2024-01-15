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
          <v-card class="px-sm-1 px-0 mx-auto" elevation="10" max-width="455" rounded="md">
            <v-card-item class="pa-sm-8">
              <div class="d-flex justify-center py-4"><LcFullLogoDark /></div>
              <p class="text-subtitle-1 text-center mt-2 text-13">
                We sent a verification code to your mobile. Enter the code from the mobile in the field below.
              </p>
              <h6 class="text-subtitle-1 font-weight-bold mt-3 text-center">******1234</h6>
              <!---Form---->
              <AuthTwoStepForm />
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

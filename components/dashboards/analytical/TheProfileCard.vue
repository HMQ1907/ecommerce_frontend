<template>
  <VCard class="overflow-hidden" elevation="10">
    <img class="w-100" src="/images/backgrounds/login-register.jpg" />
    <div class="d-flex justify-center mt-n15">
      <v-avatar size="100">
        <img alt="user" src="/images/profile/1.jpg" width="100" />
      </v-avatar>
    </div>
    <v-card-text>
      <div class="p-4 text-center">
        <h2 class="mb-0 text-h4">Jonathan Dominic</h2>
        <div>Web Designer &amp; Developer</div>
        <v-btn class="mt-3 px-7" color="primary" dark flat rounded x-large>Follow</v-btn>
        <v-row class="mt-6 pb-3">
          <v-col cols="4">
            <h2 class="mb-0 text-h4">1099</h2>
            <div>Articles</div>
          </v-col>
          <v-col cols="4">
            <h2 class="mb-0 text-h4">23,469</h2>
            <div>Followers</div>
          </v-col>
          <v-col cols="4">
            <h2 class="mb-0 text-h4">6035</h2>
            <div>Following</div>
          </v-col>
        </v-row>
      </div>
    </v-card-text>
  </VCard>
</template>

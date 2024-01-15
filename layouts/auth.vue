<template>
  <v-app>
    <div class="pa-3 h-100vh mh-100">
      <v-row class="h-100vh mh-100 auth">
        <v-col class="d-flex align-center justify-center bg-surface pa-0 pa-md-12" cols="12" lg="4" md="6">
          <div class="mt-xl-0 mw-100">
            <img
              alt="login-background"
              class="position-relative tw-w-full tw-max-w-[200px] tw-mb-10"
              src="/images/logos/logo.png"
            />
            <nuxt-page />
          </div>
        </v-col>
        <v-col class="login-background d-none d-md-block" cols="12" lg="8" md="6" />
      </v-row>
    </div>
  </v-app>
</template>

<style lang="scss" scoped>
.login-background {
  background: url('/images/backgrounds/bg.jpeg') no-repeat center center;
  background-size: cover;
}
</style>

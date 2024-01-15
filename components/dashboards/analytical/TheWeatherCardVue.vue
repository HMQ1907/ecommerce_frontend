<template>
  <VCard elevation="10">
    <v-card-text class="pa-0">
      <img class="w-100" height="90" src="/images/backgrounds/weatherbg.jpg" />
      <div class="pa-5">
        <v-row>
          <v-col cols="8" lg="6" sm="8">
            <div class="d-flex align-center justify-center">
              <v-icon color="primary" size="45">mdi-weather-partly-cloudy</v-icon>

              <div class="ml-3">
                <h1 class="font-weight-medium">
                  32
                  <sup>0</sup>
                </h1>
                <div class="text-subtitle-2 mt-1">Sunny Rainy day</div>
              </div>
            </div>
          </v-col>
          <!-- <v-divider vertical></v-divider> -->
          <v-col cols="4" lg="6" sm="4">
            <div class="d-flex align-center justify-center">
              <v-icon color="secondary" size="45">mdi-weather-night-partly-cloudy</v-icon>
              <div class="ml-3">
                <h1 class="font-weight-medium">
                  25
                  <sup>0</sup>
                </h1>
                <div class="text-subtitle-2 mt-1">Tonight</div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-card-text>
  </VCard>
</template>

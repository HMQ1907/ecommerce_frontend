<script setup lang="ts">
import { ref } from 'vue'
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue'

const page = ref({ title: 'Material' })
const breadcrumbs = ref([
  {
    text: 'Icons',
    disabled: false,
    href: '#',
  },
  {
    text: 'Material',
    disabled: true,
    href: '#',
  },
])
</script>
<template>
  <base-breadcrumb :breadcrumbs="breadcrumbs" :title="page.title" />
  <v-row vs-justify="center">
    <v-col cols="12" lg="12">
      <v-card elevation="10">
        <v-card-text class="pa-5">
          <v-row>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-access-point" />
              <code class="mr-2">f002</code>
              <span>mdi-access-point</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-access-point-network" />
              <code class="mr-2">f003</code>
              <span>mdi-access-point-network</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-account" />
              <code class="mr-2">f004</code>
              <span>mdi-account</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-account-alert" />
              <code class="mr-2">f005</code>
              <span>mdi-account-alert</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-account-box" />
              <code class="mr-2">f006</code>
              <span>mdi-account-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-account-box-outline" />
              <code class="mr-2">f007</code>
              <span>mdi-account-box-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-account-check" />
              <code class="mr-2">f008</code>
              <span>mdi-account-check</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-account-circle" />
              <code class="mr-2">f009</code>
              <span>mdi-account-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-account-convert" />
              <code class="mr-2">f00a</code>
              <span>mdi-account-convert</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-account-edit" />
              <code class="mr-2">f6bb</code>
              <span>mdi-account-edit</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-account-key" />
              <code class="mr-2">f00b</code>
              <span>mdi-account-key</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-account-minus" />
              <code class="mr-2">f00d</code>
              <span>mdi-account-minus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-account-multiple" />
              <code class="mr-2">f00e</code>
              <span>mdi-account-multiple</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-account-multiple-minus" />
              <code class="mr-2">f5d3</code>
              <span>mdi-account-multiple-minus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-account-multiple-outline" />
              <code class="mr-2">f00f</code>
              <span>mdi-account-multiple-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-account-multiple-plus" />
              <code class="mr-2">f010</code>
              <span>mdi-account-multiple-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-account-network" />
              <code class="mr-2">f011</code>
              <span>mdi-account-network</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-account-off" />
              <code class="mr-2">f012</code>
              <span>mdi-account-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-account-outline" />
              <code class="mr-2">f013</code>
              <span>mdi-account-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-account-plus" />
              <code class="mr-2">f014</code>
              <span>mdi-account-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-account-remove" />
              <code class="mr-2">f015</code>
              <span>mdi-account-remove</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-account-search" />
              <code class="mr-2">f016</code>
              <span>mdi-account-search</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-account-settings" />
              <code class="mr-2">f630</code>
              <span>mdi-account-settings</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-account-star" />
              <code class="mr-2">f017</code>
              <span>mdi-account-star</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-account-switch" />
              <code class="mr-2">f019</code>
              <span>mdi-account-switch</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-adjust" />
              <code class="mr-2">f01a</code>
              <span>mdi-adjust</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-air-conditioner" />
              <code class="mr-2">f01b</code>
              <span>mdi-air-conditioner</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-airballoon" />
              <code class="mr-2">f01c</code>
              <span>mdi-airballoon</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-airplane" />
              <code class="mr-2">f01d</code>
              <span>mdi-airplane</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-airplane-landing" />
              <code class="mr-2">f5d4</code>
              <span>mdi-airplane-landing</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-airplane-off" />
              <code class="mr-2">f01e</code>
              <span>mdi-airplane-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-airplane-takeoff" />
              <code class="mr-2">f5d5</code>
              <span>mdi-airplane-takeoff</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-alarm" />
              <code class="mr-2">f020</code>
              <span>mdi-alarm</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-alarm-check" />
              <code class="mr-2">f021</code>
              <span>mdi-alarm-check</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-alarm-multiple" />
              <code class="mr-2">f022</code>
              <span>mdi-alarm-multiple</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-alarm-off" />
              <code class="mr-2">f023</code>
              <span>mdi-alarm-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-alarm-plus" />
              <code class="mr-2">f024</code>
              <span>mdi-alarm-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-alarm-snooze" />
              <code class="mr-2">f68d</code>
              <span>mdi-alarm-snooze</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-album" />
              <code class="mr-2">f025</code>
              <span>mdi-album</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-alert" />
              <code class="mr-2">f026</code>
              <span>mdi-alert</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-alert-box" />
              <code class="mr-2">f027</code>
              <span>mdi-alert-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-alert-circle" />
              <code class="mr-2">f028</code>
              <span>mdi-alert-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-alert-circle-outline" />
              <code class="mr-2">f5d6</code>
              <span>mdi-alert-circle-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-alert-octagon" />
              <code class="mr-2">f029</code>
              <span>mdi-alert-octagon</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-alert-octagram" />
              <code class="mr-2">f6bc</code>
              <span>mdi-alert-octagram</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-alert-outline" />
              <code class="mr-2">f02a</code>
              <span>mdi-alert-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-all-inclusive" />
              <code class="mr-2">f6bd</code>
              <span>mdi-all-inclusive</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-alpha" />
              <code class="mr-2">f02b</code>
              <span>mdi-alpha</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-alphabetical" />
              <code class="mr-2">f02c</code>
              <span>mdi-alphabetical</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-altimeter" />
              <code class="mr-2">f5d7</code>
              <span>mdi-altimeter</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-amazon" />
              <code class="mr-2">f02d</code>
              <span>mdi-amazon</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-amazon-clouddrive" />
              <code class="mr-2">f02e</code>
              <span>mdi-amazon-clouddrive</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-ambulance" />
              <code class="mr-2">f02f</code>
              <span>mdi-ambulance</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-amplifier" />
              <code class="mr-2">f030</code>
              <span>mdi-amplifier</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-anchor" />
              <code class="mr-2">f031</code>
              <span>mdi-anchor</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-android" />
              <code class="mr-2">f032</code>
              <span>mdi-android</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-android-debug-bridge" />
              <code class="mr-2">f033</code>
              <span>mdi-android-debug-bridge</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-android-studio" />
              <code class="mr-2">f034</code>
              <span>mdi-android-studio</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-angular" />
              <code class="mr-2">f6b1</code>
              <span>mdi-angular</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-angularjs" />
              <code class="mr-2">f6be</code>
              <span>mdi-angularjs</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-animation" />
              <code class="mr-2">f5d8</code>
              <span>mdi-animation</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-apple" />
              <code class="mr-2">f035</code>
              <span>mdi-apple</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-apple-finder" />
              <code class="mr-2">f036</code>
              <span>mdi-apple-finder</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-apple-ios" />
              <code class="mr-2">f037</code>
              <span>mdi-apple-ios</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-apple-keyboard-caps" />
              <code class="mr-2">f632</code>
              <span>mdi-apple-keyboard-caps</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-apple-keyboard-command" />
              <code class="mr-2">f633</code>
              <span>mdi-apple-keyboard-command</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-apple-keyboard-control" />
              <code class="mr-2">f634</code>
              <span>mdi-apple-keyboard-control</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-apple-keyboard-option" />
              <code class="mr-2">f635</code>
              <span>mdi-apple-keyboard-option</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-apple-keyboard-shift" />
              <code class="mr-2">f636</code>
              <span>mdi-apple-keyboard-shift</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-apple-safari" />
              <code class="mr-2">f039</code>
              <span>mdi-apple-safari</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-application" />
              <code class="mr-2">f614</code>
              <span>mdi-application</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-apps" />
              <code class="mr-2">f03b</code>
              <span>mdi-apps</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-archive" />
              <code class="mr-2">f03c</code>
              <span>mdi-archive</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrange-bring-forward" />
              <code class="mr-2">f03d</code>
              <span>mdi-arrange-bring-forward</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrange-bring-to-front" />
              <code class="mr-2">f03e</code>
              <span>mdi-arrange-bring-to-front</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrange-send-backward" />
              <code class="mr-2">f03f</code>
              <span>mdi-arrange-send-backward</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrange-send-to-back" />
              <code class="mr-2">f040</code>
              <span>mdi-arrange-send-to-back</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-all" />
              <code class="mr-2">f041</code>
              <span>mdi-arrow-all</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-bottom-left" />
              <code class="mr-2">f042</code>
              <span>mdi-arrow-bottom-left</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-bottom-right" />
              <code class="mr-2">f043</code>
              <span>mdi-arrow-bottom-right</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-down" />
              <code class="mr-2">f045</code>
              <span>mdi-arrow-down</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-down-bold" />
              <code class="mr-2">f046</code>
              <span>mdi-arrow-down-bold</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-down-bold-circle" />
              <code class="mr-2">f047</code>
              <span>mdi-arrow-down-bold-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-down-bold-circle-outline" />
              <code class="mr-2">f048</code>
              <span>mdi-arrow-down-bold-circle-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-down-bold-hexagon-outline" />
              <code class="mr-2">f049</code>
              <span>mdi-arrow-down-bold-hexagon-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-down-box" />
              <code class="mr-2">f6bf</code>
              <span>mdi-arrow-down-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-down-drop-circle" />
              <code class="mr-2">f04a</code>
              <span>mdi-arrow-down-drop-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-down-drop-circle-outline" />
              <code class="mr-2">f04b</code>
              <span>mdi-arrow-down-drop-circle-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-expand" />
              <code class="mr-2">f616</code>
              <span>mdi-arrow-expand</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-expand-all" />
              <code class="mr-2">f04c</code>
              <span>mdi-arrow-expand-all</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-left" />
              <code class="mr-2">f04d</code>
              <span>mdi-arrow-left</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-left-bold" />
              <code class="mr-2">f04e</code>
              <span>mdi-arrow-left-bold</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-left-bold-circle" />
              <code class="mr-2">f04f</code>
              <span>mdi-arrow-left-bold-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-left-bold-circle-outline" />
              <code class="mr-2">f050</code>
              <span>mdi-arrow-left-bold-circle-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-left-bold-hexagon-outline" />
              <code class="mr-2">f051</code>
              <span>mdi-arrow-left-bold-hexagon-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-left-box" />
              <code class="mr-2">f6c0</code>
              <span>mdi-arrow-left-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-left-drop-circle" />
              <code class="mr-2">f052</code>
              <span>mdi-arrow-left-drop-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-left-drop-circle-outline" />
              <code class="mr-2">f053</code>
              <span>mdi-arrow-left-drop-circle-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-right" />
              <code class="mr-2">f054</code>
              <span>mdi-arrow-right</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-right-bold" />
              <code class="mr-2">f055</code>
              <span>mdi-arrow-right-bold</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-right-bold-circle" />
              <code class="mr-2">f056</code>
              <span>mdi-arrow-right-bold-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-right-bold-circle-outline" />
              <code class="mr-2">f057</code>
              <span>mdi-arrow-right-bold-circle-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-right-bold-hexagon-outline" />
              <code class="mr-2">f058</code>
              <span>mdi-arrow-right-bold-hexagon-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-right-box" />
              <code class="mr-2">f6c1</code>
              <span>mdi-arrow-right-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-right-drop-circle" />
              <code class="mr-2">f059</code>
              <span>mdi-arrow-right-drop-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-right-drop-circle-outline" />
              <code class="mr-2">f05a</code>
              <span>mdi-arrow-right-drop-circle-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-top-left" />
              <code class="mr-2">f05b</code>
              <span>mdi-arrow-top-left</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-top-right" />
              <code class="mr-2">f05c</code>
              <span>mdi-arrow-top-right</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-up" />
              <code class="mr-2">f05d</code>
              <span>mdi-arrow-up</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-up-bold" />
              <code class="mr-2">f05e</code>
              <span>mdi-arrow-up-bold</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-up-bold-circle" />
              <code class="mr-2">f05f</code>
              <span>mdi-arrow-up-bold-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-up-bold-circle-outline" />
              <code class="mr-2">f060</code>
              <span>mdi-arrow-up-bold-circle-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-up-bold-hexagon-outline" />
              <code class="mr-2">f061</code>
              <span>mdi-arrow-up-bold-hexagon-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-up-box" />
              <code class="mr-2">f6c2</code>
              <span>mdi-arrow-up-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-up-drop-circle" />
              <code class="mr-2">f062</code>
              <span>mdi-arrow-up-drop-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-arrow-up-drop-circle-outline" />
              <code class="mr-2">f063</code>
              <span>mdi-arrow-up-drop-circle-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-assistant" />
              <code class="mr-2">f064</code>
              <span>mdi-assistant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-asterisk" />
              <code class="mr-2">f6c3</code>
              <span>mdi-asterisk</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-at" />
              <code class="mr-2">f065</code>
              <span>mdi-at</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-attachment" />
              <code class="mr-2">f066</code>
              <span>mdi-attachment</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-auto-fix" />
              <code class="mr-2">f068</code>
              <span>mdi-auto-fix</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-auto-upload" />
              <code class="mr-2">f069</code>
              <span>mdi-auto-upload</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-autorenew" />
              <code class="mr-2">f06a</code>
              <span>mdi-autorenew</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-av-timer" />
              <code class="mr-2">f06b</code>
              <span>mdi-av-timer</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-baby" />
              <code class="mr-2">f06c</code>
              <span>mdi-baby</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-backburger" />
              <code class="mr-2">f06d</code>
              <span>mdi-backburger</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-backspace" />
              <code class="mr-2">f06e</code>
              <span>mdi-backspace</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-backup-restore" />
              <code class="mr-2">f06f</code>
              <span>mdi-backup-restore</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bandcamp" />
              <code class="mr-2">f674</code>
              <span>mdi-bandcamp</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bank" />
              <code class="mr-2">f070</code>
              <span>mdi-bank</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-barcode" />
              <code class="mr-2">f071</code>
              <span>mdi-barcode</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-barcode-scan" />
              <code class="mr-2">f072</code>
              <span>mdi-barcode-scan</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-barley" />
              <code class="mr-2">f073</code>
              <span>mdi-barley</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-barrel" />
              <code class="mr-2">f074</code>
              <span>mdi-barrel</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-basket" />
              <code class="mr-2">f076</code>
              <span>mdi-basket</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-basket-fill" />
              <code class="mr-2">f077</code>
              <span>mdi-basket-fill</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-basket-unfill" />
              <code class="mr-2">f078</code>
              <span>mdi-basket-unfill</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-battery" />
              <code class="mr-2">f079</code>
              <span>mdi-battery</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-battery-10" />
              <code class="mr-2">f07a</code>
              <span>mdi-battery-10</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-battery-20" />
              <code class="mr-2">f07b</code>
              <span>mdi-battery-20</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-battery-30" />
              <code class="mr-2">f07c</code>
              <span>mdi-battery-30</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-battery-40" />
              <code class="mr-2">f07d</code>
              <span>mdi-battery-40</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-battery-50" />
              <code class="mr-2">f07e</code>
              <span>mdi-battery-50</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-battery-60" />
              <code class="mr-2">f07f</code>
              <span>mdi-battery-60</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-battery-70" />
              <code class="mr-2">f080</code>
              <span>mdi-battery-70</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-battery-80" />
              <code class="mr-2">f081</code>
              <span>mdi-battery-80</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-battery-90" />
              <code class="mr-2">f082</code>
              <span>mdi-battery-90</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-battery-alert" />
              <code class="mr-2">f083</code>
              <span>mdi-battery-alert</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-battery-charging" />
              <code class="mr-2">f084</code>
              <span>mdi-battery-charging</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-battery-charging-100" />
              <code class="mr-2">f085</code>
              <span>mdi-battery-charging-100</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-battery-charging-20" />
              <code class="mr-2">f086</code>
              <span>mdi-battery-charging-20</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-battery-charging-30" />
              <code class="mr-2">f087</code>
              <span>mdi-battery-charging-30</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-battery-charging-40" />
              <code class="mr-2">f088</code>
              <span>mdi-battery-charging-40</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-battery-charging-60" />
              <code class="mr-2">f089</code>
              <span>mdi-battery-charging-60</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-battery-charging-80" />
              <code class="mr-2">f08a</code>
              <span>mdi-battery-charging-80</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-battery-charging-90" />
              <code class="mr-2">f08b</code>
              <span>mdi-battery-charging-90</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-battery-minus" />
              <code class="mr-2">f08c</code>
              <span>mdi-battery-minus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-battery-negative" />
              <code class="mr-2">f08d</code>
              <span>mdi-battery-negative</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-battery-outline" />
              <code class="mr-2">f08e</code>
              <span>mdi-battery-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-battery-plus" />
              <code class="mr-2">f08f</code>
              <span>mdi-battery-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-battery-positive" />
              <code class="mr-2">f090</code>
              <span>mdi-battery-positive</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-battery-unknown" />
              <code class="mr-2">f091</code>
              <span>mdi-battery-unknown</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-beach" />
              <code class="mr-2">f092</code>
              <span>mdi-beach</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-beaker" />
              <code class="mr-2">f68f</code>
              <span>mdi-beaker</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-beer" />
              <code class="mr-2">f098</code>
              <span>mdi-beer</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-behance" />
              <code class="mr-2">f099</code>
              <span>mdi-behance</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bell" />
              <code class="mr-2">f09a</code>
              <span>mdi-bell</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bell-off" />
              <code class="mr-2">f09b</code>
              <span>mdi-bell-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bell-outline" />
              <code class="mr-2">f09c</code>
              <span>mdi-bell-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bell-plus" />
              <code class="mr-2">f09d</code>
              <span>mdi-bell-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bell-ring" />
              <code class="mr-2">f09e</code>
              <span>mdi-bell-ring</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bell-ring-outline" />
              <code class="mr-2">f09f</code>
              <span>mdi-bell-ring-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bell-sleep" />
              <code class="mr-2">f0a0</code>
              <span>mdi-bell-sleep</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-beta" />
              <code class="mr-2">f0a1</code>
              <span>mdi-beta</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bike" />
              <code class="mr-2">f0a3</code>
              <span>mdi-bike</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-binoculars" />
              <code class="mr-2">f0a5</code>
              <span>mdi-binoculars</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bio" />
              <code class="mr-2">f0a6</code>
              <span>mdi-bio</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-biohazard" />
              <code class="mr-2">f0a7</code>
              <span>mdi-biohazard</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bitbucket" />
              <code class="mr-2">f0a8</code>
              <span>mdi-bitbucket</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-black-mesa" />
              <code class="mr-2">f0a9</code>
              <span>mdi-black-mesa</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-blender" />
              <code class="mr-2">f0ab</code>
              <span>mdi-blender</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-blinds" />
              <code class="mr-2">f0ac</code>
              <span>mdi-blinds</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-block-helper" />
              <code class="mr-2">f0ad</code>
              <span>mdi-block-helper</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-blogger" />
              <code class="mr-2">f0ae</code>
              <span>mdi-blogger</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bluetooth" />
              <code class="mr-2">f0af</code>
              <span>mdi-bluetooth</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bluetooth-audio" />
              <code class="mr-2">f0b0</code>
              <span>mdi-bluetooth-audio</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bluetooth-connect" />
              <code class="mr-2">f0b1</code>
              <span>mdi-bluetooth-connect</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bluetooth-off" />
              <code class="mr-2">f0b2</code>
              <span>mdi-bluetooth-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bluetooth-settings" />
              <code class="mr-2">f0b3</code>
              <span>mdi-bluetooth-settings</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bluetooth-transfer" />
              <code class="mr-2">f0b4</code>
              <span>mdi-bluetooth-transfer</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-blur" />
              <code class="mr-2">f0b5</code>
              <span>mdi-blur</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-blur-linear" />
              <code class="mr-2">f0b6</code>
              <span>mdi-blur-linear</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-blur-off" />
              <code class="mr-2">f0b7</code>
              <span>mdi-blur-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-blur-radial" />
              <code class="mr-2">f0b8</code>
              <span>mdi-blur-radial</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bomb" />
              <code class="mr-2">f690</code>
              <span>mdi-bomb</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bomb-off" />
              <code class="mr-2">f6c4</code>
              <span>mdi-bomb-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bone" />
              <code class="mr-2">f0b9</code>
              <span>mdi-bone</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-book" />
              <code class="mr-2">f0ba</code>
              <span>mdi-book</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-book-minus" />
              <code class="mr-2">f5d9</code>
              <span>mdi-book-minus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-book-multiple" />
              <code class="mr-2">f0bb</code>
              <span>mdi-book-multiple</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-book-open" />
              <code class="mr-2">f0bd</code>
              <span>mdi-book-open</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-book-open-page-variant" />
              <code class="mr-2">f5da</code>
              <span>mdi-book-open-page-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-book-open-variant" />
              <code class="mr-2">f0be</code>
              <span>mdi-book-open-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-book-plus" />
              <code class="mr-2">f5db</code>
              <span>mdi-book-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-book-variant" />
              <code class="mr-2">f0bf</code>
              <span>mdi-book-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bookmark" />
              <code class="mr-2">f0c0</code>
              <span>mdi-bookmark</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bookmark-check" />
              <code class="mr-2">f0c1</code>
              <span>mdi-bookmark-check</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bookmark-music" />
              <code class="mr-2">f0c2</code>
              <span>mdi-bookmark-music</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bookmark-outline" />
              <code class="mr-2">f0c3</code>
              <span>mdi-bookmark-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bookmark-plus" />
              <code class="mr-2">f0c5</code>
              <span>mdi-bookmark-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bookmark-plus-outline" />
              <code class="mr-2">f0c4</code>
              <span>mdi-bookmark-plus-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bookmark-remove" />
              <code class="mr-2">f0c6</code>
              <span>mdi-bookmark-remove</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-boombox" />
              <code class="mr-2">f5dc</code>
              <span>mdi-boombox</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bootstrap" />
              <code class="mr-2">f6c5</code>
              <span>mdi-bootstrap</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-border-all" />
              <code class="mr-2">f0c7</code>
              <span>mdi-border-all</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-border-bottom" />
              <code class="mr-2">f0c8</code>
              <span>mdi-border-bottom</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-border-color" />
              <code class="mr-2">f0c9</code>
              <span>mdi-border-color</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-border-horizontal" />
              <code class="mr-2">f0ca</code>
              <span>mdi-border-horizontal</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-border-inside" />
              <code class="mr-2">f0cb</code>
              <span>mdi-border-inside</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-border-left" />
              <code class="mr-2">f0cc</code>
              <span>mdi-border-left</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-border-none" />
              <code class="mr-2">f0cd</code>
              <span>mdi-border-none</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-border-outside" />
              <code class="mr-2">f0ce</code>
              <span>mdi-border-outside</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-border-right" />
              <code class="mr-2">f0cf</code>
              <span>mdi-border-right</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-border-style" />
              <code class="mr-2">f0d0</code>
              <span>mdi-border-style</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-border-top" />
              <code class="mr-2">f0d1</code>
              <span>mdi-border-top</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-border-vertical" />
              <code class="mr-2">f0d2</code>
              <span>mdi-border-vertical</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bow-tie" />
              <code class="mr-2">f677</code>
              <span>mdi-bow-tie</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bowl" />
              <code class="mr-2">f617</code>
              <span>mdi-bowl</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bowling" />
              <code class="mr-2">f0d3</code>
              <span>mdi-bowling</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-box" />
              <code class="mr-2">f0d4</code>
              <span>mdi-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-box-cutter" />
              <code class="mr-2">f0d5</code>
              <span>mdi-box-cutter</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-box-shadow" />
              <code class="mr-2">f637</code>
              <span>mdi-box-shadow</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bridge" />
              <code class="mr-2">f618</code>
              <span>mdi-bridge</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-briefcase" />
              <code class="mr-2">f0d6</code>
              <span>mdi-briefcase</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-briefcase-check" />
              <code class="mr-2">f0d7</code>
              <span>mdi-briefcase-check</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-briefcase-download" />
              <code class="mr-2">f0d8</code>
              <span>mdi-briefcase-download</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-briefcase-upload" />
              <code class="mr-2">f0d9</code>
              <span>mdi-briefcase-upload</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-brightness-1" />
              <code class="mr-2">f0da</code>
              <span>mdi-brightness-1</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-brightness-2" />
              <code class="mr-2">f0db</code>
              <span>mdi-brightness-2</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-brightness-3" />
              <code class="mr-2">f0dc</code>
              <span>mdi-brightness-3</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-brightness-4" />
              <code class="mr-2">f0dd</code>
              <span>mdi-brightness-4</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-brightness-5" />
              <code class="mr-2">f0de</code>
              <span>mdi-brightness-5</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-brightness-6" />
              <code class="mr-2">f0df</code>
              <span>mdi-brightness-6</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-brightness-7" />
              <code class="mr-2">f0e0</code>
              <span>mdi-brightness-7</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-brightness-auto" />
              <code class="mr-2">f0e1</code>
              <span>mdi-brightness-auto</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-broom" />
              <code class="mr-2">f0e2</code>
              <span>mdi-broom</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-brush" />
              <code class="mr-2">f0e3</code>
              <span>mdi-brush</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-buffer" />
              <code class="mr-2">f619</code>
              <span>mdi-buffer</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bug" />
              <code class="mr-2">f0e4</code>
              <span>mdi-bug</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bulletin-board" />
              <code class="mr-2">f0e5</code>
              <span>mdi-bulletin-board</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bullhorn" />
              <code class="mr-2">f0e6</code>
              <span>mdi-bullhorn</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bullseye" />
              <code class="mr-2">f5dd</code>
              <span>mdi-bullseye</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-burst-mode" />
              <code class="mr-2">f5de</code>
              <span>mdi-burst-mode</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-bus" />
              <code class="mr-2">f0e7</code>
              <span>mdi-bus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cached" />
              <code class="mr-2">f0e8</code>
              <span>mdi-cached</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cake" />
              <code class="mr-2">f0e9</code>
              <span>mdi-cake</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cake-layered" />
              <code class="mr-2">f0ea</code>
              <span>mdi-cake-layered</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cake-variant" />
              <code class="mr-2">f0eb</code>
              <span>mdi-cake-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-calculator" />
              <code class="mr-2">f0ec</code>
              <span>mdi-calculator</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-calendar" />
              <code class="mr-2">f0ed</code>
              <span>mdi-calendar</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-calendar-blank" />
              <code class="mr-2">f0ee</code>
              <span>mdi-calendar-blank</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-calendar-check" />
              <code class="mr-2">f0ef</code>
              <span>mdi-calendar-check</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-calendar-clock" />
              <code class="mr-2">f0f0</code>
              <span>mdi-calendar-clock</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-calendar-multiple" />
              <code class="mr-2">f0f1</code>
              <span>mdi-calendar-multiple</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-calendar-multiple-check" />
              <code class="mr-2">f0f2</code>
              <span>mdi-calendar-multiple-check</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-calendar-plus" />
              <code class="mr-2">f0f3</code>
              <span>mdi-calendar-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-calendar-question" />
              <code class="mr-2">f691</code>
              <span>mdi-calendar-question</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-calendar-range" />
              <code class="mr-2">f678</code>
              <span>mdi-calendar-range</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-calendar-remove" />
              <code class="mr-2">f0f4</code>
              <span>mdi-calendar-remove</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-calendar-text" />
              <code class="mr-2">f0f5</code>
              <span>mdi-calendar-text</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-calendar-today" />
              <code class="mr-2">f0f6</code>
              <span>mdi-calendar-today</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-call-made" />
              <code class="mr-2">f0f7</code>
              <span>mdi-call-made</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-call-merge" />
              <code class="mr-2">f0f8</code>
              <span>mdi-call-merge</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-call-missed" />
              <code class="mr-2">f0f9</code>
              <span>mdi-call-missed</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-call-received" />
              <code class="mr-2">f0fa</code>
              <span>mdi-call-received</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-call-split" />
              <code class="mr-2">f0fb</code>
              <span>mdi-call-split</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-camcorder" />
              <code class="mr-2">f0fc</code>
              <span>mdi-camcorder</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-camcorder-off" />
              <code class="mr-2">f0ff</code>
              <span>mdi-camcorder-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-camera" />
              <code class="mr-2">f100</code>
              <span>mdi-camera</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-camera-burst" />
              <code class="mr-2">f692</code>
              <span>mdi-camera-burst</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-camera-enhance" />
              <code class="mr-2">f101</code>
              <span>mdi-camera-enhance</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-camera-front" />
              <code class="mr-2">f102</code>
              <span>mdi-camera-front</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-camera-front-variant" />
              <code class="mr-2">f103</code>
              <span>mdi-camera-front-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-camera-iris" />
              <code class="mr-2">f104</code>
              <span>mdi-camera-iris</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-camera-off" />
              <code class="mr-2">f5df</code>
              <span>mdi-camera-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-camera-party-mode" />
              <code class="mr-2">f105</code>
              <span>mdi-camera-party-mode</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-camera-rear" />
              <code class="mr-2">f106</code>
              <span>mdi-camera-rear</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-camera-rear-variant" />
              <code class="mr-2">f107</code>
              <span>mdi-camera-rear-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-camera-switch" />
              <code class="mr-2">f108</code>
              <span>mdi-camera-switch</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-camera-timer" />
              <code class="mr-2">f109</code>
              <span>mdi-camera-timer</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-candle" />
              <code class="mr-2">f5e2</code>
              <span>mdi-candle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-candycane" />
              <code class="mr-2">f10a</code>
              <span>mdi-candycane</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-car" />
              <code class="mr-2">f10b</code>
              <span>mdi-car</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-car-battery" />
              <code class="mr-2">f10c</code>
              <span>mdi-car-battery</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-car-connected" />
              <code class="mr-2">f10d</code>
              <span>mdi-car-connected</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-car-wash" />
              <code class="mr-2">f10e</code>
              <span>mdi-car-wash</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cards" />
              <code class="mr-2">f638</code>
              <span>mdi-cards</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cards-outline" />
              <code class="mr-2">f639</code>
              <span>mdi-cards-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cards-playing-outline" />
              <code class="mr-2">f63a</code>
              <span>mdi-cards-playing-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cards-variant" />
              <code class="mr-2">f6c6</code>
              <span>mdi-cards-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-carrot" />
              <code class="mr-2">f10f</code>
              <span>mdi-carrot</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cart" />
              <code class="mr-2">f110</code>
              <span>mdi-cart</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cart-off" />
              <code class="mr-2">f66b</code>
              <span>mdi-cart-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cart-outline" />
              <code class="mr-2">f111</code>
              <span>mdi-cart-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cart-plus" />
              <code class="mr-2">f112</code>
              <span>mdi-cart-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-case-sensitive-alt" />
              <code class="mr-2">f113</code>
              <span>mdi-case-sensitive-alt</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cash" />
              <code class="mr-2">f114</code>
              <span>mdi-cash</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cash-100" />
              <code class="mr-2">f115</code>
              <span>mdi-cash-100</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cash-multiple" />
              <code class="mr-2">f116</code>
              <span>mdi-cash-multiple</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cash-usd" />
              <code class="mr-2">f117</code>
              <span>mdi-cash-usd</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cast" />
              <code class="mr-2">f118</code>
              <span>mdi-cast</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cast-connected" />
              <code class="mr-2">f119</code>
              <span>mdi-cast-connected</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-castle" />
              <code class="mr-2">f11a</code>
              <span>mdi-castle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cat" />
              <code class="mr-2">f11b</code>
              <span>mdi-cat</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cellphone" />
              <code class="mr-2">f11c</code>
              <span>mdi-cellphone</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cellphone-android" />
              <code class="mr-2">f11d</code>
              <span>mdi-cellphone-android</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cellphone-basic" />
              <code class="mr-2">f11e</code>
              <span>mdi-cellphone-basic</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cellphone-dock" />
              <code class="mr-2">f11f</code>
              <span>mdi-cellphone-dock</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cellphone-iphone" />
              <code class="mr-2">f120</code>
              <span>mdi-cellphone-iphone</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cellphone-link" />
              <code class="mr-2">f121</code>
              <span>mdi-cellphone-link</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cellphone-link-off" />
              <code class="mr-2">f122</code>
              <span>mdi-cellphone-link-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cellphone-settings" />
              <code class="mr-2">f123</code>
              <span>mdi-cellphone-settings</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-certificate" />
              <code class="mr-2">f124</code>
              <span>mdi-certificate</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-chair-school" />
              <code class="mr-2">f125</code>
              <span>mdi-chair-school</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-chart-arc" />
              <code class="mr-2">f126</code>
              <span>mdi-chart-arc</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-chart-areaspline" />
              <code class="mr-2">f127</code>
              <span>mdi-chart-areaspline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-chart-bar" />
              <code class="mr-2">f128</code>
              <span>mdi-chart-bar</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-chart-bubble" />
              <code class="mr-2">f5e3</code>
              <span>mdi-chart-bubble</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-chart-gantt" />
              <code class="mr-2">f66c</code>
              <span>mdi-chart-gantt</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-chart-histogram" />
              <code class="mr-2">f129</code>
              <span>mdi-chart-histogram</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-chart-line" />
              <code class="mr-2">f12a</code>
              <span>mdi-chart-line</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-chart-pie" />
              <code class="mr-2">f12b</code>
              <span>mdi-chart-pie</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-chart-timeline" />
              <code class="mr-2">f66e</code>
              <span>mdi-chart-timeline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-check" />
              <code class="mr-2">f12c</code>
              <span>mdi-check</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-check-all" />
              <code class="mr-2">f12d</code>
              <span>mdi-check-all</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-check-circle" />
              <code class="mr-2">f5e0</code>
              <span>mdi-check-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-check-circle-outline" />
              <code class="mr-2">f5e1</code>
              <span>mdi-check-circle-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-checkbox-blank" />
              <code class="mr-2">f12e</code>
              <span>mdi-checkbox-blank</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-checkbox-blank-circle" />
              <code class="mr-2">f12f</code>
              <span>mdi-checkbox-blank-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-checkbox-blank-circle-outline" />
              <code class="mr-2">f130</code>
              <span>mdi-checkbox-blank-circle-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-checkbox-blank-outline" />
              <code class="mr-2">f131</code>
              <span>mdi-checkbox-blank-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-checkbox-marked" />
              <code class="mr-2">f132</code>
              <span>mdi-checkbox-marked</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-checkbox-marked-circle" />
              <code class="mr-2">f133</code>
              <span>mdi-checkbox-marked-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-checkbox-marked-circle-outline" />
              <code class="mr-2">f134</code>
              <span>mdi-checkbox-marked-circle-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-checkbox-marked-outline" />
              <code class="mr-2">f135</code>
              <span>mdi-checkbox-marked-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-checkbox-multiple-blank" />
              <code class="mr-2">f136</code>
              <span>mdi-checkbox-multiple-blank</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-checkbox-multiple-blank-circle" />
              <code class="mr-2">f63b</code>
              <span>mdi-checkbox-multiple-blank-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi mdi-checkbox-multiple-blank-circle-outline" />
              <code class="mr-2">f63c</code>
              <span>mdi-checkbox-multiple-blank-circle-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-checkbox-multiple-blank-outline" />
              <code class="mr-2">f137</code>
              <span>mdi-checkbox-multiple-blank-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-checkbox-multiple-marked" />
              <code class="mr-2">f138</code>
              <span>mdi-checkbox-multiple-marked</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-checkbox-multiple-marked-circle" />
              <code class="mr-2">f63d</code>
              <span>mdi-checkbox-multiple-marked-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi mdi-checkbox-multiple-marked-circle-outline" />
              <code class="mr-2">f63e</code>
              <span>mdi-checkbox-multiple-marked-circle-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-checkbox-multiple-marked-outline" />
              <code class="mr-2">f139</code>
              <span>mdi-checkbox-multiple-marked-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-checkerboard" />
              <code class="mr-2">f13a</code>
              <span>mdi-checkerboard</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-chemical-weapon" />
              <code class="mr-2">f13b</code>
              <span>mdi-chemical-weapon</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-chevron-double-down" />
              <code class="mr-2">f13c</code>
              <span>mdi-chevron-double-down</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-chevron-double-left" />
              <code class="mr-2">f13d</code>
              <span>mdi-chevron-double-left</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-chevron-double-right" />
              <code class="mr-2">f13e</code>
              <span>mdi-chevron-double-right</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-chevron-double-up" />
              <code class="mr-2">f13f</code>
              <span>mdi-chevron-double-up</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-chevron-down" />
              <code class="mr-2">f140</code>
              <span>mdi-chevron-down</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-chevron-left" />
              <code class="mr-2">f141</code>
              <span>mdi-chevron-left</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-chevron-right" />
              <code class="mr-2">f142</code>
              <span>mdi-chevron-right</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-chevron-up" />
              <code class="mr-2">f143</code>
              <span>mdi-chevron-up</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-chip" />
              <code class="mr-2">f61a</code>
              <span>mdi-chip</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-church" />
              <code class="mr-2">f144</code>
              <span>mdi-church</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cisco-webex" />
              <code class="mr-2">f145</code>
              <span>mdi-cisco-webex</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-city" />
              <code class="mr-2">f146</code>
              <span>mdi-city</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-clipboard" />
              <code class="mr-2">f147</code>
              <span>mdi-clipboard</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-clipboard-account" />
              <code class="mr-2">f148</code>
              <span>mdi-clipboard-account</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-clipboard-alert" />
              <code class="mr-2">f149</code>
              <span>mdi-clipboard-alert</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-clipboard-arrow-down" />
              <code class="mr-2">f14a</code>
              <span>mdi-clipboard-arrow-down</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-clipboard-arrow-left" />
              <code class="mr-2">f14b</code>
              <span>mdi-clipboard-arrow-left</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-clipboard-check" />
              <code class="mr-2">f14c</code>
              <span>mdi-clipboard-check</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-clipboard-flow" />
              <code class="mr-2">f6c7</code>
              <span>mdi-clipboard-flow</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-clipboard-outline" />
              <code class="mr-2">f14d</code>
              <span>mdi-clipboard-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-clipboard-text" />
              <code class="mr-2">f14e</code>
              <span>mdi-clipboard-text</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-clippy" />
              <code class="mr-2">f14f</code>
              <span>mdi-clippy</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-clock" />
              <code class="mr-2">f150</code>
              <span>mdi-clock</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-clock-alert" />
              <code class="mr-2">f5ce</code>
              <span>mdi-clock-alert</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-clock-end" />
              <code class="mr-2">f151</code>
              <span>mdi-clock-end</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-clock-fast" />
              <code class="mr-2">f152</code>
              <span>mdi-clock-fast</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-clock-in" />
              <code class="mr-2">f153</code>
              <span>mdi-clock-in</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-clock-out" />
              <code class="mr-2">f154</code>
              <span>mdi-clock-out</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-clock-start" />
              <code class="mr-2">f155</code>
              <span>mdi-clock-start</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-close" />
              <code class="mr-2">f156</code>
              <span>mdi-close</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-close-box" />
              <code class="mr-2">f157</code>
              <span>mdi-close-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-close-box-outline" />
              <code class="mr-2">f158</code>
              <span>mdi-close-box-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-close-circle" />
              <code class="mr-2">f159</code>
              <span>mdi-close-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-close-circle-outline" />
              <code class="mr-2">f15a</code>
              <span>mdi-close-circle-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-close-network" />
              <code class="mr-2">f15b</code>
              <span>mdi-close-network</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-close-octagon" />
              <code class="mr-2">f15c</code>
              <span>mdi-close-octagon</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-close-octagon-outline" />
              <code class="mr-2">f15d</code>
              <span>mdi-close-octagon-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-close-outline" />
              <code class="mr-2">f6c8</code>
              <span>mdi-close-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-closed-caption" />
              <code class="mr-2">f15e</code>
              <span>mdi-closed-caption</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cloud" />
              <code class="mr-2">f15f</code>
              <span>mdi-cloud</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cloud-check" />
              <code class="mr-2">f160</code>
              <span>mdi-cloud-check</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cloud-circle" />
              <code class="mr-2">f161</code>
              <span>mdi-cloud-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cloud-download" />
              <code class="mr-2">f162</code>
              <span>mdi-cloud-download</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cloud-outline" />
              <code class="mr-2">f163</code>
              <span>mdi-cloud-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cloud-outline-off" />
              <code class="mr-2">f164</code>
              <span>mdi-cloud-outline-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cloud-print" />
              <code class="mr-2">f165</code>
              <span>mdi-cloud-print</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cloud-print-outline" />
              <code class="mr-2">f166</code>
              <span>mdi-cloud-print-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cloud-sync" />
              <code class="mr-2">f63f</code>
              <span>mdi-cloud-sync</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cloud-upload" />
              <code class="mr-2">f167</code>
              <span>mdi-cloud-upload</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-code-array" />
              <code class="mr-2">f168</code>
              <span>mdi-code-array</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-code-braces" />
              <code class="mr-2">f169</code>
              <span>mdi-code-braces</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-code-brackets" />
              <code class="mr-2">f16a</code>
              <span>mdi-code-brackets</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-code-equal" />
              <code class="mr-2">f16b</code>
              <span>mdi-code-equal</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-code-greater-than" />
              <code class="mr-2">f16c</code>
              <span>mdi-code-greater-than</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-code-greater-than-or-equal" />
              <code class="mr-2">f16d</code>
              <span>mdi-code-greater-than-or-equal</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-code-less-than" />
              <code class="mr-2">f16e</code>
              <span>mdi-code-less-than</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-code-less-than-or-equal" />
              <code class="mr-2">f16f</code>
              <span>mdi-code-less-than-or-equal</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-code-not-equal" />
              <code class="mr-2">f170</code>
              <span>mdi-code-not-equal</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-code-not-equal-variant" />
              <code class="mr-2">f171</code>
              <span>mdi-code-not-equal-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-code-parentheses" />
              <code class="mr-2">f172</code>
              <span>mdi-code-parentheses</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-code-string" />
              <code class="mr-2">f173</code>
              <span>mdi-code-string</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-code-tags" />
              <code class="mr-2">f174</code>
              <span>mdi-code-tags</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-code-tags-check" />
              <code class="mr-2">f693</code>
              <span>mdi-code-tags-check</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-codepen" />
              <code class="mr-2">f175</code>
              <span>mdi-codepen</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-coffee" />
              <code class="mr-2">f176</code>
              <span>mdi-coffee</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-coffee-outline" />
              <code class="mr-2">f6c9</code>
              <span>mdi-coffee-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-coffee-to-go" />
              <code class="mr-2">f177</code>
              <span>mdi-coffee-to-go</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-coin" />
              <code class="mr-2">f178</code>
              <span>mdi-coin</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-coins" />
              <code class="mr-2">f694</code>
              <span>mdi-coins</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-collage" />
              <code class="mr-2">f640</code>
              <span>mdi-collage</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-color-helper" />
              <code class="mr-2">f179</code>
              <span>mdi-color-helper</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-comment" />
              <code class="mr-2">f17a</code>
              <span>mdi-comment</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-comment-account" />
              <code class="mr-2">f17b</code>
              <span>mdi-comment-account</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-comment-account-outline" />
              <code class="mr-2">f17c</code>
              <span>mdi-comment-account-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-comment-alert" />
              <code class="mr-2">f17d</code>
              <span>mdi-comment-alert</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-comment-alert-outline" />
              <code class="mr-2">f17e</code>
              <span>mdi-comment-alert-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-comment-check" />
              <code class="mr-2">f17f</code>
              <span>mdi-comment-check</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-comment-check-outline" />
              <code class="mr-2">f180</code>
              <span>mdi-comment-check-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-comment-multiple-outline" />
              <code class="mr-2">f181</code>
              <span>mdi-comment-multiple-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-comment-outline" />
              <code class="mr-2">f182</code>
              <span>mdi-comment-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-comment-plus-outline" />
              <code class="mr-2">f183</code>
              <span>mdi-comment-plus-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-comment-processing" />
              <code class="mr-2">f184</code>
              <span>mdi-comment-processing</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-comment-processing-outline" />
              <code class="mr-2">f185</code>
              <span>mdi-comment-processing-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-comment-question-outline" />
              <code class="mr-2">f186</code>
              <span>mdi-comment-question-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-comment-remove-outline" />
              <code class="mr-2">f187</code>
              <span>mdi-comment-remove-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-comment-text" />
              <code class="mr-2">f188</code>
              <span>mdi-comment-text</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-comment-text-outline" />
              <code class="mr-2">f189</code>
              <span>mdi-comment-text-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-compare" />
              <code class="mr-2">f18a</code>
              <span>mdi-compare</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-compass" />
              <code class="mr-2">f18b</code>
              <span>mdi-compass</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-compass-outline" />
              <code class="mr-2">f18c</code>
              <span>mdi-compass-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-console" />
              <code class="mr-2">f18d</code>
              <span>mdi-console</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-contacts" />
              <code class="mr-2">f6ca</code>
              <span>mdi-contacts</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-content-copy" />
              <code class="mr-2">f18f</code>
              <span>mdi-content-copy</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-content-cut" />
              <code class="mr-2">f190</code>
              <span>mdi-content-cut</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-content-duplicate" />
              <code class="mr-2">f191</code>
              <span>mdi-content-duplicate</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-content-paste" />
              <code class="mr-2">f192</code>
              <span>mdi-content-paste</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-content-save" />
              <code class="mr-2">f193</code>
              <span>mdi-content-save</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-content-save-all" />
              <code class="mr-2">f194</code>
              <span>mdi-content-save-all</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-content-save-settings" />
              <code class="mr-2">f61b</code>
              <span>mdi-content-save-settings</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-contrast" />
              <code class="mr-2">f195</code>
              <span>mdi-contrast</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-contrast-box" />
              <code class="mr-2">f196</code>
              <span>mdi-contrast-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-contrast-circle" />
              <code class="mr-2">f197</code>
              <span>mdi-contrast-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cookie" />
              <code class="mr-2">f198</code>
              <span>mdi-cookie</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-copyright" />
              <code class="mr-2">f5e6</code>
              <span>mdi-copyright</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-counter" />
              <code class="mr-2">f199</code>
              <span>mdi-counter</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cow" />
              <code class="mr-2">f19a</code>
              <span>mdi-cow</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-creation" />
              <code class="mr-2">f1c9</code>
              <span>mdi-creation</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-credit-card" />
              <code class="mr-2">f19b</code>
              <span>mdi-credit-card</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-credit-card-multiple" />
              <code class="mr-2">f19c</code>
              <span>mdi-credit-card-multiple</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-credit-card-off" />
              <code class="mr-2">f5e4</code>
              <span>mdi-credit-card-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-credit-card-plus" />
              <code class="mr-2">f675</code>
              <span>mdi-credit-card-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-credit-card-scan" />
              <code class="mr-2">f19d</code>
              <span>mdi-credit-card-scan</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-crop" />
              <code class="mr-2">f19e</code>
              <span>mdi-crop</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-crop-free" />
              <code class="mr-2">f19f</code>
              <span>mdi-crop-free</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-crop-landscape" />
              <code class="mr-2">f1a0</code>
              <span>mdi-crop-landscape</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-crop-portrait" />
              <code class="mr-2">f1a1</code>
              <span>mdi-crop-portrait</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-crop-rotate" />
              <code class="mr-2">f695</code>
              <span>mdi-crop-rotate</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-crop-square" />
              <code class="mr-2">f1a2</code>
              <span>mdi-crop-square</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-crosshairs" />
              <code class="mr-2">f1a3</code>
              <span>mdi-crosshairs</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-crosshairs-gps" />
              <code class="mr-2">f1a4</code>
              <span>mdi-crosshairs-gps</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-crown" />
              <code class="mr-2">f1a5</code>
              <span>mdi-crown</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cube" />
              <code class="mr-2">f1a6</code>
              <span>mdi-cube</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cube-outline" />
              <code class="mr-2">f1a7</code>
              <span>mdi-cube-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cube-send" />
              <code class="mr-2">f1a8</code>
              <span>mdi-cube-send</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cube-unfolded" />
              <code class="mr-2">f1a9</code>
              <span>mdi-cube-unfolded</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cup" />
              <code class="mr-2">f1aa</code>
              <span>mdi-cup</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cup-off" />
              <code class="mr-2">f5e5</code>
              <span>mdi-cup-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cup-water" />
              <code class="mr-2">f1ab</code>
              <span>mdi-cup-water</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-currency-btc" />
              <code class="mr-2">f1ac</code>
              <span>mdi-currency-btc</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-currency-eur" />
              <code class="mr-2">f1ad</code>
              <span>mdi-currency-eur</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-currency-gbp" />
              <code class="mr-2">f1ae</code>
              <span>mdi-currency-gbp</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-currency-inr" />
              <code class="mr-2">f1af</code>
              <span>mdi-currency-inr</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-currency-ngn" />
              <code class="mr-2">f1b0</code>
              <span>mdi-currency-ngn</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-currency-rub" />
              <code class="mr-2">f1b1</code>
              <span>mdi-currency-rub</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-currency-try" />
              <code class="mr-2">f1b2</code>
              <span>mdi-currency-try</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-currency-usd" />
              <code class="mr-2">f1b3</code>
              <span>mdi-currency-usd</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-currency-usd-off" />
              <code class="mr-2">f679</code>
              <span>mdi-currency-usd-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cursor-default" />
              <code class="mr-2">f1b4</code>
              <span>mdi-cursor-default</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cursor-default-outline" />
              <code class="mr-2">f1b5</code>
              <span>mdi-cursor-default-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cursor-move" />
              <code class="mr-2">f1b6</code>
              <span>mdi-cursor-move</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cursor-pointer" />
              <code class="mr-2">f1b7</code>
              <span>mdi-cursor-pointer</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-cursor-text" />
              <code class="mr-2">f5e7</code>
              <span>mdi-cursor-text</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-database" />
              <code class="mr-2">f1b8</code>
              <span>mdi-database</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-database-minus" />
              <code class="mr-2">f1b9</code>
              <span>mdi-database-minus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-database-plus" />
              <code class="mr-2">f1ba</code>
              <span>mdi-database-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-debug-step-into" />
              <code class="mr-2">f1bb</code>
              <span>mdi-debug-step-into</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-debug-step-out" />
              <code class="mr-2">f1bc</code>
              <span>mdi-debug-step-out</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-debug-step-over" />
              <code class="mr-2">f1bd</code>
              <span>mdi-debug-step-over</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-decimal-decrease" />
              <code class="mr-2">f1be</code>
              <span>mdi-decimal-decrease</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-decimal-increase" />
              <code class="mr-2">f1bf</code>
              <span>mdi-decimal-increase</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-delete" />
              <code class="mr-2">f1c0</code>
              <span>mdi-delete</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-delete-circle" />
              <code class="mr-2">f682</code>
              <span>mdi-delete-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-delete-empty" />
              <code class="mr-2">f6cb</code>
              <span>mdi-delete-empty</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-delete-forever" />
              <code class="mr-2">f5e8</code>
              <span>mdi-delete-forever</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-delete-sweep" />
              <code class="mr-2">f5e9</code>
              <span>mdi-delete-sweep</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-delete-variant" />
              <code class="mr-2">f1c1</code>
              <span>mdi-delete-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-delta" />
              <code class="mr-2">f1c2</code>
              <span>mdi-delta</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-deskphone" />
              <code class="mr-2">f1c3</code>
              <span>mdi-deskphone</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-desktop-mac" />
              <code class="mr-2">f1c4</code>
              <span>mdi-desktop-mac</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-desktop-tower" />
              <code class="mr-2">f1c5</code>
              <span>mdi-desktop-tower</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-details" />
              <code class="mr-2">f1c6</code>
              <span>mdi-details</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-developer-board" />
              <code class="mr-2">f696</code>
              <span>mdi-developer-board</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-deviantart" />
              <code class="mr-2">f1c7</code>
              <span>mdi-deviantart</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-dialpad" />
              <code class="mr-2">f61c</code>
              <span>mdi-dialpad</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-diamond" />
              <code class="mr-2">f1c8</code>
              <span>mdi-diamond</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-dice-1" />
              <code class="mr-2">f1ca</code>
              <span>mdi-dice-1</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-dice-2" />
              <code class="mr-2">f1cb</code>
              <span>mdi-dice-2</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-dice-3" />
              <code class="mr-2">f1cc</code>
              <span>mdi-dice-3</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-dice-4" />
              <code class="mr-2">f1cd</code>
              <span>mdi-dice-4</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-dice-5" />
              <code class="mr-2">f1ce</code>
              <span>mdi-dice-5</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-dice-6" />
              <code class="mr-2">f1cf</code>
              <span>mdi-dice-6</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-dice-d20" />
              <code class="mr-2">f5ea</code>
              <span>mdi-dice-d20</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-dice-d4" />
              <code class="mr-2">f5eb</code>
              <span>mdi-dice-d4</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-dice-d6" />
              <code class="mr-2">f5ec</code>
              <span>mdi-dice-d6</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-dice-d8" />
              <code class="mr-2">f5ed</code>
              <span>mdi-dice-d8</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-dictionary" />
              <code class="mr-2">f61d</code>
              <span>mdi-dictionary</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-directions" />
              <code class="mr-2">f1d0</code>
              <span>mdi-directions</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-directions-fork" />
              <code class="mr-2">f641</code>
              <span>mdi-directions-fork</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-discord" />
              <code class="mr-2">f66f</code>
              <span>mdi-discord</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-disqus" />
              <code class="mr-2">f1d2</code>
              <span>mdi-disqus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-division" />
              <code class="mr-2">f1d4</code>
              <span>mdi-division</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-division-box" />
              <code class="mr-2">f1d5</code>
              <span>mdi-division-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-dna" />
              <code class="mr-2">f683</code>
              <span>mdi-dna</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-dns" />
              <code class="mr-2">f1d6</code>
              <span>mdi-dns</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-do-not-disturb" />
              <code class="mr-2">f697</code>
              <span>mdi-do-not-disturb</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-do-not-disturb-off" />
              <code class="mr-2">f698</code>
              <span>mdi-do-not-disturb-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-dolby" />
              <code class="mr-2">f6b2</code>
              <span>mdi-dolby</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-domain" />
              <code class="mr-2">f1d7</code>
              <span>mdi-domain</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-dots-horizontal" />
              <code class="mr-2">f1d8</code>
              <span>mdi-dots-horizontal</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-dots-vertical" />
              <code class="mr-2">f1d9</code>
              <span>mdi-dots-vertical</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-douban" />
              <code class="mr-2">f699</code>
              <span>mdi-douban</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-download" />
              <code class="mr-2">f1da</code>
              <span>mdi-download</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-drag" />
              <code class="mr-2">f1db</code>
              <span>mdi-drag</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-drag-horizontal" />
              <code class="mr-2">f1dc</code>
              <span>mdi-drag-horizontal</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-drag-vertical" />
              <code class="mr-2">f1dd</code>
              <span>mdi-drag-vertical</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-drawing" />
              <code class="mr-2">f1de</code>
              <span>mdi-drawing</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-drawing-box" />
              <code class="mr-2">f1df</code>
              <span>mdi-drawing-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-drone" />
              <code class="mr-2">f1e2</code>
              <span>mdi-drone</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-dropbox" />
              <code class="mr-2">f1e3</code>
              <span>mdi-dropbox</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-drupal" />
              <code class="mr-2">f1e4</code>
              <span>mdi-drupal</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-duck" />
              <code class="mr-2">f1e5</code>
              <span>mdi-duck</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-dumbbell" />
              <code class="mr-2">f1e6</code>
              <span>mdi-dumbbell</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-earth" />
              <code class="mr-2">f1e7</code>
              <span>mdi-earth</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-earth-box" />
              <code class="mr-2">f6cc</code>
              <span>mdi-earth-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-earth-box-off" />
              <code class="mr-2">f6cd</code>
              <span>mdi-earth-box-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-earth-off" />
              <code class="mr-2">f1e8</code>
              <span>mdi-earth-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-eject" />
              <code class="mr-2">f1ea</code>
              <span>mdi-eject</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-elevation-decline" />
              <code class="mr-2">f1eb</code>
              <span>mdi-elevation-decline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-elevation-rise" />
              <code class="mr-2">f1ec</code>
              <span>mdi-elevation-rise</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-elevator" />
              <code class="mr-2">f1ed</code>
              <span>mdi-elevator</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-email" />
              <code class="mr-2">f1ee</code>
              <span>mdi-email</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-email-alert" />
              <code class="mr-2">f6ce</code>
              <span>mdi-email-alert</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-email-open" />
              <code class="mr-2">f1ef</code>
              <span>mdi-email-open</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-email-open-outline" />
              <code class="mr-2">f5ef</code>
              <span>mdi-email-open-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-email-outline" />
              <code class="mr-2">f1f0</code>
              <span>mdi-email-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-email-secure" />
              <code class="mr-2">f1f1</code>
              <span>mdi-email-secure</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-email-variant" />
              <code class="mr-2">f5f0</code>
              <span>mdi-email-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-emby" />
              <code class="mr-2">f6b3</code>
              <span>mdi-emby</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-emoticon" />
              <code class="mr-2">f1f2</code>
              <span>mdi-emoticon</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-emoticon-cool" />
              <code class="mr-2">f1f3</code>
              <span>mdi-emoticon-cool</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-emoticon-dead" />
              <code class="mr-2">f69a</code>
              <span>mdi-emoticon-dead</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-emoticon-devil" />
              <code class="mr-2">f1f4</code>
              <span>mdi-emoticon-devil</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-emoticon-excited" />
              <code class="mr-2">f69b</code>
              <span>mdi-emoticon-excited</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-emoticon-happy" />
              <code class="mr-2">f1f5</code>
              <span>mdi-emoticon-happy</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-emoticon-neutral" />
              <code class="mr-2">f1f6</code>
              <span>mdi-emoticon-neutral</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-emoticon-poop" />
              <code class="mr-2">f1f7</code>
              <span>mdi-emoticon-poop</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-emoticon-sad" />
              <code class="mr-2">f1f8</code>
              <span>mdi-emoticon-sad</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-emoticon-tongue" />
              <code class="mr-2">f1f9</code>
              <span>mdi-emoticon-tongue</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-engine" />
              <code class="mr-2">f1fa</code>
              <span>mdi-engine</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-engine-outline" />
              <code class="mr-2">f1fb</code>
              <span>mdi-engine-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-equal" />
              <code class="mr-2">f1fc</code>
              <span>mdi-equal</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-equal-box" />
              <code class="mr-2">f1fd</code>
              <span>mdi-equal-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-eraser" />
              <code class="mr-2">f1fe</code>
              <span>mdi-eraser</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-eraser-variant" />
              <code class="mr-2">f642</code>
              <span>mdi-eraser-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-escalator" />
              <code class="mr-2">f1ff</code>
              <span>mdi-escalator</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-ethernet" />
              <code class="mr-2">f200</code>
              <span>mdi-ethernet</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-ethernet-cable" />
              <code class="mr-2">f201</code>
              <span>mdi-ethernet-cable</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-ethernet-cable-off" />
              <code class="mr-2">f202</code>
              <span>mdi-ethernet-cable-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-ev-station" />
              <code class="mr-2">f5f1</code>
              <span>mdi-ev-station</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-evernote" />
              <code class="mr-2">f204</code>
              <span>mdi-evernote</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-exclamation" />
              <code class="mr-2">f205</code>
              <span>mdi-exclamation</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-exit-to-app" />
              <code class="mr-2">f206</code>
              <span>mdi-exit-to-app</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-export" />
              <code class="mr-2">f207</code>
              <span>mdi-export</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-eye" />
              <code class="mr-2">f208</code>
              <span>mdi-eye</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-eye-off" />
              <code class="mr-2">f209</code>
              <span>mdi-eye-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-eye-outline" />
              <code class="mr-2">f6cf</code>
              <span>mdi-eye-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-eye-outline-off" />
              <code class="mr-2">f6d0</code>
              <span>mdi-eye-outline-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-eyedropper" />
              <code class="mr-2">f20a</code>
              <span>mdi-eyedropper</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-eyedropper-variant" />
              <code class="mr-2">f20b</code>
              <span>mdi-eyedropper-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-face" />
              <code class="mr-2">f643</code>
              <span>mdi-face</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-face-profile" />
              <code class="mr-2">f644</code>
              <span>mdi-face-profile</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-facebook" />
              <code class="mr-2">f20c</code>
              <span>mdi-facebook</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-facebook-box" />
              <code class="mr-2">f20d</code>
              <span>mdi-facebook-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-facebook-messenger" />
              <code class="mr-2">f20e</code>
              <span>mdi-facebook-messenger</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-factory" />
              <code class="mr-2">f20f</code>
              <span>mdi-factory</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-fan" />
              <code class="mr-2">f210</code>
              <span>mdi-fan</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-fast-forward" />
              <code class="mr-2">f211</code>
              <span>mdi-fast-forward</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-fast-forward-outline" />
              <code class="mr-2">f6d1</code>
              <span>mdi-fast-forward-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-fax" />
              <code class="mr-2">f212</code>
              <span>mdi-fax</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-feather" />
              <code class="mr-2">f6d2</code>
              <span>mdi-feather</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-ferry" />
              <code class="mr-2">f213</code>
              <span>mdi-ferry</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file" />
              <code class="mr-2">f214</code>
              <span>mdi-file</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file-chart" />
              <code class="mr-2">f215</code>
              <span>mdi-file-chart</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file-check" />
              <code class="mr-2">f216</code>
              <span>mdi-file-check</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file-cloud" />
              <code class="mr-2">f217</code>
              <span>mdi-file-cloud</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file-delimited" />
              <code class="mr-2">f218</code>
              <span>mdi-file-delimited</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file-document" />
              <code class="mr-2">f219</code>
              <span>mdi-file-document</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file-document-box" />
              <code class="mr-2">f21a</code>
              <span>mdi-file-document-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file-excel" />
              <code class="mr-2">f21b</code>
              <span>mdi-file-excel</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file-excel-box" />
              <code class="mr-2">f21c</code>
              <span>mdi-file-excel-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file-export" />
              <code class="mr-2">f21d</code>
              <span>mdi-file-export</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file-find" />
              <code class="mr-2">f21e</code>
              <span>mdi-file-find</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file-hidden" />
              <code class="mr-2">f613</code>
              <span>mdi-file-hidden</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file-image" />
              <code class="mr-2">f21f</code>
              <span>mdi-file-image</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file-import" />
              <code class="mr-2">f220</code>
              <span>mdi-file-import</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file-lock" />
              <code class="mr-2">f221</code>
              <span>mdi-file-lock</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file-multiple" />
              <code class="mr-2">f222</code>
              <span>mdi-file-multiple</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file-music" />
              <code class="mr-2">f223</code>
              <span>mdi-file-music</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file-outline" />
              <code class="mr-2">f224</code>
              <span>mdi-file-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file-pdf" />
              <code class="mr-2">f225</code>
              <span>mdi-file-pdf</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file-pdf-box" />
              <code class="mr-2">f226</code>
              <span>mdi-file-pdf-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file-powerpoint" />
              <code class="mr-2">f227</code>
              <span>mdi-file-powerpoint</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file-powerpoint-box" />
              <code class="mr-2">f228</code>
              <span>mdi-file-powerpoint-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file-presentation-box" />
              <code class="mr-2">f229</code>
              <span>mdi-file-presentation-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file-restore" />
              <code class="mr-2">f670</code>
              <span>mdi-file-restore</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file-send" />
              <code class="mr-2">f22a</code>
              <span>mdi-file-send</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file-tree" />
              <code class="mr-2">f645</code>
              <span>mdi-file-tree</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file-video" />
              <code class="mr-2">f22b</code>
              <span>mdi-file-video</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file-word" />
              <code class="mr-2">f22c</code>
              <span>mdi-file-word</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file-word-box" />
              <code class="mr-2">f22d</code>
              <span>mdi-file-word-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-file-xml" />
              <code class="mr-2">f22e</code>
              <span>mdi-file-xml</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-film" />
              <code class="mr-2">f22f</code>
              <span>mdi-film</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-filmstrip" />
              <code class="mr-2">f230</code>
              <span>mdi-filmstrip</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-filmstrip-off" />
              <code class="mr-2">f231</code>
              <span>mdi-filmstrip-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-filter" />
              <code class="mr-2">f232</code>
              <span>mdi-filter</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-filter-outline" />
              <code class="mr-2">f233</code>
              <span>mdi-filter-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-filter-remove" />
              <code class="mr-2">f234</code>
              <span>mdi-filter-remove</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-filter-remove-outline" />
              <code class="mr-2">f235</code>
              <span>mdi-filter-remove-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-filter-variant" />
              <code class="mr-2">f236</code>
              <span>mdi-filter-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-find-replace" />
              <code class="mr-2">f6d3</code>
              <span>mdi-find-replace</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-fingerprint" />
              <code class="mr-2">f237</code>
              <span>mdi-fingerprint</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-fire" />
              <code class="mr-2">f238</code>
              <span>mdi-fire</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-firefox" />
              <code class="mr-2">f239</code>
              <span>mdi-firefox</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-fish" />
              <code class="mr-2">f23a</code>
              <span>mdi-fish</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-flag" />
              <code class="mr-2">f23b</code>
              <span>mdi-flag</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-flag-checkered" />
              <code class="mr-2">f23c</code>
              <span>mdi-flag-checkered</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-flag-outline" />
              <code class="mr-2">f23d</code>
              <span>mdi-flag-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-flag-outline-variant" />
              <code class="mr-2">f23e</code>
              <span>mdi-flag-outline-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-flag-triangle" />
              <code class="mr-2">f23f</code>
              <span>mdi-flag-triangle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-flag-variant" />
              <code class="mr-2">f240</code>
              <span>mdi-flag-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-flash" />
              <code class="mr-2">f241</code>
              <span>mdi-flash</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-flash-auto" />
              <code class="mr-2">f242</code>
              <span>mdi-flash-auto</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-flash-off" />
              <code class="mr-2">f243</code>
              <span>mdi-flash-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-flash-outline" />
              <code class="mr-2">f6d4</code>
              <span>mdi-flash-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-flash-red-eye" />
              <code class="mr-2">f67a</code>
              <span>mdi-flash-red-eye</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-flashlight" />
              <code class="mr-2">f244</code>
              <span>mdi-flashlight</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-flashlight-off" />
              <code class="mr-2">f245</code>
              <span>mdi-flashlight-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-flask" />
              <code class="mr-2">f093</code>
              <span>mdi-flask</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-flask-empty" />
              <code class="mr-2">f094</code>
              <span>mdi-flask-empty</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-flask-empty-outline" />
              <code class="mr-2">f095</code>
              <span>mdi-flask-empty-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-flask-outline" />
              <code class="mr-2">f096</code>
              <span>mdi-flask-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-flip-to-back" />
              <code class="mr-2">f247</code>
              <span>mdi-flip-to-back</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-flip-to-front" />
              <code class="mr-2">f248</code>
              <span>mdi-flip-to-front</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-floppy" />
              <code class="mr-2">f249</code>
              <span>mdi-floppy</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-flower" />
              <code class="mr-2">f24a</code>
              <span>mdi-flower</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-folder" />
              <code class="mr-2">f24b</code>
              <span>mdi-folder</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-folder-account" />
              <code class="mr-2">f24c</code>
              <span>mdi-folder-account</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-folder-download" />
              <code class="mr-2">f24d</code>
              <span>mdi-folder-download</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-folder-google-drive" />
              <code class="mr-2">f24e</code>
              <span>mdi-folder-google-drive</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-folder-image" />
              <code class="mr-2">f24f</code>
              <span>mdi-folder-image</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-folder-lock" />
              <code class="mr-2">f250</code>
              <span>mdi-folder-lock</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-folder-lock-open" />
              <code class="mr-2">f251</code>
              <span>mdi-folder-lock-open</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-folder-move" />
              <code class="mr-2">f252</code>
              <span>mdi-folder-move</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-folder-multiple" />
              <code class="mr-2">f253</code>
              <span>mdi-folder-multiple</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-folder-multiple-image" />
              <code class="mr-2">f254</code>
              <span>mdi-folder-multiple-image</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-folder-multiple-outline" />
              <code class="mr-2">f255</code>
              <span>mdi-folder-multiple-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-folder-outline" />
              <code class="mr-2">f256</code>
              <span>mdi-folder-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-folder-plus" />
              <code class="mr-2">f257</code>
              <span>mdi-folder-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-folder-remove" />
              <code class="mr-2">f258</code>
              <span>mdi-folder-remove</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-folder-star" />
              <code class="mr-2">f69c</code>
              <span>mdi-folder-star</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-folder-upload" />
              <code class="mr-2">f259</code>
              <span>mdi-folder-upload</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-font-awesome" />
              <code class="mr-2">f03a</code>
              <span>mdi-font-awesome</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-food" />
              <code class="mr-2">f25a</code>
              <span>mdi-food</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-food-apple" />
              <code class="mr-2">f25b</code>
              <span>mdi-food-apple</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-food-fork-drink" />
              <code class="mr-2">f5f2</code>
              <span>mdi-food-fork-drink</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-food-off" />
              <code class="mr-2">f5f3</code>
              <span>mdi-food-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-food-variant" />
              <code class="mr-2">f25c</code>
              <span>mdi-food-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-football" />
              <code class="mr-2">f25d</code>
              <span>mdi-football</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-football-australian" />
              <code class="mr-2">f25e</code>
              <span>mdi-football-australian</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-football-helmet" />
              <code class="mr-2">f25f</code>
              <span>mdi-football-helmet</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-align-center" />
              <code class="mr-2">f260</code>
              <span>mdi-format-align-center</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-align-justify" />
              <code class="mr-2">f261</code>
              <span>mdi-format-align-justify</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-align-left" />
              <code class="mr-2">f262</code>
              <span>mdi-format-align-left</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-align-right" />
              <code class="mr-2">f263</code>
              <span>mdi-format-align-right</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-annotation-plus" />
              <code class="mr-2">f646</code>
              <span>mdi-format-annotation-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-bold" />
              <code class="mr-2">f264</code>
              <span>mdi-format-bold</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-clear" />
              <code class="mr-2">f265</code>
              <span>mdi-format-clear</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-color-fill" />
              <code class="mr-2">f266</code>
              <span>mdi-format-color-fill</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-color-text" />
              <code class="mr-2">f69d</code>
              <span>mdi-format-color-text</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-float-center" />
              <code class="mr-2">f267</code>
              <span>mdi-format-float-center</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-float-left" />
              <code class="mr-2">f268</code>
              <span>mdi-format-float-left</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-float-none" />
              <code class="mr-2">f269</code>
              <span>mdi-format-float-none</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-float-right" />
              <code class="mr-2">f26a</code>
              <span>mdi-format-float-right</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-font" />
              <code class="mr-2">f6d5</code>
              <span>mdi-format-font</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-header-1" />
              <code class="mr-2">f26b</code>
              <span>mdi-format-header-1</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-header-2" />
              <code class="mr-2">f26c</code>
              <span>mdi-format-header-2</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-header-3" />
              <code class="mr-2">f26d</code>
              <span>mdi-format-header-3</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-header-4" />
              <code class="mr-2">f26e</code>
              <span>mdi-format-header-4</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-header-5" />
              <code class="mr-2">f26f</code>
              <span>mdi-format-header-5</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-header-6" />
              <code class="mr-2">f270</code>
              <span>mdi-format-header-6</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-header-decrease" />
              <code class="mr-2">f271</code>
              <span>mdi-format-header-decrease</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-header-equal" />
              <code class="mr-2">f272</code>
              <span>mdi-format-header-equal</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-header-increase" />
              <code class="mr-2">f273</code>
              <span>mdi-format-header-increase</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-header-pound" />
              <code class="mr-2">f274</code>
              <span>mdi-format-header-pound</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-horizontal-align-center" />
              <code class="mr-2">f61e</code>
              <span>mdi-format-horizontal-align-center</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-horizontal-align-left" />
              <code class="mr-2">f61f</code>
              <span>mdi-format-horizontal-align-left</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-horizontal-align-right" />
              <code class="mr-2">f620</code>
              <span>mdi-format-horizontal-align-right</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-indent-decrease" />
              <code class="mr-2">f275</code>
              <span>mdi-format-indent-decrease</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-indent-increase" />
              <code class="mr-2">f276</code>
              <span>mdi-format-indent-increase</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-italic" />
              <code class="mr-2">f277</code>
              <span>mdi-format-italic</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-line-spacing" />
              <code class="mr-2">f278</code>
              <span>mdi-format-line-spacing</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-line-style" />
              <code class="mr-2">f5c8</code>
              <span>mdi-format-line-style</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-line-weight" />
              <code class="mr-2">f5c9</code>
              <span>mdi-format-line-weight</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-list-bulleted" />
              <code class="mr-2">f279</code>
              <span>mdi-format-list-bulleted</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-list-bulleted-type" />
              <code class="mr-2">f27a</code>
              <span>mdi-format-list-bulleted-type</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-list-numbers" />
              <code class="mr-2">f27b</code>
              <span>mdi-format-list-numbers</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-page-break" />
              <code class="mr-2">f6d6</code>
              <span>mdi-format-page-break</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-paint" />
              <code class="mr-2">f27c</code>
              <span>mdi-format-paint</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-paragraph" />
              <code class="mr-2">f27d</code>
              <span>mdi-format-paragraph</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-pilcrow" />
              <code class="mr-2">f6d7</code>
              <span>mdi-format-pilcrow</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-quote" />
              <code class="mr-2">f27e</code>
              <span>mdi-format-quote</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-rotate-90" />
              <code class="mr-2">f6a9</code>
              <span>mdi-format-rotate-90</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-section" />
              <code class="mr-2">f69e</code>
              <span>mdi-format-section</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-size" />
              <code class="mr-2">f27f</code>
              <span>mdi-format-size</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-strikethrough" />
              <code class="mr-2">f280</code>
              <span>mdi-format-strikethrough</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-strikethrough-variant" />
              <code class="mr-2">f281</code>
              <span>mdi-format-strikethrough-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-subscript" />
              <code class="mr-2">f282</code>
              <span>mdi-format-subscript</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-superscript" />
              <code class="mr-2">f283</code>
              <span>mdi-format-superscript</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-text" />
              <code class="mr-2">f284</code>
              <span>mdi-format-text</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-textdirection-l-to-r" />
              <code class="mr-2">f285</code>
              <span>mdi-format-textdirection-l-to-r</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-textdirection-r-to-l" />
              <code class="mr-2">f286</code>
              <span>mdi-format-textdirection-r-to-l</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-title" />
              <code class="mr-2">f5f4</code>
              <span>mdi-format-title</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-underline" />
              <code class="mr-2">f287</code>
              <span>mdi-format-underline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-vertical-align-bottom" />
              <code class="mr-2">f621</code>
              <span>mdi-format-vertical-align-bottom</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-vertical-align-center" />
              <code class="mr-2">f622</code>
              <span>mdi-format-vertical-align-center</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-vertical-align-top" />
              <code class="mr-2">f623</code>
              <span>mdi-format-vertical-align-top</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-wrap-inline" />
              <code class="mr-2">f288</code>
              <span>mdi-format-wrap-inline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-wrap-square" />
              <code class="mr-2">f289</code>
              <span>mdi-format-wrap-square</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-wrap-tight" />
              <code class="mr-2">f28a</code>
              <span>mdi-format-wrap-tight</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-format-wrap-top-bottom" />
              <code class="mr-2">f28b</code>
              <span>mdi-format-wrap-top-bottom</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-forum" />
              <code class="mr-2">f28c</code>
              <span>mdi-forum</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-forward" />
              <code class="mr-2">f28d</code>
              <span>mdi-forward</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-foursquare" />
              <code class="mr-2">f28e</code>
              <span>mdi-foursquare</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-fridge" />
              <code class="mr-2">f28f</code>
              <span>mdi-fridge</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-fridge-filled" />
              <code class="mr-2">f290</code>
              <span>mdi-fridge-filled</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-fridge-filled-bottom" />
              <code class="mr-2">f291</code>
              <span>mdi-fridge-filled-bottom</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-fridge-filled-top" />
              <code class="mr-2">f292</code>
              <span>mdi-fridge-filled-top</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-fullscreen" />
              <code class="mr-2">f293</code>
              <span>mdi-fullscreen</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-fullscreen-exit" />
              <code class="mr-2">f294</code>
              <span>mdi-fullscreen-exit</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-function" />
              <code class="mr-2">f295</code>
              <span>mdi-function</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-gamepad" />
              <code class="mr-2">f296</code>
              <span>mdi-gamepad</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-gamepad-variant" />
              <code class="mr-2">f297</code>
              <span>mdi-gamepad-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-garage" />
              <code class="mr-2">f6d8</code>
              <span>mdi-garage</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-garage-open" />
              <code class="mr-2">f6d9</code>
              <span>mdi-garage-open</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-gas-cylinder" />
              <code class="mr-2">f647</code>
              <span>mdi-gas-cylinder</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-gas-station" />
              <code class="mr-2">f298</code>
              <span>mdi-gas-station</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-gate" />
              <code class="mr-2">f299</code>
              <span>mdi-gate</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-gauge" />
              <code class="mr-2">f29a</code>
              <span>mdi-gauge</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-gavel" />
              <code class="mr-2">f29b</code>
              <span>mdi-gavel</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-gender-female" />
              <code class="mr-2">f29c</code>
              <span>mdi-gender-female</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-gender-male" />
              <code class="mr-2">f29d</code>
              <span>mdi-gender-male</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-gender-male-female" />
              <code class="mr-2">f29e</code>
              <span>mdi-gender-male-female</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-gender-transgender" />
              <code class="mr-2">f29f</code>
              <span>mdi-gender-transgender</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-ghost" />
              <code class="mr-2">f2a0</code>
              <span>mdi-ghost</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-gift" />
              <code class="mr-2">f2a1</code>
              <span>mdi-gift</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-git" />
              <code class="mr-2">f2a2</code>
              <span>mdi-git</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-github-box" />
              <code class="mr-2">f2a3</code>
              <span>mdi-github-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-github-circle" />
              <code class="mr-2">f2a4</code>
              <span>mdi-github-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-github-face" />
              <code class="mr-2">f6da</code>
              <span>mdi-github-face</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-glass-flute" />
              <code class="mr-2">f2a5</code>
              <span>mdi-glass-flute</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-glass-mug" />
              <code class="mr-2">f2a6</code>
              <span>mdi-glass-mug</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-glass-stange" />
              <code class="mr-2">f2a7</code>
              <span>mdi-glass-stange</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-glass-tulip" />
              <code class="mr-2">f2a8</code>
              <span>mdi-glass-tulip</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-glassdoor" />
              <code class="mr-2">f2a9</code>
              <span>mdi-glassdoor</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-glasses" />
              <code class="mr-2">f2aa</code>
              <span>mdi-glasses</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-gmail" />
              <code class="mr-2">f2ab</code>
              <span>mdi-gmail</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-gnome" />
              <code class="mr-2">f2ac</code>
              <span>mdi-gnome</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-gondola" />
              <code class="mr-2">f685</code>
              <span>mdi-gondola</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-google" />
              <code class="mr-2">f2ad</code>
              <span>mdi-google</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-google-cardboard" />
              <code class="mr-2">f2ae</code>
              <span>mdi-google-cardboard</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-google-chrome" />
              <code class="mr-2">f2af</code>
              <span>mdi-google-chrome</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-google-circles" />
              <code class="mr-2">f2b0</code>
              <span>mdi-google-circles</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-google-circles-communities" />
              <code class="mr-2">f2b1</code>
              <span>mdi-google-circles-communities</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-google-circles-extended" />
              <code class="mr-2">f2b2</code>
              <span>mdi-google-circles-extended</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-google-circles-group" />
              <code class="mr-2">f2b3</code>
              <span>mdi-google-circles-group</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-google-controller" />
              <code class="mr-2">f2b4</code>
              <span>mdi-google-controller</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-google-controller-off" />
              <code class="mr-2">f2b5</code>
              <span>mdi-google-controller-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-google-drive" />
              <code class="mr-2">f2b6</code>
              <span>mdi-google-drive</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-google-earth" />
              <code class="mr-2">f2b7</code>
              <span>mdi-google-earth</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-google-glass" />
              <code class="mr-2">f2b8</code>
              <span>mdi-google-glass</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-google-keep" />
              <code class="mr-2">f6db</code>
              <span>mdi-google-keep</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-google-maps" />
              <code class="mr-2">f5f5</code>
              <span>mdi-google-maps</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-google-nearby" />
              <code class="mr-2">f2b9</code>
              <span>mdi-google-nearby</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-google-pages" />
              <code class="mr-2">f2ba</code>
              <span>mdi-google-pages</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-google-photos" />
              <code class="mr-2">f6dc</code>
              <span>mdi-google-photos</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-google-physical-web" />
              <code class="mr-2">f2bb</code>
              <span>mdi-google-physical-web</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-google-play" />
              <code class="mr-2">f2bc</code>
              <span>mdi-google-play</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-google-plus" />
              <code class="mr-2">f2bd</code>
              <span>mdi-google-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-google-plus-box" />
              <code class="mr-2">f2be</code>
              <span>mdi-google-plus-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-google-translate" />
              <code class="mr-2">f2bf</code>
              <span>mdi-google-translate</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-google-wallet" />
              <code class="mr-2">f2c0</code>
              <span>mdi-google-wallet</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-gradient" />
              <code class="mr-2">f69f</code>
              <span>mdi-gradient</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-grease-pencil" />
              <code class="mr-2">f648</code>
              <span>mdi-grease-pencil</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-grid" />
              <code class="mr-2">f2c1</code>
              <span>mdi-grid</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-grid-off" />
              <code class="mr-2">f2c2</code>
              <span>mdi-grid-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-group" />
              <code class="mr-2">f2c3</code>
              <span>mdi-group</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-guitar-electric" />
              <code class="mr-2">f2c4</code>
              <span>mdi-guitar-electric</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-guitar-pick" />
              <code class="mr-2">f2c5</code>
              <span>mdi-guitar-pick</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-guitar-pick-outline" />
              <code class="mr-2">f2c6</code>
              <span>mdi-guitar-pick-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-hackernews" />
              <code class="mr-2">f624</code>
              <span>mdi-hackernews</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-hamburger" />
              <code class="mr-2">f684</code>
              <span>mdi-hamburger</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-hand-pointing-right" />
              <code class="mr-2">f2c7</code>
              <span>mdi-hand-pointing-right</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-hanger" />
              <code class="mr-2">f2c8</code>
              <span>mdi-hanger</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-hangouts" />
              <code class="mr-2">f2c9</code>
              <span>mdi-hangouts</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-harddisk" />
              <code class="mr-2">f2ca</code>
              <span>mdi-harddisk</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-headphones" />
              <code class="mr-2">f2cb</code>
              <span>mdi-headphones</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-headphones-box" />
              <code class="mr-2">f2cc</code>
              <span>mdi-headphones-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-headphones-settings" />
              <code class="mr-2">f2cd</code>
              <span>mdi-headphones-settings</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-headset" />
              <code class="mr-2">f2ce</code>
              <span>mdi-headset</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-headset-dock" />
              <code class="mr-2">f2cf</code>
              <span>mdi-headset-dock</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-headset-off" />
              <code class="mr-2">f2d0</code>
              <span>mdi-headset-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-heart" />
              <code class="mr-2">f2d1</code>
              <span>mdi-heart</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-heart-box" />
              <code class="mr-2">f2d2</code>
              <span>mdi-heart-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-heart-box-outline" />
              <code class="mr-2">f2d3</code>
              <span>mdi-heart-box-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-heart-broken" />
              <code class="mr-2">f2d4</code>
              <span>mdi-heart-broken</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-heart-half-outline" />
              <code class="mr-2">f6dd</code>
              <span>mdi-heart-half-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-heart-half-part" />
              <code class="mr-2">f6de</code>
              <span>mdi-heart-half-part</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-heart-half-part-outline" />
              <code class="mr-2">f6df</code>
              <span>mdi-heart-half-part-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-heart-outline" />
              <code class="mr-2">f2d5</code>
              <span>mdi-heart-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-heart-pulse" />
              <code class="mr-2">f5f6</code>
              <span>mdi-heart-pulse</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-help" />
              <code class="mr-2">f2d6</code>
              <span>mdi-help</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-help-circle" />
              <code class="mr-2">f2d7</code>
              <span>mdi-help-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-help-circle-outline" />
              <code class="mr-2">f625</code>
              <span>mdi-help-circle-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-hexagon" />
              <code class="mr-2">f2d8</code>
              <span>mdi-hexagon</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-hexagon-multiple" />
              <code class="mr-2">f6e0</code>
              <span>mdi-hexagon-multiple</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-hexagon-outline" />
              <code class="mr-2">f2d9</code>
              <span>mdi-hexagon-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-highway" />
              <code class="mr-2">f5f7</code>
              <span>mdi-highway</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-history" />
              <code class="mr-2">f2da</code>
              <span>mdi-history</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-hololens" />
              <code class="mr-2">f2db</code>
              <span>mdi-hololens</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-home" />
              <code class="mr-2">f2dc</code>
              <span>mdi-home</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-home-map-marker" />
              <code class="mr-2">f5f8</code>
              <span>mdi-home-map-marker</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-home-modern" />
              <code class="mr-2">f2dd</code>
              <span>mdi-home-modern</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-home-outline" />
              <code class="mr-2">f6a0</code>
              <span>mdi-home-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-home-variant" />
              <code class="mr-2">f2de</code>
              <span>mdi-home-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-hook" />
              <code class="mr-2">f6e1</code>
              <span>mdi-hook</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-hook-off" />
              <code class="mr-2">f6e2</code>
              <span>mdi-hook-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-hops" />
              <code class="mr-2">f2df</code>
              <span>mdi-hops</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-hospital" />
              <code class="mr-2">f2e0</code>
              <span>mdi-hospital</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-hospital-building" />
              <code class="mr-2">f2e1</code>
              <span>mdi-hospital-building</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-hospital-marker" />
              <code class="mr-2">f2e2</code>
              <span>mdi-hospital-marker</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-hotel" />
              <code class="mr-2">f2e3</code>
              <span>mdi-hotel</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-houzz" />
              <code class="mr-2">f2e4</code>
              <span>mdi-houzz</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-houzz-box" />
              <code class="mr-2">f2e5</code>
              <span>mdi-houzz-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-human" />
              <code class="mr-2">f2e6</code>
              <span>mdi-human</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-human-child" />
              <code class="mr-2">f2e7</code>
              <span>mdi-human-child</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-human-female" />
              <code class="mr-2">f649</code>
              <span>mdi-human-female</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-human-greeting" />
              <code class="mr-2">f64a</code>
              <span>mdi-human-greeting</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-human-handsdown" />
              <code class="mr-2">f64b</code>
              <span>mdi-human-handsdown</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-human-handsup" />
              <code class="mr-2">f64c</code>
              <span>mdi-human-handsup</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-human-male" />
              <code class="mr-2">f64d</code>
              <span>mdi-human-male</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-human-male-female" />
              <code class="mr-2">f2e8</code>
              <span>mdi-human-male-female</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-human-pregnant" />
              <code class="mr-2">f5cf</code>
              <span>mdi-human-pregnant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-image" />
              <code class="mr-2">f2e9</code>
              <span>mdi-image</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-image-album" />
              <code class="mr-2">f2ea</code>
              <span>mdi-image-album</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-image-area" />
              <code class="mr-2">f2eb</code>
              <span>mdi-image-area</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-image-area-close" />
              <code class="mr-2">f2ec</code>
              <span>mdi-image-area-close</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-image-broken" />
              <code class="mr-2">f2ed</code>
              <span>mdi-image-broken</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-image-broken-variant" />
              <code class="mr-2">f2ee</code>
              <span>mdi-image-broken-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-image-filter" />
              <code class="mr-2">f2ef</code>
              <span>mdi-image-filter</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-image-filter-black-white" />
              <code class="mr-2">f2f0</code>
              <span>mdi-image-filter-black-white</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-image-filter-center-focus" />
              <code class="mr-2">f2f1</code>
              <span>mdi-image-filter-center-focus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-image-filter-center-focus-weak" />
              <code class="mr-2">f2f2</code>
              <span>mdi-image-filter-center-focus-weak</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-image-filter-drama" />
              <code class="mr-2">f2f3</code>
              <span>mdi-image-filter-drama</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-image-filter-frames" />
              <code class="mr-2">f2f4</code>
              <span>mdi-image-filter-frames</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-image-filter-hdr" />
              <code class="mr-2">f2f5</code>
              <span>mdi-image-filter-hdr</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-image-filter-none" />
              <code class="mr-2">f2f6</code>
              <span>mdi-image-filter-none</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-image-filter-tilt-shift" />
              <code class="mr-2">f2f7</code>
              <span>mdi-image-filter-tilt-shift</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-image-filter-vintage" />
              <code class="mr-2">f2f8</code>
              <span>mdi-image-filter-vintage</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-image-multiple" />
              <code class="mr-2">f2f9</code>
              <span>mdi-image-multiple</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-import" />
              <code class="mr-2">f2fa</code>
              <span>mdi-import</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-inbox" />
              <code class="mr-2">f686</code>
              <span>mdi-inbox</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-inbox-arrow-down" />
              <code class="mr-2">f2fb</code>
              <span>mdi-inbox-arrow-down</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-inbox-arrow-up" />
              <code class="mr-2">f3d1</code>
              <span>mdi-inbox-arrow-up</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-incognito" />
              <code class="mr-2">f5f9</code>
              <span>mdi-incognito</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-infinity" />
              <code class="mr-2">f6e3</code>
              <span>mdi-infinity</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-information" />
              <code class="mr-2">f2fc</code>
              <span>mdi-information</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-information-outline" />
              <code class="mr-2">f2fd</code>
              <span>mdi-information-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-information-variant" />
              <code class="mr-2">f64e</code>
              <span>mdi-information-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-instagram" />
              <code class="mr-2">f2fe</code>
              <span>mdi-instagram</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-instapaper" />
              <code class="mr-2">f2ff</code>
              <span>mdi-instapaper</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-internet-explorer" />
              <code class="mr-2">f300</code>
              <span>mdi-internet-explorer</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-invert-colors" />
              <code class="mr-2">f301</code>
              <span>mdi-invert-colors</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-itunes" />
              <code class="mr-2">f676</code>
              <span>mdi-itunes</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-jeepney" />
              <code class="mr-2">f302</code>
              <span>mdi-jeepney</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-jira" />
              <code class="mr-2">f303</code>
              <span>mdi-jira</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-jsfiddle" />
              <code class="mr-2">f304</code>
              <span>mdi-jsfiddle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-json" />
              <code class="mr-2">f626</code>
              <span>mdi-json</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-keg" />
              <code class="mr-2">f305</code>
              <span>mdi-keg</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-kettle" />
              <code class="mr-2">f5fa</code>
              <span>mdi-kettle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-key" />
              <code class="mr-2">f306</code>
              <span>mdi-key</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-key-change" />
              <code class="mr-2">f307</code>
              <span>mdi-key-change</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-key-minus" />
              <code class="mr-2">f308</code>
              <span>mdi-key-minus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-key-plus" />
              <code class="mr-2">f309</code>
              <span>mdi-key-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-key-remove" />
              <code class="mr-2">f30a</code>
              <span>mdi-key-remove</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-key-variant" />
              <code class="mr-2">f30b</code>
              <span>mdi-key-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-keyboard" />
              <code class="mr-2">f30c</code>
              <span>mdi-keyboard</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-keyboard-backspace" />
              <code class="mr-2">f30d</code>
              <span>mdi-keyboard-backspace</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-keyboard-caps" />
              <code class="mr-2">f30e</code>
              <span>mdi-keyboard-caps</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-keyboard-close" />
              <code class="mr-2">f30f</code>
              <span>mdi-keyboard-close</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-keyboard-off" />
              <code class="mr-2">f310</code>
              <span>mdi-keyboard-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-keyboard-return" />
              <code class="mr-2">f311</code>
              <span>mdi-keyboard-return</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-keyboard-tab" />
              <code class="mr-2">f312</code>
              <span>mdi-keyboard-tab</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-keyboard-variant" />
              <code class="mr-2">f313</code>
              <span>mdi-keyboard-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-kodi" />
              <code class="mr-2">f314</code>
              <span>mdi-kodi</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-label" />
              <code class="mr-2">f315</code>
              <span>mdi-label</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-label-outline" />
              <code class="mr-2">f316</code>
              <span>mdi-label-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-lambda" />
              <code class="mr-2">f627</code>
              <span>mdi-lambda</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-lamp" />
              <code class="mr-2">f6b4</code>
              <span>mdi-lamp</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-lan" />
              <code class="mr-2">f317</code>
              <span>mdi-lan</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-lan-connect" />
              <code class="mr-2">f318</code>
              <span>mdi-lan-connect</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-lan-disconnect" />
              <code class="mr-2">f319</code>
              <span>mdi-lan-disconnect</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-lan-pending" />
              <code class="mr-2">f31a</code>
              <span>mdi-lan-pending</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-language-c" />
              <code class="mr-2">f671</code>
              <span>mdi-language-c</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-language-cpp" />
              <code class="mr-2">f672</code>
              <span>mdi-language-cpp</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-language-csharp" />
              <code class="mr-2">f31b</code>
              <span>mdi-language-csharp</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-language-css3" />
              <code class="mr-2">f31c</code>
              <span>mdi-language-css3</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-language-html5" />
              <code class="mr-2">f31d</code>
              <span>mdi-language-html5</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-language-javascript" />
              <code class="mr-2">f31e</code>
              <span>mdi-language-javascript</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-language-php" />
              <code class="mr-2">f31f</code>
              <span>mdi-language-php</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-language-python" />
              <code class="mr-2">f320</code>
              <span>mdi-language-python</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-language-python-text" />
              <code class="mr-2">f321</code>
              <span>mdi-language-python-text</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-language-swift" />
              <code class="mr-2">f6e4</code>
              <span>mdi-language-swift</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-language-typescript" />
              <code class="mr-2">f6e5</code>
              <span>mdi-language-typescript</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-laptop" />
              <code class="mr-2">f322</code>
              <span>mdi-laptop</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-laptop-chromebook" />
              <code class="mr-2">f323</code>
              <span>mdi-laptop-chromebook</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-laptop-mac" />
              <code class="mr-2">f324</code>
              <span>mdi-laptop-mac</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-laptop-off" />
              <code class="mr-2">f6e6</code>
              <span>mdi-laptop-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-laptop-windows" />
              <code class="mr-2">f325</code>
              <span>mdi-laptop-windows</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-lastfm" />
              <code class="mr-2">f326</code>
              <span>mdi-lastfm</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-launch" />
              <code class="mr-2">f327</code>
              <span>mdi-launch</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-layers" />
              <code class="mr-2">f328</code>
              <span>mdi-layers</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-layers-off" />
              <code class="mr-2">f329</code>
              <span>mdi-layers-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-lead-pencil" />
              <code class="mr-2">f64f</code>
              <span>mdi-lead-pencil</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-leaf" />
              <code class="mr-2">f32a</code>
              <span>mdi-leaf</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-led-off" />
              <code class="mr-2">f32b</code>
              <span>mdi-led-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-led-on" />
              <code class="mr-2">f32c</code>
              <span>mdi-led-on</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-led-outline" />
              <code class="mr-2">f32d</code>
              <span>mdi-led-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-led-variant-off" />
              <code class="mr-2">f32e</code>
              <span>mdi-led-variant-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-led-variant-on" />
              <code class="mr-2">f32f</code>
              <span>mdi-led-variant-on</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-led-variant-outline" />
              <code class="mr-2">f330</code>
              <span>mdi-led-variant-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-library" />
              <code class="mr-2">f331</code>
              <span>mdi-library</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-library-books" />
              <code class="mr-2">f332</code>
              <span>mdi-library-books</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-library-music" />
              <code class="mr-2">f333</code>
              <span>mdi-library-music</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-library-plus" />
              <code class="mr-2">f334</code>
              <span>mdi-library-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-lightbulb" />
              <code class="mr-2">f335</code>
              <span>mdi-lightbulb</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-lightbulb-on" />
              <code class="mr-2">f6e7</code>
              <span>mdi-lightbulb-on</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-lightbulb-on-outline" />
              <code class="mr-2">f6e8</code>
              <span>mdi-lightbulb-on-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-lightbulb-outline" />
              <code class="mr-2">f336</code>
              <span>mdi-lightbulb-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-link" />
              <code class="mr-2">f337</code>
              <span>mdi-link</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-link-off" />
              <code class="mr-2">f338</code>
              <span>mdi-link-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-link-variant" />
              <code class="mr-2">f339</code>
              <span>mdi-link-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-link-variant-off" />
              <code class="mr-2">f33a</code>
              <span>mdi-link-variant-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-linkedin" />
              <code class="mr-2">f33b</code>
              <span>mdi-linkedin</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-linkedin-box" />
              <code class="mr-2">f33c</code>
              <span>mdi-linkedin-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-linux" />
              <code class="mr-2">f33d</code>
              <span>mdi-linux</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-lock" />
              <code class="mr-2">f33e</code>
              <span>mdi-lock</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-lock-open" />
              <code class="mr-2">f33f</code>
              <span>mdi-lock-open</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-lock-open-outline" />
              <code class="mr-2">f340</code>
              <span>mdi-lock-open-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-lock-outline" />
              <code class="mr-2">f341</code>
              <span>mdi-lock-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-lock-pattern" />
              <code class="mr-2">f6e9</code>
              <span>mdi-lock-pattern</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-lock-plus" />
              <code class="mr-2">f5fb</code>
              <span>mdi-lock-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-login" />
              <code class="mr-2">f342</code>
              <span>mdi-login</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-login-variant" />
              <code class="mr-2">f5fc</code>
              <span>mdi-login-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-logout" />
              <code class="mr-2">f343</code>
              <span>mdi-logout</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-logout-variant" />
              <code class="mr-2">f5fd</code>
              <span>mdi-logout-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-looks" />
              <code class="mr-2">f344</code>
              <span>mdi-looks</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-loop" />
              <code class="mr-2">f6ea</code>
              <span>mdi-loop</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-loupe" />
              <code class="mr-2">f345</code>
              <span>mdi-loupe</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-lumx" />
              <code class="mr-2">f346</code>
              <span>mdi-lumx</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-magnet" />
              <code class="mr-2">f347</code>
              <span>mdi-magnet</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-magnet-on" />
              <code class="mr-2">f348</code>
              <span>mdi-magnet-on</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-magnify" />
              <code class="mr-2">f349</code>
              <span>mdi-magnify</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-magnify-minus" />
              <code class="mr-2">f34a</code>
              <span>mdi-magnify-minus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-magnify-minus-outline" />
              <code class="mr-2">f6eb</code>
              <span>mdi-magnify-minus-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-magnify-plus" />
              <code class="mr-2">f34b</code>
              <span>mdi-magnify-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-magnify-plus-outline" />
              <code class="mr-2">f6ec</code>
              <span>mdi-magnify-plus-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-mail-ru" />
              <code class="mr-2">f34c</code>
              <span>mdi-mail-ru</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-mailbox" />
              <code class="mr-2">f6ed</code>
              <span>mdi-mailbox</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-map" />
              <code class="mr-2">f34d</code>
              <span>mdi-map</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-map-marker" />
              <code class="mr-2">f34e</code>
              <span>mdi-map-marker</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-map-marker-circle" />
              <code class="mr-2">f34f</code>
              <span>mdi-map-marker-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-map-marker-minus" />
              <code class="mr-2">f650</code>
              <span>mdi-map-marker-minus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-map-marker-multiple" />
              <code class="mr-2">f350</code>
              <span>mdi-map-marker-multiple</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-map-marker-off" />
              <code class="mr-2">f351</code>
              <span>mdi-map-marker-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-map-marker-plus" />
              <code class="mr-2">f651</code>
              <span>mdi-map-marker-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-map-marker-radius" />
              <code class="mr-2">f352</code>
              <span>mdi-map-marker-radius</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-margin" />
              <code class="mr-2">f353</code>
              <span>mdi-margin</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-markdown" />
              <code class="mr-2">f354</code>
              <span>mdi-markdown</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-marker" />
              <code class="mr-2">f652</code>
              <span>mdi-marker</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-marker-check" />
              <code class="mr-2">f355</code>
              <span>mdi-marker-check</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-martini" />
              <code class="mr-2">f356</code>
              <span>mdi-martini</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-material-ui" />
              <code class="mr-2">f357</code>
              <span>mdi-material-ui</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-math-compass" />
              <code class="mr-2">f358</code>
              <span>mdi-math-compass</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-matrix" />
              <code class="mr-2">f628</code>
              <span>mdi-matrix</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-maxcdn" />
              <code class="mr-2">f359</code>
              <span>mdi-maxcdn</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-medical-bag" />
              <code class="mr-2">f6ee</code>
              <span>mdi-medical-bag</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-medium" />
              <code class="mr-2">f35a</code>
              <span>mdi-medium</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-memory" />
              <code class="mr-2">f35b</code>
              <span>mdi-memory</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-menu" />
              <code class="mr-2">f35c</code>
              <span>mdi-menu</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-menu-down" />
              <code class="mr-2">f35d</code>
              <span>mdi-menu-down</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-menu-down-outline" />
              <code class="mr-2">f6b5</code>
              <span>mdi-menu-down-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-menu-left" />
              <code class="mr-2">f35e</code>
              <span>mdi-menu-left</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-menu-right" />
              <code class="mr-2">f35f</code>
              <span>mdi-menu-right</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-menu-up" />
              <code class="mr-2">f360</code>
              <span>mdi-menu-up</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-menu-up-outline" />
              <code class="mr-2">f6b6</code>
              <span>mdi-menu-up-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-message" />
              <code class="mr-2">f361</code>
              <span>mdi-message</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-message-alert" />
              <code class="mr-2">f362</code>
              <span>mdi-message-alert</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-message-bulleted" />
              <code class="mr-2">f6a1</code>
              <span>mdi-message-bulleted</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-message-bulleted-off" />
              <code class="mr-2">f6a2</code>
              <span>mdi-message-bulleted-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-message-draw" />
              <code class="mr-2">f363</code>
              <span>mdi-message-draw</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-message-image" />
              <code class="mr-2">f364</code>
              <span>mdi-message-image</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-message-outline" />
              <code class="mr-2">f365</code>
              <span>mdi-message-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-message-plus" />
              <code class="mr-2">f653</code>
              <span>mdi-message-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-message-processing" />
              <code class="mr-2">f366</code>
              <span>mdi-message-processing</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-message-reply" />
              <code class="mr-2">f367</code>
              <span>mdi-message-reply</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-message-reply-text" />
              <code class="mr-2">f368</code>
              <span>mdi-message-reply-text</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-message-settings" />
              <code class="mr-2">f6ef</code>
              <span>mdi-message-settings</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-message-settings-variant" />
              <code class="mr-2">f6f0</code>
              <span>mdi-message-settings-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-message-text" />
              <code class="mr-2">f369</code>
              <span>mdi-message-text</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-message-text-outline" />
              <code class="mr-2">f36a</code>
              <span>mdi-message-text-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-message-video" />
              <code class="mr-2">f36b</code>
              <span>mdi-message-video</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-meteor" />
              <code class="mr-2">f629</code>
              <span>mdi-meteor</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-microphone" />
              <code class="mr-2">f36c</code>
              <span>mdi-microphone</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-microphone-off" />
              <code class="mr-2">f36d</code>
              <span>mdi-microphone-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-microphone-outline" />
              <code class="mr-2">f36e</code>
              <span>mdi-microphone-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-microphone-settings" />
              <code class="mr-2">f36f</code>
              <span>mdi-microphone-settings</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-microphone-variant" />
              <code class="mr-2">f370</code>
              <span>mdi-microphone-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-microphone-variant-off" />
              <code class="mr-2">f371</code>
              <span>mdi-microphone-variant-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-microscope" />
              <code class="mr-2">f654</code>
              <span>mdi-microscope</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-microsoft" />
              <code class="mr-2">f372</code>
              <span>mdi-microsoft</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-minecraft" />
              <code class="mr-2">f373</code>
              <span>mdi-minecraft</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-minus" />
              <code class="mr-2">f374</code>
              <span>mdi-minus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-minus-box" />
              <code class="mr-2">f375</code>
              <span>mdi-minus-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-minus-box-outline" />
              <code class="mr-2">f6f1</code>
              <span>mdi-minus-box-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-minus-circle" />
              <code class="mr-2">f376</code>
              <span>mdi-minus-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-minus-circle-outline" />
              <code class="mr-2">f377</code>
              <span>mdi-minus-circle-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-minus-network" />
              <code class="mr-2">f378</code>
              <span>mdi-minus-network</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-mixcloud" />
              <code class="mr-2">f62a</code>
              <span>mdi-mixcloud</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-monitor" />
              <code class="mr-2">f379</code>
              <span>mdi-monitor</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-monitor-multiple" />
              <code class="mr-2">f37a</code>
              <span>mdi-monitor-multiple</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-more" />
              <code class="mr-2">f37b</code>
              <span>mdi-more</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-motorbike" />
              <code class="mr-2">f37c</code>
              <span>mdi-motorbike</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-mouse" />
              <code class="mr-2">f37d</code>
              <span>mdi-mouse</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-mouse-off" />
              <code class="mr-2">f37e</code>
              <span>mdi-mouse-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-mouse-variant" />
              <code class="mr-2">f37f</code>
              <span>mdi-mouse-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-mouse-variant-off" />
              <code class="mr-2">f380</code>
              <span>mdi-mouse-variant-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-move-resize" />
              <code class="mr-2">f655</code>
              <span>mdi-move-resize</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-move-resize-variant" />
              <code class="mr-2">f656</code>
              <span>mdi-move-resize-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-movie" />
              <code class="mr-2">f381</code>
              <span>mdi-movie</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-multiplication" />
              <code class="mr-2">f382</code>
              <span>mdi-multiplication</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-multiplication-box" />
              <code class="mr-2">f383</code>
              <span>mdi-multiplication-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-music-box" />
              <code class="mr-2">f384</code>
              <span>mdi-music-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-music-box-outline" />
              <code class="mr-2">f385</code>
              <span>mdi-music-box-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-music-circle" />
              <code class="mr-2">f386</code>
              <span>mdi-music-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-music-note" />
              <code class="mr-2">f387</code>
              <span>mdi-music-note</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-music-note-bluetooth" />
              <code class="mr-2">f5fe</code>
              <span>mdi-music-note-bluetooth</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-music-note-bluetooth-off" />
              <code class="mr-2">f5ff</code>
              <span>mdi-music-note-bluetooth-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-music-note-eighth" />
              <code class="mr-2">f388</code>
              <span>mdi-music-note-eighth</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-music-note-half" />
              <code class="mr-2">f389</code>
              <span>mdi-music-note-half</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-music-note-off" />
              <code class="mr-2">f38a</code>
              <span>mdi-music-note-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-music-note-quarter" />
              <code class="mr-2">f38b</code>
              <span>mdi-music-note-quarter</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-music-note-sixteenth" />
              <code class="mr-2">f38c</code>
              <span>mdi-music-note-sixteenth</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-music-note-whole" />
              <code class="mr-2">f38d</code>
              <span>mdi-music-note-whole</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-nature" />
              <code class="mr-2">f38e</code>
              <span>mdi-nature</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-nature-people" />
              <code class="mr-2">f38f</code>
              <span>mdi-nature-people</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-navigation" />
              <code class="mr-2">f390</code>
              <span>mdi-navigation</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-near-me" />
              <code class="mr-2">f5cd</code>
              <span>mdi-near-me</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-needle" />
              <code class="mr-2">f391</code>
              <span>mdi-needle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-nest-protect" />
              <code class="mr-2">f392</code>
              <span>mdi-nest-protect</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-nest-thermostat" />
              <code class="mr-2">f393</code>
              <span>mdi-nest-thermostat</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-network" />
              <code class="mr-2">f6f2</code>
              <span>mdi-network</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-network-download" />
              <code class="mr-2">f6f3</code>
              <span>mdi-network-download</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-network-question" />
              <code class="mr-2">f6f4</code>
              <span>mdi-network-question</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-network-upload" />
              <code class="mr-2">f6f5</code>
              <span>mdi-network-upload</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-new-box" />
              <code class="mr-2">f394</code>
              <span>mdi-new-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-newspaper" />
              <code class="mr-2">f395</code>
              <span>mdi-newspaper</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-nfc" />
              <code class="mr-2">f396</code>
              <span>mdi-nfc</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-nfc-tap" />
              <code class="mr-2">f397</code>
              <span>mdi-nfc-tap</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-nfc-variant" />
              <code class="mr-2">f398</code>
              <span>mdi-nfc-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-nodejs" />
              <code class="mr-2">f399</code>
              <span>mdi-nodejs</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-note" />
              <code class="mr-2">f39a</code>
              <span>mdi-note</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-note-multiple" />
              <code class="mr-2">f6b7</code>
              <span>mdi-note-multiple</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-note-multiple-outline" />
              <code class="mr-2">f6b8</code>
              <span>mdi-note-multiple-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-note-outline" />
              <code class="mr-2">f39b</code>
              <span>mdi-note-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-note-plus" />
              <code class="mr-2">f39c</code>
              <span>mdi-note-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-note-plus-outline" />
              <code class="mr-2">f39d</code>
              <span>mdi-note-plus-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-note-text" />
              <code class="mr-2">f39e</code>
              <span>mdi-note-text</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-notification-clear-all" />
              <code class="mr-2">f39f</code>
              <span>mdi-notification-clear-all</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-npm" />
              <code class="mr-2">f6f6</code>
              <span>mdi-npm</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-nuke" />
              <code class="mr-2">f6a3</code>
              <span>mdi-nuke</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric" />
              <code class="mr-2">f3a0</code>
              <span>mdi-numeric</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-0-box" />
              <code class="mr-2">f3a1</code>
              <span>mdi-numeric-0-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-0-box-multiple-outline" />
              <code class="mr-2">f3a2</code>
              <span>mdi-numeric-0-box-multiple-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-0-box-outline" />
              <code class="mr-2">f3a3</code>
              <span>mdi-numeric-0-box-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-1-box" />
              <code class="mr-2">f3a4</code>
              <span>mdi-numeric-1-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-1-box-multiple-outline" />
              <code class="mr-2">f3a5</code>
              <span>mdi-numeric-1-box-multiple-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-1-box-outline" />
              <code class="mr-2">f3a6</code>
              <span>mdi-numeric-1-box-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-2-box" />
              <code class="mr-2">f3a7</code>
              <span>mdi-numeric-2-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-2-box-multiple-outline" />
              <code class="mr-2">f3a8</code>
              <span>mdi-numeric-2-box-multiple-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-2-box-outline" />
              <code class="mr-2">f3a9</code>
              <span>mdi-numeric-2-box-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-3-box" />
              <code class="mr-2">f3aa</code>
              <span>mdi-numeric-3-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-3-box-multiple-outline" />
              <code class="mr-2">f3ab</code>
              <span>mdi-numeric-3-box-multiple-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-3-box-outline" />
              <code class="mr-2">f3ac</code>
              <span>mdi-numeric-3-box-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-4-box" />
              <code class="mr-2">f3ad</code>
              <span>mdi-numeric-4-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-4-box-multiple-outline" />
              <code class="mr-2">f3ae</code>
              <span>mdi-numeric-4-box-multiple-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-4-box-outline" />
              <code class="mr-2">f3af</code>
              <span>mdi-numeric-4-box-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-5-box" />
              <code class="mr-2">f3b0</code>
              <span>mdi-numeric-5-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-5-box-multiple-outline" />
              <code class="mr-2">f3b1</code>
              <span>mdi-numeric-5-box-multiple-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-5-box-outline" />
              <code class="mr-2">f3b2</code>
              <span>mdi-numeric-5-box-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-6-box" />
              <code class="mr-2">f3b3</code>
              <span>mdi-numeric-6-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-6-box-multiple-outline" />
              <code class="mr-2">f3b4</code>
              <span>mdi-numeric-6-box-multiple-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-6-box-outline" />
              <code class="mr-2">f3b5</code>
              <span>mdi-numeric-6-box-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-7-box" />
              <code class="mr-2">f3b6</code>
              <span>mdi-numeric-7-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-7-box-multiple-outline" />
              <code class="mr-2">f3b7</code>
              <span>mdi-numeric-7-box-multiple-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-7-box-outline" />
              <code class="mr-2">f3b8</code>
              <span>mdi-numeric-7-box-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-8-box" />
              <code class="mr-2">f3b9</code>
              <span>mdi-numeric-8-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-8-box-multiple-outline" />
              <code class="mr-2">f3ba</code>
              <span>mdi-numeric-8-box-multiple-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-8-box-outline" />
              <code class="mr-2">f3bb</code>
              <span>mdi-numeric-8-box-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-9-box" />
              <code class="mr-2">f3bc</code>
              <span>mdi-numeric-9-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-9-box-multiple-outline" />
              <code class="mr-2">f3bd</code>
              <span>mdi-numeric-9-box-multiple-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-9-box-outline" />
              <code class="mr-2">f3be</code>
              <span>mdi-numeric-9-box-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-9-plus-box" />
              <code class="mr-2">f3bf</code>
              <span>mdi-numeric-9-plus-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-9-plus-box-multiple-outline" />
              <code class="mr-2">f3c0</code>
              <span>mdi-numeric-9-plus-box-multiple-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-numeric-9-plus-box-outline" />
              <code class="mr-2">f3c1</code>
              <span>mdi-numeric-9-plus-box-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-nut" />
              <code class="mr-2">f6f7</code>
              <span>mdi-nut</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-nutrition" />
              <code class="mr-2">f3c2</code>
              <span>mdi-nutrition</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-oar" />
              <code class="mr-2">f67b</code>
              <span>mdi-oar</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-octagon" />
              <code class="mr-2">f3c3</code>
              <span>mdi-octagon</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-octagon-outline" />
              <code class="mr-2">f3c4</code>
              <span>mdi-octagon-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-octagram" />
              <code class="mr-2">f6f8</code>
              <span>mdi-octagram</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-odnoklassniki" />
              <code class="mr-2">f3c5</code>
              <span>mdi-odnoklassniki</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-office" />
              <code class="mr-2">f3c6</code>
              <span>mdi-office</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-oil" />
              <code class="mr-2">f3c7</code>
              <span>mdi-oil</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-oil-temperature" />
              <code class="mr-2">f3c8</code>
              <span>mdi-oil-temperature</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-omega" />
              <code class="mr-2">f3c9</code>
              <span>mdi-omega</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-onedrive" />
              <code class="mr-2">f3ca</code>
              <span>mdi-onedrive</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-opacity" />
              <code class="mr-2">f5cc</code>
              <span>mdi-opacity</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-open-in-app" />
              <code class="mr-2">f3cb</code>
              <span>mdi-open-in-app</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-open-in-new" />
              <code class="mr-2">f3cc</code>
              <span>mdi-open-in-new</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-openid" />
              <code class="mr-2">f3cd</code>
              <span>mdi-openid</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-opera" />
              <code class="mr-2">f3ce</code>
              <span>mdi-opera</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-ornament" />
              <code class="mr-2">f3cf</code>
              <span>mdi-ornament</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-ornament-variant" />
              <code class="mr-2">f3d0</code>
              <span>mdi-ornament-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-owl" />
              <code class="mr-2">f3d2</code>
              <span>mdi-owl</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-package" />
              <code class="mr-2">f3d3</code>
              <span>mdi-package</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-package-down" />
              <code class="mr-2">f3d4</code>
              <span>mdi-package-down</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-package-up" />
              <code class="mr-2">f3d5</code>
              <span>mdi-package-up</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-package-variant" />
              <code class="mr-2">f3d6</code>
              <span>mdi-package-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-package-variant-closed" />
              <code class="mr-2">f3d7</code>
              <span>mdi-package-variant-closed</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-page-first" />
              <code class="mr-2">f600</code>
              <span>mdi-page-first</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-page-last" />
              <code class="mr-2">f601</code>
              <span>mdi-page-last</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-page-layout-body" />
              <code class="mr-2">f6f9</code>
              <span>mdi-page-layout-body</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-page-layout-footer" />
              <code class="mr-2">f6fa</code>
              <span>mdi-page-layout-footer</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-page-layout-header" />
              <code class="mr-2">f6fb</code>
              <span>mdi-page-layout-header</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-page-layout-sidebar-left" />
              <code class="mr-2">f6fc</code>
              <span>mdi-page-layout-sidebar-left</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-page-layout-sidebar-right" />
              <code class="mr-2">f6fd</code>
              <span>mdi-page-layout-sidebar-right</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-palette" />
              <code class="mr-2">f3d8</code>
              <span>mdi-palette</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-palette-advanced" />
              <code class="mr-2">f3d9</code>
              <span>mdi-palette-advanced</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-panda" />
              <code class="mr-2">f3da</code>
              <span>mdi-panda</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pandora" />
              <code class="mr-2">f3db</code>
              <span>mdi-pandora</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-panorama" />
              <code class="mr-2">f3dc</code>
              <span>mdi-panorama</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-panorama-fisheye" />
              <code class="mr-2">f3dd</code>
              <span>mdi-panorama-fisheye</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-panorama-horizontal" />
              <code class="mr-2">f3de</code>
              <span>mdi-panorama-horizontal</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-panorama-vertical" />
              <code class="mr-2">f3df</code>
              <span>mdi-panorama-vertical</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-panorama-wide-angle" />
              <code class="mr-2">f3e0</code>
              <span>mdi-panorama-wide-angle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-paper-cut-vertical" />
              <code class="mr-2">f3e1</code>
              <span>mdi-paper-cut-vertical</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-paperclip" />
              <code class="mr-2">f3e2</code>
              <span>mdi-paperclip</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-parking" />
              <code class="mr-2">f3e3</code>
              <span>mdi-parking</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pause" />
              <code class="mr-2">f3e4</code>
              <span>mdi-pause</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pause-circle" />
              <code class="mr-2">f3e5</code>
              <span>mdi-pause-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pause-circle-outline" />
              <code class="mr-2">f3e6</code>
              <span>mdi-pause-circle-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pause-octagon" />
              <code class="mr-2">f3e7</code>
              <span>mdi-pause-octagon</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pause-octagon-outline" />
              <code class="mr-2">f3e8</code>
              <span>mdi-pause-octagon-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-paw" />
              <code class="mr-2">f3e9</code>
              <span>mdi-paw</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-paw-off" />
              <code class="mr-2">f657</code>
              <span>mdi-paw-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pen" />
              <code class="mr-2">f3ea</code>
              <span>mdi-pen</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pencil" />
              <code class="mr-2">f3eb</code>
              <span>mdi-pencil</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pencil-box" />
              <code class="mr-2">f3ec</code>
              <span>mdi-pencil-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pencil-box-outline" />
              <code class="mr-2">f3ed</code>
              <span>mdi-pencil-box-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pencil-circle" />
              <code class="mr-2">f6fe</code>
              <span>mdi-pencil-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pencil-lock" />
              <code class="mr-2">f3ee</code>
              <span>mdi-pencil-lock</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pencil-off" />
              <code class="mr-2">f3ef</code>
              <span>mdi-pencil-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pentagon" />
              <code class="mr-2">f6ff</code>
              <span>mdi-pentagon</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pentagon-outline" />
              <code class="mr-2">f700</code>
              <span>mdi-pentagon-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-percent" />
              <code class="mr-2">f3f0</code>
              <span>mdi-percent</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pharmacy" />
              <code class="mr-2">f3f1</code>
              <span>mdi-pharmacy</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-phone" />
              <code class="mr-2">f3f2</code>
              <span>mdi-phone</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-phone-bluetooth" />
              <code class="mr-2">f3f3</code>
              <span>mdi-phone-bluetooth</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-phone-classic" />
              <code class="mr-2">f602</code>
              <span>mdi-phone-classic</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-phone-forward" />
              <code class="mr-2">f3f4</code>
              <span>mdi-phone-forward</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-phone-hangup" />
              <code class="mr-2">f3f5</code>
              <span>mdi-phone-hangup</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-phone-in-talk" />
              <code class="mr-2">f3f6</code>
              <span>mdi-phone-in-talk</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-phone-incoming" />
              <code class="mr-2">f3f7</code>
              <span>mdi-phone-incoming</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-phone-locked" />
              <code class="mr-2">f3f8</code>
              <span>mdi-phone-locked</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-phone-log" />
              <code class="mr-2">f3f9</code>
              <span>mdi-phone-log</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-phone-minus" />
              <code class="mr-2">f658</code>
              <span>mdi-phone-minus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-phone-missed" />
              <code class="mr-2">f3fa</code>
              <span>mdi-phone-missed</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-phone-outgoing" />
              <code class="mr-2">f3fb</code>
              <span>mdi-phone-outgoing</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-phone-paused" />
              <code class="mr-2">f3fc</code>
              <span>mdi-phone-paused</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-phone-plus" />
              <code class="mr-2">f659</code>
              <span>mdi-phone-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-phone-settings" />
              <code class="mr-2">f3fd</code>
              <span>mdi-phone-settings</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-phone-voip" />
              <code class="mr-2">f3fe</code>
              <span>mdi-phone-voip</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pi" />
              <code class="mr-2">f3ff</code>
              <span>mdi-pi</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pi-box" />
              <code class="mr-2">f400</code>
              <span>mdi-pi-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-piano" />
              <code class="mr-2">f67c</code>
              <span>mdi-piano</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pig" />
              <code class="mr-2">f401</code>
              <span>mdi-pig</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pill" />
              <code class="mr-2">f402</code>
              <span>mdi-pill</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pillar" />
              <code class="mr-2">f701</code>
              <span>mdi-pillar</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pin" />
              <code class="mr-2">f403</code>
              <span>mdi-pin</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pin-off" />
              <code class="mr-2">f404</code>
              <span>mdi-pin-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pine-tree" />
              <code class="mr-2">f405</code>
              <span>mdi-pine-tree</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pine-tree-box" />
              <code class="mr-2">f406</code>
              <span>mdi-pine-tree-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pinterest" />
              <code class="mr-2">f407</code>
              <span>mdi-pinterest</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pinterest-box" />
              <code class="mr-2">f408</code>
              <span>mdi-pinterest-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pistol" />
              <code class="mr-2">f702</code>
              <span>mdi-pistol</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pizza" />
              <code class="mr-2">f409</code>
              <span>mdi-pizza</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-plane-shield" />
              <code class="mr-2">f6ba</code>
              <span>mdi-plane-shield</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-play" />
              <code class="mr-2">f40a</code>
              <span>mdi-play</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-play-box-outline" />
              <code class="mr-2">f40b</code>
              <span>mdi-play-box-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-play-circle" />
              <code class="mr-2">f40c</code>
              <span>mdi-play-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-play-circle-outline" />
              <code class="mr-2">f40d</code>
              <span>mdi-play-circle-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-play-pause" />
              <code class="mr-2">f40e</code>
              <span>mdi-play-pause</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-play-protected-content" />
              <code class="mr-2">f40f</code>
              <span>mdi-play-protected-content</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-playlist-check" />
              <code class="mr-2">f5c7</code>
              <span>mdi-playlist-check</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-playlist-minus" />
              <code class="mr-2">f410</code>
              <span>mdi-playlist-minus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-playlist-play" />
              <code class="mr-2">f411</code>
              <span>mdi-playlist-play</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-playlist-plus" />
              <code class="mr-2">f412</code>
              <span>mdi-playlist-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-playlist-remove" />
              <code class="mr-2">f413</code>
              <span>mdi-playlist-remove</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-playstation" />
              <code class="mr-2">f414</code>
              <span>mdi-playstation</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-plex" />
              <code class="mr-2">f6b9</code>
              <span>mdi-plex</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-plus" />
              <code class="mr-2">f415</code>
              <span>mdi-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-plus-box" />
              <code class="mr-2">f416</code>
              <span>mdi-plus-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-plus-box-outline" />
              <code class="mr-2">f703</code>
              <span>mdi-plus-box-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-plus-circle" />
              <code class="mr-2">f417</code>
              <span>mdi-plus-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-plus-circle-multiple-outline" />
              <code class="mr-2">f418</code>
              <span>mdi-plus-circle-multiple-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-plus-circle-outline" />
              <code class="mr-2">f419</code>
              <span>mdi-plus-circle-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-plus-network" />
              <code class="mr-2">f41a</code>
              <span>mdi-plus-network</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-plus-one" />
              <code class="mr-2">f41b</code>
              <span>mdi-plus-one</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-plus-outline" />
              <code class="mr-2">f704</code>
              <span>mdi-plus-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pocket" />
              <code class="mr-2">f41c</code>
              <span>mdi-pocket</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pokeball" />
              <code class="mr-2">f41d</code>
              <span>mdi-pokeball</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-polaroid" />
              <code class="mr-2">f41e</code>
              <span>mdi-polaroid</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-poll" />
              <code class="mr-2">f41f</code>
              <span>mdi-poll</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-poll-box" />
              <code class="mr-2">f420</code>
              <span>mdi-poll-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-polymer" />
              <code class="mr-2">f421</code>
              <span>mdi-polymer</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pool" />
              <code class="mr-2">f606</code>
              <span>mdi-pool</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-popcorn" />
              <code class="mr-2">f422</code>
              <span>mdi-popcorn</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pot" />
              <code class="mr-2">f65a</code>
              <span>mdi-pot</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pot-mix" />
              <code class="mr-2">f65b</code>
              <span>mdi-pot-mix</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pound" />
              <code class="mr-2">f423</code>
              <span>mdi-pound</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pound-box" />
              <code class="mr-2">f424</code>
              <span>mdi-pound-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-power" />
              <code class="mr-2">f425</code>
              <span>mdi-power</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-power-plug" />
              <code class="mr-2">f6a4</code>
              <span>mdi-power-plug</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-power-plug-off" />
              <code class="mr-2">f6a5</code>
              <span>mdi-power-plug-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-power-settings" />
              <code class="mr-2">f426</code>
              <span>mdi-power-settings</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-power-socket" />
              <code class="mr-2">f427</code>
              <span>mdi-power-socket</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-prescription" />
              <code class="mr-2">f705</code>
              <span>mdi-prescription</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-presentation" />
              <code class="mr-2">f428</code>
              <span>mdi-presentation</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-presentation-play" />
              <code class="mr-2">f429</code>
              <span>mdi-presentation-play</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-printer" />
              <code class="mr-2">f42a</code>
              <span>mdi-printer</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-printer-3d" />
              <code class="mr-2">f42b</code>
              <span>mdi-printer-3d</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-printer-alert" />
              <code class="mr-2">f42c</code>
              <span>mdi-printer-alert</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-printer-settings" />
              <code class="mr-2">f706</code>
              <span>mdi-printer-settings</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-priority-high" />
              <code class="mr-2">f603</code>
              <span>mdi-priority-high</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-priority-low" />
              <code class="mr-2">f604</code>
              <span>mdi-priority-low</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-professional-hexagon" />
              <code class="mr-2">f42d</code>
              <span>mdi-professional-hexagon</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-projector" />
              <code class="mr-2">f42e</code>
              <span>mdi-projector</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-projector-screen" />
              <code class="mr-2">f42f</code>
              <span>mdi-projector-screen</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-publish" />
              <code class="mr-2">f6a6</code>
              <span>mdi-publish</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-pulse" />
              <code class="mr-2">f430</code>
              <span>mdi-pulse</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-puzzle" />
              <code class="mr-2">f431</code>
              <span>mdi-puzzle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-qqchat" />
              <code class="mr-2">f605</code>
              <span>mdi-qqchat</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-qrcode" />
              <code class="mr-2">f432</code>
              <span>mdi-qrcode</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-qrcode-scan" />
              <code class="mr-2">f433</code>
              <span>mdi-qrcode-scan</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-quadcopter" />
              <code class="mr-2">f434</code>
              <span>mdi-quadcopter</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-quality-high" />
              <code class="mr-2">f435</code>
              <span>mdi-quality-high</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-quicktime" />
              <code class="mr-2">f436</code>
              <span>mdi-quicktime</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-radar" />
              <code class="mr-2">f437</code>
              <span>mdi-radar</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-radiator" />
              <code class="mr-2">f438</code>
              <span>mdi-radiator</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-radio" />
              <code class="mr-2">f439</code>
              <span>mdi-radio</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-radio-handheld" />
              <code class="mr-2">f43a</code>
              <span>mdi-radio-handheld</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-radio-tower" />
              <code class="mr-2">f43b</code>
              <span>mdi-radio-tower</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-radioactive" />
              <code class="mr-2">f43c</code>
              <span>mdi-radioactive</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-radiobox-blank" />
              <code class="mr-2">f43d</code>
              <span>mdi-radiobox-blank</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-radiobox-marked" />
              <code class="mr-2">f43e</code>
              <span>mdi-radiobox-marked</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-raspberrypi" />
              <code class="mr-2">f43f</code>
              <span>mdi-raspberrypi</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-ray-end" />
              <code class="mr-2">f440</code>
              <span>mdi-ray-end</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-ray-end-arrow" />
              <code class="mr-2">f441</code>
              <span>mdi-ray-end-arrow</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-ray-start" />
              <code class="mr-2">f442</code>
              <span>mdi-ray-start</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-ray-start-arrow" />
              <code class="mr-2">f443</code>
              <span>mdi-ray-start-arrow</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-ray-start-end" />
              <code class="mr-2">f444</code>
              <span>mdi-ray-start-end</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-ray-vertex" />
              <code class="mr-2">f445</code>
              <span>mdi-ray-vertex</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-rdio" />
              <code class="mr-2">f446</code>
              <span>mdi-rdio</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-react" />
              <code class="mr-2">f707</code>
              <span>mdi-react</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-read" />
              <code class="mr-2">f447</code>
              <span>mdi-read</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-readability" />
              <code class="mr-2">f448</code>
              <span>mdi-readability</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-receipt" />
              <code class="mr-2">f449</code>
              <span>mdi-receipt</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-record" />
              <code class="mr-2">f44a</code>
              <span>mdi-record</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-record-rec" />
              <code class="mr-2">f44b</code>
              <span>mdi-record-rec</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-recycle" />
              <code class="mr-2">f44c</code>
              <span>mdi-recycle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-reddit" />
              <code class="mr-2">f44d</code>
              <span>mdi-reddit</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-redo" />
              <code class="mr-2">f44e</code>
              <span>mdi-redo</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-redo-variant" />
              <code class="mr-2">f44f</code>
              <span>mdi-redo-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-refresh" />
              <code class="mr-2">f450</code>
              <span>mdi-refresh</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-regex" />
              <code class="mr-2">f451</code>
              <span>mdi-regex</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-relative-scale" />
              <code class="mr-2">f452</code>
              <span>mdi-relative-scale</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-reload" />
              <code class="mr-2">f453</code>
              <span>mdi-reload</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-remote" />
              <code class="mr-2">f454</code>
              <span>mdi-remote</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-rename-box" />
              <code class="mr-2">f455</code>
              <span>mdi-rename-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-reorder-horizontal" />
              <code class="mr-2">f687</code>
              <span>mdi-reorder-horizontal</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-reorder-vertical" />
              <code class="mr-2">f688</code>
              <span>mdi-reorder-vertical</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-repeat" />
              <code class="mr-2">f456</code>
              <span>mdi-repeat</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-repeat-off" />
              <code class="mr-2">f457</code>
              <span>mdi-repeat-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-repeat-once" />
              <code class="mr-2">f458</code>
              <span>mdi-repeat-once</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-replay" />
              <code class="mr-2">f459</code>
              <span>mdi-replay</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-reply" />
              <code class="mr-2">f45a</code>
              <span>mdi-reply</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-reply-all" />
              <code class="mr-2">f45b</code>
              <span>mdi-reply-all</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-reproduction" />
              <code class="mr-2">f45c</code>
              <span>mdi-reproduction</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-resize-bottom-right" />
              <code class="mr-2">f45d</code>
              <span>mdi-resize-bottom-right</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-responsive" />
              <code class="mr-2">f45e</code>
              <span>mdi-responsive</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-restart" />
              <code class="mr-2">f708</code>
              <span>mdi-restart</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-restore" />
              <code class="mr-2">f6a7</code>
              <span>mdi-restore</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-rewind" />
              <code class="mr-2">f45f</code>
              <span>mdi-rewind</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-rewind-outline" />
              <code class="mr-2">f709</code>
              <span>mdi-rewind-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-rhombus" />
              <code class="mr-2">f70a</code>
              <span>mdi-rhombus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-rhombus-outline" />
              <code class="mr-2">f70b</code>
              <span>mdi-rhombus-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-ribbon" />
              <code class="mr-2">f460</code>
              <span>mdi-ribbon</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-road" />
              <code class="mr-2">f461</code>
              <span>mdi-road</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-road-variant" />
              <code class="mr-2">f462</code>
              <span>mdi-road-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-robot" />
              <code class="mr-2">f6a8</code>
              <span>mdi-robot</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-rocket" />
              <code class="mr-2">f463</code>
              <span>mdi-rocket</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-roomba" />
              <code class="mr-2">f70c</code>
              <span>mdi-roomba</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-rotate-3d" />
              <code class="mr-2">f464</code>
              <span>mdi-rotate-3d</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-rotate-left" />
              <code class="mr-2">f465</code>
              <span>mdi-rotate-left</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-rotate-left-variant" />
              <code class="mr-2">f466</code>
              <span>mdi-rotate-left-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-rotate-right" />
              <code class="mr-2">f467</code>
              <span>mdi-rotate-right</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-rotate-right-variant" />
              <code class="mr-2">f468</code>
              <span>mdi-rotate-right-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-rounded-corner" />
              <code class="mr-2">f607</code>
              <span>mdi-rounded-corner</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-router-wireless" />
              <code class="mr-2">f469</code>
              <span>mdi-router-wireless</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-routes" />
              <code class="mr-2">f46a</code>
              <span>mdi-routes</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-rowing" />
              <code class="mr-2">f608</code>
              <span>mdi-rowing</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-rss" />
              <code class="mr-2">f46b</code>
              <span>mdi-rss</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-rss-box" />
              <code class="mr-2">f46c</code>
              <span>mdi-rss-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-ruler" />
              <code class="mr-2">f46d</code>
              <span>mdi-ruler</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-run" />
              <code class="mr-2">f70d</code>
              <span>mdi-run</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-run-fast" />
              <code class="mr-2">f46e</code>
              <span>mdi-run-fast</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-sale" />
              <code class="mr-2">f46f</code>
              <span>mdi-sale</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-satellite" />
              <code class="mr-2">f470</code>
              <span>mdi-satellite</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-satellite-variant" />
              <code class="mr-2">f471</code>
              <span>mdi-satellite-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-saxophone" />
              <code class="mr-2">f609</code>
              <span>mdi-saxophone</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-scale" />
              <code class="mr-2">f472</code>
              <span>mdi-scale</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-scale-balance" />
              <code class="mr-2">f5d1</code>
              <span>mdi-scale-balance</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-scale-bathroom" />
              <code class="mr-2">f473</code>
              <span>mdi-scale-bathroom</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-scanner" />
              <code class="mr-2">f6aa</code>
              <span>mdi-scanner</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-school" />
              <code class="mr-2">f474</code>
              <span>mdi-school</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-screen-rotation" />
              <code class="mr-2">f475</code>
              <span>mdi-screen-rotation</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-screen-rotation-lock" />
              <code class="mr-2">f476</code>
              <span>mdi-screen-rotation-lock</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-screwdriver" />
              <code class="mr-2">f477</code>
              <span>mdi-screwdriver</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-script" />
              <code class="mr-2">f478</code>
              <span>mdi-script</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-sd" />
              <code class="mr-2">f479</code>
              <span>mdi-sd</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-seal" />
              <code class="mr-2">f47a</code>
              <span>mdi-seal</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-search-web" />
              <code class="mr-2">f70e</code>
              <span>mdi-search-web</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-seat-flat" />
              <code class="mr-2">f47b</code>
              <span>mdi-seat-flat</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-seat-flat-angled" />
              <code class="mr-2">f47c</code>
              <span>mdi-seat-flat-angled</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-seat-individual-suite" />
              <code class="mr-2">f47d</code>
              <span>mdi-seat-individual-suite</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-seat-legroom-extra" />
              <code class="mr-2">f47e</code>
              <span>mdi-seat-legroom-extra</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-seat-legroom-normal" />
              <code class="mr-2">f47f</code>
              <span>mdi-seat-legroom-normal</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-seat-legroom-reduced" />
              <code class="mr-2">f480</code>
              <span>mdi-seat-legroom-reduced</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-seat-recline-extra" />
              <code class="mr-2">f481</code>
              <span>mdi-seat-recline-extra</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-seat-recline-normal" />
              <code class="mr-2">f482</code>
              <span>mdi-seat-recline-normal</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-security" />
              <code class="mr-2">f483</code>
              <span>mdi-security</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-security-home" />
              <code class="mr-2">f689</code>
              <span>mdi-security-home</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-security-network" />
              <code class="mr-2">f484</code>
              <span>mdi-security-network</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-select" />
              <code class="mr-2">f485</code>
              <span>mdi-select</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-select-all" />
              <code class="mr-2">f486</code>
              <span>mdi-select-all</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-select-inverse" />
              <code class="mr-2">f487</code>
              <span>mdi-select-inverse</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-select-off" />
              <code class="mr-2">f488</code>
              <span>mdi-select-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-selection" />
              <code class="mr-2">f489</code>
              <span>mdi-selection</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-send" />
              <code class="mr-2">f48a</code>
              <span>mdi-send</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-serial-port" />
              <code class="mr-2">f65c</code>
              <span>mdi-serial-port</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-server" />
              <code class="mr-2">f48b</code>
              <span>mdi-server</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-server-minus" />
              <code class="mr-2">f48c</code>
              <span>mdi-server-minus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-server-network" />
              <code class="mr-2">f48d</code>
              <span>mdi-server-network</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-server-network-off" />
              <code class="mr-2">f48e</code>
              <span>mdi-server-network-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-server-off" />
              <code class="mr-2">f48f</code>
              <span>mdi-server-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-server-plus" />
              <code class="mr-2">f490</code>
              <span>mdi-server-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-server-remove" />
              <code class="mr-2">f491</code>
              <span>mdi-server-remove</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-server-security" />
              <code class="mr-2">f492</code>
              <span>mdi-server-security</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-settings" />
              <code class="mr-2">f493</code>
              <span>mdi-settings</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-settings-box" />
              <code class="mr-2">f494</code>
              <span>mdi-settings-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-shape-circle-plus" />
              <code class="mr-2">f65d</code>
              <span>mdi-shape-circle-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-shape-plus" />
              <code class="mr-2">f495</code>
              <span>mdi-shape-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-shape-polygon-plus" />
              <code class="mr-2">f65e</code>
              <span>mdi-shape-polygon-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-shape-rectangle-plus" />
              <code class="mr-2">f65f</code>
              <span>mdi-shape-rectangle-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-shape-square-plus" />
              <code class="mr-2">f660</code>
              <span>mdi-shape-square-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-share" />
              <code class="mr-2">f496</code>
              <span>mdi-share</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-share-variant" />
              <code class="mr-2">f497</code>
              <span>mdi-share-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-shield" />
              <code class="mr-2">f498</code>
              <span>mdi-shield</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-shield-outline" />
              <code class="mr-2">f499</code>
              <span>mdi-shield-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-shopping" />
              <code class="mr-2">f49a</code>
              <span>mdi-shopping</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-shopping-music" />
              <code class="mr-2">f49b</code>
              <span>mdi-shopping-music</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-shovel" />
              <code class="mr-2">f70f</code>
              <span>mdi-shovel</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-shovel-off" />
              <code class="mr-2">f710</code>
              <span>mdi-shovel-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-shredder" />
              <code class="mr-2">f49c</code>
              <span>mdi-shredder</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-shuffle" />
              <code class="mr-2">f49d</code>
              <span>mdi-shuffle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-shuffle-disabled" />
              <code class="mr-2">f49e</code>
              <span>mdi-shuffle-disabled</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-shuffle-variant" />
              <code class="mr-2">f49f</code>
              <span>mdi-shuffle-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-sigma" />
              <code class="mr-2">f4a0</code>
              <span>mdi-sigma</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-sigma-lower" />
              <code class="mr-2">f62b</code>
              <span>mdi-sigma-lower</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-sign-caution" />
              <code class="mr-2">f4a1</code>
              <span>mdi-sign-caution</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-signal" />
              <code class="mr-2">f4a2</code>
              <span>mdi-signal</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-signal-2g" />
              <code class="mr-2">f711</code>
              <span>mdi-signal-2g</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-signal-3g" />
              <code class="mr-2">f712</code>
              <span>mdi-signal-3g</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-signal-4g" />
              <code class="mr-2">f713</code>
              <span>mdi-signal-4g</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-signal-hspa" />
              <code class="mr-2">f714</code>
              <span>mdi-signal-hspa</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-signal-hspa-plus" />
              <code class="mr-2">f715</code>
              <span>mdi-signal-hspa-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-signal-variant" />
              <code class="mr-2">f60a</code>
              <span>mdi-signal-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-silverware" />
              <code class="mr-2">f4a3</code>
              <span>mdi-silverware</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-silverware-fork" />
              <code class="mr-2">f4a4</code>
              <span>mdi-silverware-fork</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-silverware-spoon" />
              <code class="mr-2">f4a5</code>
              <span>mdi-silverware-spoon</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-silverware-variant" />
              <code class="mr-2">f4a6</code>
              <span>mdi-silverware-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-sim" />
              <code class="mr-2">f4a7</code>
              <span>mdi-sim</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-sim-alert" />
              <code class="mr-2">f4a8</code>
              <span>mdi-sim-alert</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-sim-off" />
              <code class="mr-2">f4a9</code>
              <span>mdi-sim-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-sitemap" />
              <code class="mr-2">f4aa</code>
              <span>mdi-sitemap</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-skip-backward" />
              <code class="mr-2">f4ab</code>
              <span>mdi-skip-backward</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-skip-forward" />
              <code class="mr-2">f4ac</code>
              <span>mdi-skip-forward</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-skip-next" />
              <code class="mr-2">f4ad</code>
              <span>mdi-skip-next</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-skip-next-circle" />
              <code class="mr-2">f661</code>
              <span>mdi-skip-next-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-skip-next-circle-outline" />
              <code class="mr-2">f662</code>
              <span>mdi-skip-next-circle-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-skip-previous" />
              <code class="mr-2">f4ae</code>
              <span>mdi-skip-previous</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-skip-previous-circle" />
              <code class="mr-2">f663</code>
              <span>mdi-skip-previous-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-skip-previous-circle-outline" />
              <code class="mr-2">f664</code>
              <span>mdi-skip-previous-circle-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-skull" />
              <code class="mr-2">f68b</code>
              <span>mdi-skull</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-skype" />
              <code class="mr-2">f4af</code>
              <span>mdi-skype</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-skype-business" />
              <code class="mr-2">f4b0</code>
              <span>mdi-skype-business</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-slack" />
              <code class="mr-2">f4b1</code>
              <span>mdi-slack</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-sleep" />
              <code class="mr-2">f4b2</code>
              <span>mdi-sleep</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-sleep-off" />
              <code class="mr-2">f4b3</code>
              <span>mdi-sleep-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-smoking" />
              <code class="mr-2">f4b4</code>
              <span>mdi-smoking</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-smoking-off" />
              <code class="mr-2">f4b5</code>
              <span>mdi-smoking-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-snapchat" />
              <code class="mr-2">f4b6</code>
              <span>mdi-snapchat</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-snowflake" />
              <code class="mr-2">f716</code>
              <span>mdi-snowflake</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-snowman" />
              <code class="mr-2">f4b7</code>
              <span>mdi-snowman</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-soccer" />
              <code class="mr-2">f4b8</code>
              <span>mdi-soccer</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-sofa" />
              <code class="mr-2">f4b9</code>
              <span>mdi-sofa</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-solid" />
              <code class="mr-2">f68c</code>
              <span>mdi-solid</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-sort" />
              <code class="mr-2">f4ba</code>
              <span>mdi-sort</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-sort-alphabetical" />
              <code class="mr-2">f4bb</code>
              <span>mdi-sort-alphabetical</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-sort-ascending" />
              <code class="mr-2">f4bc</code>
              <span>mdi-sort-ascending</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-sort-descending" />
              <code class="mr-2">f4bd</code>
              <span>mdi-sort-descending</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-sort-numeric" />
              <code class="mr-2">f4be</code>
              <span>mdi-sort-numeric</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-sort-variant" />
              <code class="mr-2">f4bf</code>
              <span>mdi-sort-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-soundcloud" />
              <code class="mr-2">f4c0</code>
              <span>mdi-soundcloud</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-source-branch" />
              <code class="mr-2">f62c</code>
              <span>mdi-source-branch</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-source-commit" />
              <code class="mr-2">f717</code>
              <span>mdi-source-commit</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-source-commit-end" />
              <code class="mr-2">f718</code>
              <span>mdi-source-commit-end</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-source-commit-end-local" />
              <code class="mr-2">f719</code>
              <span>mdi-source-commit-end-local</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-source-commit-local" />
              <code class="mr-2">f71a</code>
              <span>mdi-source-commit-local</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-source-commit-next-local" />
              <code class="mr-2">f71b</code>
              <span>mdi-source-commit-next-local</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-source-commit-start" />
              <code class="mr-2">f71c</code>
              <span>mdi-source-commit-start</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-source-commit-start-next-local" />
              <code class="mr-2">f71d</code>
              <span>mdi-source-commit-start-next-local</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-source-fork" />
              <code class="mr-2">f4c1</code>
              <span>mdi-source-fork</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-source-merge" />
              <code class="mr-2">f62d</code>
              <span>mdi-source-merge</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-source-pull" />
              <code class="mr-2">f4c2</code>
              <span>mdi-source-pull</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-speaker" />
              <code class="mr-2">f4c3</code>
              <span>mdi-speaker</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-speaker-off" />
              <code class="mr-2">f4c4</code>
              <span>mdi-speaker-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-speaker-wireless" />
              <code class="mr-2">f71e</code>
              <span>mdi-speaker-wireless</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-speedometer" />
              <code class="mr-2">f4c5</code>
              <span>mdi-speedometer</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-spellcheck" />
              <code class="mr-2">f4c6</code>
              <span>mdi-spellcheck</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-spotify" />
              <code class="mr-2">f4c7</code>
              <span>mdi-spotify</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-spotlight" />
              <code class="mr-2">f4c8</code>
              <span>mdi-spotlight</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-spotlight-beam" />
              <code class="mr-2">f4c9</code>
              <span>mdi-spotlight-beam</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-spray" />
              <code class="mr-2">f665</code>
              <span>mdi-spray</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-square-inc" />
              <code class="mr-2">f4ca</code>
              <span>mdi-square-inc</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-square-inc-cash" />
              <code class="mr-2">f4cb</code>
              <span>mdi-square-inc-cash</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-stackexchange" />
              <code class="mr-2">f60b</code>
              <span>mdi-stackexchange</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-stackoverflow" />
              <code class="mr-2">f4cc</code>
              <span>mdi-stackoverflow</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-stadium" />
              <code class="mr-2">f71f</code>
              <span>mdi-stadium</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-stairs" />
              <code class="mr-2">f4cd</code>
              <span>mdi-stairs</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-star" />
              <code class="mr-2">f4ce</code>
              <span>mdi-star</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-star-circle" />
              <code class="mr-2">f4cf</code>
              <span>mdi-star-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-star-half" />
              <code class="mr-2">f4d0</code>
              <span>mdi-star-half</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-star-off" />
              <code class="mr-2">f4d1</code>
              <span>mdi-star-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-star-outline" />
              <code class="mr-2">f4d2</code>
              <span>mdi-star-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-steam" />
              <code class="mr-2">f4d3</code>
              <span>mdi-steam</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-steering" />
              <code class="mr-2">f4d4</code>
              <span>mdi-steering</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-step-backward" />
              <code class="mr-2">f4d5</code>
              <span>mdi-step-backward</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-step-backward-2" />
              <code class="mr-2">f4d6</code>
              <span>mdi-step-backward-2</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-step-forward" />
              <code class="mr-2">f4d7</code>
              <span>mdi-step-forward</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-step-forward-2" />
              <code class="mr-2">f4d8</code>
              <span>mdi-step-forward-2</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-stethoscope" />
              <code class="mr-2">f4d9</code>
              <span>mdi-stethoscope</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-sticker" />
              <code class="mr-2">f5d0</code>
              <span>mdi-sticker</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-stocking" />
              <code class="mr-2">f4da</code>
              <span>mdi-stocking</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-stop" />
              <code class="mr-2">f4db</code>
              <span>mdi-stop</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-stop-circle" />
              <code class="mr-2">f666</code>
              <span>mdi-stop-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-stop-circle-outline" />
              <code class="mr-2">f667</code>
              <span>mdi-stop-circle-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-store" />
              <code class="mr-2">f4dc</code>
              <span>mdi-store</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-store-24-hour" />
              <code class="mr-2">f4dd</code>
              <span>mdi-store-24-hour</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-stove" />
              <code class="mr-2">f4de</code>
              <span>mdi-stove</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-subdirectory-arrow-left" />
              <code class="mr-2">f60c</code>
              <span>mdi-subdirectory-arrow-left</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-subdirectory-arrow-right" />
              <code class="mr-2">f60d</code>
              <span>mdi-subdirectory-arrow-right</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-subway" />
              <code class="mr-2">f6ab</code>
              <span>mdi-subway</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-subway-variant" />
              <code class="mr-2">f4df</code>
              <span>mdi-subway-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-sunglasses" />
              <code class="mr-2">f4e0</code>
              <span>mdi-sunglasses</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-surround-sound" />
              <code class="mr-2">f5c5</code>
              <span>mdi-surround-sound</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-svg" />
              <code class="mr-2">f720</code>
              <span>mdi-svg</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-swap-horizontal" />
              <code class="mr-2">f4e1</code>
              <span>mdi-swap-horizontal</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-swap-vertical" />
              <code class="mr-2">f4e2</code>
              <span>mdi-swap-vertical</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-swim" />
              <code class="mr-2">f4e3</code>
              <span>mdi-swim</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-switch" />
              <code class="mr-2">f4e4</code>
              <span>mdi-switch</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-sword" />
              <code class="mr-2">f4e5</code>
              <span>mdi-sword</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-sync" />
              <code class="mr-2">f4e6</code>
              <span>mdi-sync</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-sync-alert" />
              <code class="mr-2">f4e7</code>
              <span>mdi-sync-alert</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-sync-off" />
              <code class="mr-2">f4e8</code>
              <span>mdi-sync-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tab" />
              <code class="mr-2">f4e9</code>
              <span>mdi-tab</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tab-unselected" />
              <code class="mr-2">f4ea</code>
              <span>mdi-tab-unselected</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-table" />
              <code class="mr-2">f4eb</code>
              <span>mdi-table</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-table-column-plus-after" />
              <code class="mr-2">f4ec</code>
              <span>mdi-table-column-plus-after</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-table-column-plus-before" />
              <code class="mr-2">f4ed</code>
              <span>mdi-table-column-plus-before</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-table-column-remove" />
              <code class="mr-2">f4ee</code>
              <span>mdi-table-column-remove</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-table-column-width" />
              <code class="mr-2">f4ef</code>
              <span>mdi-table-column-width</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-table-edit" />
              <code class="mr-2">f4f0</code>
              <span>mdi-table-edit</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-table-large" />
              <code class="mr-2">f4f1</code>
              <span>mdi-table-large</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-table-row-height" />
              <code class="mr-2">f4f2</code>
              <span>mdi-table-row-height</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-table-row-plus-after" />
              <code class="mr-2">f4f3</code>
              <span>mdi-table-row-plus-after</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-table-row-plus-before" />
              <code class="mr-2">f4f4</code>
              <span>mdi-table-row-plus-before</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-table-row-remove" />
              <code class="mr-2">f4f5</code>
              <span>mdi-table-row-remove</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tablet" />
              <code class="mr-2">f4f6</code>
              <span>mdi-tablet</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tablet-android" />
              <code class="mr-2">f4f7</code>
              <span>mdi-tablet-android</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tablet-ipad" />
              <code class="mr-2">f4f8</code>
              <span>mdi-tablet-ipad</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tag" />
              <code class="mr-2">f4f9</code>
              <span>mdi-tag</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tag-faces" />
              <code class="mr-2">f4fa</code>
              <span>mdi-tag-faces</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tag-heart" />
              <code class="mr-2">f68a</code>
              <span>mdi-tag-heart</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tag-multiple" />
              <code class="mr-2">f4fb</code>
              <span>mdi-tag-multiple</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tag-outline" />
              <code class="mr-2">f4fc</code>
              <span>mdi-tag-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tag-plus" />
              <code class="mr-2">f721</code>
              <span>mdi-tag-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tag-remove" />
              <code class="mr-2">f722</code>
              <span>mdi-tag-remove</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tag-text-outline" />
              <code class="mr-2">f4fd</code>
              <span>mdi-tag-text-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-target" />
              <code class="mr-2">f4fe</code>
              <span>mdi-target</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-taxi" />
              <code class="mr-2">f4ff</code>
              <span>mdi-taxi</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-teamviewer" />
              <code class="mr-2">f500</code>
              <span>mdi-teamviewer</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-telegram" />
              <code class="mr-2">f501</code>
              <span>mdi-telegram</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-television" />
              <code class="mr-2">f502</code>
              <span>mdi-television</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-television-guide" />
              <code class="mr-2">f503</code>
              <span>mdi-television-guide</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-temperature-celsius" />
              <code class="mr-2">f504</code>
              <span>mdi-temperature-celsius</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-temperature-fahrenheit" />
              <code class="mr-2">f505</code>
              <span>mdi-temperature-fahrenheit</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-temperature-kelvin" />
              <code class="mr-2">f506</code>
              <span>mdi-temperature-kelvin</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tennis" />
              <code class="mr-2">f507</code>
              <span>mdi-tennis</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tent" />
              <code class="mr-2">f508</code>
              <span>mdi-tent</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-terrain" />
              <code class="mr-2">f509</code>
              <span>mdi-terrain</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-test-tube" />
              <code class="mr-2">f668</code>
              <span>mdi-test-tube</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-text-shadow" />
              <code class="mr-2">f669</code>
              <span>mdi-text-shadow</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-text-to-speech" />
              <code class="mr-2">f50a</code>
              <span>mdi-text-to-speech</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-text-to-speech-off" />
              <code class="mr-2">f50b</code>
              <span>mdi-text-to-speech-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-textbox" />
              <code class="mr-2">f60e</code>
              <span>mdi-textbox</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-texture" />
              <code class="mr-2">f50c</code>
              <span>mdi-texture</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-theater" />
              <code class="mr-2">f50d</code>
              <span>mdi-theater</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-theme-light-dark" />
              <code class="mr-2">f50e</code>
              <span>mdi-theme-light-dark</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-thermometer" />
              <code class="mr-2">f50f</code>
              <span>mdi-thermometer</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-thermometer-lines" />
              <code class="mr-2">f510</code>
              <span>mdi-thermometer-lines</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-thumb-down" />
              <code class="mr-2">f511</code>
              <span>mdi-thumb-down</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-thumb-down-outline" />
              <code class="mr-2">f512</code>
              <span>mdi-thumb-down-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-thumb-up" />
              <code class="mr-2">f513</code>
              <span>mdi-thumb-up</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-thumb-up-outline" />
              <code class="mr-2">f514</code>
              <span>mdi-thumb-up-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-thumbs-up-down" />
              <code class="mr-2">f515</code>
              <span>mdi-thumbs-up-down</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-ticket" />
              <code class="mr-2">f516</code>
              <span>mdi-ticket</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-ticket-account" />
              <code class="mr-2">f517</code>
              <span>mdi-ticket-account</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-ticket-confirmation" />
              <code class="mr-2">f518</code>
              <span>mdi-ticket-confirmation</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-ticket-percent" />
              <code class="mr-2">f723</code>
              <span>mdi-ticket-percent</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tie" />
              <code class="mr-2">f519</code>
              <span>mdi-tie</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tilde" />
              <code class="mr-2">f724</code>
              <span>mdi-tilde</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-timelapse" />
              <code class="mr-2">f51a</code>
              <span>mdi-timelapse</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-timer" />
              <code class="mr-2">f51b</code>
              <span>mdi-timer</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-timer-10" />
              <code class="mr-2">f51c</code>
              <span>mdi-timer-10</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-timer-3" />
              <code class="mr-2">f51d</code>
              <span>mdi-timer-3</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-timer-off" />
              <code class="mr-2">f51e</code>
              <span>mdi-timer-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-timer-sand" />
              <code class="mr-2">f51f</code>
              <span>mdi-timer-sand</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-timer-sand-empty" />
              <code class="mr-2">f6ac</code>
              <span>mdi-timer-sand-empty</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-timetable" />
              <code class="mr-2">f520</code>
              <span>mdi-timetable</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-toggle-switch" />
              <code class="mr-2">f521</code>
              <span>mdi-toggle-switch</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-toggle-switch-off" />
              <code class="mr-2">f522</code>
              <span>mdi-toggle-switch-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tooltip" />
              <code class="mr-2">f523</code>
              <span>mdi-tooltip</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tooltip-edit" />
              <code class="mr-2">f524</code>
              <span>mdi-tooltip-edit</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tooltip-image" />
              <code class="mr-2">f525</code>
              <span>mdi-tooltip-image</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tooltip-outline" />
              <code class="mr-2">f526</code>
              <span>mdi-tooltip-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tooltip-outline-plus" />
              <code class="mr-2">f527</code>
              <span>mdi-tooltip-outline-plus</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tooltip-text" />
              <code class="mr-2">f528</code>
              <span>mdi-tooltip-text</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tooth" />
              <code class="mr-2">f529</code>
              <span>mdi-tooth</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tor" />
              <code class="mr-2">f52a</code>
              <span>mdi-tor</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tower-beach" />
              <code class="mr-2">f680</code>
              <span>mdi-tower-beach</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tower-fire" />
              <code class="mr-2">f681</code>
              <span>mdi-tower-fire</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-traffic-light" />
              <code class="mr-2">f52b</code>
              <span>mdi-traffic-light</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-train" />
              <code class="mr-2">f52c</code>
              <span>mdi-train</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tram" />
              <code class="mr-2">f52d</code>
              <span>mdi-tram</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-transcribe" />
              <code class="mr-2">f52e</code>
              <span>mdi-transcribe</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-transcribe-close" />
              <code class="mr-2">f52f</code>
              <span>mdi-transcribe-close</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-transfer" />
              <code class="mr-2">f530</code>
              <span>mdi-transfer</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-transit-transfer" />
              <code class="mr-2">f6ad</code>
              <span>mdi-transit-transfer</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-translate" />
              <code class="mr-2">f5ca</code>
              <span>mdi-translate</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-treasure-chest" />
              <code class="mr-2">f725</code>
              <span>mdi-treasure-chest</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tree" />
              <code class="mr-2">f531</code>
              <span>mdi-tree</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-trello" />
              <code class="mr-2">f532</code>
              <span>mdi-trello</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-trending-down" />
              <code class="mr-2">f533</code>
              <span>mdi-trending-down</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-trending-neutral" />
              <code class="mr-2">f534</code>
              <span>mdi-trending-neutral</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-trending-up" />
              <code class="mr-2">f535</code>
              <span>mdi-trending-up</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-triangle" />
              <code class="mr-2">f536</code>
              <span>mdi-triangle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-triangle-outline" />
              <code class="mr-2">f537</code>
              <span>mdi-triangle-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-trophy" />
              <code class="mr-2">f538</code>
              <span>mdi-trophy</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-trophy-award" />
              <code class="mr-2">f539</code>
              <span>mdi-trophy-award</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-trophy-outline" />
              <code class="mr-2">f53a</code>
              <span>mdi-trophy-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-trophy-variant" />
              <code class="mr-2">f53b</code>
              <span>mdi-trophy-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-trophy-variant-outline" />
              <code class="mr-2">f53c</code>
              <span>mdi-trophy-variant-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-truck" />
              <code class="mr-2">f53d</code>
              <span>mdi-truck</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-truck-delivery" />
              <code class="mr-2">f53e</code>
              <span>mdi-truck-delivery</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-truck-trailer" />
              <code class="mr-2">f726</code>
              <span>mdi-truck-trailer</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tshirt-crew" />
              <code class="mr-2">f53f</code>
              <span>mdi-tshirt-crew</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tshirt-v" />
              <code class="mr-2">f540</code>
              <span>mdi-tshirt-v</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tumblr" />
              <code class="mr-2">f541</code>
              <span>mdi-tumblr</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tumblr-reblog" />
              <code class="mr-2">f542</code>
              <span>mdi-tumblr-reblog</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tune" />
              <code class="mr-2">f62e</code>
              <span>mdi-tune</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-tune-vertical" />
              <code class="mr-2">f66a</code>
              <span>mdi-tune-vertical</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-twitch" />
              <code class="mr-2">f543</code>
              <span>mdi-twitch</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-twitter" />
              <code class="mr-2">f544</code>
              <span>mdi-twitter</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-twitter-box" />
              <code class="mr-2">f545</code>
              <span>mdi-twitter-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-twitter-circle" />
              <code class="mr-2">f546</code>
              <span>mdi-twitter-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-twitter-retweet" />
              <code class="mr-2">f547</code>
              <span>mdi-twitter-retweet</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-ubuntu" />
              <code class="mr-2">f548</code>
              <span>mdi-ubuntu</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-umbraco" />
              <code class="mr-2">f549</code>
              <span>mdi-umbraco</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-umbrella" />
              <code class="mr-2">f54a</code>
              <span>mdi-umbrella</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-umbrella-outline" />
              <code class="mr-2">f54b</code>
              <span>mdi-umbrella-outline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-undo" />
              <code class="mr-2">f54c</code>
              <span>mdi-undo</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-undo-variant" />
              <code class="mr-2">f54d</code>
              <span>mdi-undo-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-unfold-less" />
              <code class="mr-2">f54e</code>
              <span>mdi-unfold-less</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-unfold-more" />
              <code class="mr-2">f54f</code>
              <span>mdi-unfold-more</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-ungroup" />
              <code class="mr-2">f550</code>
              <span>mdi-ungroup</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-unity" />
              <code class="mr-2">f6ae</code>
              <span>mdi-unity</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-untappd" />
              <code class="mr-2">f551</code>
              <span>mdi-untappd</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-update" />
              <code class="mr-2">f6af</code>
              <span>mdi-update</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-upload" />
              <code class="mr-2">f552</code>
              <span>mdi-upload</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-usb" />
              <code class="mr-2">f553</code>
              <span>mdi-usb</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-vector-arrange-above" />
              <code class="mr-2">f554</code>
              <span>mdi-vector-arrange-above</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-vector-arrange-below" />
              <code class="mr-2">f555</code>
              <span>mdi-vector-arrange-below</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-vector-circle" />
              <code class="mr-2">f556</code>
              <span>mdi-vector-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-vector-circle-variant" />
              <code class="mr-2">f557</code>
              <span>mdi-vector-circle-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-vector-combine" />
              <code class="mr-2">f558</code>
              <span>mdi-vector-combine</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-vector-curve" />
              <code class="mr-2">f559</code>
              <span>mdi-vector-curve</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-vector-difference" />
              <code class="mr-2">f55a</code>
              <span>mdi-vector-difference</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-vector-difference-ab" />
              <code class="mr-2">f55b</code>
              <span>mdi-vector-difference-ab</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-vector-difference-ba" />
              <code class="mr-2">f55c</code>
              <span>mdi-vector-difference-ba</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-vector-intersection" />
              <code class="mr-2">f55d</code>
              <span>mdi-vector-intersection</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-vector-line" />
              <code class="mr-2">f55e</code>
              <span>mdi-vector-line</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-vector-point" />
              <code class="mr-2">f55f</code>
              <span>mdi-vector-point</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-vector-polygon" />
              <code class="mr-2">f560</code>
              <span>mdi-vector-polygon</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-vector-polyline" />
              <code class="mr-2">f561</code>
              <span>mdi-vector-polyline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-vector-rectangle" />
              <code class="mr-2">f5c6</code>
              <span>mdi-vector-rectangle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-vector-selection" />
              <code class="mr-2">f562</code>
              <span>mdi-vector-selection</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-vector-square" />
              <code class="mr-2">f001</code>
              <span>mdi-vector-square</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-vector-triangle" />
              <code class="mr-2">f563</code>
              <span>mdi-vector-triangle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-vector-union" />
              <code class="mr-2">f564</code>
              <span>mdi-vector-union</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-verified" />
              <code class="mr-2">f565</code>
              <span>mdi-verified</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-vibrate" />
              <code class="mr-2">f566</code>
              <span>mdi-vibrate</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-video" />
              <code class="mr-2">f567</code>
              <span>mdi-video</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-video-off" />
              <code class="mr-2">f568</code>
              <span>mdi-video-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-video-switch" />
              <code class="mr-2">f569</code>
              <span>mdi-video-switch</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-view-agenda" />
              <code class="mr-2">f56a</code>
              <span>mdi-view-agenda</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-view-array" />
              <code class="mr-2">f56b</code>
              <span>mdi-view-array</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-view-carousel" />
              <code class="mr-2">f56c</code>
              <span>mdi-view-carousel</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-view-column" />
              <code class="mr-2">f56d</code>
              <span>mdi-view-column</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-view-dashboard" />
              <code class="mr-2">f56e</code>
              <span>mdi-view-dashboard</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-view-day" />
              <code class="mr-2">f56f</code>
              <span>mdi-view-day</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-view-grid" />
              <code class="mr-2">f570</code>
              <span>mdi-view-grid</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-view-headline" />
              <code class="mr-2">f571</code>
              <span>mdi-view-headline</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-view-list" />
              <code class="mr-2">f572</code>
              <span>mdi-view-list</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-view-module" />
              <code class="mr-2">f573</code>
              <span>mdi-view-module</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-view-parallel" />
              <code class="mr-2">f727</code>
              <span>mdi-view-parallel</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-view-quilt" />
              <code class="mr-2">f574</code>
              <span>mdi-view-quilt</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-view-sequential" />
              <code class="mr-2">f728</code>
              <span>mdi-view-sequential</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-view-stream" />
              <code class="mr-2">f575</code>
              <span>mdi-view-stream</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-view-week" />
              <code class="mr-2">f576</code>
              <span>mdi-view-week</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-vimeo" />
              <code class="mr-2">f577</code>
              <span>mdi-vimeo</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-vine" />
              <code class="mr-2">f578</code>
              <span>mdi-vine</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-violin" />
              <code class="mr-2">f60f</code>
              <span>mdi-violin</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-visualstudio" />
              <code class="mr-2">f610</code>
              <span>mdi-visualstudio</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-vk" />
              <code class="mr-2">f579</code>
              <span>mdi-vk</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-vk-box" />
              <code class="mr-2">f57a</code>
              <span>mdi-vk-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-vk-circle" />
              <code class="mr-2">f57b</code>
              <span>mdi-vk-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-vlc" />
              <code class="mr-2">f57c</code>
              <span>mdi-vlc</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-voice" />
              <code class="mr-2">f5cb</code>
              <span>mdi-voice</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-voicemail" />
              <code class="mr-2">f57d</code>
              <span>mdi-voicemail</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-volume-high" />
              <code class="mr-2">f57e</code>
              <span>mdi-volume-high</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-volume-low" />
              <code class="mr-2">f57f</code>
              <span>mdi-volume-low</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-volume-medium" />
              <code class="mr-2">f580</code>
              <span>mdi-volume-medium</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-volume-off" />
              <code class="mr-2">f581</code>
              <span>mdi-volume-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-vpn" />
              <code class="mr-2">f582</code>
              <span>mdi-vpn</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-walk" />
              <code class="mr-2">f583</code>
              <span>mdi-walk</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-wallet" />
              <code class="mr-2">f584</code>
              <span>mdi-wallet</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-wallet-giftcard" />
              <code class="mr-2">f585</code>
              <span>mdi-wallet-giftcard</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-wallet-membership" />
              <code class="mr-2">f586</code>
              <span>mdi-wallet-membership</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-wallet-travel" />
              <code class="mr-2">f587</code>
              <span>mdi-wallet-travel</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-wan" />
              <code class="mr-2">f588</code>
              <span>mdi-wan</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-washing-machine" />
              <code class="mr-2">f729</code>
              <span>mdi-washing-machine</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-watch" />
              <code class="mr-2">f589</code>
              <span>mdi-watch</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-watch-export" />
              <code class="mr-2">f58a</code>
              <span>mdi-watch-export</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-watch-import" />
              <code class="mr-2">f58b</code>
              <span>mdi-watch-import</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-watch-vibrate" />
              <code class="mr-2">f6b0</code>
              <span>mdi-watch-vibrate</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-water" />
              <code class="mr-2">f58c</code>
              <span>mdi-water</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-water-off" />
              <code class="mr-2">f58d</code>
              <span>mdi-water-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-water-percent" />
              <code class="mr-2">f58e</code>
              <span>mdi-water-percent</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-water-pump" />
              <code class="mr-2">f58f</code>
              <span>mdi-water-pump</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-watermark" />
              <code class="mr-2">f612</code>
              <span>mdi-watermark</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-weather-cloudy" />
              <code class="mr-2">f590</code>
              <span>mdi-weather-cloudy</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-weather-fog" />
              <code class="mr-2">f591</code>
              <span>mdi-weather-fog</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-weather-hail" />
              <code class="mr-2">f592</code>
              <span>mdi-weather-hail</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-weather-lightning" />
              <code class="mr-2">f593</code>
              <span>mdi-weather-lightning</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-weather-lightning-rainy" />
              <code class="mr-2">f67d</code>
              <span>mdi-weather-lightning-rainy</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-weather-night" />
              <code class="mr-2">f594</code>
              <span>mdi-weather-night</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-weather-partlycloudy" />
              <code class="mr-2">f595</code>
              <span>mdi-weather-partlycloudy</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-weather-pouring" />
              <code class="mr-2">f596</code>
              <span>mdi-weather-pouring</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-weather-rainy" />
              <code class="mr-2">f597</code>
              <span>mdi-weather-rainy</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-weather-snowy" />
              <code class="mr-2">f598</code>
              <span>mdi-weather-snowy</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-weather-snowy-rainy" />
              <code class="mr-2">f67e</code>
              <span>mdi-weather-snowy-rainy</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-weather-sunny" />
              <code class="mr-2">f599</code>
              <span>mdi-weather-sunny</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-weather-sunset" />
              <code class="mr-2">f59a</code>
              <span>mdi-weather-sunset</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-weather-sunset-down" />
              <code class="mr-2">f59b</code>
              <span>mdi-weather-sunset-down</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-weather-sunset-up" />
              <code class="mr-2">f59c</code>
              <span>mdi-weather-sunset-up</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-weather-windy" />
              <code class="mr-2">f59d</code>
              <span>mdi-weather-windy</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-weather-windy-variant" />
              <code class="mr-2">f59e</code>
              <span>mdi-weather-windy-variant</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-web" />
              <code class="mr-2">f59f</code>
              <span>mdi-web</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-webcam" />
              <code class="mr-2">f5a0</code>
              <span>mdi-webcam</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-webhook" />
              <code class="mr-2">f62f</code>
              <span>mdi-webhook</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-webpack" />
              <code class="mr-2">f72a</code>
              <span>mdi-webpack</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-wechat" />
              <code class="mr-2">f611</code>
              <span>mdi-wechat</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-weight" />
              <code class="mr-2">f5a1</code>
              <span>mdi-weight</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-weight-kilogram" />
              <code class="mr-2">f5a2</code>
              <span>mdi-weight-kilogram</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-whatsapp" />
              <code class="mr-2">f5a3</code>
              <span>mdi-whatsapp</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-wheelchair-accessibility" />
              <code class="mr-2">f5a4</code>
              <span>mdi-wheelchair-accessibility</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-white-balance-auto" />
              <code class="mr-2">f5a5</code>
              <span>mdi-white-balance-auto</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-white-balance-incandescent" />
              <code class="mr-2">f5a6</code>
              <span>mdi-white-balance-incandescent</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-white-balance-iridescent" />
              <code class="mr-2">f5a7</code>
              <span>mdi-white-balance-iridescent</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-white-balance-sunny" />
              <code class="mr-2">f5a8</code>
              <span>mdi-white-balance-sunny</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-widgets" />
              <code class="mr-2">f72b</code>
              <span>mdi-widgets</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-wifi" />
              <code class="mr-2">f5a9</code>
              <span>mdi-wifi</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-wifi-off" />
              <code class="mr-2">f5aa</code>
              <span>mdi-wifi-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-wii" />
              <code class="mr-2">f5ab</code>
              <span>mdi-wii</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-wiiu" />
              <code class="mr-2">f72c</code>
              <span>mdi-wiiu</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-wikipedia" />
              <code class="mr-2">f5ac</code>
              <span>mdi-wikipedia</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-window-close" />
              <code class="mr-2">f5ad</code>
              <span>mdi-window-close</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-window-closed" />
              <code class="mr-2">f5ae</code>
              <span>mdi-window-closed</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-window-maximize" />
              <code class="mr-2">f5af</code>
              <span>mdi-window-maximize</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-window-minimize" />
              <code class="mr-2">f5b0</code>
              <span>mdi-window-minimize</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-window-open" />
              <code class="mr-2">f5b1</code>
              <span>mdi-window-open</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-window-restore" />
              <code class="mr-2">f5b2</code>
              <span>mdi-window-restore</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-windows" />
              <code class="mr-2">f5b3</code>
              <span>mdi-windows</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-wordpress" />
              <code class="mr-2">f5b4</code>
              <span>mdi-wordpress</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-worker" />
              <code class="mr-2">f5b5</code>
              <span>mdi-worker</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-wrap" />
              <code class="mr-2">f5b6</code>
              <span>mdi-wrap</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-wrench" />
              <code class="mr-2">f5b7</code>
              <span>mdi-wrench</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-wunderlist" />
              <code class="mr-2">f5b8</code>
              <span>mdi-wunderlist</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-xaml" />
              <code class="mr-2">f673</code>
              <span>mdi-xaml</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-xbox" />
              <code class="mr-2">f5b9</code>
              <span>mdi-xbox</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-xbox-controller" />
              <code class="mr-2">f5ba</code>
              <span>mdi-xbox-controller</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-xbox-controller-off" />
              <code class="mr-2">f5bb</code>
              <span>mdi-xbox-controller-off</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-xda" />
              <code class="mr-2">f5bc</code>
              <span>mdi-xda</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-xing" />
              <code class="mr-2">f5bd</code>
              <span>mdi-xing</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-xing-box" />
              <code class="mr-2">f5be</code>
              <span>mdi-xing-box</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-xing-circle" />
              <code class="mr-2">f5bf</code>
              <span>mdi-xing-circle</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-xml" />
              <code class="mr-2">f5c0</code>
              <span>mdi-xml</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-yeast" />
              <code class="mr-2">f5c1</code>
              <span>mdi-yeast</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-yelp" />
              <code class="mr-2">f5c2</code>
              <span>mdi-yelp</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-yin-yang" />
              <code class="mr-2">f67f</code>
              <span>mdi-yin-yang</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-youtube-play" />
              <code class="mr-2">f5c3</code>
              <span>mdi-youtube-play</span>
            </v-col>
            <v-col class="my-2" cols="12" sm="4">
              <i class="mr-2 mdi text-h5 mdi-zip-box" />
              <code class="mr-2">f5c4</code>
              <span>mdi-zip-box</span>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

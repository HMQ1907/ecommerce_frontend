<script setup lang="ts">
import AppAvatarLetter from '~/components/shared/AppAvatarLetter.vue'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  team: {
    type: String,
    default: '',
  },
  people: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <v-card class="tw-h-full" color="primary">
    <v-card-title class="title tw-pt-[50px] tw-pb-[20px] d-flex justify-center tw-whitespace-normal tw-text-center">
      {{ item.data.name }}
    </v-card-title>
  </v-card>
</template>

<style lang="scss">
.node-foreign-object-div {
  background-color: blue;
  color: blue;
  border-left: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  border-right: 1px solid lightgray;
}

.avatar {
  border-radius: 100%;
  position: fixed;
  top: 0;
  left: 130px;
  margin-top: -30px;
}

.code {
  position: absolute;
  top: 12px;
  right: 12px;
}

.title {
  color: white;
}

.subtitle {
  display: flex;
  font-size: 14px;
}

.user-management {
  display: flex;
  align-items: center;
  justify-content: center;
}

.people,
.number {
  font-size: 14px;
}
</style>

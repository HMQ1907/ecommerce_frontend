<script setup>
const props = defineProps({ item: [Object, String], level: Number })
</script>

<template>
  <template v-if="level > 0">
    <v-icon class="material-icons-outlined iconClass tw-ml-1" :icon="item" size="20" stroke-width="1.5" />
  </template>
  <template v-else>
    <v-icon class="material-icons-outlined iconClass" :icon="item" size="24" stroke-width="1.5" />
  </template>
</template>

<style lang="scss">
.sidebar-menu .v-list-item__prepend > .v-icon ~ .v-list-item__spacer {
  width: 12px;
}
.sidebar-menu .v-list-item__prepend > .v-icon {
  opacity: 1;
}

.scrollnavbar .v-list-group__items .v-list-item .v-list-item__append .v-icon,
.scrollnavbar .v-list-item .v-list-item__append .v-icon {
  color: white;
  opacity: 1;
}
</style>

<template>
  <v-bottom-navigation color="primary" height="72">
    <v-btn to="/orders">
      <v-icon>mdi-square-edit-outline</v-icon>
      <span>{{ $t('menu.orderManagement') }}</span>
    </v-btn>
    <v-btn to="/notifications">
      <v-icon>mdi-bell</v-icon>
      <span>{{ $t('menu.notification') }}</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<style lang="scss">
.v-bottom-navigation {
  &__content {
    margin-bottom: 16px;
  }
}
</style>

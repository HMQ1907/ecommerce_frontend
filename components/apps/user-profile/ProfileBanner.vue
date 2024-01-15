<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { HeartIcon, PhotoIcon, UserCircleIcon, UsersIcon } from 'vue-tabler-icons'

const tab = ref(null)
const items = shallowRef([
  { tab: 'Profile', icon: UserCircleIcon, href: '/apps/user/profile' },
  { tab: 'Followers', icon: HeartIcon, href: '/apps/user/profile/followers' },
  { tab: 'Friends', icon: UsersIcon, href: '/apps/user/profile/friends' },
  { tab: 'Gallery', icon: PhotoIcon, href: '/apps/user/profile/gallery' },
])
</script>

<template>
  <v-card class="overflow-hidden" elevation="10">
    <img alt="profile" class="w-100" src="images/backgrounds/profilebg.jpg" />
    <div>
      <v-row class="mt-1">
        <v-col class="order-sm-second" cols="12" lg="4" sm="12">
          <div class="px-4 py-1">
            <v-row class="justify-center">
              <v-col class="text-center" cols="4">
                <FileDescriptionIcon size="20" />
                <h4 class="text-h4">938</h4>
                <h6 class="text-h6 font-weight-regular">Posts</h6>
              </v-col>
              <v-col class="text-center" cols="4">
                <user-circle-icon size="20" />
                <h4 class="text-h4">3,586</h4>
                <h6 class="text-h6 font-weight-regular">Followers</h6>
              </v-col>
              <v-col class="text-center" cols="4">
                <UserCheckIcon size="20" />
                <h4 class="text-h4">2,659</h4>
                <h6 class="text-h6 font-weight-regular">Following</h6>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col class="d-flex justify-center order-sml-first" cols="12" lg="4" sm="12">
          <div class="text-center top-spacer">
            <div class="avatar-border">
              <v-avatar class="userImage" size="100">
                <img alt="Mathew" src="/images/profile/user-1.jpg" width="100" />
              </v-avatar>
            </div>
            <h5 class="text-h5 mt-3">Mathew Anderson</h5>
            <span class="text-h6 font-weight-regular">Designer</span>
          </div>
        </v-col>
        <v-col class="d-flex align-center justify-center justify-lg-end order-sm-third" cols="12" lg="4">
          <div class="d-flex align-center justify-space-between px-10 py-1 gap-3">
            <v-btn class="btn-brand-facebook" icon size="x-small" variant="flat"><BrandFacebookIcon size="16" /></v-btn>
            <v-btn class="btn-brand-twitter" icon size="x-small" variant="flat"><BrandTwitterIcon size="16" /></v-btn>
            <v-btn class="btn-brand-dribbble" icon size="x-small" variant="flat"><BrandDribbbleIcon size="16" /></v-btn>
            <v-btn class="btn-brand-youtube" icon size="x-small" variant="flat"><BrandYoutubeIcon size="16" /></v-btn>
            <v-btn color="primary" variant="flat">Add to Story</v-btn>
          </div>
        </v-col>
        <v-col class="order-sm-last" md="12">
          <v-tabs v-model="tab" class="profiletab bg-grey100" color="primary" dark>
            <v-tab v-for="item in items" :key="item.tab" :to="item.href">
              <component :is="item.icon" class="mr-2" size="18" stroke-width="1.5" />
              {{ item.tab }}
            </v-tab>
          </v-tabs>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>
<style lang="scss">
.avatar-border {
  background-image: linear-gradient(rgb(80, 178, 252), rgb(244, 76, 102));
  border-radius: 50%;
  width: 110px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  .userImage {
    border: 4px solid rgb(255, 255, 255);
  }
}

.top-spacer {
  margin-top: -95px;
}

.profiletab .v-slide-group__content {
  justify-content: end;
  .v-btn--variant-text .v-btn__overlay {
    background: transparent;
  }
}

@media (max-width: 1023px) {
  .order-sm-second {
    order: 2;
  }
  .order-sml-first {
    order: 1;
  }
  .order-sm-third {
    order: 3;
  }
  .order-sm-last {
    order: 4;
  }
}

.btn-brand-facebook {
  background-color: rgb(24, 119, 242) !important;
  color: rgb(var(--v-theme-surface));
}
.btn-brand-twitter {
  background-color: rgb(29, 161, 242) !important;
  color: rgb(var(--v-theme-surface));
}
.btn-brand-dribbble {
  background-color: rgb(234, 76, 137) !important;
  color: rgb(var(--v-theme-surface));
}
.btn-brand-youtube {
  background-color: rgb(205, 32, 31) !important;
  color: rgb(var(--v-theme-surface));
}
</style>

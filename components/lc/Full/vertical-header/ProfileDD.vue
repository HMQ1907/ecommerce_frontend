<script setup lang="ts">
import {useModal} from 'vue-final-modal'
import {profileDD} from '@/_mockApis/headerData'
import AppAvatarLetter from '@/components/shared/AppAvatarLetter'
import {isEmpty} from "xe-utils";

const {signOut, data} = useAuth()

const openComponentModal = (model: any) => {
  const {open, close} = useModal({
    component: model,
    attrs: {
      clickToClose: false,
      escToClose: false,
      zIndexFn: () => 1010,
      onClosed() {
        close()
      },
    },
  })
  open()
}

const userName = computed(() => {
      if (!isEmpty(data.value.employee)) {
        return Object.keys(data.value.employee).length !== 0
            ? `${data.value.employee?.first_name} ${data.value.employee?.last_name}`
            : data.value.user.name
      } else {
        return data.value.user.name
      }
    }
)
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!-- notifications DD -->
  <!-- ---------------------------------------------- -->
  <v-menu>
    <template #activator="{ props }">
      <v-btn class="custom-hover-primary" v-bind="props" icon variant="text">
        <app-avatar-letter :name="userName"/>
      </v-btn>
    </template>
    <v-sheet elevation="10" rounded="md" width="228">
      <div class="tw-p-1">
        <div class="d-flex align-center">
          <app-avatar-letter :name="userName"/>
          <div class="ml-3">
            <h6 class="tw-text-sm tw-font-normal">{{ userName }}</h6>
            <span class="tw-text-[#00000061] tw-text-xs tw-font-normal tw-capitalize">{{ data?.roles[0].name }}</span>
          </div>
        </div>
      </div>
      <v-divider/>
      <perfect-scrollbar style="height: 80px; max-height: 240px">
        <v-list class="py-0 theme-list profile-list" lines="two">
          <v-list-item
              v-for="item in profileDD"
              :key="item.title"
              class="custom-text-primary tw-py-1"
              height="40"
              min-height="40"
              @click="openComponentModal(item.modal)"
          >
            <template #prepend>
              <v-icon size="24">{{ item.icon }}</v-icon>
            </template>
            <h6 class="tw-text-sm tw-font-normal tw-text-[#000000de]">
              {{ item.title }}
            </h6>
          </v-list-item>
        </v-list>
      </perfect-scrollbar>
      <div class="tw-px-3 tw-py-2 text-center">
        <v-btn block color="primary" variant="outlined" @click="signOut({ callbackUrl: '/auth/login' })">
          {{ $t('login.action.logout') }}
        </v-btn>
      </div>
    </v-sheet>
  </v-menu>
</template>

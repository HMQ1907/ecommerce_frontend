<script setup lang="ts">
import relativeTime from 'dayjs/plugin/relativeTime'

defineProps({
  height: {
    type: String,
    default: '600',
  },
})

const dayjs = useDayjs()
dayjs.extend(relativeTime)

const { $api } = useNuxtApp()

const notifications = ref()
const unRead = ref()
const router = useRouter()

const fetchData = () => {
  $api.notification.notifications().then((data) => {
    notifications.value = data.data
    unRead.value = data.unread_count
  })
}

const onMarkAllAsRead = () => {
  $api.notification.markAllAsReadNotification().then(() => {
    notifications.value.unread_count = 0
  })
}

const onMarkAsRead = (data: any) => {
  $api.notification.markAsReadNotification(data.id).then((data) => {
    notifications.value.read_at = data.read_at
    if (notifications.value.unread_count > 0 && data.read_at === null) {
      notifications.value.unread_count--
    }
  })

  switch (data.type) {
    case 'Modules\\Plans\\Notifications\\ServiceRequestCreatedNotification':
      router.push({ name: 'plans' })
      break
  }
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <v-sheet class="d-flex flex-column" elevation="10" :height="height" rounded="md" width="360">
    <div class="px-8 pb-4 pt-6">
      <div class="d-flex align-center justify-space-between">
        <h6 class="text-h5">{{ $t('notification.title.notification') }}</h6>
        <v-chip class="text-white" color="primary" size="small" variant="flat">
          {{ unRead }} {{ $t('notification.model.news') }}
        </v-chip>
      </div>
    </div>
    <perfect-scrollbar class="flex-grow-1">
      <v-list class="py-0 theme-list" lines="two">
        <v-list-item
          v-for="item in notifications"
          :key="item.title"
          class="py-4 px-8"
          color="primary"
          :value="item"
          @click="onMarkAsRead(item)"
        >
          <template #prepend>
            <v-avatar class="mr-3" size="48">
              <v-img :alt="item.data.icon" :src="item.data.icon || '/images/profile/default.png'" width="48" />
            </v-avatar>
          </template>
          <div class="tw-w-full items-notification">
            <p
              class="text-subtitle-1 font-weight-bold mb-1"
              :class="[item.read_at ? 'tw-text-[#65676B]' : 'black-text']"
            >
              {{ item.data.subject }}
            </p>
            <v-list-item-subtitle
              :class="[item.read_at ? 'tw-text-[#65676B]' : 'tw-text-primary tw-font-semibold font-serif']"
            >
              {{ dayjs(item.created_at).fromNow() }}
            </v-list-item-subtitle>
          </div>
        </v-list-item>
        <v-divider />
      </v-list>
    </perfect-scrollbar>
    <div class="py-4 px-6 text-center">
      <v-btn block color="primary" variant="outlined" @click="onMarkAllAsRead">
        {{ $t('notification.action.markReadAll') }}
      </v-btn>
    </div>
  </v-sheet>
</template>

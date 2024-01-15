<script setup lang="ts">
import { format } from 'date-fns'
const props = defineProps({ comments: Object })
</script>
<template>
  <div v-if="comments">
    <v-card class="mb-5 pa-5 border-light" variant="flat">
      <div v-if="comments.profile" class="d-flex gap-3 align-center">
        <v-avatar size="30">
          <img alt="avatar" :src="comments.profile.avatar" width="30" />
        </v-avatar>
        <div class="d-block d-sm-flex align-center gap-3">
          <h6 class="text-h6">{{ comments.profile?.name }}</h6>
          <span class="text-subtitle-2 opacity-50">
            <CircleIcon class="opacity-50 mr-1" fill="inherit" size="8" />
            {{ format(new Date(comments?.time), 'E, MMM d') }}
          </span>
        </div>
      </div>
      <div class="py-3 text-body-1">
        {{ comments.comment }}
      </div>
      <!---Like and comment count-->
      <div class="my-1 d-flex align-center gap-3">
        <v-tooltip text="Reply">
          <template #activator="{ props }">
            <v-btn color="secondary" icon v-bind="props" size="x-small" variant="flat">
              <ArrowBackUpIcon size="16" />
            </v-btn>
          </template>
        </v-tooltip>
      </div>
    </v-card>
    <template v-for="(reply, i) in comments.replies" :key="reply.id">
      <div class="ml-10">
        <v-card v-if="reply" class="mb-5 pa-5 border-light" variant="flat">
          <div v-if="reply.profile" class="d-flex gap-3 align-center">
            <v-avatar size="30">
              <img alt="avatar" :src="reply.profile.avatar" width="30" />
            </v-avatar>
            <div class="d-block d-sm-flex align-center gap-3">
              <h6 class="text-h6">{{ reply.profile?.name }}</h6>
              <span class="text-subtitle-2 opacity-50">
                <CircleIcon class="opacity-50 mr-1" fill="inherit" size="8" />
                {{ format(new Date(reply?.time), 'E, MMM d') }}
              </span>
            </div>
          </div>
          <div class="py-3 text-body-1">
            {{ reply.comment }}
          </div>
        </v-card>
      </div>
    </template>
  </div>
</template>
<style lang="scss" scoped>
.border-light {
  border: 1px solid rgb(var(--v-theme-grey100));
}
</style>

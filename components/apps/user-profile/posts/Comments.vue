<script setup lang="ts">
import { ref } from 'vue'
import uniqueId from 'lodash/uniqueId'
import { usePostsStore } from '@/stores/apps/userprofile/posts'

const store = usePostsStore()
const props = defineProps({
  comments: Object || Array,
  postId: String,
})
const replyValue = ref('')
const onSubmit = async (id: any, commentid: any, reply: string) => {
  const replyId = uniqueId('#REPLY_')
  const newReply = {
    id: replyId,
    profile: {
      id: uniqueId('#REPLY_'),
      avatar: props.comments?.profile.avatar,
      name: props.comments?.profile.name,
      time: 'now',
    },
    data: {
      comment: reply,
      likes: {
        like: false,
        value: 0,
      },
      replies: [],
    },
  }
  store.addReply(id, commentid, newReply)
  replyValue.value = ''
}
const showReplyBox = ref(false)
const toggleReplybox = () => {
  return (showReplyBox.value = !showReplyBox.value)
}
</script>

<template>
  <v-card class="mb-3 pa-5 border-light" variant="flat">
    <div class="d-flex gap-3 align-center">
      <v-avatar size="30">
        <img alt="avatar" :src="comments?.profile.avatar" width="30" />
      </v-avatar>
      <div class="d-block d-sm-flex align-center gap-3">
        <h6 class="text-h6">{{ comments?.profile.name }}</h6>
        <span class="text-subtitle-2 opacity-50">
          <CircleIcon class="opacity-50 mr-1" fill="inherit" size="8" />
          {{ comments?.profile.time }}
        </span>
      </div>
    </div>
    <div class="py-3 text-body-1">
      {{ comments?.data.comment }}
    </div>
    <!---Like and comment count-->
    <div class="my-1 d-flex align-center gap-3">
      <v-tooltip text="Like">
        <template #activator="{ props }">
          <v-btn color="primary" icon size="x-small" variant="flat" v-bind="props">
            <ThumbUpIcon size="16" />
          </v-btn>
        </template>
      </v-tooltip>
      <span class="text-subtitle-1 font-weight-semibold">
        {{ comments?.data && comments?.data.likes && comments?.data.likes.value }}
      </span>
      <v-tooltip text="Reply">
        <template #activator="{ props }">
          <v-btn color="secondary" icon v-bind="props" size="x-small" variant="flat" @click="toggleReplybox">
            <ArrowBackUpIcon size="16" />
          </v-btn>
        </template>
      </v-tooltip>
    </div>
  </v-card>

  <div v-if="comments?.data.replies" class="ml-10">
    <div v-for="reply in comments?.data.replies">
      <v-card class="mb-3 pa-5 border-light" variant="flat">
        <div class="d-flex gap-3 align-center">
          <v-avatar size="30">
            <img alt="avatar" :src="reply.profile.avatar" width="30" />
          </v-avatar>
          <div class="d-block d-sm-flex align-center gap-3">
            <h6 class="text-h6">{{ reply.profile.name }}</h6>
            <span class="text-subtitle-2 opacity-50">
              <CircleIcon class="opacity-50 mr-1" fill="inherit" size="8" />
              {{ reply.profile.time }}
            </span>
          </div>
        </div>
        <div class="py-3 text-body-1">
          {{ reply.data.comment }}
        </div>
        <!---Like and comment count-->
        <!-- <div class="my-1 d-flex gap-3">
                    <v-btn color="primary" variant="text" size="small" prepend-icon="mdi-thumb-up-outline">
                        {{ reply.data && reply.data.likes && reply.data.likes.value }}
                    </v-btn>
                    <v-btn color="secondary" variant="text" size="small" prepend-icon="mdi-reply" @click="toggleReplybox"> Reply </v-btn>
                </div> -->
      </v-card>
    </div>
  </div>
  <div v-if="showReplyBox" class="d-block d-sm-flex gap-3 align-center mb-5 ml-10">
    <img alt="avatar" class="flex-shrink-0 d-none d-sm-block" :src="comments?.profile.avatar" width="40" />
    <v-text-field v-model="replyValue" color="primary" hide-details label="Write Reply" variant="outlined" />
    <v-btn
      class="mt-3 mt-sm-0"
      color="secondary"
      size="large"
      variant="flat"
      @click="onSubmit(postId, comments?.id, replyValue)"
    >
      Reply
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
.border-light {
  border: 1px solid rgb(var(--v-theme-grey100));
}
</style>

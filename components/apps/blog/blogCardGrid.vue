<script setup lang="ts">
import { format } from 'date-fns'

const props = defineProps({ post: Object })

const linkTo = props.post?.title
  ?.toLowerCase()
  .replace(/ /g, '-')
  .replace(/[^\w-]+/g, '')
</script>
<template>
  <v-col cols="12" md="4" sm="4">
    <v-card class="card-hover" elevation="10" rounded="md">
      <div>
        <NuxtLink class="text-decoration-none" :to="linkTo">
          <v-img alt="post" class="rounded-t-md align-end text-right" cover height="250px" :src="post?.coverImg">
            <v-card-item>
              <v-chip class="bg-surface text-body-2 font-weight-medium" size="small" v-text="'2 min read'" />
            </v-card-item>
          </v-img>
        </NuxtLink>
        <v-avatar class="mt-n7 mx-6" size="40">
          <img alt="icon" height="40" :src="post?.author.avatar" />
        </v-avatar>
        <v-card-item class="px-6 pt-4">
          <v-chip class="text-body-2 font-weight-medium bg-grey100" size="small" v-text="post?.category" />
          <h5 class="text-h5 text-13 my-6">
            <NuxtLink class="text-decoration-none color-inherits" :to="linkTo">{{ post?.title }}</NuxtLink>
          </h5>
          <div class="d-flex align-center justify-space-between">
            <div>
              <v-avatar class="" size="18">
                <EyeIcon size="18" />
              </v-avatar>
              <span class="text-subtitle-1 ml-2" v-text="post?.view" />
              <v-avatar class="ml-4" size="18">
                <Message2Icon size="18" />
              </v-avatar>
              <span class="text-subtitle-1 ml-2" v-text="post?.comments.length" />
            </div>
            <div>
              <v-avatar size="10">
                <CircleIcon size="10" />
              </v-avatar>
              <span class="text-subtitle-2 ml-2" v-text="format(new Date(post?.createdAt), 'E, MMM d')" />
            </div>
          </div>
        </v-card-item>
      </div>
    </v-card>
  </v-col>
</template>

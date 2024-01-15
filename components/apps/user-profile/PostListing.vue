<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import PostItem from './posts/PostItem.vue'
import { usePostsStore } from '@/stores/apps/userprofile/posts'

const store = usePostsStore()

onMounted(() => {
  store.fetchPosts()
})

const getPosts: any = computed(() => {
  return store.posts
})
</script>

<template>
  <v-row class="mt-4">
    <v-col v-for="post in getPosts" :key="post.id" cols="12">
      <post-item :post="post" />
    </v-col>
  </v-row>
</template>

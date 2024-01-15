<script setup lang="ts">
import { useQueryClient } from 'vue-query'
import useGetBranches from '@/composables/use-get-branches'

const { $api } = useNuxtApp()
const queryClient = useQueryClient()

const { data } = useAuth()
const branchId = ref(data.value.branch_id)
const queryBuilder = computed(() => ({
  filters: {},
  sorts: ['-created_at'],
  page: 1,
  limit: 10,
}))
const { items, isLoading, refetch } = useGetBranches(queryBuilder, {
  staleTime: 1000 * 60 * 15,
})
const branch = computed(() => items.value.find((item: any) => item.id === branchId.value))
const changeBranch = (id: any) => {
  $api.users
    .changeBranch({
      branch_id: id,
    })
    .then(() => {
      branchId.value = id
      queryClient.invalidateQueries()
    })
}
</script>
<template>
  <!-- ---------------------------------------------- -->
  <!-- language DD -->
  <!-- ---------------------------------------------- -->
  <v-menu :close-on-content-click="false" location="bottom">
    <template #activator="{ props }">
      <v-btn color="primary" variant="text" width="160" v-bind="props">
        <img height="22" src="/images/logos/logo-shot.png" width="22" />
        {{ branch?.name }}
      </v-btn>
    </template>
    <v-sheet elevation="10" rounded="md" width="200">
      <v-list class="theme-list">
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :active="branchId == item.id"
          class="d-flex align-center"
          color="primary"
          @click="changeBranch(item.id)"
        >
          <template #prepend>
            <v-avatar size="22">
              <img :alt="item.avatar" height="22" src="/images/logos/logo-shot.png" width="22" />
            </v-avatar>
          </template>
          <v-list-item-title class="text-subtitle-1 font-weight-regular">
            {{ item.name }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-sheet>
  </v-menu>
</template>

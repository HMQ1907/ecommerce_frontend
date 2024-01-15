<template>
  <v-card elevation="10">
    <v-card-item>
      <v-textarea color="primary" name="input-7-4" placeholder="Share your thoughts" rows="5" variant="outlined" />
      <div class="d-flex">
        <v-avatar class="mr-2" color="primary" size="32">
          <PhotoIcon size="16" />
        </v-avatar>
        <v-btn class="opacity-1" color="inherit" type="upload" variant="plain">Photo / Video</v-btn>
        <v-btn class="opacity-1" color="inherit" variant="plain">
          <v-avatar class="mr-2" color="secondary" size="32">
            <NotebookIcon size="16" />
          </v-avatar>
          Article
        </v-btn>
        <v-btn class="ml-auto" color="primary" variant="flat">Post</v-btn>
      </div>
    </v-card-item>
  </v-card>
</template>

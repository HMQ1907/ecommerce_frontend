<template>
  <VCard class="mb-7 pb-5" elevation="10" flat>
    <span class="lstick" />
    <v-card-text>
      <div class="d-sm-flex align-center">
        <div>
          <h2 class="text-h5 title mb-1">To do List</h2>
          <h5 class="text-subtitle-1">Task to complete</h5>
        </div>
        <v-spacer />
        <div class="ml-auto">
          <v-chip color="secondary">
            <span class="mr-2">Total Tasks:</span>
            <v-fade-transition leave-absolute>
              <span :key="`tasks-${tasks.length}`">{{ tasks.length }}</span>
            </v-fade-transition>
          </v-chip>
        </div>
      </div>
    </v-card-text>
    <div class="px-5">
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="task" label="Add new tasks from here" variant="outlined" @keydown.enter="create">
            <v-fade-transition #append>
              <i v-if="task" class="ti-plus" @click="create" />
            </v-fade-transition>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row class="pb-4">
        <strong class="mx-4 info--text text-h6">Remaining: {{ remainingTasks }}</strong>

        <v-divider vertical />

        <strong class="mx-4 success--text text-h6">Completed: {{ completedTasks }}</strong>

        <v-spacer />

        <v-progress-circular class="mx-2" color="primary" :model-value="progress" />
      </v-row>
    </div>

    <v-card-text class="pa-0">
      <perfect-scrollbar style="height: 425px">
        <div v-for="(task, i) in tasks">
          <v-list-item :key="`${i}-${task.text}`" class="d-block">
            <div class="d-flex align-center w-100">
              <v-list-item-action class="d-flex align-center w-100">
                <v-checkbox v-model="task.done" :color="task.done ? 'success' : ''" hide-details :label="task.text" />
                <span class="mx-2">{{ task.datetext }}</span>
                <v-chip v-if="task.badgebg" class="ml-auto" :color="task.badgebg" size="x-small">
                  {{ task.badgetext }}
                </v-chip>
              </v-list-item-action>

              <v-spacer />

              <v-scroll-x-transition>
                <v-icon v-if="task.done" color="success">mdi-check</v-icon>
              </v-scroll-x-transition>
            </div>

            <div :class="[task.assigntoperson]">
              <div class="assignedto d-flex ml-7 mb-3 pl-2">
                <div v-for="tagbtn in task.tagbtns" :key="tagbtn.tagbtntitle" class="mr-2" :tagbtn="tagbtn">
                  <v-chip color="primary">
                    <v-avatar>
                      <v-img class="mr-2" :src="`/images/profile/${tagbtn.userimg}`" />
                    </v-avatar>
                    {{ tagbtn.username }}
                  </v-chip>
                </div>
              </div>
            </div>
          </v-list-item>
          <v-divider />
        </div>
      </perfect-scrollbar>
    </v-card-text>
  </VCard>
</template>

<script>
export default {
  name: 'TheTodoList',
  data: () => ({
    tasks: [
      {
        done: false,
        text: 'Schedule meeting with',
        assigntoperson: 'display-block',
        tagbtns: [
          {
            userimg: '1.jpg',
            username: 'Steave',
          },
          {
            userimg: '2.jpg',
            username: 'Jessica',
          },
        ],
        badgedisplay: 'display-none',
        badgebg: '',
        badgetext: '',
      },
      {
        done: false,
        text: 'Give Purchase report to',
        badgedisplay: 'display-block',
        badgebg: 'error',
        badgetext: 'Today',
        assigntoperson: 'display-block',
        tagbtns: [
          {
            userimg: '4.jpg',
            username: 'John',
          },
        ],
      },
      {
        done: false,
        text: 'Book flight for holiday',
        badgedisplay: 'display-none',
        assigntoperson: 'display-none',
        date: 'display-block',
        datetext: '26 jun 2017',
      },
      {
        done: false,
        text: 'Forward all tasks',
        badgedisplay: 'display-block',
        badgebg: 'warning',
        badgetext: '2 Weeks',
        assigntoperson: 'display-none',
        date: 'display-block',
        datetext: '26 jun 2017',
      },
      {
        done: false,
        text: 'Send payment today',
        badgedisplay: 'display-none',
        assigntoperson: 'display-block',
        tagbtns: [
          {
            userimg: '1.jpg',
            username: 'Steave',
          },
          {
            userimg: '2.jpg',
            username: 'Jessica',
          },
        ],
        date: 'display-none',
      },
    ],
    task: null,
  }),
  computed: {
    completedTasks() {
      return this.tasks.filter((task) => task.done).length
    },
    progress() {
      return (this.completedTasks / this.tasks.length) * 100
    },
    remainingTasks() {
      return this.tasks.length - this.completedTasks
    },
  },
  methods: {
    create() {
      this.tasks.push({
        done: false,
        text: this.task,
      })

      this.task = null
    },
  },
}
</script>

<style scoped>
.display-none {
  display: none;
}
.display-block {
  display: block;
}
</style>

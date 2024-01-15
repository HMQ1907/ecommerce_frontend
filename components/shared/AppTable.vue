<script setup lang="ts">
const props = defineProps({
  itemsSelected: {
    type: [Array, String],
    default: () => null,
  },
  headers: {
    type: Array,
    default: () => [],
  },
  items: {
    type: Array,
    default: () => [],
  },
  serverItemsLength: {
    type: Number,
    default: 0,
  },
  serverOptions: {
    type: Object,
    default: () => {},
  },
  loading: {
    type: Boolean,
    default: false,
  },
  showIndex: {
    type: Boolean,
    default: false,
  },
  fixedCheckbox: {
    type: Boolean,
    default: false,
  },
  fixedIndex: {
    type: Boolean,
    default: false,
  },
  fixedHeader: {
    type: Boolean,
    default: true,
  },
  hideFooter: {
    type: Boolean,
    default: false,
  },
  rowsPerPage: {
    type: Number,
    default: 25,
  },
  hideRowsPerPage: {
    type: Boolean,
    default: false,
  },
  themeColor: {
    type: String,
    default: 'rgb(var(--v-theme-accent))',
  },
  indexColumnWidth: {
    type: [Number, String],
    default: 35,
  },
})

const emit = defineEmits(['update:itemsSelected', 'update:serverOptions', 'clickRow'])

const veItemsSelected = computed({
  get() {
    return props.itemsSelected
  },
  set(value) {
    emit('update:itemsSelected', value)
  },
})

const veServerOptions = computed({
  get() {
    return props.serverOptions
  },
  set(value) {
    emit('update:serverOptions', value)
  },
})

const clickRow = (row: object) => {
  emit('clickRow', row)
}

const updatePage = (type: any, isDisabled: boolean) => {
  if (isDisabled) return
  veServerOptions.value.page = type === 'next' ? veServerOptions.value.page + 1 : veServerOptions.value.page - 1
}
</script>

<template>
  <EasyDataTable
    v-model:items-selected="veItemsSelected"
    v-model:server-options="veServerOptions"
    :fixed-checkbox="fixedCheckbox"
    :fixed-header="fixedHeader"
    :fixed-index="fixedIndex"
    :headers="headers"
    :hide-footer="hideFooter"
    :hide-rows-per-page="hideRowsPerPage"
    :index-column-width="indexColumnWidth"
    :items="items"
    :loading="loading"
    no-hover
    :rows-per-page="rowsPerPage"
    :server-items-length="serverItemsLength"
    :show-index="showIndex"
    :table-class-name="'customize-table'"
    :theme-color="themeColor"
    @click-row="clickRow"
  >
    <template v-for="(_, slot) of $slots" #[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>

    <template #empty-message>
      <div class="empty-data">
        <span>{{ $t('common.model.noData') }}</span>
      </div>
    </template>

    <template #pagination="{ maxPaginationNumber }">
      <div class="tw-flex tw-gap-2">
        <v-icon
          class="material-icons-outlined iconClass"
          :color="veServerOptions.page === maxPaginationNumber ? 'secondary' : ''"
          :icon="'md:chevron_left'"
          size="24"
          @click="updatePage('previous', veServerOptions.page === 1)"
        />
        <v-icon
          class="material-icons-outlined iconClass"
          :color="veServerOptions.page === 1 ? 'secondary' : ''"
          :icon="'md:chevron_right'"
          size="24"
          @click="updatePage('next', veServerOptions.page === maxPaginationNumber)"
        />
      </div>
    </template>
  </EasyDataTable>
</template>

<style lang="scss">
.empty-data {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 310px);
  width: 100%;
  color: #666;
  font-size: 13px;
  span {
    position: relative;
    top: 16px;
  }
}
</style>

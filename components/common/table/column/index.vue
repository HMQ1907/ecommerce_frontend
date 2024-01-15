<script lang="ts" setup>
import { VxeColumnProps } from 'vxe-table'

interface OldColumnType {
  ellipsis: {
    showTitle: boolean
  }
}

const props = defineProps({
  header: {
    type: Object as PropType<VxeColumnProps & OldColumnType>,
    default: () => ({}),
  },
})
</script>

<template>
  <vxe-column
    :align="header.align"
    :cell-render="header.cellRender"
    :edit-render="header.editRender"
    :field="header.field"
    :fixed="header.fixed"
    :formatter="header.formatter"
    :min-width="header.minWidth"
    show-overflow
    :sortable="header.sortBy !== undefined"
    :title="header.title"
    :tree-node="header.treeNode"
    :type="header.type"
    :visible="header.visible"
    :width="header.width"
  />
</template>
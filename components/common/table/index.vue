<script lang="ts" setup>
import { VxeTableInstance, VxeTableEvents, VxePagerEvents, VxeTablePropTypes } from 'vxe-table'
import { isEmpty, isFunction } from 'xe-utils'
import { includes } from 'lodash'
import AppVxeColumn from '@/components/common/table/column'

const props = defineProps({
  value: {
    type: Array,
    default: () => [],
  },
  headers: {
    type: Array,
    default: () => [],
  },
  items: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
  page: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    default: 20,
  },
  totalItems: {
    type: Number,
    default: 0,
  },
  sorts: {
    type: Array,
    default: () => [],
  },
  footerData: {
    type: Function,
    default: () => null,
  },
  rowKey: {
    type: String,
    default: 'id',
  },
  height: {
    type: String,
    default: 'auto',
  },
  hidePagination: {
    type: Boolean,
    default: false,
  },
  border: {
    type: [Boolean, String],
    default: true,
  },
  checkbox: {
    type: Boolean,
    default: false,
  },
  sequence: {
    type: Boolean,
    default: false,
  },
  multipleSorts: {
    type: Boolean,
    default: true,
  },
  treeConfig: {
    type: Object,
    default: () => ({}),
  },
  rowConfig: {
    type: Object,
    default: () => ({ isHover: true, keyField: 'id' }),
  },
  editConfig: {
    type: Object,
    default: () => ({}),
  },
  checkboxConfig: {
    type: Object,
    default: () => ({}),
  },
  checkboxSize: {
    type: [Number, String],
    default: 42,
  },
  sequenceSize: {
    type: [Number, String],
    default: 42,
  },
  sequenceAlign: {
    type: String,
    default: 'center',
  },
  editRules: {
    type: Object,
    default: () => ({}),
  },
  disabledCheckboxes: {
    type: Array,
    default: () => [],
  },
  keepSource: {
    type: Boolean,
    default: false,
  },
  headerCellClassNameOption: {
    type: Function,
    default: () => null,
  },
  rowClassNameOption: {
    type: Function,
    default: () => null,
  },
  cellClassNameOption: {
    type: Function,
    default: () => null,
  },
  footerCellClassNameOption: {
    type: Function,
    default: () => 'tw-font-bold tw-text-sm',
  },
})

const emit = defineEmits(['update:selected', 'update:sorts', 'update:page', 'update:page-size'])

const tableRef = ref<VxeTableInstance>()

const footerMethod: VxeTablePropTypes.FooterMethod = ({ columns, data }) => {
  return props.footerData(columns, data)
}

const selectAll = () => {
  const $table = tableRef.value
  if ($table) {
    const records = $table.getCheckboxRecords()
    const keys = records.map((e) => e[props.rowKey])
    emit('update:selected', keys)
  }
}

const selectChange = () => {
  const $table = tableRef.value
  if ($table) {
    const records = $table.getCheckboxRecords()
    const keys = records.map((e) => e[props.rowKey])
    emit('update:selected', keys)
  }
}

const sortChange: VxeTableEvents.SortChange = ({ sortList }) => {
  const sorts = sortList.map(({ field, order }) => {
    const orderBy = order === 'desc' ? '-' : ''

    return `${orderBy}${field}`
  })
  emit('update:sorts', sorts)
}

const pageChange: VxePagerEvents.PageChange = ({ currentPage, pageSize }) => {
  emit('update:page', currentPage)
  emit('update:page-size', pageSize)
}

const setAllTreeExpand = () => {
  const $table = tableRef.value
  if ($table) {
    return $table.setAllTreeExpand(true)
  }
}

const clearTreeExpand = () => {
  const $table = tableRef.value
  if ($table) {
    return $table.clearTreeExpand()
  }
}

const headerCellClassName: VxeTablePropTypes.HeaderCellClassName = ({ column }) => {
  return props.headerCellClassNameOption({ column })
}

const rowClassName: VxeTablePropTypes.RowClassName = ({ row, rowIndex }) => {
  return props.rowClassNameOption({ row, rowIndex })
}

const cellClassName: VxeTablePropTypes.CellClassName = ({ row, rowIndex, column }) => {
  return props.cellClassNameOption({ row, rowIndex, column })
}

const footerCellClassName: VxeTablePropTypes.FooterCellClassName = ({ column }) => {
  return props.footerCellClassNameOption({ column })
}

const checkboxItemDisabled = ({ row }: any) => {
  return !props.disabledCheckboxes.includes(row.id)
}

const checkboxConfigOptions = computed(() => {
  return Object.assign(props.checkboxConfig, {
    checkMethod: checkboxItemDisabled,
  })
})

const showFooter = computed(() => {
  return props.footerData.length > 0
})

const defaultSort = computed(() => {
  if (props.sorts.length) {
    const sorts = props.sorts[0].split('-').reverse()
    const field = sorts[0]
    const order = sorts.length > 1 ? 'desc' : 'asc'

    return {
      field,
      order,
    }
  }

  return undefined
})

const sortConfig = computed(() => {
  return {
    multiple: props.multipleSorts,
    trigger: 'cell',
    defaultSort: defaultSort.value,
    orders: ['desc', 'asc', null],
  }
})

const seqConfig = computed(() => {
  return {
    seqMethod({ rowIndex }: any) {
      return rowIndex + 1 + (props.page - 1) * props.pageSize
    },
  }
})

const editRulesOpts = computed(() => {
  if (isEmpty(props.editConfig)) {
    return {}
  }

  if (!isEmpty(props.editRules)) {
    return props.editRules
  }

  return Object.assign(
    {},
    ...props.headers
      .filter((e) => isFunction(e.validator))
      .map((e) => ({
        [e.key]: [
          {
            validator: e.validator,
          },
        ],
      }))
  )
})

const validate = () => {
  const $table = tableRef.value
  if ($table) {
    return $table.validate(true)
  }
}

defineExpose({
  validate,
})
</script>

<template>
  <div class="tw-flex tw-flex-col tw-w-full">
    <div class="tw-flex-grow tw-h-full data-table">
      <vxe-table
        ref="tableRef"
        :border="border"
        :cell-class-name="cellClassName"
        :checkbox-config="checkboxConfigOptions"
        :data="items"
        :edit-config="editConfig"
        :edit-rules="editRulesOpts"
        :footer-cell-class-name="footerCellClassName"
        :footer-method="footerMethod"
        :header-cell-class-name="headerCellClassName"
        :height="height"
        :keep-source="keepSource"
        :loading="loading"
        :row-class-name="rowClassName"
        :row-config="rowConfig"
        :row-id="rowKey"
        :scroll-y="{ enabled: true }"
        :seq-config="seqConfig"
        :show-footer="showFooter"
        show-overflow
        size="medium"
        :sort-config="sortConfig"
        :tree-config="treeConfig"
        @checkbox-all="selectAll"
        @checkbox-change="selectChange"
        @sort-change="sortChange"
      >
        <vxe-column v-if="checkbox" align="center" fixed="left" type="checkbox" :width="checkboxSize" />
        <vxe-column v-if="sequence" :align="sequenceAlign" fixed="left" type="seq" :width="sequenceSize" />
        <template v-for="header in headers">
          <vxe-colgroup v-if="header.children" :key="header.key" :align="header.align" :title="header.title">
            <template v-for="child in header.children">
              <vxe-colgroup v-if="child.children" :key="child.key" :align="child.align" :title="child.title">
                <template v-for="child1 in child.children">
                  <vxe-colgroup v-if="child1.children" :key="child1.key" :align="child1.align" :title="child1.title">
                    <app-vxe-column v-for="child2 in child1.children" :key="child2.key" :header="child2" />
                  </vxe-colgroup>
                  <app-vxe-column v-else :key="child1.key" :header="child1" />
                </template>
              </vxe-colgroup>
              <app-vxe-column v-else :key="child.key" :header="child" />
            </template>
          </vxe-colgroup>
          <app-vxe-column v-else :key="header.key" :header="header" />
        </template>
        <template #empty>
          <p>{{ $t('common.model.noData') }}</p>
        </template>
      </vxe-table>
    </div>
    <vxe-pager
      v-if="!hidePagination"
      border
      :current-page="page"
      icon-jump-more="vxe-icon-ellipsis-h"
      icon-jump-next="vxe-icon-arrow-double-right"
      icon-jump-prev="vxe-icon-arrow-double-left"
      icon-next-page="vxe-icon-arrow-right"
      icon-prev-page="vxe-icon-arrow-left"
      :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
      :loading="loading"
      :page-size="pageSize"
      :total="totalItems"
      @page-change="pageChange"
    >
      <template #left>
        <v-btn
          v-if="includes(Object.keys($attrs), 'onRefetch')"
          class="tw-absolute tw-z-[1] tw-left-[0px] tw-top-[0px]"
          :disabled="loading"
          icon
          variant="text"
          @click="$attrs.onRefetch"
        >
          <RefreshIcon size="20" />
        </v-btn>
        <slot name="pager-left" />
      </template>
    </vxe-pager>
  </div>
</template>

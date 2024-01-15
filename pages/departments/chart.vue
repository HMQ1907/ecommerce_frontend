<script setup lang="ts">
import { OrgChart } from 'd3-org-chart'
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { mount } from 'mount-vue-component'
import NodeContent from '@/components/departments/molecules/NodeContent.vue'

const { $api } = useNuxtApp()
const { t } = useI18n()
const route = useRoute()

const { appContext } = getCurrentInstance()
const chartReference = ref(null)
const items = ref([])

watch(items, (value) => {
  renderChart(value)
})
const svgElementContainer = ref(null)

onMounted(async () => {
  try {
    const { data } = await $api.departments.getDepartmentsChart({})
    const treeData = buildTree({ data })
    renderChart(treeData)
    chartReference.value.expandAll()
  } catch (error) {
    console.log(error)
  }
})
const buildTree = ({ data }: { data: any }) => {
  return data.map((item: { id: any; parent_id: any }) => ({
    ...item,
    id: item.id,
    parentId: item.parent_id,
  }))
}

const renderChart = (data: never[]) => {
  if (!chartReference.value) {
    chartReference.value = new OrgChart()
  }
  chartReference.value
    .container(svgElementContainer.value)
    .data(data)
    .nodeWidth(() => 320)
    .nodeHeight(() => 150)
    .childrenMargin(() => 80)
    .compactMarginBetween(() => 60)
    .svgHeight(1000)
    .initialZoom(0.4)
    .onNodeClick((d: string) => console.log(d + ' node clicked'))
    .nodeContent((d: any) => {
      const { el } = mount(NodeContent, {
        props: {
          item: d,
          team: '',
          people: '',
        },

        app: appContext.app,
      })
      return el.innerHTML
    })
    .render()
}
</script>

<template>
  <div>
    <div class="d-flex tw-justify-center tw-items-center tw-text-center">
      <img src="/images/logos/logo.png" :width="60" />
      <h4 class="tw-text-primary tw-w-[300px]">{{ $t('departments.model.titleChart') }}</h4>
    </div>
    <v-btn-toggle class="mt-3 ml-2" color="primary">
      <v-tooltip bottom color="primary">
        <template #activator="{ on, attrs }">
          <v-btn v-bind="attrs" exact small :to="{ name: 'departments' }" v-on="on">
            <v-icon small>mdi-format-list-bulleted</v-icon>
          </v-btn>
        </template>
        <span>{{ $t('department.title') }}</span>
      </v-tooltip>
      <v-tooltip bottom color="primary">
        <template #activator="{ on, attrs }">
          <v-btn v-bind="attrs" exact small :to="{ name: 'departments-chart' }" v-on="on">
            <v-icon small>mdi-sitemap-outline</v-icon>
          </v-btn>
        </template>
        <span>{{ $t('departments.model.viewChart') }}</span>
      </v-tooltip>
    </v-btn-toggle>
    <div ref="svgElementContainer" />
  </div>
</template>

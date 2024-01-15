import { VxeGlobalRendererHandles } from 'vxe-table'

const resource = 'Overtime'
const getDetail = (details: any, type: any) => {
  return details.find((detail: any) => detail.type === type.toString()) || '-'
}

export const renderer = {
  [`${resource}Detail`]: {
    renderDefault(renderOpts: VxeGlobalRendererHandles.RenderDefaultOptions, params: any) {
      const { row, column } = params
      const { props }: any = renderOpts
      const detail = getDetail(props(row).details, props(row).type) || '-'

      return <span>{detail.hrs}</span>
    },
  },
  [`${resource}Type`]: {
    renderEdit(renderOpts: VxeGlobalRendererHandles.RenderDefaultOptions, params: any) {
      const { row }: any = params
      const { props }: any = renderOpts
      return [<v-text-field type="number" />]
    },
    renderCell(renderOpts: VxeGlobalRendererHandles.RenderDefaultOptions, params: any) {
      const { row } = params
      const { props }: any = renderOpts
      const detail = getDetail(props(row).details, props(row).type) || '-'

      return [<span style={{ cursor: 'pointer' }}>{detail.hrs}</span>]
    },
  },
}

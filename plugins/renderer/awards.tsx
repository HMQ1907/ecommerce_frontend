import { VxeGlobalRendererHandles } from 'vxe-table'
import filters from '@/plugins/filters/currency'

const resource = 'Award'
export const renderer = {
  [`${resource}Amount`]: {
    renderEdit(renderOpts: VxeGlobalRendererHandles.RenderDefaultOptions, params: any) {
      const { column, row }: any = params

      return [<vxe-input type="number" v-model={row[column.field]} />]
    },
    renderCell(renderOpts: VxeGlobalRendererHandles.RenderDefaultOptions, params: any) {
      const { row } = params
      const { props }: any = renderOpts

      if (props(row).type === 'birthday' && props(row).bonus.type === 'expat') {
        return <span>{filters.currency(props(row).bonus.amount, 'LAK')}</span>
      } else {
        return <span>{filters.currency(props(row).bonus.amount, props(row).bonus.currency_code)}</span>
      }
    },
  },
}

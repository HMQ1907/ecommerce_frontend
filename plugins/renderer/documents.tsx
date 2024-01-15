import { VxeGlobalRendererHandles } from 'vxe-table'
import { VIcon } from 'vuetify/components/VIcon'

const resource = 'Document'

export const renderer = {
  [`${resource}ViewFile`]: {
    renderDefault(renderOpts: VxeGlobalRendererHandles.RenderDefaultOptions, params: any) {
      const { row }: any = params
      const { events, props }: any = renderOpts
      return (
        <div class="tw-flex tw-justify-between tw-items-center">
          <span>{props(row).title}</span>
          <VIcon onClick={() => events.click(params)}>{props(row).icon}</VIcon>
        </div>
      )
    },
  },
}

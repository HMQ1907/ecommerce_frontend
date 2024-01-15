import { get } from 'lodash'
import { VxeGlobalRendererHandles } from 'vxe-table'
import { VChip } from 'vuetify/components/VChip'
import CommonAction from '@/components/common/CommonAction'
import CommonSwitch from '@/components/common/CommonSwitch'
import CommonText from '@/components/common/CommonText'
import CommonAvatar from '@/components/common/CommonAvatar'
import CommonProfile from '@/components/common/CommonProfile'
import CommonVChip from '@/components/common/CommonVChip'

export const renderer = {
  TableChip: {
    renderDefault(renderOpts: VxeGlobalRendererHandles.RenderDefaultOptions, params: any) {
      const { row }: any = params
      const { props }: any = renderOpts
      if (props(row).title) {
        return (
          <VChip color={props(row).color} small>
            <span class={props(row).class}>{props(row).title}</span>
          </VChip>
        )
      } else {
        return <span> </span>
      }
    },
  },
  TableLink: {
    renderDefault(renderOpts: VxeGlobalRendererHandles.RenderDefaultOptions, params: any) {
      const { row, column }: any = params
      const { events }: any = renderOpts
      return (
        <a href="javascript:void(0)" onClick={() => events.click(params)}>
          {get(row, column.property)}
        </a>
      )
    },
  },
  CommonAction: {
    renderDefault(renderOpts: VxeGlobalRendererHandles.RenderDefaultOptions, params: any) {
      const { row, rowIndex }: any = params
      const { props }: any = renderOpts
      return <CommonAction actions={props(row, rowIndex).actions} />
    },
  },
  CommonSwitch: {
    renderDefault(renderOpts: VxeGlobalRendererHandles.RenderDefaultOptions, params: any) {
      const { events, props }: any = renderOpts
      return (
        <CommonSwitch
          params={params}
          properties={props}
          onChange={(row: any, value: any) => events.change(row, value)}
        />
      )
    },
  },
  CommonText: {
    renderDefault(renderOpts: VxeGlobalRendererHandles.RenderDefaultOptions, params: any) {
      const { row }: any = params
      const { events, props }: any = renderOpts
      return <CommonText properties={props(row)} onClick={() => events.click(params)} />
    },
  },
  CommonAvatar: {
    renderDefault(renderOpts: VxeGlobalRendererHandles.RenderDefaultOptions, params: any) {
      const { row }: any = params
      const { events, props }: any = renderOpts
      return (
        <CommonAvatar
          properties={props(row)}
          params={params}
          onClick={(row: any, index: any) => events.click(row, index)}
        />
      )
    },
  },
  CommonProfile: {
    renderDefault(renderOpts: VxeGlobalRendererHandles.RenderDefaultOptions, params: any) {
      const { row }: any = params
      const { events, props }: any = renderOpts
      return (
        <CommonProfile properties={props(row)} params={params} onClick={(row: any, e: any) => events.click(row, e)} />
      )
    },
  },
  CommonVChip: {
    renderDefault(renderOpts: VxeGlobalRendererHandles.RenderDefaultOptions, params: any) {
      const { row }: any = params
      const { events, props }: any = renderOpts
      return <CommonVChip properties={props(row)} params={params} onClick={(row: any) => events.click(row)} />
    },
  },
}

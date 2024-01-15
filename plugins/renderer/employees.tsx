import { VxeGlobalRendererHandles } from 'vxe-table'
import { VChip } from 'vuetify/components/VChip'
import EmployeeRoles from '@/components/users/controls/EmployeeRoles'
import filters from '@/plugins/filters/status'

const resource = 'Employee'
export const renderer = {
  [`${resource}Roles`]: {
    renderEdit(renderOpts: VxeGlobalRendererHandles.RenderDefaultOptions, params: any) {
      const { row }: any = params
      const { props }: any = renderOpts
      return [<EmployeeRoles properties={props(row)} params={params} />]
    },
    renderCell(renderOpts: VxeGlobalRendererHandles.RenderDefaultOptions, params: any) {
      const { row } = params
      const { props }: any = renderOpts
      return [
        <VChip style={{ cursor: 'pointer' }} color={filters.userTypeColor(props(row).user.roles[0].name)}>
          {props(row).user.roles[0].display_name}
        </VChip>,
      ]
    },
  },
}

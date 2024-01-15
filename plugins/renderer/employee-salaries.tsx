import { VxeGlobalRendererHandles } from 'vxe-table'
import { sumBy } from 'lodash'
import filters from '@/plugins/filters/currency'

const resource = 'EmployeeSalary'

const totalIncome = (variables: any, currentBasic: number) => {
  const totalAllowance = sumBy(variables, (item: any) => Number(item.current_value))

  return totalAllowance + currentBasic
}

const valueAllowance = (variables: any, key: number) => {
  return variables.find((item: any) => item.variable_component_id === key)?.current_value || 0
}

export const renderer = {
  [`${resource}TotalIncome`]: {
    renderDefault(renderOpts: VxeGlobalRendererHandles.RenderDefaultOptions, params: any) {
      const { row } = params
      const { props }: any = renderOpts
      const total = totalIncome(props(row).variables, props(row).currentBasic)

      return <span>{filters.currency(total, row.currency_code)}</span>
    },
  },
  [`${resource}Allowance`]: {
    renderDefault(renderOpts: VxeGlobalRendererHandles.RenderDefaultOptions, params: any) {
      const { row, column } = params
      const { props }: any = renderOpts
      const allowance = valueAllowance(props(row).variables, parseInt(column.property))

      return <span>{filters.currency(allowance, row.currency_code)}</span>
    },
  },
}

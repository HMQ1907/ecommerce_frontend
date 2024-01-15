import { VxeGlobalRendererHandles } from 'vxe-table'
import filters from '@/plugins/filters/currency'

const resource = 'Payslip'

const getComponent = (components: any, key: number) => {
  return components.find((item: any) => item.component_id === key)
}

export const renderer = {
  [`${resource}Component`]: {
    renderDefault(renderOpts: VxeGlobalRendererHandles.RenderDefaultOptions, params: any) {
      const { row, column } = params
      const { props }: any = renderOpts
      const component = getComponent(props(row).components, parseInt(column.property))

      return <span>{filters.currency(component?.total || 0, row.employee.currency_code)}</span>
    },
  },
  [`${resource}CountComponent`]: {
    renderDefault(renderOpts: VxeGlobalRendererHandles.RenderDefaultOptions, params: any) {
      const { row, column } = params
      const { props }: any = renderOpts
      const component = getComponent(props(row).components, parseInt(column.property))

      return <span>{component?.count || 0}</span>
    },
  },
  [`${resource}RetirementFund`]: {
    renderDefault(renderOpts: VxeGlobalRendererHandles.RenderDefaultOptions, params: any) {
      const { row } = params
      const { props }: any = renderOpts
      if (props(row).components?.employee?.type === 'removal') {
        return (
          <span>{filters.currency(props(row).components.salary_json.retirement_fund, row.employee.currency_code)}</span>
        )
      } else {
        return <span>{filters.currency(0, row.employee.currency_code)}</span>
      }
    },
  },
  [`${resource}TotalAward`]: {
    renderDefault(renderOpts: VxeGlobalRendererHandles.RenderDefaultOptions, params: any) {
      const { row } = params
      const { props }: any = renderOpts
      let totalAward = 0

      props(row).awards?.employee?.employeeAwards.forEach((item: any) => {
        if (
          props(row).dayjs(item.award_period).format('YYYY-MM') === props(row).dayjs().format('YYYY-MM') &&
          item.type === 'bonus'
        ) {
          totalAward += Number(item.amount)
        }
      })

      return <span>{filters.currency(totalAward, row.employee.currency_code)}</span>
    },
  },
  [`${resource}TotalAllowance`]: {
    renderDefault(renderOpts: VxeGlobalRendererHandles.RenderDefaultOptions, params: any) {
      const { row } = params
      const { props }: any = renderOpts
      let totalAllowance = 0

      props(row).awards?.employee?.employeeAwards.forEach((item: any) => {
        if (
          props(row).dayjs(item.award_period).format('YYYY-MM') === props(row).dayjs().format('YYYY-MM') &&
          item.type === 'allowance'
        ) {
          totalAllowance += Number(item.amount)
        }
      })

      return <span>{filters.currency(totalAllowance, row.employee.currency_code)}</span>
    },
  },
  [`${resource}TotalBirthday`]: {
    renderDefault(renderOpts: VxeGlobalRendererHandles.RenderDefaultOptions, params: any) {
      const { row } = params
      const { props }: any = renderOpts
      let totalAllowance = 0

      props(row).awards?.employee?.employeeAwards.forEach((item: any) => {
        if (
          props(row).dayjs(item.award_period).format('YYYY-MM') === props(row).dayjs().format('YYYY-MM') &&
          item.type === 'birthday'
        ) {
          totalAllowance += Number(item.amount)
        }
      })

      return <span>{filters.currency(totalAllowance, row.employee.currency_code)}</span>
    },
  },
}

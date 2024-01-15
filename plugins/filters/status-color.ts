import { useI18n } from 'vue-i18n'

// @ts-ignore
const filters = {
  statusColor(input: any): string {
    if (input === 100) {
      return 'success'
    } else if (input < 100 && input > 0) {
      return 'warning'
    } else if (input === 0) {
      return 'secondary'
    } else {
      return 'grey'
    }
  },

  statusPlan(input: string): string {
    const { t } = useI18n()
    switch (input) {
      case 'ready':
        return t('plans.status.ready')
      case 'in-progress':
        return t('plans.status.inProgress')
      case 'completed':
        return t('plans.status.completed')
      case 'cancelled':
        return t('plans.status.cancelled')
      case 'on-hold':
        return t('plans.status.onHold')
      case 'on-time':
        return t('plans.status.onTime')
      default:
        return 'grey'
    }
  },

  statusVehicle(input: number): string | undefined {
    const { t } = useI18n()
    switch (input) {
      case 1:
        return t('vehicles.label.active')
      case 0:
        return t('vehicles.label.inactive')
      default:
        return ''
    }
  },

  statusWarehouse(input: number): string | undefined {
    const { t } = useI18n()
    switch (input) {
      case 1:
        return t('warehouse.model.active')
      case 0:
        return t('warehouse.model.inactive')
      default:
        return ''
    }
  },

  statusTask(input: string): string {
    const { t } = useI18n()
    switch (input) {
      case 'completed':
        return t('projectTask.model.completed')
      case 'doing':
        return t('projectTask.model.doing')
      case 'todo':
        return t('projectTask.model.toDo')
      case 'incomplete':
        return t('projectTask.model.incomplete')
      default:
        return t('projectTask.model.toDo')
    }
  },

  priorityTask(input: string): string {
    const { t } = useI18n()
    switch (input) {
      case 'high':
        return t('projectTask.model.high')
      case 'medium':
        return t('projectTask.model.medium')
      case 'low':
        return t('projectTask.model.low')
      default:
        return ''
    }
  },
}
export default filters

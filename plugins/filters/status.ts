import { useI18n } from 'vue-i18n'

const filters = {
  statusColor(input: any): string {
    if (input === 0) {
      return 'tw-text-[#333]'
    } else if (input > 0 && input < 100) {
      return 'tw-text-[#FB8C00]'
    } else if (input === 100) {
      return 'tw-text-[#4CAF50]'
    } else {
      return 'tw-text-[#333]'
    }
  },
  changeStatus(input: string): string {
    switch (input) {
      case 'ready':
        return 'tw-text-[#333]'
      case 'in-progress':
        return 'tw-text-[#FB8C00]'
      case 'completed':
        return 'tw-text-[#4CAF50]'
      case 'on-time':
        return 'tw-text-[#4CAF50]'
      case 'cancelled':
        return 'tw-text-[#FF5252]'
      default:
        return 'tw-text-[#333]'
    }
  },
  userTypeColor(type: string): string {
    switch (type) {
      case 'dispatcher':
        return 'success'
      case 'sales':
        return 'warning'
      case 'customer':
        return 'info'
      default:
        return 'error'
    }
  },
  statusProgress(actualQuantity: number, planQuantity: number): number {
    return ((actualQuantity / planQuantity) * 100).toFixed(0)
  },
  price(price: any): string {
    return price ? new Intl.NumberFormat('en-US').format(price) : '0'
  },

  statusTaskColor(type: string): string {
    switch (type) {
      case 'incomplete':
        return 'error'
      case 'todo':
        return 'warning'
      case 'doing':
        return 'info'
      case 'completed':
        return 'success'
      default:
        return 'info'
    }
  },

  priorityTaskColor(type: string): string {
    switch (type) {
      case 'high':
        return 'error'
      case 'medium':
        return 'warning'
      case 'low':
        return 'info'
    }
  },

  statusProjects(input: string): string {
    const { t } = useI18n()
    switch (input) {
      case 'finished':
        return t('projects.status.finished')
      case 'in progress':
        return t('projects.status.inProgress')
      case 'on hold':
        return t('projects.status.onHold')
      case 'canceled':
        return t('projects.status.cancelled')
      default:
        return t('projects.status.notStart')
    }
  },
  statusProjectColor(input: string): string {
    switch (input) {
      case 'finished':
        return 'success'
      case 'in progress':
        return 'warning'
      case 'on hold':
        return 'info'
      case 'canceled':
        return 'error'
      default:
        return 'info'
    }
  },
  statusEmployee(status: string): string {
    switch (status) {
      case 'active':
        return 'Active'
      case 'inactive':
        return 'Inactive'
      default:
        return 'active'
    }
  },
  statusIsTax(status: number): boolean {
    switch (status) {
      case 1:
        return true
      case 0:
        return false
      default:
        return false
    }
  },
}

export default filters

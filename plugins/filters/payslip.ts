import { useI18n } from 'vue-i18n'

const filters = {
  status(status: any): string {
    const { t } = useI18n()
    switch (status) {
      case 'generated':
        return t('payslip.status.generated')
      case 'paid':
        return t('payslip.status.paid')
      default:
        return ''
    }
  },
  statusColor(status: string): string {
    switch (status) {
      case 'generated':
        return 'primary'
      case 'paid':
        return 'success'
      default:
        return ''
    }
  },
}

export default filters

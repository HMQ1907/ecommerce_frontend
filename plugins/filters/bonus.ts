import { useI18n } from 'vue-i18n'

const filters = {
  bonusType(type: string): string {
    const { t } = useI18n()
    switch (type) {
      case 'bonus':
        return t('awards.model.bonus')
      case 'allowance':
        return t('awards.model.allowance')
      case 'birthday':
        return t('awards.model.birthday')
      default:
        return ''
    }
  },
}

export default filters

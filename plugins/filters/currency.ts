const filters = {
  currency(value: any, currencyCode: string = 'LAK'): string {
    return new Intl.NumberFormat('lo-LA', {
      style: 'currency',
      currency: currencyCode,
      currencyDisplay: 'narrowSymbol',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  },
}

export default filters

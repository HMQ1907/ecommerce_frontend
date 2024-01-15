import { BaseApi } from '@/api/base'

export class DashboardAPI extends BaseApi {
  getProductDensity(params: any): Promise<any> {
    return this.get('/dashboard/products/density', { params })
  }

  getStatistics(params: any): Promise<any> {
    return this.get('/dashboard/plan/statistical', { params })
  }

  getTotalByMonth(): Promise<any> {
    return this.get('dashboard/plan/total-by-month')
  }
}

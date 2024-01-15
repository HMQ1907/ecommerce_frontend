import { BaseApi } from '@/api/base'

export class TodayPlansAPI extends BaseApi {
  getTodayPlans(params: any): Promise<any> {
    return this.get('/plans', { params })
  }
}

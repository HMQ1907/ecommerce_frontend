import { BaseApi } from '@/api/base'

export class OverViewAPI extends BaseApi {
  getTaskPercent(id: any, data: any): Promise<any> {
    return this.get(`/projects/${id}`, { data })
  }
}

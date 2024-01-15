import { BaseApi } from '@/api/base'

export class OvertimeAPI extends BaseApi {
  getOvertimes(params: any): Promise<any> {
    return this.get('/overtimes', { params })
  }

  getOvertime(id: any): Promise<any> {
    return this.get(`/overtimes/${id}`)
  }

  createOvertime(data: any): Promise<any> {
    return this.post('/overtimes', data)
  }

  updateOvertime(id: any, data: any): Promise<any> {
    return this.put(`/overtimes/${id}`, data)
  }

  deleteOvertime(id: any): Promise<any> {
    return this.delete(`/overtimes/${id}`)
  }

  bulkDeleteOvertimes(data: any): Promise<any> {
    return this.delete('/overtimes/bulk/destroy', data)
  }
}

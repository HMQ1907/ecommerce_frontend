import { BaseApi } from '@/api/base'

export class OrderAPI extends BaseApi {
  getServices(params: any): Promise<any> {
    return this.get('/service-requests', { params })
  }

  getService(id: any): Promise<any> {
    return this.get(`/service-requests/${id}`)
  }

  createService(data: any): Promise<any> {
    return this.post('/service-requests', data)
  }

  updateService(id: any, data: any): Promise<any> {
    return this.put(`/service-requests/${id}`, data)
  }

  deleteService(id: any): Promise<any> {
    return this.delete(`/service-requests/${id}`)
  }

  importServiceRequest(data: any): Promise<any> {
    return this.postDownload('/service-requests/import', data, {
      responseType: 'blob',
    })
  }
}

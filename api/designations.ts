import { BaseApi } from '@/api/base'

export class DesignationAPI extends BaseApi {
  getDesignations(params: any): Promise<any> {
    return this.get('/designations', { params })
  }

  getDesignation(id: any): Promise<any> {
    return this.get(`/designations/${id}`)
  }

  createDesignation(data: any): Promise<any> {
    return this.post('/designations', data)
  }

  updateDesignation(id: any, data: any): Promise<any> {
    return this.put(`/designations/${id}`, data)
  }

  deleteDesignation(id: any): Promise<any> {
    return this.delete(`/designations/${id}`)
  }

  bulkDeleteDesignations(data: any): Promise<any> {
    return this.delete('/designations/bulk/destroy', data)
  }
}

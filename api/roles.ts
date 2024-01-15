import { BaseApi } from '@/api/base'

export class RolesAPI extends BaseApi {
  getRoles(params: any): Promise<any> {
    return this.get('/roles', { params })
  }

  createRole(data: any): Promise<any> {
    return this.post('/roles', data)
  }

  updateRole(id: any, data: any): Promise<any> {
    return this.put(`/roles/${id}`, data)
  }

  deleteRole(id: any): Promise<any> {
    return this.delete(`/roles/${id}`)
  }
}

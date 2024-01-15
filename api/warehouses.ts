import { BaseApi } from '@/api/base'

export class WarehousesAPI extends BaseApi {
  getWarehouses(params: any): Promise<any> {
    return this.get('/warehouses', { params })
  }

  createWarehouse(data: any): Promise<any> {
    return this.post('/warehouses', data)
  }

  updateWarehouse(id: any, data: any): Promise<any> {
    return this.put(`/warehouses/${id}`, data)
  }

  deleteWarehouse(id: any): Promise<any> {
    return this.delete(`/warehouses/${id}`)
  }
}

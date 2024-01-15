import { BaseApi } from '@/api/base'

export class VehicleAPI extends BaseApi {
  getVehicles(params: any): Promise<any> {
    return this.get('/vehicles', { params })
  }

  createVehicle(data: any): Promise<any> {
    return this.post('/vehicles', data)
  }

  updateVehicle(id: any, data: any): Promise<any> {
    return this.put(`/vehicles/${id}`, data)
  }

  deleteVehicle(id: any): Promise<any> {
    return this.delete(`/vehicles/${id}`)
  }
}

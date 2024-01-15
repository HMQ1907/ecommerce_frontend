import { BaseApi } from '@/api/base'

export class ShipsAPI extends BaseApi {
  getShips(params: any): Promise<any> {
    return this.get('/ships', { params })
  }

  createShip(data: any): Promise<any> {
    return this.post('/ships', data)
  }

  updateShip(id: any, data: any): Promise<any> {
    return this.put(`/ships/${id}`, data)
  }

  deleteShip(id: any): Promise<any> {
    return this.delete(`/ships/${id}`)
  }
}

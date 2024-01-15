import { BaseApi } from '@/api/base'

export class DeviceAPI extends BaseApi {
  createDevice(data: any): Promise<any> {
    return this.post('/devices', data)
  }

  deleteDevice(data: any): Promise<any> {
    return this.delete('/devices', { data })
  }
}

import { BaseApi } from '@/api/base'

export class VietNamZoneAPI extends BaseApi {
  getProvinces(params: any): Promise<any> {
    return this.get('/public/provinces', { params })
  }

  getDistricts(params: any): Promise<any> {
    return this.get('/public/districts', { params })
  }

  getWards(params: any): Promise<any> {
    return this.get('/public/wards', { params })
  }
}

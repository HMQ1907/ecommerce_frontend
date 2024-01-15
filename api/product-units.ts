import { BaseApi } from '@/api/base'

export class ProductUnitsAPI extends BaseApi {
  getUnits(params: any): Promise<any> {
    return this.get('/products/units', { params })
  }
}

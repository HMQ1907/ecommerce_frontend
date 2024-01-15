import { BaseApi } from '@/api/base'

export class BranchAPI extends BaseApi {
  getBranches(params: any): Promise<any> {
    return this.get('/branches', { params })
  }
}

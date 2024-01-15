import { BaseApi } from '@/api/base'

export class ProfileAPI extends BaseApi {
  updateProfile(data: any): Promise<any> {
    return this.post('/profile', data)
  }

  changePassword(data: any): Promise<any> {
    return this.put('/password', data)
  }
}

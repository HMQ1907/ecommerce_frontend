import { BaseApi } from '@/api/base'

export class AuthAPI extends BaseApi {
  forgot(data: any): Promise<any> {
    return this.post('/auth/password/email', data)
  }

  reset(data: any): Promise<any> {
    return this.post('/auth/password/reset', data)
  }

  profile(): Promise<any> {
    return this.get('/auth/user')
  }
}

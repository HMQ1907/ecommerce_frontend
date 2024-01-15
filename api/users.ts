import { BaseApi } from '@/api/base'

export class UsersAPI extends BaseApi {
  getUsers(params: any): Promise<any> {
    return this.get('/users', { params })
  }

  createUser(data: any): Promise<any> {
    return this.post('/users', data)
  }

  updateUser(id: any, data: any): Promise<any> {
    return this.put(`/users/${id}`, data)
  }

  deleteUser(id: any): Promise<any> {
    return this.delete(`/users/${id}`)
  }

  changeBranch(data: any): Promise<any> {
    return this.post('/current-branch', data)
  }
}

import { BaseApi } from '@/api/base'

export class SolutionsAPI extends BaseApi {
  getSolutions(params: any): Promise<any> {
    return this.get('/solutions', { params })
  }

  createSolution(data: any): Promise<any> {
    return this.post('/solutions', data)
  }

  updateSolution(id: any, data: any): Promise<any> {
    return this.put(`/solutions/${id}`, data)
  }
}

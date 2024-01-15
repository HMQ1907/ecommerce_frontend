import { BaseApi } from '@/api/base'

export class TerminationAPI extends BaseApi {
  getEmployeeTerminations(params: any): Promise<any> {
    return this.get('/employee-terminations', { params })
  }

  getEmployeeTermination(id: any): Promise<any> {
    return this.get(`/employee-terminations/${id}`)
  }

  createEmployeeTermination(data: any): Promise<any> {
    return this.post('/employee-terminations', data)
  }

  updateEmployeeTermination(id: any, data: any): Promise<any> {
    return this.put(`/employee-terminations/${id}`, data)
  }

  deleteEmployeeTermination(id: any): Promise<any> {
    return this.delete(`/employee-terminations/${id}`)
  }

  bulkDeleteEmployeeTerminations(data: any): Promise<any> {
    return this.delete('/employee-terminations/bulk/destroy', data)
  }
}

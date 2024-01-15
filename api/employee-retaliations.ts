import { BaseApi } from '@/api/base'

export class EmployeeRetaliationsAPI extends BaseApi {
  getEmployeeRetaliations(params: any): Promise<any> {
    return this.get('/employee-retaliations', { params })
  }

  getEmployeeRetaliation(id: any): Promise<any> {
    return this.get(`/employee-retaliations/${id}`)
  }

  createEmployeeRetaliation(data: any): Promise<any> {
    return this.post('employee-retaliations', data)
  }

  updateEmployeeRetaliation(id: any, data: any): Promise<any> {
    return this.put(`employee-retaliations/${id}`, data)
  }

  deleteEmployeeRetaliation(id: any): Promise<any> {
    return this.delete(`employee-retaliations/${id}`)
  }

  exportRetaliation(params: any): Promise<any> {
    return this.get('/employee-retaliations/export', { responseType: 'blob', params })
  }
}

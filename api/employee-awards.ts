import { BaseApi } from '@/api/base'

export class EmployeeAwardAPI extends BaseApi {
  getEmployeeAwards(params: any): Promise<any> {
    return this.get('/employee-awards', { params })
  }

  getEmployeeAward(id: any): Promise<any> {
    return this.get(`/employee-awards/${id}`)
  }

  getEmployeeOfAwards(id: any): Promise<any> {
    return this.get(`/employee-awards/employee-of-award/${id}`)
  }

  createEmployeeAward(data: any): Promise<any> {
    return this.post('employee-awards', data)
  }

  updateEmployeeAward(id: any, data: any): Promise<any> {
    return this.put(`employee-awards/${id}`, data)
  }

  deleteAward(id: any): Promise<any> {
    return this.delete(`employee-awards/${id}`)
  }

  bulkDeleteAwards(data: any): Promise<any> {
    return this.delete('employee-awards/bulk/destroy', data)
  }

  deleteEmployeeAward(id: any): Promise<any> {
    return this.delete(`/employee-awards/delete-employee-award/${id}`)
  }

  bulkDeleteEmployeeAwards(data: any): Promise<any> {
    return this.delete('employee-awards/bulk/delete-employee-award', data)
  }

  exportEmployeeAwards(params: any): Promise<any> {
    return this.get('/employee-awards/export', {
      responseType: 'blob',
      params,
    })
  }
}

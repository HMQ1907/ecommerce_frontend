import { BaseApi } from '@/api/base'

export class EmployeesAPI extends BaseApi {
  getEmployees(params: any): Promise<any> {
    return this.get('/employees', { params })
  }

  getEmployee(id: any): Promise<any> {
    return this.get(`/employees/${id}`)
  }

  createEmployee(data: any): Promise<any> {
    return this.post('/employees', data)
  }

  updateEmployee(id: any, data: any): Promise<any> {
    return this.post(`/employees/${id}`, data)
  }

  updatePersonal(id: any, data: any): Promise<any> {
    return this.put(`/employees/${id}/personal`, data)
  }

  updateRoles(id: any, data: any): Promise<any> {
    return this.post(`/users/${id}/roles`, data)
  }

  deleteEmployee(id: any): Promise<any> {
    return this.delete(`/employees/${id}`)
  }

  updateBankAccount(id: any, data: any): Promise<any> {
    return this.put(`/employees/${id}/bank-account`, data)
  }

  updateCompany(id: any, data: any): Promise<any> {
    return this.put(`/employees/${id}/company`, data)
  }

  exportSalaryReport(params: any): Promise<any> {
    return this.get('/employees/export/report/salary', {
      responseType: 'blob',
      params,
    })
  }

  statistics(params: any): Promise<any> {
    return this.get('/employees/statistic', { params })
  }

  reportSalary(params: any): Promise<any> {
    return this.get('/employees/report/salary', { params })
  }

  exportSalary(params: any): Promise<any> {
    return this.get('reports/salary/export', {
      responseType: 'blob',
      params,
    })
  }

  exportEmployeeRecord(params: any): Promise<any> {
    return this.get('report/lao-record', {
      responseType: 'blob',
      params,
    })
  }
}

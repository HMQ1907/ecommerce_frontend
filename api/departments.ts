import { BaseApi } from '@/api/base'

export class DepartmentAPI extends BaseApi {
  getDepartments(params: any): Promise<any> {
    return this.get('/departments', { params })
  }

  getDepartmentsChart(params: any): Promise<any> {
    return this.get('/departments/overview-chart', { params })
  }

  getDepartment(id: any, params: any): Promise<any> {
    return this.get(`/departments/${id}`, { params })
  }

  createDepartment(data: any): Promise<any> {
    return this.post('/departments', data)
  }

  updateDepartment(id: any, data: any): Promise<any> {
    return this.put(`/departments/${id}`, data)
  }

  deleteDepartment(id: any): Promise<any> {
    return this.delete(`/departments/${id}`)
  }

  exportSalaryReport(params: any): Promise<any> {
    return this.get('/departments/export/salary-report', {
      responseType: 'blob',
      params,
    })
  }

  exportRemunerationReport(params: any): Promise<any> {
    return this.get('/departments/export/remuneration', {
      responseType: 'blob',
      params,
    })
  }

  exportGenderReport(params: any): Promise<any> {
    return this.get('departments/export/gender', {
      responseType: 'blob',
      params,
    })
  }
}

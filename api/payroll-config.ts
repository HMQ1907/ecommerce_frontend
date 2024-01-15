import { BaseApi } from '@/api/base'

export class PayrollConfigAPI extends BaseApi {
  getEmployeeSalaries(params: any): Promise<any> {
    return this.get('/employee-salaries', { params })
  }

  getEmployeeSalary(id: number, params: any): Promise<any> {
    return this.get(`/employee-salaries/${id}`, { params })
  }

  createEmployeeSalary(data: any): Promise<any> {
    return this.post('/employee-salaries', data)
  }

  updateEmployeeSalary(id: any, data: any): Promise<any> {
    return this.put(`/employee-salaries/${id}`, data)
  }

  getMainAllowances(): Promise<any> {
    return this.get('/salary-components/allowances')
  }

  getSalaryComponents(params: any): Promise<any> {
    return this.get('/salary-components', { params })
  }

  getPayslips(params: any): Promise<any> {
    return this.get('/payslips', { params })
  }

  generatePayslip(data: any): Promise<any> {
    return this.post('/payslips/generate', data)
  }

  updatePayslip(id: any, data: any): Promise<any> {
    return this.put(`/payslips/${id}`, data)
  }

  async payPayslips(data: any) {
    return await this.post('/payslips/pay', data)
  }

  async sendMailPayslips(data: any) {
    return await this.post('/payslips/send-mail', data)
  }

  async importPayslips(data: any) {
    return await this.postDownload('/payslips/import', data, {
      responseType: 'blob',
    })
  }
}

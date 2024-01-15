import { BaseApi } from '@/api/base'

export class EmployeeTransfersAPI extends BaseApi {
  getEmployeeTransfers(params: any): Promise<any> {
    return this.get('/employee-transfers', { params })
  }

  getEmployeeTransfer(id: any): Promise<any> {
    return this.get(`/employee-transfers/${id}`)
  }

  createEmployeeTransfer(data: any): Promise<any> {
    return this.post('employee-transfers', data)
  }

  updateEmployeeTransfer(id: any, data: any): Promise<any> {
    return this.put(`employee-transfers/${id}`, data)
  }

  deleteEmployeeTransfer(id: any): Promise<any> {
    return this.delete(`employee-transfers/${id}`)
  }
}

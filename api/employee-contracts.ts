import { BaseApi } from '@/api/base'

export class EmployeeContractsAPI extends BaseApi {
  createEmployeeContract(data: any): Promise<any> {
    return this.post('/employee-contracts', data)
  }

  getEmployeeContractByEmployeeId(employeeId: any): Promise<any> {
    return this.get(`/employee-contracts/employee/${employeeId}`)
  }

  getEmployeeContractFiles(id: any, params: any): Promise<any> {
    return this.get(`/employee-contracts/${id}/files`, { params })
  }

  updateEmployeeContract(id: any, data: any): Promise<any> {
    return this.post(`/employee-contracts/${id}`, data)
  }

  deleteEmployeeContract(id: any): Promise<any> {
    return this.delete(`/employee-contracts/${id}`)
  }

  deleteEmployeeContractFiles(id: any, fileId: any): Promise<any> {
    return this.delete(`/employee-contracts/${id}/file/${fileId}`)
  }

  getEmployeeContractByType(params: any): Promise<any> {
    return this.get('/employee-contracts/employee-by-type', { params })
  }
}

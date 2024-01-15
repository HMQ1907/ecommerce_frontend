import { BaseApi } from '@/api/base'

export class CustomerAPI extends BaseApi {
  getCustomers(params: any): Promise<any> {
    return this.get('/customers', { params })
  }

  getCustomer(id: any): Promise<any> {
    return this.get(`/customers/${id}`)
  }

  getBestCustomer(params: any): Promise<any> {
    return this.get('/dashboard/customers/statistical', params)
  }

  createCustomer(data: any): Promise<any> {
    return this.post('/customers', data)
  }

  updateCustomer(id: any, data: any): Promise<any> {
    return this.put(`/customers/${id}`, data)
  }

  getSupplierLates(params: any): Promise<any> {
    return this.get('/dashboard/customers/late')
  }

  deleteCustomer(id: any): Promise<any> {
    return this.delete(`/customers/${id}`)
  }
}

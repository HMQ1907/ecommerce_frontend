import { BaseApi } from '@/api/base'

export class ProductsAPI extends BaseApi {
  getProducts(params: any): Promise<any> {
    return this.get('/products', { params })
  }

  getProduct(id: number): Promise<any> {
    return this.get(`/products/${id}`)
  }

  createProduct(data: any): Promise<any> {
    return this.post('/products', data)
  }

  updateProduct(id: any, data: any): Promise<any> {
    return this.put(`/products/${id}`, data)
  }

  deleteProduct(id: any): Promise<any> {
    return this.delete(`/products/${id}`)
  }

  updateStatus(id: any, data: any): Promise<any> {
    return this.put(`/products/${id}/status`, data)
  }
}

import { BaseApi } from '@/api/base'

export class ProductCategoriesAPI extends BaseApi {
  getCategories(params: any): Promise<any> {
    return this.get('/products/categories', { params })
  }

  getProjectCategories(params: any): Promise<any> {
    return this.get('/project-categories', { params })
  }

  deleteCategory(id: any): Promise<any> {
    return this.delete(`/project-categories/${id}`)
  }

  createCategory(data: any): Promise<any> {
    return this.post('/project-categories', data)
  }

  updateCategory(id: any, data: any): Promise<any> {
    return this.put(`/project-categories/${id}`, data)
  }

  getTaskCategories(params: any): Promise<any> {
    return this.get('/task-categories', { params })
  }

  deleteTaskCategory(id: any): Promise<any> {
    return this.delete(`/task-categories/${id}`)
  }

  createTaskCategory(data: any): Promise<any> {
    return this.post('/task-categories', data)
  }

  updateTaskCategory(id: any, data: any): Promise<any> {
    return this.put(`/task-categories/${id}`, data)
  }
}

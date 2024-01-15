import { BaseApi } from '@/api/base'

export class TaskCategoriesAPI extends BaseApi {
  getTaskCategories(params: any): Promise<any> {
    return this.get('/task-categories', { params })
  }

  getTaskCategory(id: number): Promise<any> {
    return this.get(`/task-categories/${id}`)
  }

  createTaskCategory(data: any): Promise<any> {
    return this.post('/task-categories', data)
  }

  updateTaskCategory(id: any, data: any): Promise<any> {
    return this.put(`/task-categories/${id}`, data)
  }

  deleteTaskCategory(id: any): Promise<any> {
    return this.delete(`/task-categories/${id}`)
  }
}

import { BaseApi } from '@/api/base'

export class TasksAPI extends BaseApi {
  getTasks(params: any): Promise<any> {
    return this.get('/tasks', { params })
  }

  getTasksGantt(params: any): Promise<any> {
    return this.get('/tasks/gantt', { params })
  }

  getTask(id: number): Promise<any> {
    return this.get(`/tasks/${id}`)
  }

  createTask(data: any): Promise<any> {
    return this.post('/tasks', data)
  }

  updateTask(id: any, data: any): Promise<any> {
    return this.put(`/tasks/${id}`, data)
  }

  deleteTask(id: any): Promise<any> {
    return this.delete(`/tasks/${id}`)
  }
}

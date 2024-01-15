import { BaseApi } from '@/api/base'

export class ProjectTasksAPI extends BaseApi {
  getProjectTasks(params: any): Promise<any> {
    return this.get('/tasks', { params })
  }

  getProjectTask(id: number): Promise<any> {
    return this.get(`/tasks/${id}`)
  }

  createProjectTask(data: any): Promise<any> {
    return this.post('/tasks', data)
  }

  updateProjectTask(id: any, data: any): Promise<any> {
    return this.put(`/tasks/${id}`, data)
  }

  updateStatusProjectTask(id: any, data: any): Promise<any> {
    return this.post(`/tasks/${id}/update-status`, data)
  }

  deleteProjectTask(id: any): Promise<any> {
    return this.delete(`/tasks/${id}`)
  }

  getComments(id: number): Promise<any> {
    return this.get(`/tasks/${id}/comments`)
  }

  createComment(id: number, data: any): Promise<any> {
    return this.post(`/tasks/${id}/comments`, data)
  }

  getActivities(id: number): Promise<any> {
    return this.get(`/tasks/${id}/activities`)
  }
}

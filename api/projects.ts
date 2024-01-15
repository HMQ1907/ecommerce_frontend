import { BaseApi } from '@/api/base'

export class ProjectsAPI extends BaseApi {
  getProjects(params: any): Promise<any> {
    return this.get('/projects', { params })
  }

  createProject(data: any): Promise<any> {
    return this.post('/projects', data)
  }

  updateProject(id: any, data: any): Promise<any> {
    return this.put(`/projects/${id}`, data)
  }

  updateStatus(id: any, data: any): Promise<any> {
    return this.post(`/projects/${id}/update-status`, data)
  }

  deleteProject(id: any): Promise<any> {
    return this.delete(`/projects/${id}`)
  }
}

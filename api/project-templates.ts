import { BaseApi } from '@/api/base'

export class ProjectTemplatesAPI extends BaseApi {
  getProjectTemplates(params: any): Promise<any> {
    return this.get('/project-templates', { params })
  }

  createProjectTemplate(data: any): Promise<any> {
    return this.post('/project-templates', data)
  }

  updateProjectTemplate(id: any, data: any): Promise<any> {
    return this.put(`/project-templates/${id}`, data)
  }

  deleteProjectTemplate(id: any): Promise<any> {
    return this.delete(`/project-templates/${id}`)
  }
}

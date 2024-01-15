import { BaseApi } from '@/api/base'

export class ProjectTemplateTasksAPI extends BaseApi {
  getProjectTemplateTasks(id: number, params: any): Promise<any> {
    return this.get(`/project-templates/${id}/template-tasks`, { params })
  }

  getProjectTemplateTask(projectTemplateId: number, id: number): Promise<any> {
    return this.get(`/project-templates/${projectTemplateId}/template-tasks/${id}`)
  }

  createProjectTemplateTask(id: number, data: any): Promise<any> {
    return this.post(`/project-templates/${id}/template-tasks`, data)
  }

  updateProjectTemplateTask(projectTemplateId: number, id: any, data: any): Promise<any> {
    return this.put(`/project-templates/${projectTemplateId}/template-tasks/${id}`, data)
  }

  deleteProjectTemplateTask(projectTemplateId: number, id: any): Promise<any> {
    return this.delete(`/project-templates/${projectTemplateId}/template-tasks/${id}`)
  }
}

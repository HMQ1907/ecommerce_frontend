import { BaseApi } from '@/api/base'

export class TemplateMembersAPI extends BaseApi {
  getTemplateMembers(id: any, data: any): Promise<any> {
    return this.get(`/project-templates/${id}/members`, { data })
  }

  createTemplateMembers(id: any, data: any): Promise<any> {
    return this.post(`/project-templates/${id}/members`, data)
  }

  deleteTemplateMembers(id: any, data: any): Promise<any> {
    return this.post(`/project-templates/${id}/members/delete`, data)
  }
}

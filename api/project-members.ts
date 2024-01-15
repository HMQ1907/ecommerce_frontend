import { BaseApi } from '@/api/base'

export class ProjectMembersAPI extends BaseApi {
  getProjectMembers(id: any, params: any): Promise<any> {
    return this.get(`/projects/${id}`, { params })
  }
}

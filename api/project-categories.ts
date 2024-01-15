import { BaseApi } from '@/api/base'

export class ProjectCategoriesAPI extends BaseApi {
  getProjectCategories(params: any): Promise<any> {
    return this.get('/project-categories', { params })
  }
}

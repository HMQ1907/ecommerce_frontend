import { BaseApi } from '@/api/base'

export class PermissionAPI extends BaseApi {
  getPermissions(params: any): Promise<any> {
    return this.get('/permissions', { params })
  }

  getModulePermissions(params: any): Promise<any> {
    return this.get('/module-permissions', { params })
  }
}

import { BaseApi } from '@/api/base'

export class NotificationAPI extends BaseApi {
  notifications(): Promise<any> {
    return this.get('/notifications')
  }

  markAllAsReadNotification(): Promise<any> {
    return this.get('/notifications/mark-all-as-read')
  }

  markAsReadNotification(id: any): Promise<any> {
    return this.get(`/notifications/mark-as-read/${id}`)
  }
}

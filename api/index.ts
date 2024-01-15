import { AxiosInstance } from 'axios'
import { AuthAPI } from '@/api/auth'
import { NotificationAPI } from '@/api/notification'
import { EmployeesAPI } from '@/api/employees'
import { RolesAPI } from '@/api/roles'
import { PermissionAPI } from '@/api/permission'
import { VietNamZoneAPI } from '@/api/vietnam-zone'
import { DashboardAPI } from '@/api/dashboard'
import { ProfileAPI } from '@/api/profile'
import { DeviceAPI } from '@/api/device'
import { UsersAPI } from '@/api/users'

export class Api<T extends unknown> {
  public readonly auth: AuthAPI
  public readonly roles: RolesAPI
  public readonly permission: PermissionAPI
  public readonly notification: NotificationAPI
  public readonly employees: EmployeesAPI
  public readonly vietnamZone: VietNamZoneAPI
  public readonly dashboard: DashboardAPI
  public readonly profile: ProfileAPI
  public readonly device: DeviceAPI
  public readonly users: UsersAPI

  constructor(axios: AxiosInstance) {
    this.auth = new AuthAPI(axios)
    this.roles = new RolesAPI(axios)
    this.permission = new PermissionAPI(axios)
    this.notification = new NotificationAPI(axios)
    this.employees = new EmployeesAPI(axios)
    this.roles = new RolesAPI(axios)
    this.vietnamZone = new VietNamZoneAPI(axios)
    this.vietnamZone = new VietNamZoneAPI(axios)
    this.dashboard = new DashboardAPI(axios)
    this.profile = new ProfileAPI(axios)
    this.device = new DeviceAPI(axios)
    this.users = new UsersAPI(axios)
  }
}

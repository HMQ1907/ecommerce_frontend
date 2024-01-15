import { AxiosInstance } from 'axios'
import { AuthAPI } from '@/api/auth'
import { VehicleAPI } from '@/api/vehicle'
import { ProductsAPI } from '@/api/products'
import { NotificationAPI } from '@/api/notification'
import { EmployeesAPI } from '@/api/employees'
import { TodayPlansAPI } from '@/api/today-plans'
import { ShipsAPI } from '@/api/ships'
import { RolesAPI } from '@/api/roles'
import { OrderAPI } from '@/api/orders'
import { CustomerAPI } from '@/api/customers'
import { PermissionAPI } from '@/api/permission'
import { VietNamZoneAPI } from '@/api/vietnam-zone'
import { ProductUnitsAPI } from '@/api/product-units'
import { ProductCategoriesAPI } from '@/api/product-categories'
import { WarehousesAPI } from '@/api/warehouses'
import { PlansAPI } from '@/api/plans'
import { SolutionsAPI } from '@/api/solutions'
import { DashboardAPI } from '@/api/dashboard'
import { ProfileAPI } from '@/api/profile'
import { DeviceAPI } from '@/api/device'
import { ReportsAPI } from '@/api/reports'
import { TemplateMembersAPI } from '@/api/template-members'
import { UsersAPI } from '@/api/users'
import { AttendanceAPI } from '@/api/attendance'
import { ProjectTemplatesAPI } from '@/api/project-templates'
import { ProjectCategoriesAPI } from '@/api/project-categories'
import { TasksAPI } from '@/api/tasks'
import { PayrollConfigAPI } from '@/api/payroll-config'
import { ProjectsAPI } from '@/api/projects'
import { OverViewAPI } from '@/api/over-view'
import { ProjectTemplateTasksAPI } from '@/api/project-template-tasks'
import { TaskCategoriesAPI } from '@/api/task-categories'
import { ProjectTasksAPI } from '@/api/project-task'
import { ProjectMembersAPI } from '@/api/project-members'
import { DesignationAPI } from '@/api/designations'
import { BranchAPI } from '@/api/branches'
import { DepartmentAPI } from '@/api/departments'
import { EmployeeContractsAPI } from '@/api/employee-contracts'
import { EmployeeTransfersAPI } from '@/api/employee-transfers'
import { TerminationAPI } from '@/api/terminations'
import { DocumentAPI } from '@/api/documents'
import { EmployeeAwardAPI } from '@/api/employee-awards'
import { OvertimeAPI } from '@/api/overtimes'
import { EmployeeRetaliationsAPI } from '@/api/employee-retaliations'

export class Api<T extends unknown> {
  public readonly auth: AuthAPI
  public readonly vehicle: VehicleAPI
  public readonly products: ProductsAPI
  public readonly roles: RolesAPI
  public readonly permission: PermissionAPI
  public readonly notification: NotificationAPI
  public readonly employees: EmployeesAPI
  public readonly todayPlans: TodayPlansAPI
  public readonly ships: ShipsAPI
  public readonly warehouses: WarehousesAPI
  public readonly orders: OrderAPI
  public readonly vietnamZone: VietNamZoneAPI
  public readonly customers: CustomerAPI
  public readonly plans: PlansAPI
  public readonly solutions: SolutionsAPI
  public readonly productUnits: ProductUnitsAPI
  public readonly productCategories: ProductCategoriesAPI
  public readonly dashboard: DashboardAPI
  public readonly profile: ProfileAPI
  public readonly device: DeviceAPI
  public readonly reports: ReportsAPI
  public readonly templateMembers: TemplateMembersAPI
  public readonly users: UsersAPI
  public readonly attendance: AttendanceAPI
  public readonly projectTemplates: ProjectTemplatesAPI
  public readonly projectCategories: ProjectCategoriesAPI
  public readonly tasks: TasksAPI
  public readonly payrollConfig: PayrollConfigAPI
  public readonly projects: ProjectsAPI
  public readonly overView: OverViewAPI
  public readonly projectTemplateTasks: ProjectTemplateTasksAPI
  public readonly taskCategories: TaskCategoriesAPI
  public readonly projectTasks: ProjectTasksAPI
  public readonly projectMembers: ProjectMembersAPI
  public readonly designations: DesignationAPI
  public readonly branches: BranchAPI
  public readonly departments: DepartmentAPI
  public readonly employeeContracts: EmployeeContractsAPI
  public readonly employeeTransfers: EmployeeTransfersAPI
  public readonly terminations: TerminationAPI
  public readonly documents: DocumentAPI
  public readonly employeeAwards: EmployeeAwardAPI
  public readonly overtimes: OvertimeAPI
  public readonly employeeRetaliations: EmployeeRetaliationsAPI

  constructor(axios: AxiosInstance) {
    this.auth = new AuthAPI(axios)
    this.vehicle = new VehicleAPI(axios)
    this.products = new ProductsAPI(axios)
    this.roles = new RolesAPI(axios)
    this.permission = new PermissionAPI(axios)
    this.notification = new NotificationAPI(axios)
    this.employees = new EmployeesAPI(axios)
    this.todayPlans = new TodayPlansAPI(axios)
    this.ships = new ShipsAPI(axios)
    this.warehouses = new WarehousesAPI(axios)
    this.roles = new RolesAPI(axios)
    this.orders = new OrderAPI(axios)
    this.vietnamZone = new VietNamZoneAPI(axios)
    this.customers = new CustomerAPI(axios)
    this.plans = new PlansAPI(axios)
    this.solutions = new SolutionsAPI(axios)
    this.vietnamZone = new VietNamZoneAPI(axios)
    this.productUnits = new ProductUnitsAPI(axios)
    this.productCategories = new ProductCategoriesAPI(axios)
    this.dashboard = new DashboardAPI(axios)
    this.profile = new ProfileAPI(axios)
    this.device = new DeviceAPI(axios)
    this.reports = new ReportsAPI(axios)
    this.templateMembers = new TemplateMembersAPI(axios)
    this.users = new UsersAPI(axios)
    this.attendance = new AttendanceAPI(axios)
    this.projectTemplates = new ProjectTemplatesAPI(axios)
    this.projectCategories = new ProjectCategoriesAPI(axios)
    this.tasks = new TasksAPI(axios)
    this.payrollConfig = new PayrollConfigAPI(axios)
    this.projects = new ProjectsAPI(axios)
    this.overView = new OverViewAPI(axios)
    this.projectTemplateTasks = new ProjectTemplateTasksAPI(axios)
    this.taskCategories = new TaskCategoriesAPI(axios)
    this.projectTasks = new ProjectTasksAPI(axios)
    this.projectMembers = new ProjectMembersAPI(axios)
    this.designations = new DesignationAPI(axios)
    this.branches = new BranchAPI(axios)
    this.departments = new DepartmentAPI(axios)
    this.employeeContracts = new EmployeeContractsAPI(axios)
    this.terminations = new TerminationAPI(axios)
    this.documents = new DocumentAPI(axios)
    this.employeeTransfers = new EmployeeTransfersAPI(axios)
    this.employeeAwards = new EmployeeAwardAPI(axios)
    this.overtimes = new OvertimeAPI(axios)
    this.employeeRetaliations = new EmployeeRetaliationsAPI(axios)
  }
}

export interface menu {
  header?: string
  title?: string
  icon?: any
  to?: string
  meta?: any
  chip?: boolean
  chipBgColor?: string
  chipColor?: string
  chipVariant?: string
  chipIcon?: string
  children?: menu[]
  disabled?: boolean
  type?: string
  subCaption?: string
}

const sidebarItem: menu[] = [
  {
    title: 'menu.dashboard',
    icon: 'md:leaderboard',
    to: '/',
    meta: {
      action: 'view',
      resource: 'dashboard',
    },
  },
  {
    header: 'menu.userManagement',
    meta: {
      action: 'view',
      resource: 'employees',
    },
  },
  {
    title: 'menu.employee',
    icon: 'md:person',
    to: '/employees',
    meta: {
      action: 'view',
      resource: 'employees',
    },
  },
  {
    icon: 'md:room_preferences',
    title: 'menu.payrollConfig',
    to: '/payroll/payroll-config',
    meta: {
      action: 'view',
      resource: 'employee_salaries',
    },
  },
  {
    icon: 'md:featured_play_list',
    title: 'menu.payslip',
    to: '/payroll/payslip',
    meta: {
      action: 'view',
      resource: 'payslips',
    },
  },
  {
    title: 'menu.overtime',
    icon: 'md:more_time',
    to: '/overtimes',
    meta: {
      action: 'view',
      resource: 'overtimes',
    },
  },
  {
    title: 'menu.employeeAward',
    icon: 'md:money',
    to: '/employee-awards',
    meta: {
      action: 'view',
      resource: 'employee_awards',
    },
  },
  {
    title: 'menu.employeeRetaliation',
    icon: 'md:dynamic_feed',
    to: '/employee-retaliations',
    meta: {
      action: 'view',
      resource: 'employee_retaliations',
    },
  },
  {
    title: 'menu.employeeTransfer',
    icon: 'md:transfer_within_a_station',
    to: '/employee-transfers',
    meta: {
      action: 'view',
      resource: 'employee_transfers',
    },
  },
  {
    title: 'menu.termination',
    icon: 'md:person_off',
    to: '/terminations',
    meta: {
      action: 'view',
      resource: 'employee_terminations',
    },
  },
  {
    title: 'menu.documents',
    icon: 'md:folder_open',
    to: '/documents',
    meta: {
      action: 'view',
      resource: 'documents',
    },
  },
  {
    title: 'menu.report',
    icon: 'md:summarize',
    to: '/reports',
    meta: {
      action: 'view',
      resource: 'report',
    },
  },
  {
    title: 'menu.departments',
    icon: 'md:groups',
    to: '/departments',
    meta: {
      action: 'view',
      resource: 'departments',
    },
  },
  {
    header: 'menu.adminManagement',
    meta: {
      action: 'view',
      resource: 'users',
    },
  },
  {
    title: 'menu.user',
    icon: 'md:account_circle',
    to: '/users',
    meta: {
      action: 'view',
      resource: 'users',
    },
  },
  {
    title: 'menu.permission',
    icon: 'md:settings',
    to: '/roles',
    meta: {
      action: 'view',
      resource: 'roles',
    },
  },
  {
    title: 'menu.designation',
    icon: 'md:military_tech',
    to: '/designations',
    meta: {
      action: 'view',
      resource: 'designations',
    },
  },
]

export default sidebarItem

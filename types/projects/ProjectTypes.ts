export type ProjectTypes = {
  id?: number
  project_name?: string
  project_short_code?: string
  project_summary?: string
  project_admin?: number | null | undefined
  start_date?: any
  deadline?: any
  notes?: string
  category_id?: number | null | undefined
  client_id?: number | null | undefined
  feedback?: string
  manual_timelog?: string
  client_view_task?: string
  allow_client_notification?: string
  completion_percent?: number | null | undefined
  calculate_task_progress?: number
  status?: string
  client_access?: number
  public?: number | null | undefined
  members?: any
  enable_miroboard?: number
}

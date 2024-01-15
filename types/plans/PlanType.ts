export type CustomerPropertiesType = Partial<{
  id: number | null
  name: string | null
  phone: string | null
}>

export type PlanType = {
  id?: number
  ship_id: number | null | undefined
  customer_id: number | null | undefined
  supplier_id: number | null | undefined
  product_id: number | null
  product_category_id: number | null | undefined
  date: string
  start_date: string
  end_date_plan: string
  status: string
  clock_in: string
  clock_out: string
  solution_ids: any
  num_of_workers: number | null
  board: string | null
  trough: number | null
  scaled: boolean
  plan_quantity: number | null | undefined
  actual_quantity: number | null
  length: number | null
  grt: number | null
  note: string
  warehouse_ids: any
  vehicle_ids: any
  service_request_id: number | null
}

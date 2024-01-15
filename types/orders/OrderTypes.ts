export type OrderTypes = {
  id?: number
  ship_id?: number | null
  ship?: any
  customer_id?: number | null
  customer?: any
  phone?: string | null
  product_id?: number | null
  product_category_id?: number | null
  warehouse_ids?: any | null
  date?: string | null
  clock_in_plan?: string | null
  plan_quantity?: number | null
  status?: string | null
  note?: string | null
}

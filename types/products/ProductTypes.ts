export type ProductType = {
  id?: number
  // unit_id?: number| null | undefined
  // category_id?: number| null | undefined
  type?: string
  code?: string
  name?: string
  status?: string
  amount_of_unit?: number | null | undefined
  weight_of_unit?: number | null | undefined
  min_inventory?: number | null | undefined
  max_inventory?: number | null | undefined
  product_image?: any
  length?: number | null | undefined
  width?: number | null | undefined
  description?: string
}

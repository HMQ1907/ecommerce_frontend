export type PropertiesType = Partial<{
  [key: string]: any
  province_id?: number | null
  district_id?: number | null
  ward_id?: number | null
}>

export type AddressType = {
  street: string | null
  street_extra: string | null
  state: string | null
  city: string | null
  post_code: string | null
  country: string | null
  properties: PropertiesType
}

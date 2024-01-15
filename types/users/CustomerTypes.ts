import { AddressType } from '@/types/users/AddressTypes'

export type CustomerType = {
  id: number | null
  name: string | null
  code: string | null
  email: string | null
  phone: string | null
  is_customer: boolean | null
  is_supplier: boolean | null
  vat_no: string | null
  trade_name: string | null
  addresses: AddressType[]
}

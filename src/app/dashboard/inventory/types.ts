export interface InventoryItem {
  id: number
  name: string
  description: string
  category: {
    id: number
    name: string
    description: string
  }
  quantity: number
  price: number
  status: string
  supplier: {
    id: number
    name: string
    contact_name: string
    email: string
    phone: string
    address: string
  }
  created_at: Date
  updated_at: Date
}

export interface Supplier {
  id: number | string
  name: string
  contact_name: string
  email: string
  phone: string
  address: string
  created_at: Date
  updated_at: Date
}

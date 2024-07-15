export interface Order {
  id: number | string
  order_number: number | string
  client_id: number | string
  total_amount: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | string
  order_date: Date
  created_at: Date
  updated_at: Date
}

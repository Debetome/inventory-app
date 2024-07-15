'use client'

import { useState } from 'react'
import { NextPage } from 'next'

import { dummyOrders } from '@/app/data/mockOrdersData'

import OrdersList from './components/OrdersList'
import { Order } from './types'

const Orders: NextPage = () => {
  const [orders, setOrders] = useState<Order[]>(dummyOrders)

  return <OrdersList items={orders} />
}

export default Orders

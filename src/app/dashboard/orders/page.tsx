'use client'

import { useState } from 'react';
import { NextPage } from 'next'

import OrdersList from './OrdersList'
import { dummyOrders } from '@/app/data/mockOrdersData';
import { Order } from './types';

const Orders: NextPage = () => {
    const [orders, setOrders] = useState<Order[]>(dummyOrders);

  return <OrdersList items={orders} />
}

export default Orders

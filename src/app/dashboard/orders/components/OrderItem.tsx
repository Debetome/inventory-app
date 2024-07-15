import React, { FC } from 'react'

interface OrderItemProps {
  item: {
    id: number | string
    order_number: number | string
    client_id: number | string
    total_amount: number
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | string
  }
}

const OrderItem: FC<OrderItemProps> = ({ item }) => {
  const orderStatusColor =
    item.status === 'pending'
      ? '#FF5500'
      : item.status === 'processing'
        ? '#E89923'
        : item.status === 'shipped'
          ? 'rgb(103 116 142 / var(--tw-text-opacity)'
          : '#26A834'

  return (
    <tr key={item.id} className="bg-white dark:bg-slate-900">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
        {item.order_number}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-slate-400">
        {item.client_id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-slate-400">
        {item.total_amount}
      </td>
      <td
        className={`px-6 py-4 whitespace-nowrap text-sm `}
        style={{ color: `${orderStatusColor}` }}
      >
        {item.status}
      </td>
    </tr>
  )
}

export default OrderItem

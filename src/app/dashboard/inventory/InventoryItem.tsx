import React, { FC } from 'react'

interface InventoryItemProps {
  item: {
    id: number
    name: string
    description: string
    category: {
      name: string
    }
    quantity: number
    price: number
    status: string
  }
}

const InventoryItem: FC<InventoryItemProps> = ({ item }) => {
  return (
    <tr key={item.id} className="bg-white dark:bg-slate-900">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
        {item.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-slate-400">
        {item.description}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-slate-400">
        {item.category.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-slate-400">
        {item.quantity}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-slate-400">
        ${item.price.toFixed(2)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status === 'In Stock' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
        >
          {item.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a
          href="#"
          className="text-indigo-600 hover:text-indigo-900 dark:text-blue-400 dark:hover:text-blue-200"
        >
          Edit
        </a>
        <span className="mx-2 text-gray-300 dark:text-white">|</span>
        <a
          href="#"
          className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-200"
        >
          Delete
        </a>
      </td>
    </tr>
  )
}

export default InventoryItem

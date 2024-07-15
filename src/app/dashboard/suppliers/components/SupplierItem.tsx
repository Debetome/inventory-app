import React, { FC } from 'react'

import { Supplier } from '../types'

interface SupplierItemProps {
  item: Supplier
}

const SupplierItem: FC<SupplierItemProps> = ({ item }) => {
  return (
    <tr key={item.id}>
      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
        <div className="flex px-2">
          <div>
            <h6 className="mb-0 text-sm leading-normal dark:text-white">
              {item.name}
            </h6>
          </div>
        </div>
      </td>
      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
        <div className="flex px-2">
          <div>
            <p className="mb-0 text-sm font-semibold leading-normal dark:text-white">
              {item.contact_name}
            </p>
            <p className="text-xs text-gray-500">
              Email: {item.email}
              <br />
              Phone: {item.phone}
            </p>
          </div>
        </div>
      </td>
      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
        <div className="flex px-2">
          <div>
            <p className="mb-0 text-sm font-semibold leading-normal dark:text-white">
              Purchase History
            </p>
            <ul className="text-xs text-gray-500">
              {/* Placeholder for purchase history */}
              <li>Order 1</li>
              <li>Order 2</li>
              <li>Order 3</li>
            </ul>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-lg font-medium">
        <a
          href="#"
          className="text-indigo-600 hover:text-indigo-900 dark:text-blue-400 dark:hover:text-blue-200"
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </a>
        <span className="mx-2 text-gray-300 dark:text-white">|</span>
        <a
          href="#"
          className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-200"
        >
          <i className="fa-solid fa-trash"></i>
        </a>
      </td>
    </tr>
  )
}

export default SupplierItem

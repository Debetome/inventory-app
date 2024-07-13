'use client'

import React, { FC, useState } from 'react'

import { InventoryItem as InventoryItemType } from './types'
import InventoryItem from './InventoryItem'

interface InventoryListProps {
  items: InventoryItemType[]
}

// Component definition
const InventoryList: FC<InventoryListProps> = ({ items }) => {
  return (
    <div className="-mx-4 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-white/40">
        <thead className="bg-gray-50 dark:bg-slate-800">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Description
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Category
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Quantity
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Price
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-white/40">
          {items.map((item) => (
            <InventoryItem key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default InventoryList

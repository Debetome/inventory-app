'use client'

import React, { FC, useState } from 'react'

import { InventoryItem as InventoryItemType } from '../types'
import InventoryItem from './InventoryItem'

interface InventoryListProps {
  items: InventoryItemType[]
}

// Component definition
const InventoryList: FC<InventoryListProps> = ({ items }) => {
  return (
    <div className="flex flex-wrap m-4 mb-3" style={{ height: '500px' }}>
      <div className="w-full mb-8 px-4" style={{ height: '100%' }}>
        <div
          className="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded-2xl shadow-xl dark:bg-slate-850 dark:shadow-dark-xl shadow-lg overflow-auto"
          style={{ height: '100%' }}
        >
          <div className="relative flex flex-row justify-between p-6 pb-0 mb-0 border-b border-solid rounded-t-lg border-gray-200 dark:border-white/40">
            <h6 className="text-xl font-bold text-gray-800 dark:text-white">
              Inventory Items
            </h6>
            <button
              className="absolute top-0 right-0 mr-2 mt-2 bg-blue-500 text-white rounded-full"
              style={{ width: '3rem', height: '3rem' }}
            >
              <i className="fa-solid fa-plus font-semibold"></i>
            </button>
          </div>
          <div className="flex-auto px-4 py-4" style={{ height: '100%' }}>
            {/* Search and Filter section (can be added here) */}
            {/* List View of Inventory Items */}
            <div
              className="-mx-4 overflow-auto w-full"
              style={{ height: '100%' }}
            >
              <table className="min-w-full w-full divide-y divide-gray-200 dark:divide-white/40">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default InventoryList

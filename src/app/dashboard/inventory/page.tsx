'use client'

import React, { useState } from 'react'
import { NextPage } from 'next'

import InventoryList from './InventoryList'
import SupplierManagement from './SupplierManagement'

import {
  dummyInventoryItems,
  dummySuppliers,
} from '@/app/data/mockInventoryData'

import { InventoryItem, Supplier } from './types'

const Inventory: NextPage = () => {
  const [invItems, setInvItems] = useState<InventoryItem[]>(dummyInventoryItems)
  const [suppliers, setSuppliers] = useState<Supplier[]>(dummySuppliers)

  return (
    <>
    <div className="flex flex-wrap -mx-4">
      <div className="w-full mb-8 px-4">
        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded-lg shadow-xl dark:bg-slate-850 dark:shadow-dark-xl">
          <div className="p-6 pb-0 mb-0 border-b border-solid rounded-t-lg border-gray-200 dark:border-white/40">
            <h6 className="text-xl font-bold text-gray-800 dark:text-white">
              Inventory Items
            </h6>
          </div>
          <div className="flex-auto px-4 py-4">
            {/* Search and Filter section (can be added here) */}
            {/* List View of Inventory Items */}
            <InventoryList items={invItems} />            
          </div>
        </div>
      </div>
    </div>
    <SupplierManagement invItems={invItems} suppliers={suppliers}/>
    </>
  )
}

export default Inventory

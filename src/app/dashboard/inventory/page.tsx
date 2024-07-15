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
      <InventoryList items={invItems} />
      <SupplierManagement invItems={invItems} suppliers={suppliers} />
    </>
  )
}

export default Inventory

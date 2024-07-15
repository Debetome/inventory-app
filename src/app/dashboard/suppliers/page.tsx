'use client'

import React, { useState } from 'react'
import { NextPage } from 'next'

import SupplierList from './components/SuppliersList'
import { dummySuppliers } from '@/app/data/mockInventoryData'
import { Supplier } from './types'

const Suppliers: NextPage = () => {
  const [suppliers, setSuppliers] = useState<Supplier[]>(dummySuppliers)

  return <SupplierList suppliers={suppliers} />
}

export default Suppliers

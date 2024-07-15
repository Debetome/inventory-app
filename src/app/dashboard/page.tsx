import React from 'react'
import { NextPage } from 'next'

import DashboardCard from './DashboardCard'
import StockLevelChart from './StockLevelChart'
import SalesChart from './SalesChart'

import OrderStatus from './OrderStatus'
import LowStockAlerts from './LowStockAlerts'
import SupplierPerformance from './SupplierPerformance'
import InventoryValue from './InventoryValue'

const Dashboard: NextPage = () => {
  return (
    <>
      <div className="w-full px-6 py-6 mx-auto">
        <div className="flex flex-wrap -mx-3">
          <DashboardCard
            title="Total Items"
            number={50}
            percentage={20}
            bgStyle="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-blue-500 to-violet-500"
            icon="ni leading-none ni-money-coins text-lg relative top-3.5 text-white"
          />

          <DashboardCard
            title="Low Stock Items"
            number={2300}
            percentage={3}
            bgStyle="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-red-600 to-orange-600"
            icon="ni leading-none ni-world text-lg relative top-3.5 text-white"
          />

          <DashboardCard
            title="Total Orders"
            number={3462}
            percentage={4}
            bgStyle="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-emerald-500 to-teal-400"
            icon="ni leading-none ni-paper-diploma text-lg relative top-3.5 text-white"
          />

          <DashboardCard
            title="Pending orders"
            number={50}
            percentage={2}
            bgStyle="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-emerald-500 to-teal-400"
            icon="ni leading-none ni-paper-diploma text-lg relative top-3.5 text-white"
          />
        </div>

        <div className="flex flex-wrap mt-6 -mx-3">
          <StockLevelChart />
          <SalesChart />
        </div>

        <div className="flex flex-wrap mt-6 -mx-3">
          <OrderStatus />
          <LowStockAlerts />
        </div>

        <div className="flex flex-wrap mt-6 -mx-3">
          <SupplierPerformance />
          <InventoryValue />
        </div>
      </div>
    </>
  )
}

export default Dashboard

import React, { FC } from 'react'

import SupplierItem from './SupplierItem'
import { Supplier } from '../types'

interface SupplierListProps {
  suppliers: Supplier[]
}

const SupplierList: FC<SupplierListProps> = ({ suppliers }) => {
  return (
    <div className="flex flex-wrap m-4 mb-3" style={{ height: '500px' }}>
      <div
        className="flex-none w-full max-w-full px-3"
        style={{ height: '100%' }}
      >
        <div
          className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl shadow-lg rounded-2xl bg-clip-border overflow-auto"
          style={{ height: '100%' }}
        >
          <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
            <h6 className="dark:text-white">Supplier Management</h6>
          </div>
          <div className="flex-auto px-0 pt-0 pb-2">
            <table className="items-center justify-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
              <thead className="align-bottom">
                <tr>
                  <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                    Supplier
                  </th>
                  <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                    Supplier Contact
                  </th>
                  <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                    Purchase History
                  </th>
                </tr>
              </thead>
              <tbody className="border-t">
                {suppliers.map((item) => (
                  <SupplierItem item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupplierList

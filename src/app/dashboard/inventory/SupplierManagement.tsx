import React, { FC } from 'react'
import { InventoryItem, Supplier } from './types'

interface SupplierManagementProps {
  invItems: InventoryItem[]
  suppliers: Supplier[]
}

const SupplierManagement: FC<SupplierManagementProps> = ({
  invItems,
  suppliers,
}) => {
  return (
    <div className="flex flex-wrap -mx-8">
      <div className="flex-none w-full max-w-full px-3">
        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
            <h6 className="dark:text-white">Supplier Management</h6>
          </div>
          <div className="flex-auto px-0 pt-0 pb-2">
            <div className="p-0 overflow-x-auto">
              <table className="items-center justify-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                <thead className="align-bottom">
                  <tr>
                    <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      Inventory Item
                    </th>
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
                  {invItems.map((item) => (
                    <tr key={item.id}>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex px-2">
                          <div>
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">
                              {item.name}
                            </h6>
                            <p className="text-xs text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex px-2">
                          <div>
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">
                              {
                                suppliers.find((s) => s.id === item.supplier.id)
                                  ?.name
                              }
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex px-2">
                          <div>
                            <p className="mb-0 text-sm font-semibold leading-normal dark:text-white">
                              {
                                suppliers.find((s) => s.id === item.supplier.id)
                                  ?.contact_name
                              }
                            </p>
                            <p className="text-xs text-gray-500">
                              Email:{' '}
                              {
                                suppliers.find((s) => s.id === item.supplier.id)
                                  ?.email
                              }
                              <br />
                              Phone:{' '}
                              {
                                suppliers.find((s) => s.id === item.supplier.id)
                                  ?.phone
                              }
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
                    </tr>
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

export default SupplierManagement

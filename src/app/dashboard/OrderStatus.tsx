import React, { FC } from 'react'

const OrderStatus: FC = () => {
  return (
    <div className="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
      <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl dark:bg-gray-950 border-black-125 rounded-2xl bg-clip-border">
        <div className="p-4 pb-0 mb-0 rounded-t-4">
          <div className="flex justify-between">
            <h6 className="mb-2 dark:text-white">Order Status Overview</h6>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="items-center w-full mb-4 align-top border-collapse border-gray-200 dark:border-white/40">
            <thead>
              <tr>
                <th className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                  Order ID
                </th>
                <th className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                  Customer Name
                </th>
                <th className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                  Order Date
                </th>
                <th className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                  Order Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                  #12345
                </td>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                  John Doe
                </td>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                  2024-07-12
                </td>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                  Shipped
                </td>
              </tr>
              <tr>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                  #12346
                </td>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                  Jane Smith
                </td>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                  2024-07-11
                </td>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                  Pending
                </td>
              </tr>
              <tr>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                  #12347
                </td>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                  Michael Johnson
                </td>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                  2024-07-10
                </td>
                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                  Delivered
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default OrderStatus

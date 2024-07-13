import React, { FC } from 'react'

interface SupplierItemProps {
  name: string
  deliveryTimes: number
  accuracy: number
  ratings: number
}

const SupplierItem: FC<SupplierItemProps> = ({
  name,
  deliveryTimes,
  accuracy,
  ratings,
}) => {
  return (
    <tr>
      <td className="p-3 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
        {name}
      </td>
      <td className="p-3 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
        {deliveryTimes}%
      </td>
      <td className="p-3 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
        {accuracy}%
      </td>
      <td className="p-3 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
        {ratings}
      </td>
    </tr>
  )
}

const SupplierPerformance: FC = () => {
  return (
    <div className="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
      <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl dark:bg-gray-950 border-black-125 rounded-2xl bg-clip-border">
        <div className="p-4 pb-0 mb-0 rounded-t-4">
          <div className="flex justify-between">
            <h6 className="mb-2 dark:text-white">Supplier Performance</h6>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="items-center w-full mb-4 align-top border-collapse border-gray-200 dark:border-white/40">
            <thead>
              <tr>
                <th className="p-3 text-left dark:text-white">Supplier</th>
                <th className="p-3 text-left dark:text-white">
                  Delivery Times
                </th>
                <th className="p-3 text-left dark:text-white">
                  Order Accuracy
                </th>
                <th className="p-3 text-left dark:text-white">
                  Supplier Ratings
                </th>
              </tr>
            </thead>
            <tbody>
              <SupplierItem
                name="Supplier A"
                deliveryTimes={95}
                accuracy={98}
                ratings={4.7}
              />
              <SupplierItem
                name="Supplier B"
                deliveryTimes={92}
                accuracy={96}
                ratings={4.5}
              />
              <SupplierItem
                name="Supplier C"
                deliveryTimes={88}
                accuracy={94}
                ratings={4.2}
              />
              <SupplierItem
                name="Supplier D"
                deliveryTimes={90}
                accuracy={92}
                ratings={4.0}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default SupplierPerformance;

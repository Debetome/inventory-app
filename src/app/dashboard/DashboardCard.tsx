import React, { FC } from 'react'

interface DashboardCardProps {
  title: string
  number: number
  numberPrefix?: string
  percentage: number
  bgStyle: string
  icon: string
}

const DashboardCard: FC<DashboardCardProps> = ({
  title,
  number,
  numberPrefix,
  percentage,
  bgStyle,
  icon,
}) => {
  return (
    <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
      <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-row -mx-3">
            <div className="flex-none w-2/3 max-w-full px-3">
              <div>
                <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                  {title}
                </p>
                <h5 className="mb-2 font-bold dark:text-white">
                  {numberPrefix ? numberPrefix : ''}
                  {number.toLocaleString()}
                </h5>
                <p className="mb-0 dark:text-white dark:opacity-60">
                  <span
                    className={`text-sm font-bold leading-normal ${percentage > 0 ? 'text-emerald-500' : 'text-red-600'}`}
                  >
                    {percentage > 0 ? '+' : '-'}
                    {percentage}%
                  </span>
                  since yesterday
                </p>
              </div>
            </div>
            <div className="px-3 text-right basis-1/3">
              <div className={bgStyle}>
                <i className={icon}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardCard

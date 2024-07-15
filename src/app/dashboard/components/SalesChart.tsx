'use client'

import React, { FC, useEffect, useRef } from 'react'
import Chart, { ChartConfiguration } from 'chart.js/auto'

const SalesChart: FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstanceRef = useRef<Chart<'pie', number[], string> | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    const ctx = chartRef.current.getContext('2d')
    if (!ctx) return

    const data = {
      labels: ['Electronics', 'Clothing', 'Home Goods', 'Sports', 'Toys'],
      datasets: [
        {
          label: 'Sales Summary',
          data: [3000, 1500, 2500, 2000, 1800],
          backgroundColor: [
            '#5e72e4',
            '#fd7e14',
            '#20c997',
            '#6610f2',
            '#f5365c',
          ],
          hoverOffset: 4,
        },
      ],
    }

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy()
    }

    const config: ChartConfiguration<'pie', number[], string> = {
      type: 'pie',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem: any) => {
                if (
                  tooltipItem.datasetIndex !== undefined &&
                  tooltipItem.index !== undefined
                ) {
                  const label = data.labels![tooltipItem.index]
                  const value =
                    data.datasets[tooltipItem.datasetIndex].data[
                      tooltipItem.index
                    ]
                  return `${label}: $${value.toLocaleString()}`
                }
                return ''
              },
            },
          },
        },
        animation: {
          animateRotate: true,
          animateScale: true,
          duration: 1000,
          easing: 'easeInOutQuart',
        },
      },
    }

    chartInstanceRef.current = new Chart(ctx, config)

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy()
      }
    }
  }, [])

  return (
    <div className="w-full max-w-full px-3 mt-0 lg:w-5/12 lg:flex-none">
      <div className="border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border shadow-lg">
        <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
          <h6 className="capitalize dark:text-white">Sales overview</h6>
          <p className="mb-0 text-sm leading-normal dark:text-white dark:opacity-60">
            <i className="fa fa-arrow-up text-emerald-500"></i>
            <span className="font-semibold">4% more</span> in 2021
          </p>
        </div>
        <div className="flex-auto p-4">
          <div>
            <canvas id="chart-bars" height="300" ref={chartRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalesChart

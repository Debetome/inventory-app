'use client'

import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

const StockLevelChart = () => {
  const chartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!chartRef.current) return

    const ctx = chartRef.current.getContext('2d')
    if (!ctx) return

    // Define gradient
    const gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50)
    gradientStroke1.addColorStop(1, 'rgba(94, 114, 228, 0.2)')
    gradientStroke1.addColorStop(0.2, 'rgba(94, 114, 228, 0.0)')
    gradientStroke1.addColorStop(0, 'rgba(94, 114, 228, 0)')

    const gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50)
    gradientStroke2.addColorStop(1, 'rgba(75, 192, 192, 0.2)')
    gradientStroke2.addColorStop(0.2, 'rgba(75, 192, 192, 0.0)')
    gradientStroke2.addColorStop(0, 'rgba(75, 192, 192, 0)')

    const gradientStroke3 = ctx.createLinearGradient(0, 230, 0, 50)
    gradientStroke3.addColorStop(1, 'rgba(255, 159, 64, 0.2)')
    gradientStroke3.addColorStop(0.2, 'rgba(255, 159, 64, 0.0)')
    gradientStroke3.addColorStop(0, 'rgba(255, 159, 64, 0)')

    // Sample data for top-selling or critical items over time
    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
    ]
    const data = {
      labels,
      datasets: [
        {
          label: 'Item A',
          tension: 0.4,
          pointRadius: 0,
          fill: true,
          maxBarThickness: 6,
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: 'rgba(94, 114, 228, 1)',
          backgroundColor: gradientStroke1,
          borderWidth: 3,
        },
        {
          label: 'Item B',
          tension: 0.4,
          pointRadius: 0,
          fill: true,
          maxBarThickness: 6,
          data: [28, 48, 40, 19, 86, 27, 90],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: gradientStroke2,
          borderWidth: 3,
        },
        {
          label: 'Item C',
          tension: 0.4,
          pointRadius: 0,
          fill: true,
          maxBarThickness: 6,
          data: [18, 48, 77, 9, 100, 27, 40],
          borderColor: 'rgba(255, 159, 64, 1)',
          backgroundColor: gradientStroke3,
          borderWidth: 3,
        },
      ],
    }

    const chartInstance = new Chart(ctx, {
      type: 'line',
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: 'index',
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
            },
            ticks: {
              display: true,
              padding: 10,
              color: '#fbfbfb',
              font: {
                size: 11,
                family: 'Open Sans',
                style: 'normal',
                lineHeight: 2,
              },
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
              borderDash: [5, 5],
            },
            ticks: {
              display: true,
              color: '#ccc',
              padding: 20,
              font: {
                size: 11,
                family: 'Open Sans',
                style: 'normal',
                lineHeight: 2,
              },
            },
          },
        },
        animations: {
          tension: {
            duration: 1000,
            easing: 'easeInOutCubic',
            from: 0.4,
            to: 0.3,
            loop: true,
          },
        },
      },
    })

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (chartRef.current) {
        const chart = Chart.getChart(chartRef.current)
        if (chart) {
          chart.destroy()
        }
      }
    }
  }, [])

  return (
    <div className="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none">
      <div className="border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
        <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
          <h6 className="capitalize dark:text-white">Sales overview</h6>
          <p className="mb-0 text-sm leading-normal dark:text-white dark:opacity-60">
            <i className="fa fa-arrow-up text-emerald-500"></i>
            <span className="font-semibold">4% more</span> in 2021
          </p>
        </div>
        <div className="flex-auto p-4">
          <div>
            <canvas ref={chartRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StockLevelChart;

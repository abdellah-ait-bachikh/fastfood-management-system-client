import React, { useEffect } from 'react'
import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts' // Importing ApexOptions for correct typing
import { useSelector } from 'react-redux'
import { TAppInitialState } from '@renderer/lib/types'
import { formatMoneyToMAD, formatWithSeparators } from '@renderer/lib/utils'

const MountlyPaymentsShart: React.FC = () => {
  const { asideOpen, theme } = useSelector((state: { app: TAppInitialState }) => state.app)

  // ✅ Static data added here
 const mountlyPayments = [
  { month: 0, total: 1540000, count: 4200 },   // Jan
  { month: 1, total: 1385000, count: 3900 },   // Feb
  { month: 2, total: 1650000, count: 4500 },   // Mar
  { month: 3, total: 1825000, count: 4700 },   // Apr
  { month: 4, total: 2100000, count: 5200 },   // May
  { month: 5, total: 2350000, count: 6000 },   // Jun
  { month: 6, total: 2280000, count: 5900 },   // Jul
  { month: 7, total: 2500000, count: 6300 },   // Aug
  { month: 8, total: 2600000, count: 6600 },   // Sep
  { month: 9, total: 2700000, count: 6800 },   // Oct
  { month: 10, total: 2900000, count: 7000 },  // Nov
  { month: 11, total: 3500000, count: 8000 }   // Dec
]

 const formattedSeries = React.useMemo(() => {
  if (!mountlyPayments || mountlyPayments.length === 0) {
    return [
      {
        name: 'Recettes en argent',
        data: Array(12).fill(0)
      },
      {
        name: 'Nombre de commandes',
        data: Array(12).fill(0)
      }
    ]
  }

  const totals: number[] = Array(12).fill(0)
  const counts: number[] = Array(12).fill(0)

  mountlyPayments.forEach((item) => {
    totals[item.month] = item.total
    counts[item.month] = item.count
  })

  return [
    {
      name: 'Recettes en argent',
      data: totals
    },
    {
      name: 'Nombre de commandes',
      data: counts
    }
  ]
}, [mountlyPayments])

  console.log(formattedSeries)
  const options: ApexOptions = {
    chart: {
      type: 'area',
      zoom: {
        enabled: true
      },
      width: '100%'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },

    xaxis: {
      categories: [
        'Jan',
        'Fév',
        'Mar',
        'Avr',
        'Mai',
        'Juin',
        'Juil',
        'Août',
        'Sep',
        'Oct',
        'Nov',
        'Déc'
      ],
      title: {
        text: 'Mois',
        style: {
          fontSize: '0.875rem',
          fontWeight: '500'
        }
      },
      labels: {
        style: {
          fontSize: '0.875rem'
        }
      }
    },
    yaxis: {
      title: {
        text: 'Recettes (en DH)',
        style: {
          fontSize: '0.875rem',
          fontWeight: '500'
        }
      },
      labels: {
        style: {
          fontSize: '0.875rem'
        }
      }
    },
    tooltip: {
      y: {
        formatter: (value: number, { seriesIndex }) =>
          seriesIndex === 0 ? formatMoneyToMAD(value) : formatWithSeparators(value)
      },
      x: {
        format: 'dd MMM'
      },
      style: {
        fontFamily: 'Arial, sans-serif',
        fontSize: '0.875rem'
      },
      theme: theme === 'light' ? 'light' : 'dark'
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.7,
        opacityTo: 0.1
      }
    },
    colors: ['#22c55e', '#3b82f6'],
    legend: {
      position: 'top',
      horizontalAlign: 'center',
      onItemClick: {
        toggleDataSeries: true
      }
    },
    theme: {
      mode: theme === 'light' ? 'light' : 'dark',
      palette: 'palette1',
      monochrome: {
        enabled: false
      }
    }
  }

  useEffect(() => {
    window.dispatchEvent(new Event('resize'))
  }, [asideOpen])
  return (
    <>
      {formattedSeries && (
        <div className="mt-6 rounded-lg  w-full grid grid-cols-1 ">
          <Chart options={options} series={formattedSeries} type="area" height={450} width="100%" />
        </div>
      )}
    </>
  )
}

export default MountlyPaymentsShart

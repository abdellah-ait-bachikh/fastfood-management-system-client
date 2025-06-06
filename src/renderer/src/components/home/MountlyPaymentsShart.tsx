import React, { useEffect } from 'react'
import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts' // Importing ApexOptions for correct typing
import { useSelector } from 'react-redux'
import { TAppInitialState, THomeInitialState } from '@renderer/lib/types'
import { formatMoneyToMAD, formatWithSeparators } from '@renderer/lib/utils'

const MountlyPaymentsShart: React.FC<{
  mounthlyYearStatus: THomeInitialState['mounthlyYearStatus']
}> = ({ mounthlyYearStatus }) => {
  const { asideOpen, theme } = useSelector((state: { app: TAppInitialState }) => state.app)

  const formattedSeries = React.useMemo(() => {
    if (!mounthlyYearStatus || mounthlyYearStatus.length === 0) {
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

    const totalMoney: number[] = Array(12).fill(0)
    const paymentsCount: number[] = Array(12).fill(0)

    mounthlyYearStatus.forEach((item) => {
      totalMoney[item.month] = item.totalMoney
      paymentsCount[item.month] = item.paymentsCount
    })

    return [
      {
        name: 'Recettes en argent',
        data: totalMoney
      },
      {
        name: 'Nombre de commandes',
        data: paymentsCount
      }
    ]
  }, [mounthlyYearStatus])

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

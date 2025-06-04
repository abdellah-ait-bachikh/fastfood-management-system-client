import { ApexOptions } from 'apexcharts'
import Chart from 'react-apexcharts'

const PieChart = ({
  labels = ['Apples', 'Bananas', 'Cherries', 'Grapes'],
  series = [44, 55, 13, 43]
}: {
  labels?: string[]
  series?: number[]
}) => {
  const chartOptions: ApexOptions = {
    chart: {
      type: 'donut',
        width: '100%',
    },
    labels: labels,
    legend: {
      show: false
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            width: 300
          }
        }
      }
    ]
  }

  const chartSeries = series

  return (
    <div className="w-full flex justify-center items-center p-4">
      <Chart options={chartOptions} series={chartSeries} type="donut" width="100%" />
    </div>
  )
}

export default PieChart

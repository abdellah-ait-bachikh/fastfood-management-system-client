import { DatePicker } from '@heroui/react'
import { getFullDate, getFullTime } from '@renderer/lib/utils'
import Quantity from '../Quantity'
import Amounth from '../Amounth'

const DaysList = () => {
  return (
    <div className="bg-white dark:bg-gray-950 p-3 rounded-xl mt-3 w-full ">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-nowrap font-semibold text-xl md:text-2xl tracking-wider">
          List Des Jrournée
        </h1>
        <div>
          <DatePicker
            aria-label="filter Date picker"
            showMonthAndYearPickers
            onChange={(value) => console.log(value?.toString())}
          />
        </div>
      </div>
    <div className="mt-3">
  <div className="relative w-full overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
    <table className="min-w-[800px] w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-300">
      <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-800 dark:text-gray-400">
        <tr>
          <th className="px-6 py-3">Départ</th>
          <th className="px-6 py-3 text-center">Arrêt</th>
          <th className="px-6 py-3 text-center">Paiements</th>
          <th className="px-6 py-3 text-center">Montant</th>
          <th className="px-6 py-3 text-center">Action</th>
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-gray-900 font-semibold">
        {[...Array(2)].map((_, index) => (
          <tr
            key={index}
            className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50"
          >
            <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
              {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
            </td>
            <td className="px-6 py-4 text-center whitespace-nowrap text-gray-900 dark:text-white">
              {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
            </td>
            <td className="px-6 py-4 text-center whitespace-nowrap text-gray-900 dark:text-white">
              <Quantity quantity={909} />
            </td>
            <td className="px-6 py-4 text-center whitespace-nowrap text-gray-900 dark:text-white">
              <Amounth amounth={9832} />
            </td>
            <td className="px-6 py-4 text-center whitespace-nowrap text-gray-900 dark:text-white">
              {/* Action content */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    </div>
  )
}

export default DaysList

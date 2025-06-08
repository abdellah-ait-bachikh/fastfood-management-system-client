import { DatePicker, Pagination, Spinner } from '@heroui/react'
import { getFullDate, getFullTime } from '@renderer/lib/utils'
import Quantity from '../Quantity'
import Amounth from '../Amounth'
import { useEffect, useState } from 'react'

const DaysList = () => {
  const [page, setPage] = useState<number>(1)
  const [filterDate, setFilterDate] = useState<Date | undefined>(undefined)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    console.log({ page, filterDate })

    setLoading(!loading)
  }, [page, filterDate])
  return (
    <div className="bg-white dark:bg-gray-950 p-3 rounded-xl mt-3 w-full">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-nowrap font-semibold text-xl md:text-2xl tracking-wider">
          List Des Jrournée
        </h1>
        <div>
          <DatePicker
            aria-label="filter Date picker"
            showMonthAndYearPickers
            onChange={(value) => setFilterDate(!value ? undefined : new Date(value.toString()))}
          />
        </div>
      </div>
      {loading ? (
        <div className=" w-full h-[600px] flex items-center justify-center">
          <Spinner
            size="lg"
            color="primary"
            label="Chargement"
            classNames={{ label: 'font-semibold' }}
          />
        </div>
      ) : (
        <div className="mt-3">
          <div className="overflow-auto max-h-[500px] relative">
            <table className="w-full rounded-xl overflow-hidden">
              <thead className="bg-gray-100/70 dark:bg-gray-900 ">
                <tr className="tracking-widest sticky top-0">
                  <th className=" font-semibold text-left text-md px-4 py-3 text-nowrap">Départ</th>
                  <th className="font-semibold text-md text-center px-4 py-3 text-nowrap">Arrêt</th>
                  <th className="font-semibold text-md text-center px-4 py-3 text-nowrap">
                    Paiements
                  </th>
                  <th className="font-semibold text-md text-center px-4 py-3 text-nowrap">
                    Montant
                  </th>
                  <th className="font-semibold text-md text-center px-4 py-3 text-nowrap w-full">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="hover:bg-gray-200 dark:hover:bg-gray-800">
                  <td className="text-left font-semibold px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Quantity quantity={909} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Amounth amounth={9832} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 "></td>
                </tr>
                <tr className="hover:bg-gray-200 dark:hover:bg-gray-800">
                  <td className="text-left font-semibold px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Quantity quantity={909} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Amounth amounth={9832} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 "></td>
                </tr>
                <tr className="hover:bg-gray-200 dark:hover:bg-gray-800">
                  <td className="text-left font-semibold px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Quantity quantity={909} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Amounth amounth={9832} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 "></td>
                </tr>
                <tr className="hover:bg-gray-200 dark:hover:bg-gray-800">
                  <td className="text-left font-semibold px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Quantity quantity={909} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Amounth amounth={9832} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 "></td>
                </tr>
                <tr className="hover:bg-gray-200 dark:hover:bg-gray-800">
                  <td className="text-left font-semibold px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Quantity quantity={909} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Amounth amounth={9832} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 "></td>
                </tr>
                <tr className="hover:bg-gray-200 dark:hover:bg-gray-800">
                  <td className="text-left font-semibold px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Quantity quantity={909} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Amounth amounth={9832} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 "></td>
                </tr>
                <tr className="hover:bg-gray-200 dark:hover:bg-gray-800">
                  <td className="text-left font-semibold px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Quantity quantity={909} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Amounth amounth={9832} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 "></td>
                </tr>
                <tr className="hover:bg-gray-200 dark:hover:bg-gray-800">
                  <td className="text-left font-semibold px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Quantity quantity={909} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Amounth amounth={9832} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 "></td>
                </tr>
                <tr className="hover:bg-gray-200 dark:hover:bg-gray-800">
                  <td className="text-left font-semibold px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Quantity quantity={909} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Amounth amounth={9832} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 "></td>
                </tr>
                <tr className="hover:bg-gray-200 dark:hover:bg-gray-800">
                  <td className="text-left font-semibold px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Quantity quantity={909} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Amounth amounth={9832} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 "></td>
                </tr>
                <tr className="hover:bg-gray-200 dark:hover:bg-gray-800">
                  <td className="text-left font-semibold px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Quantity quantity={909} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Amounth amounth={9832} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 "></td>
                </tr>
                <tr className="hover:bg-gray-200 dark:hover:bg-gray-800">
                  <td className="text-left font-semibold px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Quantity quantity={909} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Amounth amounth={9832} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 "></td>
                </tr>
                <tr className="hover:bg-gray-200 dark:hover:bg-gray-800">
                  <td className="text-left font-semibold px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Quantity quantity={909} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Amounth amounth={9832} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 "></td>
                </tr>
                <tr className="hover:bg-gray-200 dark:hover:bg-gray-800">
                  <td className="text-left font-semibold px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Quantity quantity={909} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Amounth amounth={9832} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 "></td>
                </tr>
                <tr className="hover:bg-gray-200 dark:hover:bg-gray-800">
                  <td className="text-left font-semibold px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    {`${getFullDate(new Date())} à ${getFullTime(new Date())}`}
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Quantity quantity={909} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 text-nowrap tracking-wider">
                    <Amounth amounth={9832} />
                  </td>
                  <td className="font-semibold text-center px-4 py-3 "></td>
                </tr>
              </tbody>
            </table>{' '}
          </div>
          <Pagination
            color="default"
            variant="faded"
            className="mt-3"
            showControls
            initialPage={page}
            onChange={setPage}
            total={10}
          />
          
        </div>
      )}
    </div>
  )
}

export default DaysList

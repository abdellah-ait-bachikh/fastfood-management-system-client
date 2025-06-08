import { DatePicker } from '@heroui/react'
import StartDay from '@renderer/components/day/StartDay'
import { TAppDispatch } from '@renderer/lib/types'
import { useDispatch } from 'react-redux'
const Days = () => {
  // const dispatch = useDispatch<TAppDispatch>()

  return (
    <div className="w-full h-full">
      <StartDay />
      <div className="bg-white dark:bg-gray-950 p-3 rounded-xl mt-3">
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-nowrap font-semibold text-xl">List Des Jrournée</h1>
          <div>
            <DatePicker
              aria-label="filter Date picker"
              showMonthAndYearPickers
              onChange={(value) => console.log(value?.toString())}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Days

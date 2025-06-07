import { Alert, Button, Chip } from '@heroui/react'
import IconComponent from '@renderer/components/IconComponent'
import { useState } from 'react'
import { LuArrowDownFromLine } from 'react-icons/lu'
import { motion } from 'framer-motion'
import Timer from './Timer'
import { getFullDate, getFullTime } from '@renderer/lib/utils'
import { useDispatch, useSelector } from 'react-redux'
import { TAppDispatch, TDayInitialState } from '@renderer/lib/types'
import { createDay, stopeDay } from '@renderer/redux/apiCall/dayApiCAll'
const StartDay = () => {
  const dispatch = useDispatch<TAppDispatch>()
  const { currentDay } = useSelector((state: { day: TDayInitialState }) => state.day)
  const [loadingStart, setLoadingStart] = useState(false)
  const [loadingStop, setLoadingStop] = useState(false)
  const handelStartDay = () => {
    dispatch(createDay(setLoadingStart))
  }
  const handelSTopDay = () => {
    if (currentDay) {
      dispatch(stopeDay(currentDay.id, setLoadingStop))
    }
  }
  return (
    <div className="flex flex-col items-center gap-2">
      {currentDay && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white  dark:bg-slate-800 p-3 rounded-xl flex flex-col items-center w-fit gap-2 overflow-hidden"
        >
          <Chip size="lg" classNames={{ content: 'font-semibold' }} variant="flat">
            Demarée Le {getFullDate(new Date(currentDay.startAt))} à{' '}
            {getFullTime(new Date(currentDay.startAt))}
          </Chip>
          <IconComponent Icon={LuArrowDownFromLine} />
          <Timer startAt={new Date(currentDay.startAt)} />
        </motion.div>
      )}
      <div className="flex justify-center">
        {currentDay ? (
          <Button
            color="danger"
            className="font-semibold"
            isLoading={loadingStop}
            onPress={handelSTopDay}
          >
            Stopé
          </Button>
        ) : (
          <Button
            color="primary"
            className="font-semibold"
            onPress={handelStartDay}
            isLoading={loadingStart}
          >
            Demarée
          </Button>
        )}
      </div>
    </div>
  )
}

export default StartDay

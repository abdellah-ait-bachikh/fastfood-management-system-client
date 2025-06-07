import { Alert, Spinner } from '@heroui/react'
import StartDay from '@renderer/components/day/StartDay'
import { TAppDispatch, TDayInitialState } from '@renderer/lib/types'
import { getDaysData } from '@renderer/redux/apiCall/dayApiCAll'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Days = () => {
  const dispatch = useDispatch<TAppDispatch>()
  const { error } = useSelector((state: { day: TDayInitialState }) => state.day)
  const [loading, setLoading] = useState(true) // default to true

  useEffect(() => {
    getDaysData(dispatch, setLoading)
  }, [])

  if (loading) {
    return (
      <div className="h-[calc(100vh-50px)] w-full flex items-center justify-center">
        <Spinner
          size="lg"
          color="primary"
          label="Chargement"
          classNames={{ label: 'font-semibold' }}
        />
      </div>
    )
  }

  if (error) {
    return <Alert title="Erreur" description={error} color="danger" />
  }

  return (
    <div className="w-full h-full">
      <StartDay />
    </div>
  )
}

export default Days

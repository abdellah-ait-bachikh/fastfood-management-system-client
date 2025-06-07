import { Chip } from '@heroui/react'
import { getTimeDifference } from '@renderer/lib/utils'
import { useEffect, useState } from 'react'

const Timer = ({ startAt = new Date() }: { startAt?: Date }) => {
  const [hour, setHour] = useState(startAt.getHours())
  const [minut, setMinut] = useState(startAt.getMinutes())
  const [second, setSecond] = useState(startAt.getSeconds())
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setHour(now.getHours())
      setMinut(now.getMinutes())
      setSecond(now.getSeconds())
    }
    updateTime()
    const timerIntervale = setInterval(updateTime, 1000)
    return () => clearInterval(timerIntervale)
  }, [])
  return (
    <Chip
      size="lg"
      classNames={{ content: 'font-semibold' }}
      color="warning"
      variant="flat"
      endContent={<span>({getTimeDifference(startAt)})</span>}
    >
      {`${hour}h ${minut}m ${second}s`}
    </Chip>
  )
}

export default Timer

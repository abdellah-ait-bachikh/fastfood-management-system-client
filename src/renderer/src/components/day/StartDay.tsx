import { Button, Chip } from '@heroui/react'
import IconComponent from '@renderer/components/IconComponent'
import { useState } from 'react'
import { LuArrowDownFromLine } from 'react-icons/lu'
import { motion } from 'framer-motion'
import Timer from './Timer'
import { getFullDate, getFullTime } from '@renderer/lib/utils'
const StartDay = () => {
  const [isStarted, setIsSTarted] = useState(false)
  return (
    <div className="flex flex-col items-center gap-2">
      {isStarted && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white  dark:bg-slate-800 p-3 rounded-xl flex flex-col items-center w-fit gap-2 overflow-hidden"
        >
          <Chip size="lg" classNames={{ content: 'font-semibold' }} variant="flat">
            Demarée Le {getFullDate(new Date())} à {getFullTime(new Date())}
          </Chip>
          <IconComponent Icon={LuArrowDownFromLine} />
          <Timer startAt={new Date('2025-06-05 10:19:53.029')} />
        </motion.div>
      )}
      <div className="flex justify-center">
        {isStarted ? (
          <Button color="danger" className="font-semibold" onPress={() => setIsSTarted(false)}>
            Stopé
          </Button>
        ) : (
          <Button color="primary" className="font-semibold" onPress={() => setIsSTarted(true)}>
            Demarée
          </Button>
        )}
      </div>
    </div>
  )
}

export default StartDay

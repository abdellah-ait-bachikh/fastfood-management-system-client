import DaysList from '@renderer/components/day/DaysList'
import StartDay from '@renderer/components/day/StartDay'

const Days = () => {
  // const dispatch = useDispatch<TAppDispatch>()
  return (
    <div className="w-full h-full ">
      <div className='h-[168]'>

      <StartDay />
      </div>
      <DaysList />
    </div>
  )
}

export default Days

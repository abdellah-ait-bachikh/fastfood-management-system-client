import { Tooltip } from '@heroui/react'
import { formatMoneyToMAD } from '../../lib/utils'

const Home = () => {
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <Tooltip
          content={'123,655,100,123,655,100,123,655.00'}
          color="success"
          closeDelay={0}
          size="lg"
          showArrow
          placement="bottom"
        >
          <div className="rounded-2xl border-2 border-slate-400 bg-success-300 p-4 font-bold text-lg flex flex-col items-start">
            <span className="tracking-widest">Vent</span>
            <span className="text-xl w-full text-nowrap text-ellipsis overflow-hidden tracking-wider">
              {formatMoneyToMAD(236551111111456.0)}
            </span>
          </div>
        </Tooltip>
        <Tooltip
          content={'123,655,100,123,655,100,123,655.00'}
          color="default"
          closeDelay={0}
          size="lg"
          showArrow
          placement="bottom"
        >
          <div className="rounded-2xl border-2 border-slate-400 bg-default-300 p-4 font-bold text-lg flex flex-col items-start">
            <span className="tracking-widest">Commandes</span>
            <span className="text-xl w-full text-nowrap text-ellipsis overflow-hidden tracking-wider">
              {formatMoneyToMAD(23655.0)}
            </span>
          </div>
        </Tooltip>
        <Tooltip
          content={'123,655,100,123,655,100,123,655.00'}
          color="warning"
          closeDelay={0}
          size="lg"
          showArrow
          placement="bottom"
        >
          <div className="rounded-2xl border-2 border-slate-400 bg-warning-400 p-4 font-bold text-lg flex flex-col items-start">
            <span className="tracking-widest">livraison</span>
            <span className="text-xl w-full text-nowrap text-ellipsis overflow-hidden tracking-wider">
              {formatMoneyToMAD(23655.0)}
            </span>
          </div>
        </Tooltip>
        <Tooltip
          content={'123,655,100,123,655,100,123,655.00'}
          color="danger"
          closeDelay={0}
          size="lg"
          showArrow
          placement="bottom"
        >
          <div className="rounded-2xl border-2 border-slate-400 bg-danger-400 p-4 font-bold text-lg flex flex-col items-start">
            <span className="tracking-widest">Total</span>
            <span className="text-xl w-full text-nowrap text-ellipsis overflow-hidden tracking-wider">
              {formatMoneyToMAD(23655.0)}
            </span>
          </div>
        </Tooltip>
      </div>
      <div className=''>

      </div>
    </div>
  )
}

export default Home

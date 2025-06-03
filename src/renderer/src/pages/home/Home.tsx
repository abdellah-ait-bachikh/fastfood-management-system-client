import { Tooltip } from '@heroui/react'
import {
  formatShortMoney,
  formatQuantity,
  formatWithSeparators,
  getQuantityColor,
  formatMoneyToMAD
} from '../../lib/utils'
import Quantity from '@renderer/components/Quantity'
import Amounth from '@renderer/components/Money'
import IconComponent from '@renderer/components/IconComponent'
import { LuAlignStartVertical } from 'react-icons/lu'

const Home = () => {
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <Tooltip
          content={formatMoneyToMAD(236551111111456.0)}
          color="success"
          closeDelay={0}
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
          content={formatMoneyToMAD(23655.0)}
          color="default"
          closeDelay={0}
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
          content={formatMoneyToMAD(23655.0)}
          color="warning"
          closeDelay={0}
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
          content={formatWithSeparators(23655)}
          color="danger"
          closeDelay={0}
          showArrow
          placement="bottom"
        >
          <div className="rounded-2xl border-2 border-slate-400 bg-danger-400 p-4 font-bold text-lg flex flex-col items-start">
            <span className="tracking-widest">Annuler</span>
            <span className="text-xl w-full text-nowrap text-ellipsis overflow-hidden tracking-wider">
              {formatWithSeparators(23655)}
            </span>
          </div>
        </Tooltip>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-2">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-2 shadow relative flex flex-col">
          <h1 className="text-2xl font-semibold sticky top-0 flex-1 flex items-center gap-2">
            <IconComponent Icon={LuAlignStartVertical} /> <span>Produits populaires</span>{' '}
          </h1>
          <div className="overflow-hidden overflow-y-auto overflow-x-auto max-h-[400px] mt-2">
            <table className="w-full">
              <thead>
                <tr className="border-b text-xl">
                  <th className="text-left px-2 py-1 text-nowrap tracking-widest">Produit</th>
                  <th className="text-center px-2 py-1 text-nowrap tracking-widest">Quantité</th>
                  <th className="text-center px-2 py-1 text-nowrap tracking-widest">
                    Montant (MAD)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-200 dark:hover:bg-slate-900">
                  <td className="text-lg font-semibold px-2 py-1 text-nowrap">Ma9la sepia</td>
                  <td className="px-2 py-1 text-center">
                    <Quantity
                      variant="shadow"
                      classNames={{ content: 'font-semibold' }}
                      quantity={9845}
                      color={getQuantityColor(9845)}
                    />
                  </td>
                  <td className="px-2 py-1 text-center">
                    {<Amounth classNames={{ content: 'font-semibold' }} amounth={654987465465} />}
                  </td>
                </tr>
                <tr className="hover:bg-gray-200 dark:hover:bg-slate-900">
                  <td className="text-lg font-semibold px-2 py-1 text-nowrap">Ma9la sepia</td>
                  <td className="px-2 py-1 text-center">
                    <Quantity
                      variant="shadow"
                      classNames={{ content: 'font-semibold' }}
                      quantity={15}
                      color={getQuantityColor(15)}
                    />
                  </td>
                  <td className="px-2 py-1 text-center">
                    {<Amounth classNames={{ content: 'font-semibold' }} amounth={465} />}
                  </td>
                </tr>
                <tr className="hover:bg-gray-200 dark:hover:bg-slate-900">
                  <td className="text-lg font-semibold px-2 py-1 text-nowrap">Ma9la sepia</td>
                  <td className="px-2 py-1 text-center">
                    <Quantity
                      variant="shadow"
                      classNames={{ content: 'font-semibold' }}
                      quantity={98}
                      color={getQuantityColor(98)}
                    />
                  </td>
                  <td className="px-2 py-1 text-center">
                    {<Amounth classNames={{ content: 'font-semibold' }} amounth={5646} />}
                  </td>
                </tr>
                <tr className="hover:bg-gray-200 dark:hover:bg-slate-900">
                  <td className="text-lg font-semibold px-2 py-1 text-nowrap">Ma9la sepia</td>
                  <td className="px-2 py-1 text-center">
                    <Quantity
                      variant="shadow"
                      classNames={{ content: 'font-semibold' }}
                      quantity={0}
                      color={getQuantityColor(0)}
                    />
                  </td>
                  <td className="px-2 py-1 text-center">
                    {<Amounth classNames={{ content: 'font-semibold' }} amounth={36587} />}
                  </td>
                </tr>
                <tr className="hover:bg-gray-200 dark:hover:bg-slate-900">
                  <td className="text-lg font-semibold px-2 py-1 text-nowrap">Ma9la sepia</td>
                  <td className="px-2 py-1 text-center">
                    <Quantity
                      variant="shadow"
                      classNames={{ content: 'font-semibold' }}
                      quantity={98}
                      color={getQuantityColor(98)}
                    />
                  </td>
                  <td className="px-2 py-1 text-center">
                    {<Amounth classNames={{ content: 'font-semibold' }} amounth={123658} />}
                  </td>
                </tr>
                <tr className="hover:bg-gray-200 dark:hover:bg-slate-900">
                  <td className="text-lg font-semibold px-2 py-1 text-nowrap">Ma9la sepia</td>
                  <td className="px-2 py-1 text-center">
                    <Quantity
                      variant="shadow"
                      classNames={{ content: 'font-semibold' }}
                      quantity={98}
                      color={getQuantityColor(98)}
                    />
                  </td>
                  <td className="px-2 py-1 text-center">
                    {<Amounth classNames={{ content: 'font-semibold' }} amounth={49465} />}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

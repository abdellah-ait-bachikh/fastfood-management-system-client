import { Alert, Select, SelectItem, Spinner, Tooltip, User } from '@heroui/react'
import {
  formatQuantity,
  formatWithSeparators,
  getQuantityColor,
  formatMoneyToMAD
} from '../../lib/utils'
import Quantity from '@renderer/components/Quantity'
import Amounth from '@renderer/components/Money'
import IconComponent from '@renderer/components/IconComponent'
import { LuAlignStartVertical } from 'react-icons/lu'
import { FaStar } from 'react-icons/fa6'
import { FaMotorcycle } from 'react-icons/fa6'
import ChartSlider from '@renderer/components/home/ChartSlider'
import MountlyPaymentsShart from '@renderer/components/home/MountlyPaymentsShart'
import { useDispatch, useSelector } from 'react-redux'
import { TAppDispatch, THomeInitialState } from '@renderer/lib/types'
import { useEffect, useState } from 'react'
import { getHomeData } from '@renderer/redux/apiCall/homeApiCall'

const Home = () => {
  const dispatch = useDispatch<TAppDispatch>()
  const { summary, error, topPopularProducts, topPopularOffers, topPopularDeleverys, years,mounthlyYearStatus } =
    useSelector((state: { home: THomeInitialState }) => state.home)
  const [loading, setLoading] = useState(false)
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    getHomeData(dispatch, year, setLoading)
  }, [year])
  return (
    <>
      {loading ? (
        <div className="h-[calc(100vh-50px)] w-full flex items-center justify-center">
          <Spinner
            size="lg"
            color="primary"
            label="Chargement"
            classNames={{ label: 'font-semibold' }}
          />
        </div>
      ) : error ? (
        <Alert title="Error" description={error} color="danger" />
      ) : (
        <div className="w-full h-full relative z-[9996]">
          {years && (
            <div className="fixed top-[72px] right-2 w-[100px] z-[9996] ">
              <Select
                label="Année"
                fullWidth
                color="primary"
                variant="flat"
                size="sm"
                defaultSelectedKeys={[year + '']}
                onChange={(e) => setYear(e.target.value ? Number(e.target.value) : 2025)}
              >
                {years.map((item) => (
                  <SelectItem key={item} textValue={item + ''}>
                    {' '}
                    {item}
                  </SelectItem>
                ))}
              </Select>
            </div>
          )}
          <div className="w-full h-full">
            {summary && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                <Tooltip
                  content={formatMoneyToMAD(summary.totaleMoney)}
                  color="success"
                  closeDelay={0}
                  showArrow
                  placement="bottom"
                >
                  <div className="rounded-2xl  bg-success-300 p-4 font-bold text-xl flex flex-col items-start">
                    <span className="tracking-widest">Vent</span>
                    <span className="text-xl w-full text-nowrap text-ellipsis overflow-hidden tracking-wider">
                      {formatMoneyToMAD(summary.totaleMoney)}
                    </span>
                  </div>
                </Tooltip>
                <Tooltip
                  content={formatWithSeparators(summary.ordersCount)}
                  color="default"
                  closeDelay={0}
                  showArrow
                  placement="bottom"
                >
                  <div className="rounded-2xl  bg-default-300 p-4 font-bold text-xl flex flex-col items-start">
                    <span className="tracking-widest">Commandes</span>
                    <span className="text-xl w-full text-nowrap text-ellipsis overflow-hidden tracking-wider">
                      {formatQuantity(summary.ordersCount)}
                    </span>
                  </div>
                </Tooltip>
                <Tooltip
                  content={formatMoneyToMAD(summary.totalDeleveryMoney)}
                  color="warning"
                  closeDelay={0}
                  showArrow
                  placement="bottom"
                >
                  <div className="rounded-2xl  bg-warning-400 p-4 font-bold text-xl flex flex-col items-start">
                    <span className="tracking-widest">livraison</span>
                    <span className="text-xl w-full text-nowrap text-ellipsis overflow-hidden tracking-wider">
                      {formatMoneyToMAD(summary.totalDeleveryMoney)}
                    </span>
                  </div>
                </Tooltip>
                <Tooltip
                  content={formatWithSeparators(summary.dayCounts)}
                  color="danger"
                  closeDelay={0}
                  showArrow
                  placement="bottom"
                >
                  <div className="rounded-2xl  bg-danger-400 p-4 font-bold text-xl flex flex-col items-start">
                    <span className="tracking-widest">Journée</span>
                    <span className="text-xl w-full text-nowrap text-ellipsis overflow-hidden tracking-wider">
                      {formatQuantity(summary.dayCounts)}
                    </span>
                  </div>
                </Tooltip>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-2">
              {topPopularProducts && (
                <div className="bg-white dark:bg-gray-950 rounded-xl p-2 shadow relative flex flex-col ">
                  <h1 className="text-2xl font-semibold sticky top-0  flex items-center gap-2">
                    <IconComponent Icon={LuAlignStartVertical} />{' '}
                    <span>Produits populaires</span>{' '}
                  </h1>
                  <div className="overflow-hidden overflow-y-auto overflow-x-auto max-h-[400px] mt-2">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b text-xl">
                          <th className="text-left px-2 py-1 text-nowrap tracking-widest">
                            Produit
                          </th>
                          <th className="text-center px-2 py-1 text-nowrap tracking-widest">
                            Quantité
                          </th>
                          <th className="text-center px-2 py-1 text-nowrap tracking-widest">
                            Montant (MAD)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {topPopularProducts.length > 0 ? (
                          topPopularProducts.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-200 dark:hover:bg-slate-900">
                              <td className="text-lg font-semibold px-2 py-1 text-nowrap">{`${item.category.name} ${item.name}`}</td>
                              <td className="px-2 py-2 text-center">
                                <Quantity
                                  variant="shadow"
                                  classNames={{ content: 'font-semibold' }}
                                  quantity={item.quantity}
                                  color={getQuantityColor(item.quantity)}
                                />
                              </td>
                              <td className="px-2 py-2 text-center">
                                {
                                  <Amounth
                                    classNames={{ content: 'font-semibold' }}
                                    amounth={item.totalMoney}
                                  />
                                }
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={3}>
                              <div className="w-full text-center py-6">
                                <span className="text-xl text-semibold ">Aucun Produit</span>
                              </div>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {topPopularOffers && (
                <div className="bg-white dark:bg-gray-950 rounded-xl p-2 shadow relative flex flex-col ">
                  <h1 className="text-2xl font-semibold sticky top-0  flex items-center gap-2">
                    <IconComponent Icon={LuAlignStartVertical} />{' '}
                    <span>Packes populaires</span>{' '}
                  </h1>
                  <div className="overflow-hidden overflow-y-auto overflow-x-auto max-h-[400px] mt-2">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b text-xl">
                          <th className="text-left px-2 py-1 text-nowrap tracking-widest">Packe</th>
                          <th className="text-center px-2 py-1 text-nowrap tracking-widest">
                            Quantité
                          </th>
                          <th className="text-center px-2 py-1 text-nowrap tracking-widest">
                            Montant (MAD)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {topPopularOffers.length > 0 ? (
                          topPopularOffers.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-200 dark:hover:bg-slate-900">
                              <td className="text-lg font-semibold px-2 py-1 text-nowrap">{`${item.name}`}</td>
                              <td className="px-2 py-2 text-center">
                                <Quantity
                                  variant="shadow"
                                  classNames={{ content: 'font-semibold' }}
                                  quantity={item.quantity}
                                  color={getQuantityColor(item.quantity)}
                                />
                              </td>
                              <td className="px-2 py-2 text-center">
                                {
                                  <Amounth
                                    classNames={{ content: 'font-semibold' }}
                                    amounth={item.totalMoney}
                                  />
                                }
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={3}>
                              <div className="w-full text-center py-6">
                                <span className="text-xl text-semibold ">Aucun Packe</span>
                              </div>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 gap-2">
              {topPopularDeleverys && (
                <div className="bg-white dark:bg-gray-950 rounded-xl p-2 shadow relative flex flex-col ">
                  <h1 className="text-2xl font-semibold sticky top-0  flex items-center gap-2">
                    <IconComponent Icon={FaStar} /> <span>Livreurs tendance</span>{' '}
                  </h1>
                  <div className="overflow-hidden overflow-y-auto overflow-x-auto max-h-[400px] mt-2">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b text-xl">
                          <th className="text-left px-2 py-1 text-nowrap tracking-widest">
                            Livreur
                          </th>
                          <th className="text-center px-2 py-1 text-nowrap tracking-widest">
                            Quantité
                          </th>
                          <th className="text-center px-2 py-1 text-nowrap tracking-widest">
                            Montant (MAD)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {topPopularDeleverys.length > 0 ? (
                          topPopularDeleverys.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-200 dark:hover:bg-slate-900">
                              <td className="text-lg font-semibold px-2 py-1 text-nowrap">
                                <User
                                  name={item.userName}
                                  avatarProps={{ icon: <FaMotorcycle size={22} /> }}
                                />
                              </td>
                              <td className="px-2 py-2 text-center">
                                <Quantity
                                  variant="shadow"
                                  classNames={{ content: 'font-semibold' }}
                                  quantity={item.paymentsCount}
                                  color={getQuantityColor(item.paymentsCount)}
                                />
                              </td>
                              <td className="px-2 py-2 text-center">
                                {
                                  <Amounth
                                    classNames={{ content: 'font-semibold' }}
                                    amounth={item.totalMoney}
                                  />
                                }
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={3}>
                              <div className="w-full text-center py-6">
                                <span className="text-xl text-semibold ">Aucun Livreur</span>
                              </div>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              <div>
                <ChartSlider />
              </div>
            </div>
            {mounthlyYearStatus && <MountlyPaymentsShart mounthlyYearStatus={mounthlyYearStatus} />}
          </div>
        </div>
      )}
    </>
  )
}

export default Home

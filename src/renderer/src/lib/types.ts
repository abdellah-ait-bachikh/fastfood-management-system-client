import store from '../redux/store'

export type TAppDispatch = typeof store.dispatch
export interface TAppInitialState {
  asideOpen: boolean
  theme: 'light' | 'dark'
}

export interface THomeInitialState {
  summary: {
    totaleMoney: number
    totalDeleveryMoney: number
    ordersCount: number
    dayCounts: number
  } | null ,
  error :null | string
}

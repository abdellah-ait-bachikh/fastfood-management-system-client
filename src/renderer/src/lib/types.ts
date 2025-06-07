import store from '../redux/store'

export type TAppDispatch = typeof store.dispatch
export interface TAppInitialState {
  asideOpen: boolean
  theme: 'light' | 'dark'
}

export interface THomeInitialState {
  summary: null | {
    totaleMoney: number
    totalDeleveryMoney: number
    ordersCount: number
    dayCounts: number
  }
  error: null | string
  topPopularProducts:
    | null
    | {
        id: number
        name: string
        category: { name: string; imageUri: string }
        quantity: number
        totalMoney: number
      }[]
  topPopularOffers:
    | null
    | {
        id: number
        name: string
        quantity: number
        totalMoney: number
        imageUri: string
      }[]
  topPopularDeleverys:
    | null
    | { id: number; userName: string; totalMoney: number; paymentsCount: number }[]
  mounthlyYearStatus:
    | null
    | {
        month: number
        paymentsCount: number
        totalMoney: number
      }[]
  years: null | number[]
}

export interface TDayInitialState {
  currentDay: null | {
    id: number
    startAt: string
    stopAt: string | null
  } 
  error : null | string
}

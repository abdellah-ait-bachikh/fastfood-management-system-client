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
        totaleMoney: number
      }[]
}

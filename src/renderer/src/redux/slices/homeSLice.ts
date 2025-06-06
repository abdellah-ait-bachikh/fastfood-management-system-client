import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { THomeInitialState } from '@renderer/lib/types'

const initialState: THomeInitialState = {
  summary: null,
  error: null,
  topPopularProducts: null,
  topPopularOffers: null,
  topPopularDeleverys: null
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setSummary(state, action: PayloadAction<THomeInitialState['summary']>) {
      state.summary = action.payload
    },
    setError(state, action: PayloadAction<THomeInitialState['error']>) {
      state.error = action.payload
    },
    setTopPopularProducts(state, action: PayloadAction<THomeInitialState['topPopularProducts']>) {
      state.topPopularProducts = action.payload
    },
    setTopPopularOffers(state, action: PayloadAction<THomeInitialState['topPopularOffers']>) {
      state.topPopularOffers = action.payload
    },
    setTopPopularDeleverys(state, action: PayloadAction<THomeInitialState['topPopularDeleverys']>) {
      state.topPopularDeleverys = action.payload
    }
  }
})

export const { setSummary, setError, setTopPopularProducts, setTopPopularOffers,setTopPopularDeleverys } =
  homeSlice.actions
export const homeReducer = homeSlice.reducer

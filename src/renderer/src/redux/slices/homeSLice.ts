import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { THomeInitialState } from '@renderer/lib/types'

const initialState: THomeInitialState = { summary: null, error: null, topPopularProducts: null }

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
    }
  }
})

export const { setSummary, setError,setTopPopularProducts } = homeSlice.actions
export const homeReducer = homeSlice.reducer

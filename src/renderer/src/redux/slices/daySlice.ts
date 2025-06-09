import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {TDayInitialState } from '@renderer/lib/types'

const initialState: TDayInitialState = {
  currentDay: null,
  error: null,
  days: null,
  pagination: null
}

const daySlice = createSlice({
  name: 'day',
  initialState,
  reducers: {
    setCurrentDay(state, action: PayloadAction<TDayInitialState['currentDay']>) {
      state.currentDay = action.payload
    },
    setError(state, action: PayloadAction<TDayInitialState['error']>) {
      state.error = action.payload
    },
    setDays(state, action: PayloadAction<TDayInitialState['days']>) {
      state.days = action.payload
    },
    setPagination(state, action: PayloadAction<TDayInitialState['pagination']>) {
      state.pagination = action.payload
    },
    addDay(
      state,
      action: PayloadAction<{
        totalPaymentsMoney: number
        totalDeleveryMoney: number
        _count: {
          paymentsProducts: number
          paymentsOffers: number
        }
        id: number
        startAt: Date
        stopAt: Date | null
      }>
    ) {
      if (state.days !== null) {
        state.days = [action.payload, ...state.days]
      }
    },
    addStopedDay(
      state,
      action: PayloadAction<{
        totalPaymentsMoney: number
        totalDeleveryMoney: number
        _count: {
          paymentsProducts: number
          paymentsOffers: number
        }
        id: number
        startAt: Date
        stopAt: Date | null
      }>
    ) {
      if (state.days !== null) {
        state.days = state.days.map((item) =>
          item.id === action.payload.id ? action.payload : item
        )
      }
    }
  }
})

export const { setCurrentDay, setError, setDays, setPagination, addDay,addStopedDay } = daySlice.actions
export const dayReducer = daySlice.reducer

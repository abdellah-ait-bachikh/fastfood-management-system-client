import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TDayInitialState } from '@renderer/lib/types'

const initialState: TDayInitialState = { currentDay: null,error:null }

const daySlice = createSlice({
  name: 'day',
  initialState,
  reducers: {
    setCurrentDay(state, action: PayloadAction<TDayInitialState['currentDay']>) {
      state.currentDay = action.payload
    } ,
    setError(state,action :PayloadAction<TDayInitialState['error']>){
        state.error = action.payload
    }
  }
})

export const { setCurrentDay ,setError} = daySlice.actions
export const dayReducer = daySlice.reducer

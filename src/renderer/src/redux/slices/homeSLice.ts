import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { THomeInitialState } from '@renderer/lib/types'

const initialState: THomeInitialState = { summary: null, error: null }

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setSummary(state, action: PayloadAction<THomeInitialState['summary']>) {
      state.summary = action.payload
    },
    setError(state, action: PayloadAction<THomeInitialState['error']>) {
      state.error = action.payload
    }
  }
})

export const { setSummary ,setError} = homeSlice.actions
export const homeReducer = homeSlice.reducer

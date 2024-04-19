import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';

export interface AuthState {
  profile: string;
}

const initialState: AuthState = {
  profile: 'John Doe',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {

  },
})

// Action creators are generated for each case reducer function
// export const { } = authSlice.actions

export const selectAuthState = (state: RootState) => state.authState

export default authSlice.reducer
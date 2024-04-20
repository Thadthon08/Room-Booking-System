import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { login } from '../../services/auth.service';
import { LoginFormInput } from '../../interface/login-form-input.type';
import { LoginErrorResponse, LoginResponse } from '../../interface/login.type';
import {  AxiosError } from '../../services/http.service';

export interface AuthState {
    email: string;
    profile: string;
    loginResponse: LoginResponse | null
}

const initialState: AuthState = {
    email: 'John@Doe Example',
    profile: 'John Doe Example',  
    loginResponse: null
}

export const loginThunk = createAsyncThunk<LoginResponse, LoginFormInput, {rejectValue: LoginErrorResponse}>
('auth/loginThunkStatus' , 
  async (user: LoginFormInput, {rejectWithValue}) => {
      try {
        const response = await login(user.email, user.password);
        // console.log(response.data);
        localStorage.setItem('token', JSON.stringify(response.data))

        return response.data;
      } 
      catch (error: any) {
        let err : AxiosError<LoginErrorResponse> = error;
        if(!err.response){
          throw err;
        }
        return rejectWithValue(err.response.data)
      }
  })


export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    // action  แก้ไข State
    updateProfileAction: (state) => {
      state.profile = 'Marry Doe Example';
      state.email = 'marry@Doe Example';
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(loginThunk.fulfilled, (state, action: PayloadAction<LoginResponse | null>) => {
  //     state.loginResponse = action.payload;   //กรณีต้องการใช้ Globla state ใช้  unwarp แทนได้
  //   })
  // }
})

// Action creators are generated for each case reducer function
export const { updateProfileAction } = authSlice.actions

export const selectAuthState = (state: RootState) => state.authState

export default authSlice.reducer
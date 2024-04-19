//export hook react redux
import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { ThunkAction, UnknownAction } from '@reduxjs/toolkit'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()    // call Action
export const useAppSelector = useSelector.withTypes<RootState>()      //call state 


export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  UnknownAction
>
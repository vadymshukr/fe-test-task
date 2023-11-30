import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import routerReducer from 'src/services/router/store'
import userListSlice from 'src/services/customers/store'
import singleCustomerSlice from 'src/services/single-customer/store'

export const store = configureStore({
    reducer: {
        router: routerReducer,
        userList: userListSlice,
        singleCustomer: singleCustomerSlice
    }
})
export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch

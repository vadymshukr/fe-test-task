import { createSlice } from '@reduxjs/toolkit'
import { User } from 'src/services/customers/types.ts'
import { AppState } from 'src/store'

type State = {
    currentUser: User | null
}

const initialState: State = {
    currentUser: null
}

const singleCustomer = createSlice({
    name: 'singleCustomer',
    initialState,
    reducers: {
        saveCurrentUser(_, action) {
            return { currentUser: action.payload}
        },
    }
})

export const { saveCurrentUser } = singleCustomer.actions

export default singleCustomer.reducer

export const selectCurrentUser = (state: AppState) => state.singleCustomer.currentUser

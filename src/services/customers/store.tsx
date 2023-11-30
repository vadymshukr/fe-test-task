import { createSlice } from '@reduxjs/toolkit'
import { User } from 'src/services/customers/types.ts'
import { AppState } from 'src/store'

type State = {
    users: User[]
}

const initialState: State = {
    users: []
}

const userListSlice = createSlice({
    name: 'userList',
    initialState,
    reducers: {
        fetchUserList(_, action) {
            return { users: action.payload}
        },
    }
})

export const { fetchUserList } = userListSlice.actions

export default userListSlice.reducer

export const selectUserList = (state: AppState) => state.userList.users

import { createSlice } from '@reduxjs/toolkit'
import { AppPageEnum } from 'src/services/router/types.ts'

type State = {
    currentScreen: AppPageEnum
}

const initialState: State = {
    currentScreen: AppPageEnum.UserList
}

const routerSlice = createSlice({
    name: 'router',
    initialState,
    reducers: {
        goToUserListPage() {
            return { currentScreen: AppPageEnum.UserList }
        },
        goToSingleUserPage() {
            return { currentScreen: AppPageEnum.SingleUser }
        },
    }
})

export const { goToUserListPage, goToSingleUserPage } = routerSlice.actions

export default routerSlice.reducer

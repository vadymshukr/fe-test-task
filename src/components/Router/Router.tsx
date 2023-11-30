import SingleUser from 'src/pages/SingleUser/SingleUser.tsx'
import UserList from 'src/pages/UserList/UserList.tsx'
import { AppPageEnum } from 'src/services/router/types.ts'
import { useAppSelector } from 'src/store'

function Router() {
    const currentScreen = useAppSelector(state => state.router.currentScreen)

    switch (currentScreen) {
        case AppPageEnum.SingleUser:
            return <SingleUser />
        default:
            return <UserList />
    }
}

export default Router

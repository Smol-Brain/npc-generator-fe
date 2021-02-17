import { ReactComponent as CommonIcons } from 'assets/icons/common-icons.svg'
import { UserProvider, UserContext } from 'components/contexts/UserProvider'
import { Home } from 'components/pages/Home'
import { GlobalStyles } from 'styles/globalStyles'

export const App = () => {
    return (
        <UserProvider>
            <GlobalStyles />
            <CommonIcons />
            <Home />
        </UserProvider>
    )
}

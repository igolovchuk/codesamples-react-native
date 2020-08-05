import { createDrawerNavigator } from 'react-navigation-drawer'
import HomeStack from './homeStack'
import AboutStack from './aboutStack'
import { createAppContainer } from 'react-navigation'

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack
    },
    About: {
        screen: AboutStack
    }
});

export default createAppContainer(RootDrawerNavigator);
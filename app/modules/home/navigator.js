import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from './screens/main';
import MainScreenNavigator from './screens/chat/navigator/index';
import Profile from './screens/calendar';
import SideBar from './screens/sidebar/sidebar';

const HomeScreenRouter = DrawerNavigator(
    {
        Home: { screen: HomeScreen },
        Chat: { screen: MainScreenNavigator },
        Calendar: { screen: Profile }
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);

export default HomeScreenRouter;

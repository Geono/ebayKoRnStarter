import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from './screens/home';
import SideBar from './screens/sidebar/sidebar';

const HomeScreenRouter = DrawerNavigator(
    {
        Home: { screen: HomeScreen },
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);

export default HomeScreenRouter;

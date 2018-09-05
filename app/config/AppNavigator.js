import React from 'react';
import { StackNavigator } from 'react-navigation';

import ImgsOverview from '../containers/ImgsOverview';

import ImgsDetails from '../components/ImgsDetails';


export const AppNavigator = StackNavigator({
    Main: { screen: ImgsOverview },
    ImgsDetails: { screen: ImgsDetails },
}, {
    initialRouteName: 'Main',
});

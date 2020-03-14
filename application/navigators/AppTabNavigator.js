import * as React from 'react';
import { Icon } from 'react-native-magnus';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStackNavigator';

const Tab = createBottomTabNavigator();

const AppTabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: '#2963FF',
    }}>
    <Tab.Screen
      name="Home"
      component={HomeStack}
      options={{
        tabBarIcon: options => {
          return (
            <Icon
              fontSize="text700"
              color={options.focused ? 'primary' : 'gray400'}
              name="home"
            />
          );
        },
      }}
    />
  </Tab.Navigator>
);

export default AppTabNavigator;

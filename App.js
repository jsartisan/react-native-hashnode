import * as React from 'react';
import { ThemeProvider } from 'react-native-magnus';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import AppTabNavigator from './application/navigators/AppTabNavigator';

// this is our custom theme
const theme = {
  colors: {
    primary: '#2963FF',
  },
};

// this is react-navigation theme
const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer theme={navigationTheme}>
        <ThemeProvider theme={theme}>
          <AppTabNavigator />
        </ThemeProvider>
      </NavigationContainer>
    );
  }
}

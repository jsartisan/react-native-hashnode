import React from 'react';
import { Button, Image, Div, Icon } from 'react-native-magnus';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerLeft: () => (
            <Image
              ml="lg"
              h={25}
              w={25}
              source={require('../images/logo.png')}
            />
          ),
          headerRight: () => (
            <Div row alignItems="center">
              <Button
                row
                h={30}
                w={30}
                rounded="circle"
                bg="primary"
                p="sm"
                alignSelf="center">
                <Icon name="plus" color="white" />
              </Button>
              <Button
                bg="transparent"
                ml="lg"
                mr="lg"
                p="none"
                alignSelf="center">
                <Image
                  h={30}
                  w={30}
                  rounded="circle"
                  source={{
                    uri:
                      'https://hashnode.imgix.net/res/hashnode/image/upload/v1574853913314/L53Qr3_ma.png?w=90&h=90&fit=crop&crop=faces&auto=format&q=60',
                  }}
                />
              </Button>
            </Div>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

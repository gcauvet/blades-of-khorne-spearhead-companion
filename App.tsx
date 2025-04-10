import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import '@expo/metro-runtime';

import HomeScreen from './src/screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();

const App = (): JSX.Element => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

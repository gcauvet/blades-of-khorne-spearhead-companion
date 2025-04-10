import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import '@expo/metro-runtime';

import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import PreBattleSequence from './src/components/PreBattleSequence/PreBattleSequence';

const Stack = createStackNavigator();

const App = (): JSX.Element => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='PreBattleSequence' component={PreBattleSequence} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

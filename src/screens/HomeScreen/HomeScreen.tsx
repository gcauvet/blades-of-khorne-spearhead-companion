import React, { FC } from 'react';
import { View } from 'react-native';

import homeScreenStyle from './styles/HomeScreen.styles';

import ExampleComponent from '../../components/ExampleComponent';

const HomeScreen: FC = () => (
  <View style={homeScreenStyle.container}>
    <ExampleComponent title='Welcome to the Home Screen!' />
  </View>
);

export default HomeScreen;

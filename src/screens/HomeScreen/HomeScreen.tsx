import React, { FC } from 'react';
import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import homeScreenStyle from './styles/HomeScreen.styles';
import { HomeScreenNavigationProp } from './types/HomeScreen.types';

const HomeScreen: FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={homeScreenStyle.container}>
      <Button title='Go to Pre-Battle Sequence' onPress={() => navigation.navigate('PreBattleSequence')} />
    </View>
  );
};

export default HomeScreen;

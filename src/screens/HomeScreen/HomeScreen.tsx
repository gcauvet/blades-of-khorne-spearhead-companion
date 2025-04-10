import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';

import { HomeScreenNavigationProp } from './types/HomeScreen.types';
import { HomeButton, HomeContainer } from './styles/HomeScreen.styles';

const HomeScreen: FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <HomeContainer>
      <HomeButton title='Go to Pre-Battle Sequence' onPress={() => navigation.navigate('PreBattleSequence')} />
    </HomeContainer>
  );
};

export default HomeScreen;

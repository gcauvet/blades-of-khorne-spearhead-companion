import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import { useNavigation } from '@react-navigation/native';

import { HomeScreenNavigationProp } from './types/HomeScreen.types';
import { HomeButton, HomeContainer } from './styles/HomeScreen.styles';

const HomeScreen: FC = () => {
  const { formatMessage } = useIntl();

  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <HomeContainer>
      <HomeButton title={formatMessage({ id: 'goToPreBattleSequenceButton' })} onPress={() => navigation.navigate('PreBattleSequence')} />
    </HomeContainer>
  );
};

export default HomeScreen;

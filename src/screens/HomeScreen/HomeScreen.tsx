import React, { FC } from 'react';

import { useIntl } from 'react-intl';
import { useNavigation } from '@react-navigation/native';

import Home from './components/Home';
import { HomeScreenNavigationProp } from './types/HomeScreen.types';

const HomeScreen: FC = () => {
  const { formatMessage } = useIntl();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return <Home formatMessage={formatMessage} navigation={navigation} />;
};

export default HomeScreen;

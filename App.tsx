import React from 'react';
import { IntlProvider } from 'react-intl';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import '@expo/metro-runtime';

import enMessages from './src/intl/en';
import frMessages from './src/intl/fr';

import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import PreBattleSequenceScreen from './src/screens/PreBattleSequenceScreen/PreBattleSequenceScreen';

const messages = {
  en: enMessages,
  fr: frMessages,
};

const { Navigator, Screen } = createStackNavigator();

const App = (): JSX.Element => {
  const locale = 'en';

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <NavigationContainer>
        <Navigator initialRouteName='Home'>
          <Screen name='Home' component={HomeScreen} />
          <Screen name='PreBattleSequence' component={PreBattleSequenceScreen} />
        </Navigator>
      </NavigationContainer>
    </IntlProvider>
  );
};

export default App;

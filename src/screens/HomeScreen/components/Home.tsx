import { FC } from 'react';

import { HomeProps } from '../types/Home.types';
import { HomeButton, HomeContainer } from '../styles/HomeScreen.styles';

const Home: FC<HomeProps> = ({ formatMessage, navigation }): JSX.Element => (
  <HomeContainer>
    <HomeButton title={formatMessage({ id: 'goToPreBattleSequenceButton' })} onPress={() => navigation.navigate('PreBattleSequence')} />
  </HomeContainer>
);

export default Home;

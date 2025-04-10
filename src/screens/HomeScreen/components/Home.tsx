import { FC } from 'react';

import { HomeProps } from '../types/Home.types';
import { GoToPreBattleSequenceButton, HomeContainer } from '../styles/HomeScreen.styles';

const Home: FC<HomeProps> = ({ formatMessage, navigation }): JSX.Element => (
  <HomeContainer>
    <GoToPreBattleSequenceButton title={formatMessage({ id: 'goToPreBattleSequenceButton' })} onPress={() => navigation.navigate('PreBattleSequence')} />
  </HomeContainer>
);

export default Home;

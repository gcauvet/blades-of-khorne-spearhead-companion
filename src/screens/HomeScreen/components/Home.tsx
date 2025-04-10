import { FC } from 'react';
import { FormattedMessage } from 'react-intl';

import { HomeProps } from '../types/Home.types';
import { HomeDescription, HomeTitle, Footer, GoToPreBattleSequenceButton, HomeContainer, Logo, ButtonText } from '../styles/HomeScreen.styles';

const Home: FC<HomeProps> = ({ navigation }): JSX.Element => (
  <HomeContainer>
    <HomeTitle>
      <FormattedMessage id='homeTitle' />
    </HomeTitle>

    <Logo />

    <HomeDescription>
      <FormattedMessage id='appDescription' />
    </HomeDescription>

    <GoToPreBattleSequenceButton onPress={() => navigation.navigate('PreBattleSequence')}>
      <ButtonText>
        <FormattedMessage id='goToPreBattleSequenceButton' />
      </ButtonText>
    </GoToPreBattleSequenceButton>

    <Footer>
      <FormattedMessage id='homeFooter' />
    </Footer>
  </HomeContainer>
);

export default Home;

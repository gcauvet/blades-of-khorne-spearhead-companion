import { useIntl } from 'react-intl';
import { useNavigation } from '@react-navigation/native';

import { HomeScreenNavigationProp } from '../../screens/HomeScreen/types/HomeScreen.types';
import { HomeButton, HomeContainer } from '../../screens/HomeScreen/styles/HomeScreen.styles';

const Home = (): JSX.Element => {
  const { formatMessage } = useIntl();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <HomeContainer>
      <HomeButton title={formatMessage({ id: 'goToPreBattleSequenceButton' })} onPress={() => navigation.navigate('PreBattleSequence')} />
    </HomeContainer>
  );
};

export default Home;

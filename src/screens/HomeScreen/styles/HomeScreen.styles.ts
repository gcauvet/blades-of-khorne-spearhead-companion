import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';

import khorneLogo from '../../../assets/images/home/khorne-logo.png';

export const HomeContainer = styled(LinearGradient as unknown as React.ComponentType).attrs(() => ({
  colors: ['#8B0000', '#000000'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const GoToPreBattleSequenceButton = styled(TouchableOpacity)`
  background-color: #d32f2f;
  padding: 15px 30px;
  border-radius: 8px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  elevation: 5;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  font-family: 'UnicialAntiqua';
  text-transform: uppercase;
`;

export const Logo = styled.Image.attrs({
  source: khorneLogo,
})`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
`;

export const HomeDescription = styled.Text`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
  font-family: 'UnicialAntiqua';
`;

export const HomeTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff;
  text-align: center;
  font-family: 'Cinzel';
`;

export const Footer = styled.Text`
  margin-top: 20px;
  font-size: 14px;
  text-align: center;
  color: #d32f2f;
  font-style: italic;
  font-family: 'Cinzel';
`;

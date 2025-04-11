import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const PreBattleSequenceContainer = styled(LinearGradient as unknown as React.ComponentType).attrs(() => ({
  colors: ['#8B0000', '#000000'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
}))`
  flex: 1;
  padding: 20px;
`;

export const PreBattleSequenceList = styled.View`
  margin-bottom: 20px;
`;

export const PreBattleSequenceItem = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
  line-height: 22px;
  color: #fff;
  font-family: 'UnicialAntiqua';
`;

export const PreBattleSequenceTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #fff;
  text-align: center;
  font-family: 'Cinzel';
`;

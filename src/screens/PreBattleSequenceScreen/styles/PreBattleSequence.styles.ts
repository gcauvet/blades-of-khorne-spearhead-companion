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

export const AbilityBlockWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const AbilityBlock = styled.TouchableOpacity<{ isSelected: boolean }>`
  background-color: ${({ isSelected }) => (isSelected ? '#d32f2f' : '#333')}; /* Red if selected, dark gray otherwise */
  padding: 15px;
  margin: 10px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border: ${({ isSelected }) => (isSelected ? '2px solid #fff' : 'none')}; /* Add a border if selected */
  width: 45%; /* Ensure blocks take up a percentage of the available space */
  flex-grow: 1; /* Allow blocks to grow dynamically based on content */
  align-self: stretch; /* Ensure all blocks stretch to the same height in their row */
`;

export const AbilityBlockText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: 'UncialAntiqua';
  text-align: center;
`;

export const AbilityBlockDescription = styled.Text`
  color: #ccc; /* Light gray for the description */
  font-size: 14px;
  font-family: 'MedievalSharp';
  text-align: center;
  margin-top: 5px;
`;

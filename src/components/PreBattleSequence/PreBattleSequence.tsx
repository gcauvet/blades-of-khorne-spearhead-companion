import React from 'react';
import { View, Text } from 'react-native';
import preBattleSequenceStyle from './styles/PreBattleSequence.styles';

const PreBattleSequence: React.FC = () => {
  const sequenceSteps = [
    'Roll off. Winner chooses who is attacker and who is defender.',
    'Attacker picks regiment ability and enhancement, then defender does so.',
    'Defender chooses Aqshy or Ghyran side of realm battlefield.',
    'Defender picks deployment map (horizontal or diagonal) and chooses which territory is theirs.',
    `Defender sets up 1 large and 1 small terrain feature. Then attacker does the same.
    Each terrain feature must be set up wholly within friendly territory, more than 6" from all other terrain features and more than 3" from both long battlefield edges and enemy territory. 
    Terrain features cannot be set up on objectives.`,
    'Attacker sets up their army first, followed by the defender. Each unit must be set up wholly within friendly territory and more than 6" from enemy territory.',
  ];

  return (
    <View style={preBattleSequenceStyle.container}>
      <Text>Pre-Battle Sequence</Text>
      <ol>
        {sequenceSteps.map((step, index) => (
          <li style={preBattleSequenceStyle.list}>{step}</li>
        ))}
      </ol>
    </View>
  );
};

export default PreBattleSequence;

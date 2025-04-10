import React from 'react';
import { PreBattleSequenceContainer, PreBattleSequenceItem, PreBattleSequenceList, PreBattleSequenceTitle } from './styles/PreBattleSequence.styles';

const PreBattleSequence: React.FC = () => {
  const sequenceSteps = [
    { id: 'step1', text: 'Roll off. Winner chooses who is attacker and who is defender.' },
    { id: 'step2', text: 'Attacker picks regiment ability and enhancement, then defender does so.' },
    { id: 'step3', text: 'Defender chooses Aqshy or Ghyran side of realm battlefield.' },
    { id: 'step4', text: 'Defender picks deployment map (horizontal or diagonal) and chooses which territory is theirs.' },
    {
      id: 'step5',
      text: `Defender sets up 1 large and 1 small terrain feature. Then attacker does the same. Each terrain feature must be set up wholly within friendly territory, more than 6" from all other terrain features and more than 3" from both long battlefield edges and enemy territory. Terrain features cannot be set up on objectives.`,
    },
    { id: 'step6', text: 'Attacker sets up their army first, followed by the defender. Each unit must be set up wholly within friendly territory and more than 6" from enemy territory.' },
  ];

  return (
    <PreBattleSequenceContainer>
      <PreBattleSequenceTitle>Pre-Battle Sequence</PreBattleSequenceTitle>
      <PreBattleSequenceList>
        {sequenceSteps.map(({ id, text }) => (
          <PreBattleSequenceItem key={id}>{text}</PreBattleSequenceItem>
        ))}
      </PreBattleSequenceList>
    </PreBattleSequenceContainer>
  );
};

export default PreBattleSequence;

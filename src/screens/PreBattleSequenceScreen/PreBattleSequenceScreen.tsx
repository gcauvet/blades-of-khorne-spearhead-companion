import React, { FC, useState } from 'react';

import { Abilities, Enhancements } from './types/PreBattleSequence.types';

import useTranslationTitle from '../../hooks/useTranslationTitle';

import PreBattleSequence from './components/PreBattleSequence';

const PreBattleSequenceScreen: FC = () => {
  const { BLOOD_WOKEN_RUNES } = Abilities;
  const { UNHOLY_FLAMES } = Enhancements;

  const setNavigationTitle = useTranslationTitle();

  setNavigationTitle('preBattleSequenceTitle');

  const [selectedAbility, setSelectedAbility] = useState<string>(BLOOD_WOKEN_RUNES);
  const [selectedEnhancement, setSelectedEnhancement] = useState<string>(UNHOLY_FLAMES);

  const handleSelectAbility = (ability: string): void => {
    setSelectedAbility(ability);
  };

  const handleSelectEnhancement = (enhancement: string): void => {
    setSelectedEnhancement(enhancement);
  };

  const sequenceStepsIds = [
    { id: 'preBattleSequenceStep1' },
    { id: 'preBattleSequenceStep2' },
    { id: 'preBattleSequenceStep3' },
    { id: 'preBattleSequenceStep4' },
    { id: 'preBattleSequenceStep5' },
    { id: 'preBattleSequenceStep6' },
    { id: 'preBattleSequenceStep7' },
    { id: 'preBattleSequenceStep8' },
  ];

  return (
    <PreBattleSequence
      sequenceStepsIds={sequenceStepsIds}
      selectedAbility={selectedAbility}
      selectedEnhancement={selectedEnhancement}
      handleSelectAbility={handleSelectAbility}
      handleSelectEnhancement={handleSelectEnhancement}
      abilities={Abilities}
      enhancements={Enhancements}
    />
  );
};

export default PreBattleSequenceScreen;

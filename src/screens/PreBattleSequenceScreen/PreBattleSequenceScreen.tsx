import React, { FC, useState } from 'react';

import { Abilities } from './types/PreBattleSequence.types';

import useTranslationTitle from '../../hooks/useTranslationTitle';

import PreBattleSequence from './components/PreBattleSequence';

const PreBattleSequenceScreen: FC = () => {
  const { BLOOD_WOKEN_RUNES } = Abilities;

  const setNavigationTitle = useTranslationTitle();

  setNavigationTitle('preBattleSequenceTitle');

  const [selectedAbility, setSelectedAbility] = useState<string | null>(BLOOD_WOKEN_RUNES);

  const handleSelectAbility = (ability: string): void => {
    setSelectedAbility(ability);
  };

  const sequenceStepsIds = [
    { id: 'preBattleSequenceStep1' },
    { id: 'preBattleSequenceStep2' },
    { id: 'preBattleSequenceStep3' },
    { id: 'preBattleSequenceStep4' },
    { id: 'preBattleSequenceStep5' },
    { id: 'preBattleSequenceStep6' },
  ];

  return <PreBattleSequence sequenceStepsIds={sequenceStepsIds} selectedAbility={selectedAbility} handleSelectAbility={handleSelectAbility} abilities={Abilities} />;
};

export default PreBattleSequenceScreen;

import React, { FC } from 'react';

import useTranslationTitle from '../../hooks/useTranslationTitle';

import PreBattleSequence from './components/PreBattleSequence';

const PreBattleSequenceScreen: FC = () => {
  const setNavigationTitle = useTranslationTitle();

  setNavigationTitle('preBattleSequenceTitle');

  const sequenceStepsIds = [
    { id: 'preBattleSequenceStep1' },
    { id: 'preBattleSequenceStep2' },
    { id: 'preBattleSequenceStep3' },
    { id: 'preBattleSequenceStep4' },
    { id: 'preBattleSequenceStep5' },
    { id: 'preBattleSequenceStep6' },
  ];

  return <PreBattleSequence sequenceStepsIds={sequenceStepsIds} />;
};

export default PreBattleSequenceScreen;

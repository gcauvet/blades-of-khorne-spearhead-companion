import React from 'react';
import { Text } from 'react-native';
import { FormattedMessage } from 'react-intl';

import { PreBattleSequenceContainer, PreBattleSequenceItem, PreBattleSequenceList } from './styles/PreBattleSequence.styles';

import useTranslationTitle from '../../hooks/useTranslationTitle';

const PreBattleSequence: React.FC = () => {
  const setNavigationTitle = useTranslationTitle();

  setNavigationTitle('preBattleSequenceTitle');

  const sequenceSteps = [
    { id: 'preBattleSequenceStep1' },
    { id: 'preBattleSequenceStep2' },
    { id: 'preBattleSequenceStep3' },
    { id: 'preBattleSequenceStep4' },
    { id: 'preBattleSequenceStep5' },
    { id: 'preBattleSequenceStep6' },
  ];

  return (
    <PreBattleSequenceContainer>
      <PreBattleSequenceList>
        {sequenceSteps.map(({ id }, index) => (
          <PreBattleSequenceItem key={id}>
            <Text>
              <b>{index + 1}.</b> <FormattedMessage id={id} />
            </Text>
          </PreBattleSequenceItem>
        ))}
      </PreBattleSequenceList>
    </PreBattleSequenceContainer>
  );
};

export default PreBattleSequence;

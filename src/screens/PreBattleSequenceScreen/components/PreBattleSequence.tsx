import { FC } from 'react';
import { Text } from 'react-native';
import { FormattedMessage } from 'react-intl';

import { PreBattleSequenceProps } from '../types/PreBattleSequence.types';
import { PreBattleSequenceContainer, PreBattleSequenceItem, PreBattleSequenceList } from '../styles/PreBattleSequence.styles';

const PreBattleSequence: FC<PreBattleSequenceProps> = ({ sequenceStepsIds }): JSX.Element => (
  <PreBattleSequenceContainer>
    <PreBattleSequenceList>
      {sequenceStepsIds.map(({ id }, index) => (
        <PreBattleSequenceItem key={id}>
          <Text>
            <b>{index + 1}.</b> <FormattedMessage id={id} />
          </Text>
        </PreBattleSequenceItem>
      ))}
    </PreBattleSequenceList>
  </PreBattleSequenceContainer>
);

export default PreBattleSequence;

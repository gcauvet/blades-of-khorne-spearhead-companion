import { FC } from 'react';
import { Text } from 'react-native';
import { FormattedMessage } from 'react-intl';

import { PreBattleSequenceProps } from '../types/PreBattleSequence.types';
import {
  AbilityBlock,
  AbilityBlockDescription,
  AbilityBlockText,
  AbilityBlockWrapper,
  PreBattleSequenceContainer,
  PreBattleSequenceItem,
  PreBattleSequenceList,
} from '../styles/PreBattleSequence.styles';

const PreBattleSequence: FC<PreBattleSequenceProps> = ({ sequenceStepsIds, selectedAbility, handleSelectAbility, abilities }): JSX.Element => (
  <PreBattleSequenceContainer>
    <PreBattleSequenceList>
      {sequenceStepsIds.map(({ id }, index) => (
        <PreBattleSequenceItem key={id}>
          <Text>
            <b>{index + 1}.</b> <FormattedMessage id={id} />
          </Text>

          {index === 1 && (
            <AbilityBlockWrapper>
              <AbilityBlock isSelected={selectedAbility === abilities.FAVOURED_OF_KHORNE} onPress={() => handleSelectAbility(abilities.FAVOURED_OF_KHORNE)}>
                <AbilityBlockText>
                  <FormattedMessage id='favoredOfKhorne' />
                </AbilityBlockText>
                <AbilityBlockDescription>
                  <FormattedMessage id='favoredOfKhorneDescription' />
                </AbilityBlockDescription>
              </AbilityBlock>

              <AbilityBlock isSelected={selectedAbility === abilities.BLOOD_WOKEN_RUNES} onPress={() => handleSelectAbility(abilities.BLOOD_WOKEN_RUNES)}>
                <AbilityBlockText>
                  <FormattedMessage id='bloodWokenRunes' />
                </AbilityBlockText>
                <AbilityBlockDescription>
                  <FormattedMessage id='bloodWokenRunesDescription' />
                </AbilityBlockDescription>
              </AbilityBlock>
            </AbilityBlockWrapper>
          )}
        </PreBattleSequenceItem>
      ))}
    </PreBattleSequenceList>
  </PreBattleSequenceContainer>
);

export default PreBattleSequence;

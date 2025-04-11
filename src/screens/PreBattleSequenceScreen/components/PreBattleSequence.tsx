import { FC } from 'react';
import { Text } from 'react-native';
import { FormattedMessage } from 'react-intl';

import { PreBattleSequenceProps } from '../types/PreBattleSequence.types';
import { AbilityBlockWrapper, PreBattleSequenceContainer, PreBattleSequenceItem, PreBattleSequenceList, PreBattleSequenceScrollContainer, Separator } from '../styles/PreBattleSequence.styles';

import RegimentAbilities from './RegimentAbilities';
import GeneralEnhancement from './GeneralEnhancement';
import AbilityAndEnhancementTitle from './AbilityAndEnhancementTitle';

const PreBattleSequence: FC<PreBattleSequenceProps> = ({ sequenceStepsIds, selectedAbility, handleSelectAbility, selectedEnhancement, handleSelectEnhancement }): JSX.Element => (
  <PreBattleSequenceContainer>
    <PreBattleSequenceScrollContainer>
      <PreBattleSequenceList>
        {sequenceStepsIds.map(({ id }, index) => (
          <PreBattleSequenceItem key={id}>
            <Text>
              <b>{index + 1}.</b> <FormattedMessage id={id} />
            </Text>

            {index === 1 && (
              <>
                <AbilityAndEnhancementTitle id='selectRegimentAbility' />

                <AbilityBlockWrapper>
                  <RegimentAbilities selectedAbility={selectedAbility} handleSelectAbility={handleSelectAbility} />

                  <Separator />

                  <AbilityAndEnhancementTitle id='selectEnhancement' />

                  <GeneralEnhancement selectedEnhancement={selectedEnhancement} handleSelectEnhancement={handleSelectEnhancement} />
                </AbilityBlockWrapper>
              </>
            )}
          </PreBattleSequenceItem>
        ))}
      </PreBattleSequenceList>
    </PreBattleSequenceScrollContainer>
  </PreBattleSequenceContainer>
);

export default PreBattleSequence;

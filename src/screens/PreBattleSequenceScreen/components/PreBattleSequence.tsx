import { FC } from 'react';
import { Text } from 'react-native';
import { FormattedMessage } from 'react-intl';

import { PreBattleSequenceProps } from '../types/PreBattleSequence.types';
import {
  AbilityBlock,
  AbilityBlockDescription,
  AbilityBlockText,
  AbilityBlockTitle,
  AbilityBlockTitleContainer,
  AbilityBlockWrapper,
  PreBattleSequenceContainer,
  PreBattleSequenceItem,
  PreBattleSequenceList,
  PreBattleSequenceScrollContainer,
  Separator,
} from '../styles/PreBattleSequence.styles';

const PreBattleSequence: FC<PreBattleSequenceProps> = ({
  sequenceStepsIds,
  selectedAbility,
  handleSelectAbility,
  abilities,
  selectedEnhancement,
  handleSelectEnhancement,
  enhancements,
}): JSX.Element => (
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
                <AbilityBlockTitleContainer>
                  <AbilityBlockTitle>
                    <FormattedMessage id='selectRegimentAbility' />
                  </AbilityBlockTitle>
                </AbilityBlockTitleContainer>

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

                  <Separator />

                  <AbilityBlockTitleContainer>
                    <AbilityBlockTitle>
                      <FormattedMessage id='selectEnhancement' />
                    </AbilityBlockTitle>
                  </AbilityBlockTitleContainer>

                  <AbilityBlockWrapper>
                    <AbilityBlock isSelected={selectedEnhancement === enhancements.RESANGUINATION} onPress={() => handleSelectEnhancement(enhancements.RESANGUINATION)}>
                      <AbilityBlockText>
                        <FormattedMessage id='resanguination' />
                      </AbilityBlockText>
                      <AbilityBlockDescription>
                        <FormattedMessage id='resanguinationDescription' />
                      </AbilityBlockDescription>
                    </AbilityBlock>

                    <AbilityBlock isSelected={selectedEnhancement === enhancements.THE_CRIMSON_PLATE} onPress={() => handleSelectEnhancement(enhancements.THE_CRIMSON_PLATE)}>
                      <AbilityBlockText>
                        <FormattedMessage id='theCrimsonPlate' />
                      </AbilityBlockText>
                      <AbilityBlockDescription>
                        <FormattedMessage id='theCrimsonPlateDescription' />
                      </AbilityBlockDescription>
                    </AbilityBlock>

                    <AbilityBlock isSelected={selectedEnhancement === enhancements.HEADHUNTER} onPress={() => handleSelectEnhancement(enhancements.HEADHUNTER)}>
                      <AbilityBlockText>
                        <FormattedMessage id='headhunter' />
                      </AbilityBlockText>
                      <AbilityBlockDescription>
                        <FormattedMessage id='headhunterDescription' />
                      </AbilityBlockDescription>
                    </AbilityBlock>

                    <AbilityBlock isSelected={selectedEnhancement === enhancements.UNHOLY_FLAMES} onPress={() => handleSelectEnhancement(enhancements.UNHOLY_FLAMES)}>
                      <AbilityBlockText>
                        <FormattedMessage id='unholyFlames' />
                      </AbilityBlockText>
                      <AbilityBlockDescription>
                        <FormattedMessage id='unholyFlamesDescription' />
                      </AbilityBlockDescription>
                    </AbilityBlock>
                  </AbilityBlockWrapper>
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

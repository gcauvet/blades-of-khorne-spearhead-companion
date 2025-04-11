import { FC } from 'react';
import { FormattedMessage } from 'react-intl';

import { Enhancements, GeneralEnhancementProps } from '../types/PreBattleSequence.types';
import { AbilityBlock, AbilityBlockDescription, AbilityBlockText, AbilityBlockWrapper } from '../styles/PreBattleSequence.styles';

const GeneralEnhancement: FC<GeneralEnhancementProps> = ({ selectedEnhancement, handleSelectEnhancement }): JSX.Element => {
  const { RESANGUINATION, THE_CRIMSON_PLATE, HEADHUNTER, UNHOLY_FLAMES } = Enhancements;

  return (
    <AbilityBlockWrapper>
      <AbilityBlock isSelected={selectedEnhancement === RESANGUINATION} onPress={() => handleSelectEnhancement(RESANGUINATION)}>
        <AbilityBlockText>
          <FormattedMessage id='resanguination' />
        </AbilityBlockText>
        <AbilityBlockDescription>
          <FormattedMessage id='resanguinationDescription' />
        </AbilityBlockDescription>
      </AbilityBlock>

      <AbilityBlock isSelected={selectedEnhancement === THE_CRIMSON_PLATE} onPress={() => handleSelectEnhancement(THE_CRIMSON_PLATE)}>
        <AbilityBlockText>
          <FormattedMessage id='theCrimsonPlate' />
        </AbilityBlockText>
        <AbilityBlockDescription>
          <FormattedMessage id='theCrimsonPlateDescription' />
        </AbilityBlockDescription>
      </AbilityBlock>

      <AbilityBlock isSelected={selectedEnhancement === HEADHUNTER} onPress={() => handleSelectEnhancement(HEADHUNTER)}>
        <AbilityBlockText>
          <FormattedMessage id='headhunter' />
        </AbilityBlockText>
        <AbilityBlockDescription>
          <FormattedMessage id='headhunterDescription' />
        </AbilityBlockDescription>
      </AbilityBlock>

      <AbilityBlock isSelected={selectedEnhancement === UNHOLY_FLAMES} onPress={() => handleSelectEnhancement(UNHOLY_FLAMES)}>
        <AbilityBlockText>
          <FormattedMessage id='unholyFlames' />
        </AbilityBlockText>
        <AbilityBlockDescription>
          <FormattedMessage id='unholyFlamesDescription' />
        </AbilityBlockDescription>
      </AbilityBlock>
    </AbilityBlockWrapper>
  );
};

export default GeneralEnhancement;

import { FormattedMessage } from 'react-intl';

import { FC } from 'react';
import { Abilities, RegimentAbilitiesProps } from '../types/PreBattleSequence.types';
import { AbilityBlock, AbilityBlockDescription, AbilityBlockText } from '../styles/PreBattleSequence.styles';

const RegimentAbilities: FC<RegimentAbilitiesProps> = ({ selectedAbility, handleSelectAbility }): JSX.Element => {
  const { FAVOURED_OF_KHORNE, BLOOD_WOKEN_RUNES } = Abilities;

  return (
    <>
      <AbilityBlock isSelected={selectedAbility === FAVOURED_OF_KHORNE} onPress={() => handleSelectAbility(FAVOURED_OF_KHORNE)}>
        <AbilityBlockText>
          <FormattedMessage id='favoredOfKhorne' />
        </AbilityBlockText>
        <AbilityBlockDescription>
          <FormattedMessage id='favoredOfKhorneDescription' />
        </AbilityBlockDescription>
      </AbilityBlock>

      <AbilityBlock isSelected={selectedAbility === BLOOD_WOKEN_RUNES} onPress={() => handleSelectAbility(BLOOD_WOKEN_RUNES)}>
        <AbilityBlockText>
          <FormattedMessage id='bloodWokenRunes' />
        </AbilityBlockText>
        <AbilityBlockDescription>
          <FormattedMessage id='bloodWokenRunesDescription' />
        </AbilityBlockDescription>
      </AbilityBlock>
    </>
  );
};

export default RegimentAbilities;

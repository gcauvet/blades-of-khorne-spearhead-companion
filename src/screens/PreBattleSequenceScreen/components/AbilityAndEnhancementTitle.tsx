import { FormattedMessage } from 'react-intl';

import { FC } from 'react';

import { BlockTitleProps } from '../types/PreBattleSequence.types';
import { AbilityAndEnhancementTitleContainer, AbilityAndEnhancementTitleContainerBlockTitle } from '../styles/PreBattleSequence.styles';

const AbilityAndEnhancementTitle: FC<BlockTitleProps> = ({ id }): JSX.Element => (
  <AbilityAndEnhancementTitleContainer>
    <AbilityAndEnhancementTitleContainerBlockTitle>
      <FormattedMessage id={id} />
    </AbilityAndEnhancementTitleContainerBlockTitle>
  </AbilityAndEnhancementTitleContainer>
);

export default AbilityAndEnhancementTitle;

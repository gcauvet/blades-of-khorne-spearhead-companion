export interface PreBattleSequenceProps {
  sequenceStepsIds: { id: string }[];
  selectedAbility: string;
  handleSelectAbility: (ability: string) => void;
  selectedEnhancement: string;
  handleSelectEnhancement: (enhancement: string) => void;
}

export interface BlockTitleProps {
  id: string;
}

export interface RegimentAbilitiesProps {
  selectedAbility: string;
  handleSelectAbility: (ability: string) => void;
}

export interface GeneralEnhancementProps {
  selectedEnhancement: string;
  handleSelectEnhancement: (enhancement: string) => void;
}

export enum Abilities {
  FAVOURED_OF_KHORNE = 'favoredOfKhorne',
  BLOOD_WOKEN_RUNES = 'bloodWokenRunes',
}

export enum Enhancements {
  RESANGUINATION = 'resanguination',
  THE_CRIMSON_PLATE = 'theCrimsonPlate',
  HEADHUNTER = 'headhunter',
  UNHOLY_FLAMES = 'unholyFlames',
}

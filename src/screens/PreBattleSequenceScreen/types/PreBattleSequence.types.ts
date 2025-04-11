export interface PreBattleSequenceProps {
  sequenceStepsIds: { id: string }[];
  selectedAbility: string | null;
  handleSelectAbility: (ability: string) => void;
  abilities: typeof Abilities;
}

export enum Abilities {
  FAVOURED_OF_KHORNE = 'favoredOfKhorne',
  BLOOD_WOKEN_RUNES = 'bloodWokenRunes',
}

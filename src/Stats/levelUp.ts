function restoreAndCheck() {
	let heroLvl = GetHeroLevel(GetTriggerUnit()) - 1
	let strength = GetHeroStr(GetTriggerUnit(), false) - 1
	let agility = GetHeroAgi(GetTriggerUnit(), false) - 1
	let intelligence = GetHeroInt(GetTriggerUnit(), false) - 1

	let woodAmount = heroLvl - strength - agility - intelligence

	SetPlayerState(GetOwningPlayer(GetTriggerUnit()), PLAYER_STATE_RESOURCE_LUMBER, woodAmount)
	SetUnitState(GetTriggerUnit(), UNIT_STATE_LIFE, GetUnitState(GetTriggerUnit(), UNIT_STATE_MAX_LIFE))
	SetUnitState(GetTriggerUnit(), UNIT_STATE_MANA, GetUnitState(GetTriggerUnit(), UNIT_STATE_MAX_MANA))
}

export function levelUp() {
	let trigger = CreateTrigger();

	for (let i = 0; i < 10; i++) {
		TriggerRegisterPlayerUnitEvent(trigger, Player(i), EVENT_PLAYER_HERO_LEVEL, null);
	}

	TriggerAddAction(trigger, () => restoreAndCheck());
}
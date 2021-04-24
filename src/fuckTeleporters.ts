function damage() {
	if (GetSpellAbilityId() != FourCC('A08D')) {
		return;
	}

	let loc = GetSpellTargetLoc();
	let damage = (DistanceBetweenPoints(GetUnitLoc(GetTriggerUnit()), loc) * 0.35)

	SetUnitState(GetTriggerUnit(), UNIT_STATE_LIFE, GetUnitState(GetTriggerUnit(), UNIT_STATE_LIFE) - damage);
	
	if (GetUnitState(GetTriggerUnit(), UNIT_STATE_LIFE) <= 0.405 ) {
        AddSpecialEffectLoc("Objects\\Spawnmodels\\Human\\HumanLargeDeathExplode\\HumanLargeDeathExplode.mdl", loc)
    }
}

export function fuckTeleporters() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_SPELL_EFFECT);
	TriggerAddAction(trigger, () => damage());
}
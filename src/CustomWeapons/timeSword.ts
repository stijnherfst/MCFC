function timeSword() {
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I03L")) && GetRandomInt(1, 100) === 1 && GetUnitLevel(GetAttackedUnitBJ()) < 90) {
        AddSpecialEffectTargetUnitBJ("overhead", GetAttackedUnitBJ(), "Abilities\\Spells\\Undead\\Unsummon\\UnsummonTarget.mdl")
        SetUnitLifeBJ(GetAttackedUnitBJ(), (GetUnitStateSwap(UNIT_STATE_LIFE, GetAttackedUnitBJ()) * 0.50))
    }
        
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I07U")) && GetRandomInt(1, 50) === 1 && GetUnitLevel(GetAttackedUnitBJ()) < 95) {
        AddSpecialEffectTargetUnitBJ("overhead", GetAttackedUnitBJ(), "Abilities\\Spells\\Undead\\Unsummon\\UnsummonTarget.mdl")
        SetUnitLifeBJ(GetAttackedUnitBJ(), (GetUnitStateSwap(UNIT_STATE_LIFE, GetAttackedUnitBJ()) * 0.50))
    }
}

export function initTimeSword() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => timeSword());
}
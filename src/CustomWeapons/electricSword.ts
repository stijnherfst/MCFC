function electricSword() {
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I027")) && GetRandomInt(1, 5) === 1) {
        AddSpecialEffectTargetUnitBJ("overhead", GetAttackedUnitBJ(), "Abilities\\Spells\\Undead\\Unsummon\\UnsummonTarget.mdl")
        SetUnitLifeBJ(GetAttackedUnitBJ(), (GetUnitStateSwap(UNIT_STATE_LIFE, GetAttackedUnitBJ()) * 0.50))
    }

    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I05H")) && GetRandomInt(1, 5) === 1) {
        AddSpecialEffectTargetUnitBJ("overhead", GetAttackedUnitBJ(), "Abilities\\Spells\\Undead\\Unsummon\\UnsummonTarget.mdl")
        SetUnitLifeBJ(GetAttackedUnitBJ(), (GetUnitStateSwap(UNIT_STATE_LIFE, GetAttackedUnitBJ()) * 0.50))
    }
        
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I076")) && GetRandomInt(1, 4) === 1) {
        AddSpecialEffectTargetUnitBJ("overhead", GetAttackedUnitBJ(), "Abilities\\Spells\\Undead\\Unsummon\\UnsummonTarget.mdl")
        SetUnitLifeBJ(GetAttackedUnitBJ(), (GetUnitStateSwap(UNIT_STATE_LIFE, GetAttackedUnitBJ()) * 0.50))
    }
}

export function initElectricSword() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => electricSword());
}
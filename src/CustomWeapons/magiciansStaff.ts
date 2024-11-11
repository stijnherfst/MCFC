function magiciansStaff() {
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I00Z"))) {
        UnitDamageTargetBJ(GetAttacker(), GetAttackedUnitBJ(), 28.00, ATTACK_TYPE_NORMAL, DAMAGE_TYPE_MAGIC)
        SetUnitManaBJ(GetAttacker(), (GetUnitStateSwap(UNIT_STATE_MANA, GetAttacker()) - 3.00))
    }
        
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I07J"))) {
        UnitDamageTargetBJ(GetAttacker(), GetAttackedUnitBJ(), 33.00, ATTACK_TYPE_NORMAL, DAMAGE_TYPE_MAGIC)
        SetUnitManaBJ(GetAttacker(), (GetUnitStateSwap(UNIT_STATE_MANA, GetAttacker()) - 3.00))
    }
}

export function initMagiciansStaff() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => magiciansStaff());
}
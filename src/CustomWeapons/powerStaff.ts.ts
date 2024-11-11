function powerStaff() {
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I02E"))) {
        UnitDamageTargetBJ(GetAttacker(), GetAttackedUnitBJ(), 50.00, ATTACK_TYPE_NORMAL, DAMAGE_TYPE_MAGIC)
        SetUnitManaBJ(GetAttacker(), (GetUnitStateSwap(UNIT_STATE_MANA, GetAttacker()) - 5.00))
    }
        
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I07O"))) {
        UnitDamageTargetBJ(GetAttacker(), GetAttackedUnitBJ(), 150.00, ATTACK_TYPE_NORMAL, DAMAGE_TYPE_MAGIC)
        SetUnitManaBJ(GetAttacker(), (GetUnitStateSwap(UNIT_STATE_MANA, GetAttacker()) - 5.00))
    }
}

export function initPowerStaff() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => powerStaff());
}
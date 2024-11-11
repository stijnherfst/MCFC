function zebraStaff() {
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I094"))) {
        UnitDamageTargetBJ(GetAttacker(), GetAttackedUnitBJ(), 100.00, ATTACK_TYPE_NORMAL, DAMAGE_TYPE_MAGIC)
        SetUnitManaBJ(GetAttacker(), (GetUnitStateSwap(UNIT_STATE_MANA, GetAttacker()) - 10.00))
    }
}

export function initZebraStaff() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => zebraStaff());
}
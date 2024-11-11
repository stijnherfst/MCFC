function arcaneWand() {
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I06C"))) {
        UnitDamageTargetBJ(GetAttacker(), GetAttackedUnitBJ(), 60.00, ATTACK_TYPE_NORMAL, DAMAGE_TYPE_MAGIC)
        SetUnitManaBJ(GetAttacker(), (GetUnitStateSwap(UNIT_STATE_MANA, GetAttacker()) - 9.00))
    }
        
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I06M"))) {
        UnitDamageTargetBJ(GetAttacker(), GetAttackedUnitBJ(), 90.00, ATTACK_TYPE_NORMAL, DAMAGE_TYPE_MAGIC)
        SetUnitManaBJ(GetAttacker(), (GetUnitStateSwap(UNIT_STATE_MANA, GetAttacker()) - 11.00))
    }
}

export function initArcaneWand() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => arcaneWand());
}
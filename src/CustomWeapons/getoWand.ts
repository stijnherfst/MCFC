function getoWand() {
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I05G"))) {
        UnitDamageTargetBJ(GetAttacker(), GetTriggerUnit(), 10.00, ATTACK_TYPE_NORMAL, DAMAGE_TYPE_MAGIC)
        SetUnitManaBJ(GetAttacker(), (GetUnitStateSwap(UNIT_STATE_MANA, GetAttacker()) - 1.00))
    }
        
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I079"))) {
        UnitDamageTargetBJ(GetAttacker(), GetTriggerUnit(), 15.00, ATTACK_TYPE_NORMAL, DAMAGE_TYPE_MAGIC)
        SetUnitManaBJ(GetAttacker(), (GetUnitStateSwap(UNIT_STATE_MANA, GetAttacker()) - 1.00))
    }
}

export function initGetoWand() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => getoWand());
}
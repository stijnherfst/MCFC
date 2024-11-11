function riftWand() {
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I03Y"))) {
        UnitDamageTargetBJ(GetAttacker(), GetAttackedUnitBJ(), 70.00, ATTACK_TYPE_NORMAL, DAMAGE_TYPE_MAGIC)
        SetUnitManaBJ(GetAttacker(), (GetUnitStateSwap(UNIT_STATE_MANA, GetAttacker()) - 10.00))
    }
}

export function initRiftWand() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => riftWand());
}
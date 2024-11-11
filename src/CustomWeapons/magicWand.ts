function magicWand() {
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I00Y"))) {
        UnitDamageTargetBJ(GetAttacker(), GetAttackedUnitBJ(), 10.00, ATTACK_TYPE_NORMAL, DAMAGE_TYPE_MAGIC)
        SetUnitManaBJ(GetAttacker(), (GetUnitStateSwap(UNIT_STATE_MANA, GetAttacker()) - 1.00))
    }
        
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I07I"))) {
        UnitDamageTargetBJ(GetAttacker(), GetAttackedUnitBJ(), 20.00, ATTACK_TYPE_NORMAL, DAMAGE_TYPE_MAGIC)
        SetUnitManaBJ(GetAttacker(), (GetUnitStateSwap(UNIT_STATE_MANA, GetAttacker()) - 1.00))
    }
}

export function initMagicWand() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => magicWand());
}
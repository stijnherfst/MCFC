function natureStaff() {
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I002"))) {
        UnitDamageTargetBJ(GetAttacker(), GetTriggerUnit(), 18.00, ATTACK_TYPE_NORMAL, DAMAGE_TYPE_MAGIC)
        SetUnitManaBJ(GetAttacker(), (GetUnitStateSwap(UNIT_STATE_MANA, GetAttacker()) - 2.00))
        
        if (GetRandomInt(1, 12) == 1) {
            CreateNUnitsAtLoc(1, FourCC("e000"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(60.00, FourCC("BTLF"), GetLastCreatedUnit())
        }
    }
        
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I07M"))) {
        UnitDamageTargetBJ(GetAttacker(), GetTriggerUnit(), 25.00, ATTACK_TYPE_NORMAL, DAMAGE_TYPE_MAGIC)
        SetUnitManaBJ(GetAttacker(), (GetUnitStateSwap(UNIT_STATE_MANA, GetAttacker()) - 2.00))

        if (GetRandomInt(1, 10) == 1) {
            CreateNUnitsAtLoc(1, FourCC("e000"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(60.00, FourCC("BTLF"), GetLastCreatedUnit())
        }
    }
}

export function initNatureStaff() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => natureStaff());
}
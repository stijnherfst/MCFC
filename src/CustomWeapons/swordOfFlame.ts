function swordOfFlame() {
	if (!UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I01E")) && !UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I05F"))) {
        return
    }
    
    if (GetRandomInt(1, 100) === 1) {
        CreateNUnitsAtLoc(1, FourCC("h029"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetTriggerUnit()), bj_UNIT_FACING)
        IssueImmediateOrderBJ(GetLastCreatedUnit(), "starfall")
        UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    }
}

export function initSwordOfFlame() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => swordOfFlame());
}
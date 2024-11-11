function ashbringer() {
	if (!UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I086"))) {
        return
    }
    
    if (GetRandomInt(1, 150) === 1) {
        CreateNUnitsAtLoc(1, FourCC("h029"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttackedUnitBJ()), bj_UNIT_FACING)
        IssueImmediateOrderBJ(GetLastCreatedUnit(), "starfall")
        UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    }
}

export function initAshbringer() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => ashbringer());
}
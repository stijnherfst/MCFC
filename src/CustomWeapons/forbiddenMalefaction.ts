function forbiddenMalefaction() {
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I090")) || UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I0A1"))) {
        if (GetRandomInt(1, 50) == 1) {
            CreateNUnitsAtLoc(1, FourCC("h029"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetTriggerUnit()), bj_UNIT_FACING)
            IssueImmediateOrderBJ(GetLastCreatedUnit(), "starfall")
            UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
        }
    }
}

export function initForbiddenMalefaction() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => forbiddenMalefaction());
}
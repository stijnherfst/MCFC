function healingGloves() {
	if (!UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I09F"))) {
        return
    }

    if (GetRandomInt(1, 33) !== 1) {
        return
    }

    CreateNUnitsAtLoc(1, FourCC("h025"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
    SetUnitLifePercentBJ(GetLastCreatedUnit(), 50.00)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    IssueTargetOrderBJ(GetLastCreatedUnit(), "healingwave", GetLastCreatedUnit())
}

export function initHealingGloves() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => healingGloves());
}
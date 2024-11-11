function guardianBlade() {
	if (!UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I04Z")) && !UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I09G"))) {
        return
    }

    if (GetRandomInt(1, 33) === 1) {
        CreateNUnitsAtLoc(1, FourCC("h025"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        SetUnitLifePercentBJ(GetLastCreatedUnit(), 50.00)
        UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
        IssueTargetOrderBJ(GetLastCreatedUnit(), "healingwave", GetLastCreatedUnit())
    }

    if (GetRandomInt(1, 200) === 1) {
        CreateNUnitsAtLoc(1, FourCC("h00Y"), Player(11), GetUnitLoc(GetTriggerUnit()), bj_UNIT_FACING)
        UnitApplyTimedLifeBJ(60.00, FourCC("BTLF"), GetLastCreatedUnit())
    }

    if (GetRandomInt(1, 250) === 1) {
        CreateNUnitsAtLoc(1, FourCC("h017"), Player(11), GetUnitLoc(GetTriggerUnit()), bj_UNIT_FACING)
        UnitApplyTimedLifeBJ(60.00, FourCC("BTLF"), GetLastCreatedUnit())
    }
}

export function initGuardianBlade() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => guardianBlade());
}
function seaStaff() {   
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I05I")) && GetRandomInt(1, 33) === 1) {
        CreateNUnitsAtLoc(1, FourCC("h02A"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
        IssuePointOrderLocBJ(GetLastCreatedUnit(), "carrionswarm", GetUnitLoc(GetAttackedUnitBJ()))
    }

    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I07Q")) && GetRandomInt(1, 20) === 1) {
        CreateNUnitsAtLoc(1, FourCC("h02A"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
        IssuePointOrderLocBJ(GetLastCreatedUnit(), "carrionswarm", GetUnitLoc(GetAttackedUnitBJ()))
    }
}

export function initSeaStaff() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => seaStaff());
}
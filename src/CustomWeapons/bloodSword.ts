function bloodSword() {   
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I06B")) && GetRandomInt(1, 18) === 1) {
        CreateNUnitsAtLoc(1, FourCC("h02F"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
        IssuePointOrderLocBJ(GetLastCreatedUnit(), "shockwave", GetUnitLoc(GetAttackedUnitBJ()))
    }

    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I06S")) && GetRandomInt(1, 20) === 1) {
        CreateNUnitsAtLoc(1, FourCC("h02F"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
        IssuePointOrderLocBJ(GetLastCreatedUnit(), "shockwave", GetUnitLoc(GetAttackedUnitBJ()))
    }
}

export function initBloodSword() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => bloodSword());
}
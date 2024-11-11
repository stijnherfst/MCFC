function windCloak() {   
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I04Y")) && GetRandomInt(1, 10) === 1) {
        CreateNUnitsAtLoc(1, FourCC("h02E"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
        IssuePointOrderLocBJ(GetLastCreatedUnit(), "carrionswarm", GetUnitLoc(GetAttackedUnitBJ()))
    }
}

export function initWindCloak() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => windCloak());
}
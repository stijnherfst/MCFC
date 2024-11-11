function waterScythe() {
	if (!UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I05T"))) {
        return
    }
    
    if (GetRandomInt(1, 10) === 1) {
        CreateNUnitsAtLoc(1, FourCC("h02A"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
        IssuePointOrderLocBJ(GetLastCreatedUnit(), "carrionswarm", GetUnitLoc(GetAttackedUnitBJ()))
    }
}

export function initWaterScythe() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => waterScythe());
}
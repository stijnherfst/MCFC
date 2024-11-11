function ragnarok() {
	if (!UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I03J"))) {
        return
    }
    
    if (GetRandomInt(1, 100) === 1) {
        CreateNUnitsAtLoc(1, FourCC("h00O"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        IssueTargetOrderBJ(GetLastCreatedUnit(), "frostnova", GetAttackedUnitBJ())
        UnitApplyTimedLifeBJ(7.00, FourCC("BTLF"), GetLastCreatedUnit())
    }
}

export function initRagnarok() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => ragnarok());
}
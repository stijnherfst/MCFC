function electricArrows() {
	if (!UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I066"))) {
        return
    }
    
    if (GetRandomInt(1, 4) === 1) {
        CreateNUnitsAtLoc(1, FourCC("h00N"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
        IssueTargetOrderBJ(GetLastCreatedUnit(), "chainlightning", GetAttackedUnitBJ())
    }
}

export function initElectricArrows() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => electricArrows());
}
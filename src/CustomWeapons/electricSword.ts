function electricSword() {
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I027")) && GetRandomInt(1, 5) === 1) {
        CreateNUnitsAtLoc(1, FourCC("h00N"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
        IssueTargetOrderBJ(GetLastCreatedUnit(), "chainlightning", GetAttackedUnitBJ())
    }

    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I05H")) && GetRandomInt(1, 5) === 1) {
        CreateNUnitsAtLoc(1, FourCC("h00N"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
        IssueTargetOrderBJ(GetLastCreatedUnit(), "chainlightning", GetAttackedUnitBJ())
    }
        
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I076")) && GetRandomInt(1, 4) === 1) {
        CreateNUnitsAtLoc(1, FourCC("h00N"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
        IssueTargetOrderBJ(GetLastCreatedUnit(), "chainlightning", GetAttackedUnitBJ())
    }
}

export function initElectricSword() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => electricSword());
}
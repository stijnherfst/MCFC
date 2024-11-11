function diabolicScythe() {
	if (!UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I085"))) {
        return
    }
    
    if (GetRandomInt(1, 10) === 1) {
        CreateNUnitsAtLoc(1, FourCC("h00N"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
        IssueTargetOrderBJ(GetLastCreatedUnit(), "chainlightning", GetAttackedUnitBJ())
    }

    if (GetRandomInt(1, 200) === 1) {
        CreateNUnitsAtLoc(1, FourCC("h00N"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        UnitApplyTimedLifeBJ(3.00, FourCC("BTLF"), GetLastCreatedUnit())
        UnitAddAbilityBJ(FourCC("A029"), GetLastCreatedUnit())
        IssueTargetOrderBJ(GetLastCreatedUnit(), "purge", GetLastCreatedUnit())
    }

    if (GetRandomInt(1, 75) === 1) {
        CreateNUnitsAtLoc(1, FourCC("h00J"), GetOwningPlayer(GetAttacker()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), 100.00, 50.00), bj_UNIT_FACING)
        IssueTargetOrderBJ(GetLastCreatedUnit(), "chainlightning", GetLastCreatedUnit())
        UnitApplyTimedLifeBJ(2.00, FourCC("BTLF"), GetLastCreatedUnit())
        PolledWait(0.10)
        CreateNUnitsAtLoc(1, FourCC("h00J"), GetOwningPlayer(GetAttacker()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), 200.00, 100.00), bj_UNIT_FACING)
        IssueTargetOrderBJ(GetLastCreatedUnit(), "chainlightning", GetLastCreatedUnit())
        UnitApplyTimedLifeBJ(2.00, FourCC("BTLF"), GetLastCreatedUnit())
        PolledWait(0.10)
        CreateNUnitsAtLoc(1, FourCC("h00J"), GetOwningPlayer(GetAttacker()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), 300.00, 150.00), bj_UNIT_FACING)
        IssueTargetOrderBJ(GetLastCreatedUnit(), "chainlightning", GetLastCreatedUnit())
        UnitApplyTimedLifeBJ(2.00, FourCC("BTLF"), GetLastCreatedUnit())
        PolledWait(0.10)
        CreateNUnitsAtLoc(1, FourCC("h00J"), GetOwningPlayer(GetAttacker()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), 200.00, 200.00), bj_UNIT_FACING)
        IssueTargetOrderBJ(GetLastCreatedUnit(), "chainlightning", GetLastCreatedUnit())
        UnitApplyTimedLifeBJ(2.00, FourCC("BTLF"), GetLastCreatedUnit())
        PolledWait(0.10)
        CreateNUnitsAtLoc(1, FourCC("h00J"), GetOwningPlayer(GetAttacker()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), 100.00, 250.00), bj_UNIT_FACING)
        IssueTargetOrderBJ(GetLastCreatedUnit(), "chainlightning", GetLastCreatedUnit())
        UnitApplyTimedLifeBJ(2.00, FourCC("BTLF"), GetLastCreatedUnit())
        PolledWait(0.10)
        CreateNUnitsAtLoc(1, FourCC("h00J"), GetOwningPlayer(GetAttacker()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), -100.00, 50.00), bj_UNIT_FACING)
        IssueTargetOrderBJ(GetLastCreatedUnit(), "chainlightning", GetLastCreatedUnit())
        UnitApplyTimedLifeBJ(2.00, FourCC("BTLF"), GetLastCreatedUnit())
        PolledWait(0.10)
        CreateNUnitsAtLoc(1, FourCC("h00J"), GetOwningPlayer(GetAttacker()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), -200.00, 100.00), bj_UNIT_FACING)
        IssueTargetOrderBJ(GetLastCreatedUnit(), "chainlightning", GetLastCreatedUnit())
        UnitApplyTimedLifeBJ(2.00, FourCC("BTLF"), GetLastCreatedUnit())
        PolledWait(0.10)
        CreateNUnitsAtLoc(1, FourCC("h00J"), GetOwningPlayer(GetAttacker()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), -300.00, 150.00), bj_UNIT_FACING)
        IssueTargetOrderBJ(GetLastCreatedUnit(), "chainlightning", GetLastCreatedUnit())
        UnitApplyTimedLifeBJ(2.00, FourCC("BTLF"), GetLastCreatedUnit())
        PolledWait(0.10)
        CreateNUnitsAtLoc(1, FourCC("h00J"), GetOwningPlayer(GetAttacker()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), -200.00, 200.00), bj_UNIT_FACING)
        IssueTargetOrderBJ(GetLastCreatedUnit(), "chainlightning", GetLastCreatedUnit())
        UnitApplyTimedLifeBJ(2.00, FourCC("BTLF"), GetLastCreatedUnit())
        PolledWait(0.10)
        CreateNUnitsAtLoc(1, FourCC("h00J"), GetOwningPlayer(GetAttacker()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), -100.00, 250.00), bj_UNIT_FACING)
        IssueTargetOrderBJ(GetLastCreatedUnit(), "chainlightning", GetLastCreatedUnit())
        UnitApplyTimedLifeBJ(2.00, FourCC("BTLF"), GetLastCreatedUnit())
    }
}

export function initDiabolicScythe() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => diabolicScythe());
}
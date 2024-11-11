function sunHands() {
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I0A4"))) {
        if (GetRandomInt(1, 25) == 1) {
            let sunstorm = RectFromCenterSizeBJ(GetUnitLoc(GetAttackedUnitBJ()), 500.00, 500.00)
            CreateNUnitsAtLoc(1, FourCC("h00M"), GetOwningPlayer(GetAttacker()), GetRandomLocInRect(sunstorm), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
            IssueImmediateOrderBJ(GetLastCreatedUnit(), "creepthunderclap")
            PolledWait(0.20)
            CreateNUnitsAtLoc(1, FourCC("h00M"), GetOwningPlayer(GetAttacker()), GetRandomLocInRect(sunstorm), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
            IssueImmediateOrderBJ(GetLastCreatedUnit(), "creepthunderclap")
            PolledWait(0.20)
            CreateNUnitsAtLoc(1, FourCC("h00M"), GetOwningPlayer(GetAttacker()), GetRandomLocInRect(sunstorm), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
            IssueImmediateOrderBJ(GetLastCreatedUnit(), "creepthunderclap")
            PolledWait(0.20)
            CreateNUnitsAtLoc(1, FourCC("h00M"), GetOwningPlayer(GetAttacker()), GetRandomLocInRect(sunstorm), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
            IssueImmediateOrderBJ(GetLastCreatedUnit(), "creepthunderclap")
            PolledWait(0.20)
            CreateNUnitsAtLoc(1, FourCC("h00M"), GetOwningPlayer(GetAttacker()), GetRandomLocInRect(sunstorm), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
            IssueImmediateOrderBJ(GetLastCreatedUnit(), "creepthunderclap")
            PolledWait(0.20)
            CreateNUnitsAtLoc(1, FourCC("h00M"), GetOwningPlayer(GetAttacker()), GetRandomLocInRect(sunstorm), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
            IssueImmediateOrderBJ(GetLastCreatedUnit(), "creepthunderclap")
            PolledWait(0.20)
            UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
            IssueImmediateOrderBJ(GetLastCreatedUnit(), "creepthunderclap")
        }
    }
}

export function initSunHands() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => sunHands());
}
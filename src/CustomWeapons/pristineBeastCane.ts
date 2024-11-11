function pristineBeastCane() {
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I092"))) {
        if (GetRandomInt(1, 150) == 1) {
            CreateNUnitsAtLoc(1, FourCC("n00P"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(60.00, FourCC("BTLF"), GetLastCreatedUnit())
        }

        if (GetRandomInt(1, 200) == 1) {
            CreateNUnitsAtLoc(1, FourCC("n00C"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(60.00, FourCC("BTLF"), GetLastCreatedUnit()) 
        }

        if (GetRandomInt(1, 250) == 1) {
            CreateNUnitsAtLoc(1, FourCC("n016"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(60.00, FourCC("BTLF"), GetLastCreatedUnit())
        }

        if (GetRandomInt(1, 300) == 1) {
            CreateNUnitsAtLoc(1, FourCC("n01U"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(60.00, FourCC("BTLF"), GetLastCreatedUnit())
        }

        if (GetRandomInt(1, 400) == 1) {
            CreateNUnitsAtLoc(1, FourCC("n021"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(60.00, FourCC("BTLF"), GetLastCreatedUnit())
        }

        if (GetRandomInt(1, 500) == 1) {
            CreateNUnitsAtLoc(1, FourCC("n017"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(60.00, FourCC("BTLF"), GetLastCreatedUnit())
        }
    }
}

export function initPristineBeastCane() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => pristineBeastCane());
}
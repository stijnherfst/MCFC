function summonersStaff() {
	if (!UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I06D"))) {
        return
    }
    
    if (GetRandomInt(1, 100) === 1) {
        CreateNUnitsAtLoc(1, FourCC("n00Q"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        UnitApplyTimedLifeBJ(60.00, FourCC("BTLF"), GetLastCreatedUnit())
    }
    
    if (GetRandomInt(1, 120) === 1) {
        CreateNUnitsAtLoc(1, FourCC("n00T"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        UnitApplyTimedLifeBJ(60.00, FourCC("BTLF"), GetLastCreatedUnit())
    }
    if (GetRandomInt(1, 150) === 1) {
        CreateNUnitsAtLoc(1, FourCC("n00U"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        UnitApplyTimedLifeBJ(60.00, FourCC("BTLF"), GetLastCreatedUnit())
    }

    if (GetRandomInt(1, 200) === 1) {
        CreateNUnitsAtLoc(1, FourCC("n00W"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        UnitApplyTimedLifeBJ(60.00, FourCC("BTLF"), GetLastCreatedUnit())
    }

    if (GetRandomInt(1, 200) === 1) {
        CreateNUnitsAtLoc(1, FourCC("n00X"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        UnitApplyTimedLifeBJ(60.00, FourCC("BTLF"), GetLastCreatedUnit())
    }

    if (GetRandomInt(1, 250) === 1) {
        CreateNUnitsAtLoc(1, FourCC("n010"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        UnitApplyTimedLifeBJ(60.00, FourCC("BTLF"), GetLastCreatedUnit())
    }

    if (GetRandomInt(1, 250) === 1) {
        CreateNUnitsAtLoc(1, FourCC("n02H"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        UnitApplyTimedLifeBJ(60.00, FourCC("BTLF"), GetLastCreatedUnit())
    }

    if (GetRandomInt(1, 300) === 1) {
        CreateNUnitsAtLoc(1, FourCC("n01D"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        UnitApplyTimedLifeBJ(60.00, FourCC("BTLF"), GetLastCreatedUnit())
    }

    if (GetRandomInt(1, 300) === 1) {
        CreateNUnitsAtLoc(1, FourCC("n01B"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        UnitApplyTimedLifeBJ(60.00, FourCC("BTLF"), GetLastCreatedUnit())
    }

    if (GetRandomInt(1, 500) === 1) {
        CreateNUnitsAtLoc(1, FourCC("n01C"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        UnitApplyTimedLifeBJ(60.00, FourCC("BTLF"), GetLastCreatedUnit())
    }
}

export function initSummonersStaff() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => summonersStaff());
}
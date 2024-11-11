function turtle1() {
	if (!UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I04P"))) {
        return
    }

    if (GetRandomInt(1, 100) !== 1) {
        return
    }

    CreateNUnitsAtLoc(1, FourCC("n01Z"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(60, FourCC("BTLF"), GetLastCreatedUnit())
}

function turtle2() {
	if (!UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I04Q"))) {
        return
    }

    if (GetRandomInt(1, 100) !== 1) {
        return
    }

    CreateNUnitsAtLoc(1, FourCC("n01Z"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(60, FourCC("BTLF"), GetLastCreatedUnit())
}

function turtle3() {
	if (!UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I04S"))) {
        return
    }

    if (GetRandomInt(1, 1000) !== 1) {
        return
    }

    CreateNUnitsAtLoc(1, FourCC("n020"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(180, FourCC("BTLF"), GetLastCreatedUnit())
}

export function initTurtle() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => turtle1());
	TriggerAddAction(trigger, () => turtle2());
	TriggerAddAction(trigger, () => turtle3());
}
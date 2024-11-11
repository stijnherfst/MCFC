function magicHat() {
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I00X"))) {       
        if (GetRandomInt(1, 12) == 1) {
            CreateNUnitsAtLoc(1, FourCC("n011"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(30.00, FourCC("BTLF"), GetLastCreatedUnit())
        }

        if (GetRandomInt(1, 100) == 1) {
            CreateNUnitsAtLoc(1, FourCC("n012"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(60.00, FourCC("BTLF"), GetLastCreatedUnit())
        }
    }
}

export function initMagicHat() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => magicHat());
}
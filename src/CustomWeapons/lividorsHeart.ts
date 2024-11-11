function lividorsHeart() {
	if (!UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I04T"))) {
        return
    }
    
    if (GetRandomInt(1, 1000) === 1) {
        CreateNUnitsAtLoc(1, FourCC("n020"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        UnitApplyTimedLifeBJ(180.00, FourCC("BTLF"), GetLastCreatedUnit())
    }
}

export function initLividorsHeart() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => lividorsHeart());
}
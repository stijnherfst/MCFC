function ubiquitousProfligate() {
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I08X")) || UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I09P"))) {
        if (GetRandomInt(1, 1000) == 1) {
            CreateNUnitsAtLoc(1, FourCC("n027"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(60.00, FourCC("BTLF"), GetLastCreatedUnit())    
        }
    }
}

export function initUbiquitousProfligate() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => ubiquitousProfligate());
}
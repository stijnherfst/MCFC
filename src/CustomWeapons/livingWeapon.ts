function livingWeapon() {
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I08T")) || UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I0A0"))) {
        if (GetRandomInt(1, 20) == 1) {
            CreateNUnitsAtLoc(1, FourCC("h02F"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
            IssuePointOrderLocBJ(GetLastCreatedUnit(), "shockwave", GetUnitLoc(GetAttackedUnitBJ()))
        }
    }
}

export function initLivingWeapon() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => livingWeapon());
}
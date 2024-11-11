function absoluteZero() {
	if (!UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I08L"))) {
        return
    }
    
    // DisableTrigger(GetTriggeringTrigger())
    // AddSpecialEffectTargetUnitBJ("hand,right", GetAttacker(), "war3mapImported\\RuneSphere.mdx")

    if (GetRandomInt(1, 20) === 1) {
        CreateNUnitsAtLoc(1, FourCC("h02T"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        IssueTargetOrderBJ(GetLastCreatedUnit(), "frostnova", GetAttackedUnitBJ())
        UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    }
}

export function initAbsoluteZero() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => absoluteZero());
}
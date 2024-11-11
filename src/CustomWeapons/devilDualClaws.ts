function devilDualClaws() {
	if (!UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I054"))) {
        return
    }
    
    // Spawn a nightmare
    if (GetRandomInt(1, 50) === 1) {
        CreateNUnitsAtLoc(1, FourCC("n028"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        AddSpecialEffectTargetUnitBJ("orgin", GetLastCreatedUnit(), "Abilities\\Spells\\Other\\ImmolationRed\\ImmolationRedTarget.mdl")
        UnitApplyTimedLifeBJ(60.00, FourCC("BTLF"), GetLastCreatedUnit())
    }

    // Wake of fire
    if (GetRandomInt(1, 200) === 1) {
        CreateNUnitsAtLoc(1, FourCC("h029"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetTriggerUnit()), bj_UNIT_FACING)
        IssueImmediateOrderBJ(GetLastCreatedUnit(), "starfall")
        UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    }
    
}

export function initDevilDualClaws() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => devilDualClaws());
}
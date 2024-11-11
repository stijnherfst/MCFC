function superHex() {
    if (GetSpellAbilityId() != FourCC('A025')) {
        return
    }

    let udg_SuperHexUnit = GetSpellTargetUnit()
    TriggerSleepAction(0.90)
    CreateNUnitsAtLoc(1, FourCC("h00H"), GetOwningPlayer(GetTriggerUnit()), GetUnitLoc(GetTriggerUnit()), bj_UNIT_FACING)
    IssueTargetOrderBJ(GetLastCreatedUnit(), "hex", udg_SuperHexUnit)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    TriggerSleepAction(0.90)
    CreateNUnitsAtLoc(1, FourCC("h00H"), GetOwningPlayer(GetTriggerUnit()), GetUnitLoc(GetTriggerUnit()), bj_UNIT_FACING)
    IssueTargetOrderBJ(GetLastCreatedUnit(), "hex", udg_SuperHexUnit)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    TriggerSleepAction(0.90)
    CreateNUnitsAtLoc(1, FourCC("h00H"), GetOwningPlayer(GetTriggerUnit()), GetUnitLoc(GetTriggerUnit()), bj_UNIT_FACING)
    IssueTargetOrderBJ(GetLastCreatedUnit(), "hex", udg_SuperHexUnit)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    TriggerSleepAction(0.90)
    CreateNUnitsAtLoc(1, FourCC("h00H"), GetOwningPlayer(GetTriggerUnit()), GetUnitLoc(GetTriggerUnit()), bj_UNIT_FACING)
    IssueTargetOrderBJ(GetLastCreatedUnit(), "hex", udg_SuperHexUnit)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
}

export function initSuperHex() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_SPELL_CAST)
    TriggerAddAction( trigger, () => superHex())
}
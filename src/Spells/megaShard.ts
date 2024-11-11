function megaShard() {
    if (GetSpellAbilityId() != FourCC('A0ED')) {
        return
    }

    CreateNUnitsAtLoc(1, FourCC("n001"), GetOwningPlayer(GetSpellAbilityUnit()), GetUnitLoc(GetTriggerUnit()), bj_UNIT_FACING)
    IssueTargetOrderBJ(GetLastCreatedUnit(), "attack", GetSpellTargetUnit())
    UnitApplyTimedLifeBJ(7.00, FourCC("BTLF"), GetLastCreatedUnit())
}

export function initMegaShard() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_SPELL_CAST)
    TriggerAddAction( trigger, () => megaShard())
}
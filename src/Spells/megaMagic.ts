function megaMagic() {
    if (GetSpellAbilityId() != FourCC('A024')) {
        return
    }

    CreateNUnitsAtLoc(1, FourCC("h00F"), GetOwningPlayer(GetSpellAbilityUnit()), OffsetLocation(GetUnitLoc(GetSpellAbilityUnit()), 200.00, 0), bj_UNIT_FACING)
    IssueTargetOrderBJ(GetLastCreatedUnit(), "attack", GetSpellTargetUnit())
    UnitApplyTimedLifeBJ(10.00, FourCC("BTLF"), GetLastCreatedUnit())
    CreateNUnitsAtLoc(1, FourCC("h00F"), GetOwningPlayer(GetSpellAbilityUnit()), OffsetLocation(GetUnitLoc(GetSpellAbilityUnit()), -200.00, 0), bj_UNIT_FACING)
    IssueTargetOrderBJ(GetLastCreatedUnit(), "attack", GetSpellTargetUnit())
    UnitApplyTimedLifeBJ(10.00, FourCC("BTLF"), GetLastCreatedUnit())
    CreateNUnitsAtLoc(1, FourCC("h00F"), GetOwningPlayer(GetSpellAbilityUnit()), OffsetLocation(GetUnitLoc(GetSpellAbilityUnit()), 0.00, 200.00), bj_UNIT_FACING)
    IssueTargetOrderBJ(GetLastCreatedUnit(), "attack", GetSpellTargetUnit())
    UnitApplyTimedLifeBJ(10.00, FourCC("BTLF"), GetLastCreatedUnit())
    CreateNUnitsAtLoc(1, FourCC("h00F"), GetOwningPlayer(GetSpellAbilityUnit()), OffsetLocation(GetUnitLoc(GetSpellAbilityUnit()), 0.00, -200.00), bj_UNIT_FACING)
    IssueTargetOrderBJ(GetLastCreatedUnit(), "attack", GetSpellTargetUnit())
    UnitApplyTimedLifeBJ(10.00, FourCC("BTLF"), GetLastCreatedUnit())
    CreateNUnitsAtLoc(1, FourCC("h00G"), GetOwningPlayer(GetSpellAbilityUnit()), GetUnitLoc(GetSpellAbilityUnit()), bj_UNIT_FACING)
    IssueTargetOrderBJ(GetLastCreatedUnit(), "attack", GetSpellTargetUnit())
    UnitApplyTimedLifeBJ(10.00, FourCC("BTLF"), GetLastCreatedUnit())
}

export function initMegaMagic() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_SPELL_CAST)
    TriggerAddAction( trigger, () => megaMagic())
}
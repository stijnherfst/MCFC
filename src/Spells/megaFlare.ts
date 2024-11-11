function megaFlare() {
    if (GetSpellAbilityId() != FourCC('A023')) {
        return
    }

    CreateNUnitsAtLoc(1, FourCC("n041"), GetOwningPlayer(GetSpellAbilityUnit()), GetUnitLoc(GetTriggerUnit()), bj_UNIT_FACING)
    IssueTargetOrderBJ(GetLastCreatedUnit(), "attack", GetSpellTargetUnit())
    UnitApplyTimedLifeBJ(7.00, FourCC("BTLF"), GetLastCreatedUnit())
}

export function initMegaFlare() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_SPELL_CAST)
    TriggerAddAction( trigger, () => megaFlare())
}
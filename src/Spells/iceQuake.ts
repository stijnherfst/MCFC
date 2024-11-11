function iceQuake() {
    if (GetSpellAbilityId() != FourCC('A02L')) {
        return
    }

    CreateNUnitsAtLoc(1, FourCC("h00L"), GetOwningPlayer(GetSpellAbilityUnit()), GetUnitLoc(GetTriggerUnit()), bj_UNIT_FACING)
    IssueTargetOrderBJ(GetLastCreatedUnit(), "frostnova", GetLastCreatedUnit())
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
}

export function initIceQuake() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_SPELL_CAST)
    TriggerAddAction( trigger, () => iceQuake())
}
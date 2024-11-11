function ripTide() {
    if (GetSpellAbilityId() != FourCC('A022')) {
        return
    }

    CreateNUnitsAtLoc(1, FourCC("h00E"), GetOwningPlayer(GetTriggerUnit()), OffsetLocation(GetSpellTargetLoc(), 200.00, 0), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(2.00, FourCC("BTLF"), GetLastCreatedUnit())
    CreateNUnitsAtLoc(1, FourCC("h00E"), GetOwningPlayer(GetTriggerUnit()), OffsetLocation(GetSpellTargetLoc(), -200.00, 0), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(2.00, FourCC("BTLF"), GetLastCreatedUnit())
    CreateNUnitsAtLoc(1, FourCC("h00E"), GetOwningPlayer(GetTriggerUnit()), OffsetLocation(GetSpellTargetLoc(), 0.00, 200.00), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(2.00, FourCC("BTLF"), GetLastCreatedUnit())
    CreateNUnitsAtLoc(1, FourCC("h00E"), GetOwningPlayer(GetTriggerUnit()), OffsetLocation(GetSpellTargetLoc(), 0.00, -200.00), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(2.00, FourCC("BTLF"), GetLastCreatedUnit())
}

function ripTideCaster() {
    if (GetUnitTypeId(GetAttacker()) !== FourCC("h00E")) {
        return
    }

    IssuePointOrderLocBJ(GetAttacker(), "carrionswarm", GetUnitLoc(GetAttackedUnitBJ()))
}

export function initRipTide() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_SPELL_CAST)
    TriggerAddAction( trigger, () => ripTide())

    let cast = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ(cast, EVENT_PLAYER_UNIT_ATTACKED)
    TriggerAddAction(cast, () => ripTideCaster())
}
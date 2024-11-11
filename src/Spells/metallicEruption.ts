function metallicEruption() {
    if (GetSpellAbilityId() != FourCC('A01T')) {
        return
    }

    CreateNUnitsAtLoc(1, FourCC("h00C"), GetOwningPlayer(GetTriggerUnit()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), 0.00, 400.00), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(5.00, FourCC("BTLF"), GetLastCreatedUnit())
    CreateNUnitsAtLoc(1, FourCC("h00C"), GetOwningPlayer(GetTriggerUnit()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), 0.00, -400.00), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(5.00, FourCC("BTLF"), GetLastCreatedUnit())
    CreateNUnitsAtLoc(1, FourCC("h00C"), GetOwningPlayer(GetTriggerUnit()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), 400.00, 0.00), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(5.00, FourCC("BTLF"), GetLastCreatedUnit())
    CreateNUnitsAtLoc(1, FourCC("h00C"), GetOwningPlayer(GetTriggerUnit()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), -400.00, 0.00), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(5.00, FourCC("BTLF"), GetLastCreatedUnit())
}

function metallicEruptionCaster() {
    if (GetUnitTypeId(GetAttacker()) !== FourCC("h00C")) {
        return
    }

    IssueImmediateOrderBJ(GetAttacker(), "fanofknives")
}

export function initMetallicEruption() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_SPELL_CAST)
    TriggerAddAction( trigger, () => metallicEruption())

    let cast = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ(cast, EVENT_PLAYER_UNIT_ATTACKED)
    TriggerAddAction(cast, () => metallicEruptionCaster())
}
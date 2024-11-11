function Trig_Chronosphere_cast_Func002001003() {
    return (IsUnitType(GetFilterUnit(), UNIT_TYPE_HERO) == false)
}

function Trig_Chronosphere_cast_Func002002() {
    PauseUnitBJ(true, GetEnumUnit())
}

function chronoSphere() {
    if (GetSpellAbilityId() != FourCC('A0BC')) {
        return
    }

    CreateNUnitsAtLoc(1, FourCC("h02R"), GetOwningPlayer(GetTriggerUnit()), GetSpellTargetLoc(), bj_UNIT_FACING)
    ForGroupBJ(GetUnitsInRangeOfLocMatching(512, GetUnitLoc(GetLastCreatedUnit()), Condition(Trig_Chronosphere_cast_Func002001003)), Trig_Chronosphere_cast_Func002002)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    PolledWait(1.50)
    CreateNUnitsAtLoc(1, FourCC("h02R"), GetOwningPlayer(GetTriggerUnit()), GetSpellTargetLoc(), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    PolledWait(1.50)
    CreateNUnitsAtLoc(1, FourCC("h02R"), GetOwningPlayer(GetTriggerUnit()), GetSpellTargetLoc(), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    PolledWait(1.50)
    CreateNUnitsAtLoc(1, FourCC("h02R"), GetOwningPlayer(GetTriggerUnit()), GetSpellTargetLoc(), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    PolledWait(1.50)
    CreateNUnitsAtLoc(1, FourCC("h02R"), GetOwningPlayer(GetTriggerUnit()), GetSpellTargetLoc(), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    PolledWait(1.50)
    CreateNUnitsAtLoc(1, FourCC("h02R"), GetOwningPlayer(GetTriggerUnit()), GetSpellTargetLoc(), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    PolledWait(1.50)
    CreateNUnitsAtLoc(1, FourCC("h02R"), GetOwningPlayer(GetTriggerUnit()), GetSpellTargetLoc(), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    PolledWait(1.50)
    PauseAllUnitsBJ(false)
}

export function initChronoSphere() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_SPELL_CAST)
    TriggerAddAction( trigger, () => chronoSphere())
}
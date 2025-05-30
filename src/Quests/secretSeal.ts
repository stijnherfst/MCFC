function secretSeal() {
    if (GetItemTypeId(GetManipulatedItem()) != FourCC('I0AQ')) {
        return
    }

    DisableTrigger(GetTriggeringTrigger())
    ForGroupBJ(GetUnitsOfTypeIdAll(FourCC('n025')), () => SetUnitPositionLocFacingBJ(gg_unit_n026_0148, GetRectCenter(gg_rct_penguinmove), 235.00))
    DisplayTimedTextToForce(GetPlayersAll(), 40.00, "Secret Seal Level Activated\n\nOwnage Monstrosities Spawned")
    CreateNUnitsAtLocFacingLocBJ(1, FourCC('n03O'), Player(11), GetRectCenter(gg_rct_battleseal1), GetUnitLoc(GetTriggerUnit()))
    UnitAddAbilityBJ(FourCC('A0CE'), GetLastCreatedUnit())
    UnitAddAbilityBJ(FourCC('AInv'), GetLastCreatedUnit())
    UnitAddItemByIdSwapped(FourCC('I096'), GetLastCreatedUnit())
    UnitAddItemByIdSwapped(FourCC('I096'), GetLastCreatedUnit())
    UnitAddItemByIdSwapped(FourCC('I096'), GetLastCreatedUnit())
    UnitAddItemByIdSwapped(FourCC('I096'), GetLastCreatedUnit())
    UnitAddItemByIdSwapped(FourCC('I096'), GetLastCreatedUnit())
    UnitAddItemByIdSwapped(FourCC('I096'), GetLastCreatedUnit())
    UnitAddItemByIdSwapped(FourCC('I096'), GetLastCreatedUnit())
    UnitAddItemByIdSwapped(FourCC('I096'), GetLastCreatedUnit())
    UnitAddItemByIdSwapped(FourCC('I096'), GetLastCreatedUnit())
    UnitAddItemByIdSwapped(FourCC('I096'), GetLastCreatedUnit())
    TriggerSleepAction(0.50)
    SetUnitScalePercent(GetLastCreatedUnit(), 200.00, 200.00, 200.00)
    CreateNUnitsAtLocFacingLocBJ(1, FourCC('n03O'), Player(11), GetRectCenter(gg_rct_battleseal2), GetUnitLoc(GetTriggerUnit()))
    UnitAddAbilityBJ(FourCC('A0CF'), GetLastCreatedUnit())
    UnitAddAbilityBJ(FourCC('A06T'), GetLastCreatedUnit())
    UnitAddAbilityBJ(FourCC('A09M'), GetLastCreatedUnit())
    UnitAddAbilityBJ(FourCC('A06O'), GetLastCreatedUnit())
    SetUnitVertexColorBJ(GetLastCreatedUnit(), 100, 0.00, 0.00, 0)
    AddSpecialEffectTargetUnitBJ("chest", GetLastCreatedUnit(), "Abilities\\Weapons\\RedDragonBreath\\RedDragonMissile.mdl")
    UnitAddAbilityBJ(FourCC('AInv'), GetLastCreatedUnit())
    CreateNUnitsAtLocFacingLocBJ(1, FourCC('n03O'), Player(11), GetRectCenter(gg_rct_battleseal3), GetUnitLoc(GetTriggerUnit()))
    UnitAddAbilityBJ(FourCC('A0CJ'), GetLastCreatedUnit())
    SetUnitVertexColorBJ(GetLastCreatedUnit(), 75.00, 100.00, 100.00, 0)
    AddSpecialEffectTargetUnitBJ("overhead", GetLastCreatedUnit(), "Abilities\\Weapons\\WitchDoctorMissile\\WitchDoctorMissile.mdl")
    UnitAddAbilityBJ(FourCC('AInv'), GetLastCreatedUnit())
    CreateNUnitsAtLocFacingLocBJ(1, FourCC('n03O'), Player(11), GetRectCenter(gg_rct_battleseal4), GetUnitLoc(GetTriggerUnit()))
    UnitAddAbilityBJ(FourCC('A0CK'), GetLastCreatedUnit())
    UnitAddAbilityBJ(FourCC('AInv'), GetLastCreatedUnit())
    SetUnitVertexColorBJ(GetLastCreatedUnit(), 10.00, 10.00, 10.00, 0)
    CreateNUnitsAtLocFacingLocBJ(1, FourCC('n03O'), Player(11), GetRectCenter(gg_rct_battleseal5), GetUnitLoc(GetTriggerUnit()))
    AddSpecialEffectTargetUnitBJ("head", GetLastCreatedUnit(), "Abilities\\Spells\\Undead\\DeathCoil\\DeathCoilMissile.mdl")
    UnitAddAbilityBJ(FourCC('A0CM'), GetLastCreatedUnit())
    UnitAddAbilityBJ(FourCC('A0CL'), GetLastCreatedUnit())
    UnitAddAbilityBJ(FourCC('AInv'), GetLastCreatedUnit())
    CreateNUnitsAtLocFacingLocBJ(1, FourCC('n03O'), Player(11), GetRectCenter(gg_rct_battleseal6), GetUnitLoc(GetTriggerUnit()))
    UnitAddAbilityBJ(FourCC('S001'), GetLastCreatedUnit())
    UnitAddAbilityBJ(FourCC('AInv'), GetLastCreatedUnit())
    CreateNUnitsAtLocFacingLocBJ(1, FourCC('n03O'), Player(11), GetRectCenter(gg_rct_battleseal7), GetUnitLoc(GetTriggerUnit()))
    UnitAddAbilityBJ(FourCC('A0D0'), GetLastCreatedUnit())
    UnitAddAbilityBJ(FourCC('AInv'), GetLastCreatedUnit())
    AddSpecialEffectTargetUnitBJ("head", GetLastCreatedUnit(), "Abilities\\Weapons\\FaerieDragonMissile\\FaerieDragonMissile.mdl")
    UnitAddAbilityBJ(FourCC('A04S'), GetLastCreatedUnit())
    CreateNUnitsAtLocFacingLocBJ(1, FourCC('n03F'), Player(11), GetRectCenter(gg_rct_Secret_Seal_Level), GetUnitLoc(GetTriggerUnit()))
    UnitAddAbilityBJ(FourCC('A0CE'), GetLastCreatedUnit())
    SetUnitScalePercent(GetLastCreatedUnit(), 200.00, 200.00, 200.00)
    UnitAddAbilityBJ(FourCC('A0CF'), GetLastCreatedUnit())
    UnitAddAbilityBJ(FourCC('A06T'), GetLastCreatedUnit())
    UnitAddAbilityBJ(FourCC('A09M'), GetLastCreatedUnit())
    UnitAddAbilityBJ(FourCC('A06O'), GetLastCreatedUnit())
    TriggerSleepAction(0.50)
    SetUnitVertexColorBJ(GetLastCreatedUnit(), 100, 0.00, 0.00, 0)
    AddSpecialEffectTargetUnitBJ("chest", GetLastCreatedUnit(), "Abilities\\Weapons\\RedDragonBreath\\RedDragonMissile.mdl")
    UnitAddAbilityBJ(FourCC('A0CJ'), GetLastCreatedUnit())
    SetUnitVertexColorBJ(GetLastCreatedUnit(), 75.00, 100.00, 100.00, 0)
    AddSpecialEffectTargetUnitBJ("overhead", GetLastCreatedUnit(), "Abilities\\Weapons\\WitchDoctorMissile\\WitchDoctorMissile.mdl")
    UnitAddAbilityBJ(FourCC('A0CK'), GetLastCreatedUnit())
    SetUnitVertexColorBJ(GetLastCreatedUnit(), 10.00, 10.00, 10.00, 0)
    AddSpecialEffectTargetUnitBJ("head", GetLastCreatedUnit(), "Abilities\\Spells\\Undead\\DeathCoil\\DeathCoilMissile.mdl")
    UnitAddAbilityBJ(FourCC('A0CM'), GetLastCreatedUnit())
    UnitAddAbilityBJ(FourCC('A0CL'), GetLastCreatedUnit())
    UnitAddAbilityBJ(FourCC('S001'), GetLastCreatedUnit())
    UnitAddAbilityBJ(FourCC('A0D0'), GetLastCreatedUnit())
    AddSpecialEffectTargetUnitBJ("head", GetLastCreatedUnit(), "Abilities\\Weapons\\FaerieDragonMissile\\FaerieDragonMissile.mdl")
    UnitAddAbilityBJ(FourCC('A04S'), GetLastCreatedUnit())
    TriggerSleepAction(0.50)
    CreateNUnitsAtLoc(1, FourCC('n03S'), Player(11), GetRectCenter(gg_rct_deepwaterspawn), 235.00)
    CreateNUnitsAtLoc(1, FourCC('n040'), Player(11), GetRectCenter(gg_rct_poisonspawn), 320.00)
    CreateNUnitsAtLoc(1, FourCC('n03Q'), Player(11), GetRectCenter(gg_rct_moltenspawn), 90.00)
    CreateNUnitsAtLoc(1, FourCC('n03T'), Player(11), GetRectCenter(gg_rct_icetundraspawn), 235.00)
    CreateNUnitsAtLoc(1, FourCC('n03R'), Player(11), GetRectCenter(gg_rct_pandaspawn), 360.00)
}

export function initSecretSeal() {
    let secretSealTrigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ(secretSealTrigger, EVENT_PLAYER_UNIT_USE_ITEM)
    TriggerAddAction(secretSealTrigger, () => secretSeal())
}
function shouldRespawn() {
    if (IsUnitType(GetTriggerUnit(), UNIT_TYPE_HERO)) {
        return false
    }

    if (GetOwningPlayer(GetDyingUnit()) != Player(11)) {
        return false
    }

    return !(GetUnitTypeId(GetTriggerUnit()) == FourCC("n011")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("n012")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("n01Z")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("e000")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("n020")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("n01Y")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("h00K")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("h00A")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("h00P")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("h025")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("h00L")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("h00E")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("h00N")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("h00J")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("h00C")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("h02A")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("h00D")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("h00M")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("h00H")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("h000")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("h00O")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("h029")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("h02E")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("h02F")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("h00B")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("h00G")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("h00F")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("n001")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("n04D")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("n04C")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("n04F")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("n04E")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("n04G")
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("n045")) // Gerbert's Skeleton
}

function rare_drop(unit: unit) {
    if (GetRandomInt(1, 10) != 1) {
        return
    }

    // Right
    let level = GetUnitLevel(unit)
    if (level <= 10) {
        UnitAddItemById(unit, FourCC("I093"))
    } else if (level <= 20) {
        UnitAddItemById(unit, FourCC("I094"))
    } else if (level <= 30) {
        UnitAddItemById(unit, FourCC("I08V"))
    } else if (level <= 40) {
        UnitAddItemById(unit, FourCC("I092"))
    } else if (level <= 50) {
        UnitAddItemById(unit, FourCC("I08T"))
    } else if (level <= 60) {
        UnitAddItemById(unit, FourCC("I091"))
    } else if (level <= 70) {
        UnitAddItemById(unit, FourCC("I08U"))
    } else if (level <= 80) {
        UnitAddItemById(unit, FourCC("I08W"))
    } else if (level <= 90) {
        UnitAddItemById(unit, FourCC("I090"))
    } else if (level <= 99) {
        UnitAddItemById(unit, FourCC("I08Z"))
    } else if (level == 100) {
        UnitAddItemById(unit, FourCC("I08X"))
    }

    // Left
    if (level > 40 && level <= 50) {
        UnitAddItemById(unit, FourCC("I0A0"))
    } else if (level > 80 && level <= 90) {
        UnitAddItemById(unit, FourCC("I0A1"))
    } else if (level == 100) {
        UnitAddItemById(unit, FourCC("I09P"))
    }
}

function rare_monster_hp(unit: unit) {
    BlzSetUnitMaxHP(unit, BlzGetUnitMaxHP(unit) + GetUnitLevel(unit) * 100)
    SetUnitLifePercentBJ(unit, 100)
}

function respawn() {
    if (!shouldRespawn()) {
        return
    }

    TriggerSleepAction(30.00)
    
    const unit = CreateUnitAtLoc(GetOwningPlayer(GetDyingUnit()), GetUnitTypeId(GetDyingUnit()), GetUnitLoc(GetDyingUnit()), bj_UNIT_FACING)

    if (GetRandomInt(1, 500) == 1) {
        DisplayTimedTextToForce(GetPlayersAll(), 15.00, ("Rare " + (GetUnitName(unit) + " has spawned")))
        UnitAddAbilityBJ(FourCC("A0CE"), unit)
        UnitAddAbilityBJ(FourCC("AInv"), unit)
        UnitAddItemByIdSwapped(FourCC("I096"), unit)
        SetUnitScalePercent(unit, 200.00, 200.00, 200.00)
        rare_monster_hp(unit)
        rare_drop(unit)
    }

    if (GetRandomInt(1, 500) == 1) {
        DisplayTimedTextToForce(GetPlayersAll(), 15.00, ("Rare " + (GetUnitName(unit) + " has spawned")))
        UnitAddAbilityBJ(FourCC("A0CF"), unit)
        UnitAddAbilityBJ(FourCC("A06T"), unit)
        UnitAddAbilityBJ(FourCC("A09M"), unit)
        UnitAddAbilityBJ(FourCC("A06O"), unit)
        SetUnitVertexColorBJ(unit, 100, 0.00, 0.00, 0)
        AddSpecialEffectTargetUnitBJ("chest", unit, "Abilities\\Weapons\\RedDragonBreath\\RedDragonMissile.mdl")
        UnitAddAbilityBJ(FourCC("AInv"), unit)
        rare_monster_hp(unit)
        rare_drop(unit)
    }

    if (GetRandomInt(1, 500) == 1) {
        DisplayTimedTextToForce(GetPlayersAll(), 15.00, ("Rare " + (GetUnitName(unit) + " has spawned")))
        UnitAddAbilityBJ(FourCC("A0CJ"), unit)
        SetUnitVertexColorBJ(unit, 75.00, 100.00, 100.00, 0)
        AddSpecialEffectTargetUnitBJ("overhead", unit, "Abilities\\Weapons\\WitchDoctorMissile\\WitchDoctorMissile.mdl")
        UnitAddAbilityBJ(FourCC("AInv"), unit)
        rare_monster_hp(unit)
        rare_drop(unit)
    }

    if (GetRandomInt(1, 500) == 1) {
        DisplayTimedTextToForce(GetPlayersAll(), 15.00, ("Rare " + (GetUnitName(unit) + " has spawned")))
        UnitAddAbilityBJ(FourCC("A0CK"), unit)
        UnitAddAbilityBJ(FourCC("AInv"), unit)
        SetUnitVertexColorBJ(unit, 10.00, 10.00, 10.00, 0)
        AddSpecialEffectTargetUnitBJ("head", unit, "Abilities\\Spells\\Undead\\DeathCoil\\DeathCoilMissile.mdl")
        rare_drop(unit)
    }

    if (GetRandomInt(1, 500) == 1) {
        DisplayTimedTextToForce(GetPlayersAll(), 15.00, ("Rare " + (GetUnitName(unit) + " has spawned")))
        UnitAddAbilityBJ(FourCC("A0CM"), unit)
        UnitAddAbilityBJ(FourCC("A0CL"), unit)
        UnitAddAbilityBJ(FourCC("AInv"), unit)
        rare_monster_hp(unit)
        rare_drop(unit)
    }

    if (GetRandomInt(1, 500) == 1) {
        DisplayTimedTextToForce(GetPlayersAll(), 15.00, ("Rare " + (GetUnitName(unit) + " has spawned")))
        UnitAddAbilityBJ(FourCC("S001"), unit)
        UnitAddAbilityBJ(FourCC("AInv"), unit)
        AddSpecialEffectTargetUnitBJ("head", unit, "Abilities\\Spells\\NightElf\\SpiritOfVengeance\\SpiritOfVengeanceOrbs1.mdl")
        AddSpecialEffectTargetUnitBJ("hand,right", unit, "Abilities\\Spells\\NightElf\\SpiritOfVengeance\\SpiritOfVengeanceOrbs1.mdl")
        AddSpecialEffectTargetUnitBJ("hand,left", unit, "Abilities\\Spells\\NightElf\\SpiritOfVengeance\\SpiritOfVengeanceOrbs1.mdl")
        AddSpecialEffectTargetUnitBJ("weapon,left", unit, "Abilities\\Spells\\NightElf\\SpiritOfVengeance\\SpiritOfVengeanceOrbs1.mdl")
        AddSpecialEffectTargetUnitBJ("weapon,right", unit, "Abilities\\Spells\\NightElf\\SpiritOfVengeance\\SpiritOfVengeanceOrbs1.mdl")
        AddSpecialEffectTargetUnitBJ("overhead", unit, "Abilities\\Spells\\NightElf\\SpiritOfVengeance\\SpiritOfVengeanceOrbs1.mdl")
        rare_monster_hp(unit)
        rare_drop(unit)
    }

    if (GetRandomInt(1, 500) == 1) {
        DisplayTimedTextToForce(GetPlayersAll(), 15.00, ("Rare " + (GetUnitName(unit) + " has spawned")))
        UnitAddAbilityBJ(FourCC("A0D0"), unit)
        AddSpecialEffectTargetUnitBJ("head", unit, "Abilities\\Weapons\\FaerieDragonMissile\\FaerieDragonMissile.mdl")
        UnitAddAbilityBJ(FourCC("A04S"), unit)
        UnitAddAbilityBJ(FourCC("AInv"), unit)
        rare_monster_hp(unit)
        rare_drop(unit)
    }
}

export function initMonsterRespawn() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_DEATH)
    TriggerAddAction(trigger, () => respawn())
}
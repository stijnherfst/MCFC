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
        || GetUnitTypeId(GetTriggerUnit()) == FourCC("n04G"))
}

function rare_drop() {
    if (GetRandomInt(1, 10) != 1) {
        return
    }

    // Right
    let level = GetUnitLevel(GetLastCreatedUnit())
    if (level <= 10) {
        UnitAddItemById(GetLastCreatedUnit(), FourCC("I093"))
    } else if (level <= 20) {
        UnitAddItemById(GetLastCreatedUnit(), FourCC("I094"))
    } else if (level <= 30) {
        UnitAddItemById(GetLastCreatedUnit(), FourCC("I08V"))
    } else if (level <= 40) {
        UnitAddItemById(GetLastCreatedUnit(), FourCC("I092"))
    } else if (level <= 50) {
        UnitAddItemById(GetLastCreatedUnit(), FourCC("I08T"))
    } else if (level <= 60) {
        UnitAddItemById(GetLastCreatedUnit(), FourCC("I091"))
    } else if (level <= 70) {
        UnitAddItemById(GetLastCreatedUnit(), FourCC("I08U"))
    } else if (level <= 80) {
        UnitAddItemById(GetLastCreatedUnit(), FourCC("I08W"))
    } else if (level <= 90) {
        UnitAddItemById(GetLastCreatedUnit(), FourCC("I090"))
    } else if (level <= 99) {
        UnitAddItemById(GetLastCreatedUnit(), FourCC("I08Z"))
    } else if (level == 100) {
        UnitAddItemById(GetLastCreatedUnit(), FourCC("I08X"))
    }

    // Left
    if (level > 40 && level <= 50) {
        UnitAddItemById(GetLastCreatedUnit(), FourCC("I0A0"))
    } else if (level > 80 && level <= 90) {
        UnitAddItemById(GetLastCreatedUnit(), FourCC("I0A1"))
    } else if (level == 100) {
        UnitAddItemById(GetLastCreatedUnit(), FourCC("I09P"))
    }
}

function rare_monster_hp() {
    BlzSetUnitMaxHP(GetLastCreatedUnit(), BlzGetUnitMaxHP(GetLastCreatedUnit()) + GetUnitLevel(GetLastCreatedUnit()) * 100)
}

function respawn() {
    if (!shouldRespawn()) {
        return
    }

    TriggerSleepAction(30.00)
    CreateNUnitsAtLoc(1, GetUnitTypeId(GetDyingUnit()), GetOwningPlayer(GetDyingUnit()), GetUnitLoc(GetDyingUnit()), bj_UNIT_FACING)

    if (GetRandomInt(1, 500) == 1) {
        DisplayTimedTextToForce(GetPlayersAll(), 15.00, ("Rare " + (GetUnitName(GetLastCreatedUnit()) + " has spawned")))
        UnitAddAbilityBJ(FourCC("A0CE"), GetLastCreatedUnit())
        UnitAddAbilityBJ(FourCC("AInv"), GetLastCreatedUnit())
        UnitAddItemByIdSwapped(FourCC("I096"), GetLastCreatedUnit())
        SetUnitScalePercent(GetLastCreatedUnit(), 200.00, 200.00, 200.00)
        rare_monster_hp()
        rare_drop()
    }

    if (GetRandomInt(1, 500) == 1) {
        DisplayTimedTextToForce(GetPlayersAll(), 15.00, ("Rare " + (GetUnitName(GetLastCreatedUnit()) + " has spawned")))
        UnitAddAbilityBJ(FourCC("A0CF"), GetLastCreatedUnit())
        UnitAddAbilityBJ(FourCC("A06T"), GetLastCreatedUnit())
        UnitAddAbilityBJ(FourCC("A09M"), GetLastCreatedUnit())
        UnitAddAbilityBJ(FourCC("A06O"), GetLastCreatedUnit())
        SetUnitVertexColorBJ(GetLastCreatedUnit(), 100, 0.00, 0.00, 0)
        AddSpecialEffectTargetUnitBJ("chest", GetLastCreatedUnit(), "Abilities\\Weapons\\RedDragonBreath\\RedDragonMissile.mdl")
        UnitAddAbilityBJ(FourCC("AInv"), GetLastCreatedUnit())
        rare_monster_hp()
        rare_drop()
    }

    if (GetRandomInt(1, 500) == 1) {
        DisplayTimedTextToForce(GetPlayersAll(), 15.00, ("Rare " + (GetUnitName(GetLastCreatedUnit()) + " has spawned")))
        UnitAddAbilityBJ(FourCC("A0CJ"), GetLastCreatedUnit())
        SetUnitVertexColorBJ(GetLastCreatedUnit(), 75.00, 100.00, 100.00, 0)
        AddSpecialEffectTargetUnitBJ("overhead", GetLastCreatedUnit(), "Abilities\\Weapons\\WitchDoctorMissile\\WitchDoctorMissile.mdl")
        UnitAddAbilityBJ(FourCC("AInv"), GetLastCreatedUnit())
        rare_monster_hp()
        rare_drop()
    }

    if (GetRandomInt(1, 500) == 1) {
        DisplayTimedTextToForce(GetPlayersAll(), 15.00, ("Rare " + (GetUnitName(GetLastCreatedUnit()) + " has spawned")))
        UnitAddAbilityBJ(FourCC("A0CK"), GetLastCreatedUnit())
        UnitAddAbilityBJ(FourCC("AInv"), GetLastCreatedUnit())
        SetUnitVertexColorBJ(GetLastCreatedUnit(), 10.00, 10.00, 10.00, 0)
        AddSpecialEffectTargetUnitBJ("head", GetLastCreatedUnit(), "Abilities\\Spells\\Undead\\DeathCoil\\DeathCoilMissile.mdl")
        rare_drop()
    }

    if (GetRandomInt(1, 500) == 1) {
        DisplayTimedTextToForce(GetPlayersAll(), 15.00, ("Rare " + (GetUnitName(GetLastCreatedUnit()) + " has spawned")))
        UnitAddAbilityBJ(FourCC("A0CM"), GetLastCreatedUnit())
        UnitAddAbilityBJ(FourCC("A0CL"), GetLastCreatedUnit())
        UnitAddAbilityBJ(FourCC("AInv"), GetLastCreatedUnit())
        rare_monster_hp()
        rare_drop()
    }

    if (GetRandomInt(1, 500) == 1) {
        DisplayTimedTextToForce(GetPlayersAll(), 15.00, ("Rare " + (GetUnitName(GetLastCreatedUnit()) + " has spawned")))
        UnitAddAbilityBJ(FourCC("S001"), GetLastCreatedUnit())
        UnitAddAbilityBJ(FourCC("AInv"), GetLastCreatedUnit())
        AddSpecialEffectTargetUnitBJ("head", GetLastCreatedUnit(), "Abilities\\Spells\\NightElf\\SpiritOfVengeance\\SpiritOfVengeanceOrbs1.mdl")
        AddSpecialEffectTargetUnitBJ("hand,right", GetLastCreatedUnit(), "Abilities\\Spells\\NightElf\\SpiritOfVengeance\\SpiritOfVengeanceOrbs1.mdl")
        AddSpecialEffectTargetUnitBJ("hand,left", GetLastCreatedUnit(), "Abilities\\Spells\\NightElf\\SpiritOfVengeance\\SpiritOfVengeanceOrbs1.mdl")
        AddSpecialEffectTargetUnitBJ("weapon,left", GetLastCreatedUnit(), "Abilities\\Spells\\NightElf\\SpiritOfVengeance\\SpiritOfVengeanceOrbs1.mdl")
        AddSpecialEffectTargetUnitBJ("weapon,right", GetLastCreatedUnit(), "Abilities\\Spells\\NightElf\\SpiritOfVengeance\\SpiritOfVengeanceOrbs1.mdl")
        AddSpecialEffectTargetUnitBJ("overhead", GetLastCreatedUnit(), "Abilities\\Spells\\NightElf\\SpiritOfVengeance\\SpiritOfVengeanceOrbs1.mdl")
        rare_monster_hp()
        rare_drop()
    }

    if (GetRandomInt(1, 500) == 1) {
        DisplayTimedTextToForce(GetPlayersAll(), 15.00, ("Rare " + (GetUnitName(GetLastCreatedUnit()) + " has spawned")))
        UnitAddAbilityBJ(FourCC("A0D0"), GetLastCreatedUnit())
        AddSpecialEffectTargetUnitBJ("head", GetLastCreatedUnit(), "Abilities\\Weapons\\FaerieDragonMissile\\FaerieDragonMissile.mdl")
        UnitAddAbilityBJ(FourCC("A04S"), GetLastCreatedUnit())
        UnitAddAbilityBJ(FourCC("AInv"), GetLastCreatedUnit())
        rare_monster_hp()
        rare_drop()
    }
}

export function initMonsterRespawn() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_DEATH)
    TriggerAddAction(trigger, () => respawn())
}
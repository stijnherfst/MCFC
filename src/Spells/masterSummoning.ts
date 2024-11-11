import { Group, MapPlayer } from "w3ts"

function masterSummoning() {
    if (GetSpellAbilityId() != FourCC('A092')) {
        return
    }

    // Get rid of previous summons
    Group.create().enumUnitsOfPlayer(MapPlayer.fromEvent(), Filter(function yeet() {
        if (!IsUnitType(GetFilterUnit(), UNIT_TYPE_HERO)) {
            KillUnit(GetFilterUnit())
        }
        return false
    }))

    let int = GetHeroInt(GetTriggerUnit(), true)
    if (int > 800) { // Diffusional Monster
        CreateUnitAtLoc(GetOwningPlayer(GetTriggerUnit()), FourCC("n00C"), GetUnitLoc(GetTriggerUnit()), bj_UNIT_FACING)
    } else if (int > 650) { // Spawn of Nature
        CreateUnitAtLoc(GetOwningPlayer(GetTriggerUnit()), FourCC("n010"), GetUnitLoc(GetTriggerUnit()), bj_UNIT_FACING)
    } else if (int > 500) { // Super Hippy
        CreateUnitAtLoc(GetOwningPlayer(GetTriggerUnit()), FourCC("n00Y"), GetUnitLoc(GetTriggerUnit()), bj_UNIT_FACING)
    } else if (int > 300) { // Flaming Rock
        CreateUnitAtLoc(GetOwningPlayer(GetTriggerUnit()), FourCC("n00S"), GetUnitLoc(GetTriggerUnit()), bj_UNIT_FACING)
    }
}

export function initMasterSummoning() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_SPELL_EFFECT)
    TriggerAddAction( trigger, () => masterSummoning())
}
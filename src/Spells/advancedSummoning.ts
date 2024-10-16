import { Group, MapPlayer } from "w3ts"

function advancedSummoning() {
    if (GetSpellAbilityId() != FourCC('A0A1')) {
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
    if (int > 400) { // Greater Alien
        CreateUnitAtLoc(GetOwningPlayer(GetTriggerUnit()), FourCC("n00Z"), GetUnitLoc(GetTriggerUnit()), bj_UNIT_FACING)
    } else if (int > 300) { // Killer Pinguin
        CreateUnitAtLoc(GetOwningPlayer(GetTriggerUnit()), FourCC("n025"), GetUnitLoc(GetTriggerUnit()), bj_UNIT_FACING)
    } else if (int > 200) { // Holy Purger
        CreateUnitAtLoc(GetOwningPlayer(GetTriggerUnit()), FourCC("n00R"), GetUnitLoc(GetTriggerUnit()), bj_UNIT_FACING)
    } else if (int > 75) { // Sea Dragon
        CreateUnitAtLoc(GetOwningPlayer(GetTriggerUnit()), FourCC("n00P"), GetUnitLoc(GetTriggerUnit()), bj_UNIT_FACING)
    }
}

export function initAdvancedSummoning() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_SPELL_EFFECT)
    TriggerAddAction( trigger, () => advancedSummoning())
}
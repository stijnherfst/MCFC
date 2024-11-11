import { Group, MapPlayer } from "w3ts"

function spellFloatingText() {
    CreateTextTagUnitBJ(GetAbilityName(GetSpellAbilityId()), GetTriggerUnit(), 0, 8.00, 100, 100, 100, 15.00)
    SetTextTagVelocityBJ(GetLastCreatedTextTag(), 33.00, GetRandomDirectionDeg())
    SetTextTagPermanentBJ(GetLastCreatedTextTag(), false)
    SetTextTagLifespanBJ(GetLastCreatedTextTag(), 3.00)
}

export function initSpellFloatingText() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_SPELL_FINISH)
    TriggerAddAction( trigger, () => spellFloatingText())
}
// function dropbear() {
//     if (GetSpellAbilityId() != FourCC('Houa')) {
//         return
//     }

//     DisplayTimedTextToForce( GetPlayersAll(), 40.00, "Ability Triggered" )
// }

// function dropbear2() {
//     if (GetUnitAbilityLevel(GetTriggerUnit(), FourCC('Houa')) == 0) {
//         return
//     }

//     DisplayTimedTextToForce( GetPlayersAll(), 40.00, "TPing" )

//     IssuePointOrderLoc(GetTriggerUnit(), "blink", GetUnitLoc(GetAttacker()))
// }

export function initDropBear() {
    // let trigger = CreateTrigger()
    // TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_SPELL_EFFECT)
    // TriggerAddAction(trigger, () => dropbear())

    // let trigger2 = CreateTrigger()
    // TriggerRegisterAnyUnitEventBJ( trigger2, EVENT_PLAYER_UNIT_ATTACKED )
    // TriggerAddAction( trigger2, () => dropbear2() )
}
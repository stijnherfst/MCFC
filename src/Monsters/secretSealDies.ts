// function secretSealDies() {
//     if (GetUnitTypeId(GetDyingUnit()) != FourCC('h01Z')) {
//         return
//     }

//     SetUnitLifeBJ(gg_unit_h020_0319, (GetUnitStateSwap(UNIT_STATE_LIFE, gg_unit_h020_0319) - 1))
//     DisplayTimedTextToForce( GetPlayersAll(), 40.00, "The ancient seal has weakened" )
// }

// function smilyDies() {
//     if (GetUnitTypeId(GetDyingUnit()) != FourCC('h01Z')) {
//         return
//     }

//     if (CountUnitsInGroup(GetUnitsOfTypeIdAll(FourCC("h01Z"))) != 0) {
//         return
//     }

//     PauseTimerBJ(true, udg_Armageddon)
//     let korona = CreateUnitAtLoc(Player(11), FourCC("n01X"), GetRectCenter(gg_rct_Korona), bj_UNIT_FACING)
//     UnitAddItemByIdSwapped(FourCC("I04E"), korona)
//     DisableTrigger(GetTriggeringTrigger())
//     TriggerExecute(gg_trg_Korona_kam)
// }

export function initSecretSealDies() {
    // let trigger = CreateTrigger()
    // TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_DEATH)
    // TriggerAddAction(trigger, () => secretSealDies())
    // TriggerAddAction(trigger, () => smilyDies())
}
function mysticWater() {
    if (GetOwningPlayer(GetTriggerUnit()) == Player(11)) {
        return
    }

    CreateQuestBJ( bj_QUESTTYPE_OPT_DISCOVERED, "Mystic Water", "The overgrown hedge in the middle of the forest is gaurding the mystic water kill him and you could use this water yourself", "ReplaceableTextures\\CommandButtons\\BTNStaffOfTeleportation.blp" )
    DisableTrigger( GetTriggeringTrigger())
    DisplayTimedTextToForce( GetPlayersAll(), 25.00, "Matt: I was in the forest and i saw a gigantic hedge! it must have drank the mystic water if u can kill this overgrown shrub the mystic water would be yours")
}

export function initMysticWater() {
    let enterTrigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(enterTrigger, gg_rct_Matt)
    TriggerAddAction(enterTrigger, () => mysticWater())
}
function gerbertsGrave() {
    DisplayTextToForce( GetPlayersAll(), "A cold bony hand grips your ankle tight as you trod over its grave." )
    CreateNUnitsAtLoc( 1, FourCC('n045'), Player(PLAYER_NEUTRAL_AGGRESSIVE), GetRectCenter(gg_rct_GraveRegion), bj_UNIT_FACING )
    DisableTrigger( GetTriggeringTrigger() )
}

export function initGerbertsGrave() {
    let trigger = CreateTrigger(  )
    TriggerRegisterEnterRectSimple( trigger, gg_rct_GraveRegion )
    TriggerAddAction( trigger, () => gerbertsGrave() )
}
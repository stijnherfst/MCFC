function spawnAmon() {
    if (GetUnitTypeId(GetDyingUnit()) != FourCC('n03R')) {
        return
    }

    RemoveUnit( gg_unit_n01T_0303 )
    RemoveUnit( gg_unit_n01E_0321 )
    RemoveUnit( gg_unit_n01E_0213 )
    RemoveUnit( gg_unit_n01E_0023 )
    CreateNUnitsAtLoc( 1, FourCC('n03X'), Player(11), GetRectCenter(gg_rct_amonspawn), 360.00 )
    DisplayTimedTextToForce( GetPlayersAll(), 40.00, "Panda Monstrosity defeated|n|nAmon has appeared" )
    DisableTrigger( GetTriggeringTrigger() )
}

function initAmon() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_DEATH)
    TriggerAddAction(trigger, () => spawnAmon())
}
function sage() {
    if (GetOwningPlayer(GetTriggerUnit()) == Player(11)) {
        return
    }

    CreateQuestBJ( bj_QUESTTYPE_OPT_DISCOVERED, "Greatest Evil", "A great evil lurks somewhere in the barren desert", "ReplaceableTextures\\CommandButtons\\BTNDoomGuard.blp" )
    DisableTrigger( GetTriggeringTrigger() )
    DisplayTimedTextToForce( GetPlayersAll(), 35.00, "Sage: hello there young Master Crafter I am Sage the sole survivor from the war of the gods there appears to be only 2 ancient ones left... a god and a fallen god... I fear the false god although sealed away may yet be revitalized" )
}

function initSage() {
    let enters = CreateTrigger()
    TriggerRegisterEnterRectSimple(enters, gg_rct_Sage)
    TriggerAddAction(enters, () => sage())
}
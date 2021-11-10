function darkSummoner() {
    if (GetOwningPlayer(GetTriggerUnit()) == Player(11)) {
        return
    }

    DisableTrigger(GetTriggeringTrigger())
    DisplayTimedTextToForce(GetPlayersAll(), 25.00, "Dark Summoner: The winds of magic are weak today... if only I had the power...")
    CreateQuestBJ( bj_QUESTTYPE_OPT_DISCOVERED, "Dark Summoner", "The dark summoner needs more power to fullfill his summoning (find a way to restore his mp - maybe a power scroll or 2 would work)", "ReplaceableTextures\\CommandButtons\\BTNDeepLordRevenant.blp" )
}

function darkSummon() {
    DisableTrigger(GetTriggeringTrigger())
    CreateNUnitsAtLoc(1, FourCC('n02H'), Player(11), GetRectCenter(gg_rct_lord_of_the_pit), bj_UNIT_FACING)
    DisplayTimedTextToForce(GetPlayersAll(), 20.00, "Yes! thats its the power! rise my minion I command you to rise!")
}

export function initDarkSummoner() {
    let enterTrigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(enterTrigger, gg_rct_Dark_Summoner)
    TriggerAddAction(enterTrigger, () => darkSummoner())

    let darkSummonTrigger = CreateTrigger()
    TriggerRegisterUnitManaEvent(darkSummonTrigger, gg_unit_h02D_0318, GREATER_THAN_OR_EQUAL, 666.00 )
    TriggerAddAction(darkSummonTrigger, () => darkSummon() )
}
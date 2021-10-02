function goldenChicken() {
    if (!IsUnitType(GetTriggerUnit(), UNIT_TYPE_HERO)) {
        return
    }

    CreateQuestBJ( bj_QUESTTYPE_OPT_DISCOVERED, "Golden Chicken", "Farmer John wants you to catch the golden chicken he said he found it in his farm but now he can't find it", "ReplaceableTextures\\CommandButtons\\BTNCritterChicken.blp" )
    DisableTrigger( GetTriggeringTrigger() )
    DisplayTimedTextToForce( GetPlayersAll(), 25.00, "Farmer John: I was trippin balls of some shrooms yesterday and i saw this gold chicken in my farm! when my trip wore off i couldn't find it anymore" )
}

function initGoldenChicken() {
    let enters = CreateTrigger(  )
    TriggerRegisterEnterRectSimple( enters, gg_rct_chicken_return )
    TriggerAddAction( enters, () => goldenChicken() )
}
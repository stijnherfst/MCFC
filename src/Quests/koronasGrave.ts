function koronasGrave() {
    if (GetHeroLevel(GetTriggerUnit()) < 5 || GetOwningPlayer(GetTriggerUnit()) == Player(11)) {
        return
    }

    DisableTrigger(GetTriggeringTrigger())
    DisplayTimedTextToForce(GetPlayersAll(), 20.00, "Here is Korona's final resting place")
    DisplayTimedTextToForce(GetPlayersAll(), 20.00, "We must not disturb her slumber... that bitch was crazy and killed all the rouge elementals")
    DisplayTimedTextToForce(GetPlayersAll(), 20.00, "If you become lv 5 or stronger I'll give you a momento to start you on your journey")
    CreateItemLoc(FourCC('I009'), GetRectCenter(gg_rct_koronas_grave) )
}

export function initKoronasGrave() {
    let trigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(trigger, gg_rct_koronas_grave )
    TriggerAddAction(trigger, () => koronasGrave() )
}


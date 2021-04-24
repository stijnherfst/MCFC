function enterDungeon() {
    if (!IsUnitType(GetTriggerUnit(), UNIT_TYPE_HERO)) {
        return
    }

    if (GetOwningPlayer(GetTriggerUnit()) == GetLocalPlayer()) {
        SetDayNightModels( "", "")
    }
}

function exitDungeon() {
    if (!IsUnitType(GetTriggerUnit(), UNIT_TYPE_HERO)) {
        return
    }

    if (GetOwningPlayer(GetTriggerUnit()) == GetLocalPlayer()) {
        SetDayNightModels( "Environment/DNC/DNCDalaran/DNCDalaranTerrain/DNCDalaranTerrain.mdx", "Environment/DNC/DNCDalaran/DNCDalaranUnit/DNCDalaranUnit.mdx" )
    }
}

export function initDungeon() {
    let enterTrigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(enterTrigger, gg_rct_Dungeons)
    TriggerAddAction(enterTrigger, () => enterDungeon())

    let exitTrigger = CreateTrigger()
    TriggerRegisterLeaveRectSimple(exitTrigger, gg_rct_Dungeons)
    TriggerAddAction(exitTrigger, () => exitDungeon())
}
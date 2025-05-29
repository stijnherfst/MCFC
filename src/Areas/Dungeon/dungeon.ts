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

function tpDungeon() {
    if (!IsUnitType(GetTriggerUnit(), UNIT_TYPE_HERO)) {
        return
    }

    SetUnitPositionLoc(GetTriggerUnit(), GetRectCenter(gg_rct_Dungeon))
}

export function initDungeon() {
    let enterTrigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(enterTrigger, gg_rct_Dungeons)
    TriggerAddAction(enterTrigger, () => enterDungeon())

    let exitTrigger = CreateTrigger()
    TriggerRegisterLeaveRectSimple(exitTrigger, gg_rct_Dungeons)
    TriggerAddAction(exitTrigger, () => exitDungeon())

    let enterTrigger2 = CreateTrigger()
    TriggerRegisterEnterRectSimple(enterTrigger2, gg_rct_Dungeon_Entrance)
    TriggerAddAction(enterTrigger2, () => tpDungeon())
}
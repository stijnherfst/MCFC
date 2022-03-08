function dragonSlayer() {
    if (GetOwningPlayer(GetTriggerUnit()) == Player(11)) {
        return
    }

    DisableTrigger(GetTriggeringTrigger())
    CreateQuestBJ(bj_QUESTTYPE_OPT_DISCOVERED, "Dragon Slayer", "Prove yourself to be a ass kicking dragon slayer go kill a Sea Dragon and a Crimson Dragon and return the bones to the dragon slayer in town", "ReplaceableTextures\\CommandButtons\\BTNpurpleDragonSpawn.blp")
    DisplayTimedTextToForce(GetPlayersAll(), 25.00, "Dragon Slayer: think you have enough might to become a dragon slayer? start with a sea dragon if you can defeat than then try the crimson dragon")
}

function dragonSlayerReturnDragonBones() {
    if (GetOwningPlayer(GetTriggerUnit()) == Player(11)) {
        return
    }

    if (!UnitHasItemOfTypeBJ(GetTriggerUnit(), FourCC('I06J'))) {
        return
    }

    RemoveItem( GetItemOfTypeFromUnitBJ(GetTriggerUnit(), FourCC('I06J')) )
    UnitAddItemByIdSwapped(FourCC('I06K'), GetTriggerUnit())
    DisplayTimedTextToForce(GetPlayersAll(), 20.00, "Dragon Slayer: Excelent work you've defeated a Crimson Dragon here take this")
}

function dragonSlayerReturnSeaBones() {
    if (GetOwningPlayer(GetTriggerUnit()) == Player(11)) {
        return
    }

    if (!UnitHasItemOfTypeBJ(GetTriggerUnit(), FourCC('I06I'))) {
        return
    }

    RemoveItem( GetItemOfTypeFromUnitBJ(GetTriggerUnit(), FourCC('I06I')) )
    UnitAddItemByIdSwapped(FourCC('I06H'), GetTriggerUnit())
    DisplayTimedTextToForce(GetPlayersAll(), 20.00, "Dragon Slayer: Excelent work you've defeated a Sea Dragon here take this")
}

export function initDragonSlayer() {
    let enterTrigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(enterTrigger, gg_rct_Dragon_Slayer )
    TriggerAddAction(enterTrigger, () => initDragonSlayer())

    let returnTrigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(returnTrigger, gg_rct_Dragon_Slayer )
    TriggerAddAction(returnTrigger, () => dragonSlayerReturnDragonBones())

    let returnTrigger2 = CreateTrigger()
    TriggerRegisterEnterRectSimple(returnTrigger2, gg_rct_Dragon_Slayer )
    TriggerAddAction(returnTrigger2, () => dragonSlayerReturnSeaBones())
}
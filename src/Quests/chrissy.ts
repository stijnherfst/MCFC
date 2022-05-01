function chrissy() {
    if (GetOwningPlayer(GetTriggerUnit()) == Player(11)) {
        return
    }
   
    if (!IsItemOwned(GetItemOfTypeFromUnitBJ(GetTriggerUnit(), FourCC('I03Q')))) {
        return
    }

    CreateQuestBJ(bj_QUESTTYPE_OPT_DISCOVERED, "Adamant Armored Rock", "Find a way to destroy the adamant armored rock and bring the adamant to chrissy", "ReplaceableTextures\\CommandButtons\\BTNColdArrows.blp")
    DisableTrigger(GetTriggeringTrigger())
    DisplayTimedTextToForce(GetPlayersAll(), 25.00, "A giant invisible adamant covered rock is to the east of here if you can find a way to destroy it i could make an incredibly strong peice of armor from it")
}

function chrissyReturn() {
    if(!IsItemOwned(GetItemOfTypeFromUnitBJ(GetTriggerUnit(), FourCC('I047')))) {
        return
    }

    DisplayTimedTextToForce(GetPlayersAll(), 15.00, "These adamant wings are nearly impenetrable")
    RemoveItem(GetItemOfTypeFromUnitBJ(GetTriggerUnit(), FourCC('I047')))
    UnitAddItemByIdSwapped(FourCC('I046'), GetTriggerUnit())
}

export function initChrissy() {
    let enter = CreateTrigger()
    TriggerRegisterEnterRectSimple(enter, gg_rct_Chrissy_forge)
    TriggerAddAction(enter, () => chrissy())
    TriggerAddAction(enter, () => chrissyReturn())
}
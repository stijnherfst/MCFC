function heroCapeAqcuire() {
    if (IsItemOwned(GetItemOfTypeFromUnitBJ(GetTriggerUnit(), FourCC('I03V')))) {
        return
    }

    if (GetUnitTypeId(GetTriggerUnit()) != FourCC('H008')
     && GetUnitTypeId(GetTriggerUnit()) != FourCC('H01B')
     && GetUnitTypeId(GetTriggerUnit()) != FourCC('H01L')
     && GetUnitTypeId(GetTriggerUnit()) != FourCC('H01T')) {
        return
     }

    UnitAddItemById(GetTriggerUnit(), FourCC('I03V'))
}

function heroCape() {
    if (GetOwningPlayer(GetTriggerUnit()) == Player(10)) {
        return
    }

    CreateQuestBJ(bj_QUESTTYPE_OPT_DISCOVERED, "Hero Quest", "Arthas has offered to give you the hero cape free of charge if you become a hero type Master Crafter", "ReplaceableTextures\\CommandButtons\\BTNDisenchant.blp")
    DisableTrigger(GetTriggeringTrigger())
    DisplayTimedTextToForce( GetPlayersAll(), 20.00, "Arthas: This cape is yours if you become a hero type")
}

export function initGoldShroom() {
    let enterTrigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(enterTrigger, gg_rct_hero_cape)
    TriggerAddAction(enterTrigger, () => heroCape())

    let aqcuireTrigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(aqcuireTrigger, gg_rct_hero_cape)
    TriggerAddAction(aqcuireTrigger, () => heroCapeAqcuire())
}
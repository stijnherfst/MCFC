function magicShroomReturn() {
    if (!UnitHasItemOfTypeBJ(GetTriggerUnit(), FourCC('I03R'))) {
        return
    }

    RemoveItem(GetItemOfTypeFromUnitBJ(GetTriggerUnit(), FourCC('I03R')))
    DisplayTimedTextToForce(GetForceOfPlayer(GetOwningPlayer(GetTriggerUnit())), 15.00, "X-Hippy: Thanks for the shroom heres 50 gold")
    AdjustPlayerStateBJ(50, GetOwningPlayer(GetTriggerUnit()), PLAYER_STATE_RESOURCE_GOLD)
}

export function initGoldShroom() {
    let enterTrigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(enterTrigger, gg_rct_XHippy)
    TriggerAddAction(enterTrigger, () => magicShroomReturn())
}
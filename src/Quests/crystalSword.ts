function crystalSword() {
    if (!UnitHasItemOfTypeBJ(GetTriggerUnit(), FourCC('I04A'))
        || !UnitHasItemOfTypeBJ(GetTriggerUnit(), FourCC('I00L'))) {
        return
    }

    RemoveItem( GetItemOfTypeFromUnitBJ(GetTriggerUnit(), FourCC('I00L')) )
    RemoveItem( GetItemOfTypeFromUnitBJ(GetTriggerUnit(), FourCC('I04A')) )
    UnitAddItemByIdSwapped( FourCC('I049'), GetTriggerUnit() )
}

function initCrytalSword() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_PICKUP_ITEM)
    TriggerAddAction(trigger, () => crystalSword())
}
function pickUp() {
    if (GetItemTypeId(GetManipulatedItem()) != FourCC("I05U")) {
        return
    }

    if (GetOwningPlayer(GetTriggerUnit()) == Player(11)) {
        return
    }

    if (GetHeroLevel(GetTriggerUnit()) > 400) {
        return
    }

    UnitRemoveItem(GetTriggerUnit(), GetManipulatedItem())
}

export function initSatanicSickle() {
    let drop_trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(drop_trigger, EVENT_PLAYER_UNIT_PICKUP_ITEM);
	TriggerAddAction(drop_trigger, () => pickUp());
}
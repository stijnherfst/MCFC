function goldSword() {
	if (UnitHasItemOfTypeBJ(GetKillingUnit(), FourCC("I082"))) {
        AdjustPlayerStateBJ(10, GetOwningPlayer(GetKillingUnit()), PLAYER_STATE_RESOURCE_GOLD)
    }

    if (UnitHasItemOfTypeBJ(GetKillingUnit(), FourCC("I083"))) {
        AdjustPlayerStateBJ(20, GetOwningPlayer(GetKillingUnit()), PLAYER_STATE_RESOURCE_GOLD)
    }

    if (UnitHasItemOfTypeBJ(GetKillingUnit(), FourCC("I084"))) {
        AdjustPlayerStateBJ(10, GetOwningPlayer(GetKillingUnit()), PLAYER_STATE_RESOURCE_GOLD)
    }
}

export function initGoldSword() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_DEATH);
	TriggerAddAction(trigger, () => goldSword());
}
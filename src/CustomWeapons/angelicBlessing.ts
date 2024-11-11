function angelicBlessing() {
	if (!UnitHasBuffBJ(GetAttackedUnitBJ(), FourCC("B00K"))) {
        return
    }

    SetUnitLifeBJ(GetAttackedUnitBJ(), (GetUnitStateSwap(UNIT_STATE_LIFE, GetAttackedUnitBJ()) + 20.00))
}

export function initAngelicBlessing() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => angelicBlessing());
}
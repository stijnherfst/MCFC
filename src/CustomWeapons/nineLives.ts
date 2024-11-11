function nineLives() {
	if (!UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I08C"))) {
        return
    }
    
    DisableTrigger(GetTriggeringTrigger())
    SetUnitVertexColorBJ(GetAttacker(), 75.00, 75.00, 100, 0.00)
}

export function initNineLives() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => nineLives());
}
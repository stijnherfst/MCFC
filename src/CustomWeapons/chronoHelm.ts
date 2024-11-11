function chronoHelm() {
	if (!UnitHasItemOfTypeBJ(GetTriggerUnit(), FourCC("I06E"))) {
        return
    }
    
    if (GetRandomInt(1, 333) === 1) {
        DisplayTimedTextToForce(GetPlayersAll(), 10.00, "The Chrono helmet zings and transports you across mortal planes")
        SetUnitPositionLoc(GetAttackedUnitBJ(), GetRandomLocInRect(GetPlayableMapRect()))
    }
}

export function initChronoHelm() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => chronoHelm());
}
function playerDies() {
    if (!IsUnitType(GetTriggerUnit(), UNIT_TYPE_HERO) || GetUnitTypeId(GetTriggerUnit()) === FourCC("O001") || GetUnitTypeId(GetTriggerUnit()) === FourCC("O001")) {
        return;
    }
	DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, 25.00, `${GetUnitName(GetDyingUnit())} has been killed by ${GetUnitName(GetKillingUnit())}`);
}

export function initPlayerDies() {
	let trigger = CreateTrigger();
	for (let i = 0; i < 10; i++) {
		TriggerRegisterPlayerUnitEvent(trigger, Player(i), EVENT_PLAYER_UNIT_DEATH, null);
	}

	TriggerAddAction(trigger, () => playerDies());
}
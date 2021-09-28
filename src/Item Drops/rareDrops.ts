function rareDrops() {

}

export function initRareDrops() {
	let trigger = CreateTrigger();
	for (let i = 0; i < bj_MAX_PLAYER_SLOTS; i++) {
		TriggerRegisterPlayerUnitEvent(trigger, Player(i), EVENT_PLAYER_UNIT_DEATH, null);
	}

	TriggerAddAction(trigger, () => rareDrops());
}
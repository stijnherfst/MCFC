import { Unit, MapPlayer } from "w3ts";

function restoreAndCheck() {
	let u = Unit.fromEvent();
	let woodAmount = u.level - math.max(u.strength - u.agility - u.intelligence, -u.level)

	MapPlayer.fromEvent().setState(PLAYER_STATE_RESOURCE_LUMBER, woodAmount)
	u.setState(UNIT_STATE_LIFE, u.getState(UNIT_STATE_MAX_LIFE))
	u.setState(UNIT_STATE_MANA, u.getState(UNIT_STATE_MAX_MANA))
}

export function levelUp() {
	let trigger = CreateTrigger();

	for (let i = 0; i < 10; i++) {
		TriggerRegisterPlayerUnitEvent(trigger, Player(i), EVENT_PLAYER_HERO_LEVEL, null);
	}

	TriggerAddAction(trigger, () => restoreAndCheck());
}
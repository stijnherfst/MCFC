import { MapPlayer} from "w3ts"

function roll() {
	let random = GetRandomInt(0, 100)
	DisplayTextToForce(GetPlayersAll(), MapPlayer.fromEvent().name +  ` rolled ${random}` + (random === 1 ? " (lmao)" : ""))
}

export function initRoll() {
	let trigger = CreateTrigger();
	for (let i = 0; i < 10; i++) {
		TriggerRegisterPlayerChatEvent(trigger, Player(i), "-roll", true);
	}

	TriggerAddAction(trigger, () => roll());
}
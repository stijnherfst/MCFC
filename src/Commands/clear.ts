function clear() {
	if (GetLocalPlayer() == GetTriggerPlayer()) {
		ClearTextMessages();
	}
}

export function initClear() {
	let trigger = CreateTrigger();
	for (let i = 0; i < 10; i++) {
		TriggerRegisterPlayerChatEvent(trigger, Player(i), "-clear", true);
	}

	TriggerAddAction(trigger, () => clear());
}
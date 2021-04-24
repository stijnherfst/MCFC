function zoom() {
	let distance = S2I(GetEventPlayerChatString().substring(5))
	SetCameraFieldForPlayer(GetTriggerPlayer(), CAMERA_FIELD_TARGET_DISTANCE, distance, 0)
}

export function initZoom() {
	let trigger = CreateTrigger();
	for (let i = 0; i < 10; i++) {
		TriggerRegisterPlayerChatEvent(trigger, Player(i), "-zoom", false);
	}

	TriggerAddAction(trigger, () => zoom());
}
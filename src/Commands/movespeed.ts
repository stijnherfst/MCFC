function movespeed() {
	let speed = GetUnitMoveSpeed(GroupPickRandomUnit(GetUnitsOfPlayerMatching(GetTriggerPlayer(), Filter(() => IsUnitType(GetFilterUnit(), UNIT_TYPE_HERO)))))
	DisplayTimedTextToPlayer(GetTriggerPlayer(), 0, 0, 10, `Your movespeed is: ${speed}`)
}

export function initMovespeed() {
	let trigger = CreateTrigger();
	for (let i = 0; i < 10; i++) {
		TriggerRegisterPlayerChatEvent(trigger, Player(i), "-movespeed", true);
	}

	TriggerAddAction(trigger, () => movespeed());
}
function suicide() {
	let hero = GroupPickRandomUnit(GetUnitsOfPlayerMatching(GetTriggerPlayer(), Filter(() => IsUnitType(GetFilterUnit(), UNIT_TYPE_HERO))))
	ExplodeUnitBJ(hero)
}

export function initSuicide() {
	let trigger = CreateTrigger();
	for (let i = 0; i < 10; i++) {
		TriggerRegisterPlayerChatEvent(trigger, Player(i), "-suicide", true);
	}

	TriggerAddAction(trigger, () => suicide());
}
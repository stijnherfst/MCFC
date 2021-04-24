function leaves() {
    DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, 25.00, GetPlayerName(GetTriggerPlayer()) + " has left the game.");
    
    let g = CreateGroup()
    GroupEnumUnitsOfPlayer(g, GetTriggerPlayer(), null);
    ForGroup(g, () => RemoveUnit(GetEnumUnit()) );
}

export function playerLeaves() {
	let trigger = CreateTrigger();

	for (let i = 0; i < 10; i++) {
		TriggerRegisterPlayerEvent(trigger, Player(i), EVENT_PLAYER_LEAVE);
	}

	TriggerAddAction(trigger, () => leaves());
}
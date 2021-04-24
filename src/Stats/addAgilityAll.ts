function add() {
    let currentLumber = GetPlayerState(GetTriggerPlayer(), PLAYER_STATE_RESOURCE_LUMBER)

    SetPlayerState(GetTriggerPlayer(), PLAYER_STATE_RESOURCE_LUMBER, 0)
    
    let g = CreateGroup();
    GroupEnumUnitsOfPlayer(g, GetTriggerPlayer(), Filter(() => !IsUnitType(GetEnumUnit(), UNIT_TYPE_HERO)))
    let u = FirstOfGroup(g)
    
    SetHeroAgi(u, GetHeroAgi(u, false) + currentLumber, true)

    DestroyGroup(g)
}

export function addAgilityAll() {
	let trigger = CreateTrigger();

	for (let i = 0; i < 10; i++) {
		TriggerRegisterPlayerChatEvent(trigger, Player(i), "-agi all", true);
	}

	TriggerAddAction(trigger, () => add());
}
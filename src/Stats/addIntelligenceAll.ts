function add() {
    let currentLumber = GetPlayerState(GetTriggerPlayer(), PLAYER_STATE_RESOURCE_LUMBER)

    SetPlayerState(GetTriggerPlayer(), PLAYER_STATE_RESOURCE_LUMBER, 0)
    
    let g = CreateGroup();
    GroupEnumUnitsOfPlayer(g, GetTriggerPlayer(), Filter(() => !IsUnitType(GetEnumUnit(), UNIT_TYPE_HERO)))
    let u = FirstOfGroup(g)
    
    SetHeroInt(u, GetHeroInt(u, false) + currentLumber, true)

    DestroyGroup(g)
}

export function addIntelligenceAll() {
	let trigger = CreateTrigger();

	for (let i = 0; i < 10; i++) {
		TriggerRegisterPlayerChatEvent(trigger, Player(i), "-int all", true);
	}

	TriggerAddAction(trigger, () => add());
}
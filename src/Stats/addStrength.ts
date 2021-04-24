function add() {
    let currentLumber = GetPlayerState(GetTriggerPlayer(), PLAYER_STATE_RESOURCE_LUMBER)
    let statIncrease = S2I(GetEventPlayerChatString().substr(5))

     if (statIncrease <= currentLumber && statIncrease > 0) {
        SetPlayerState(GetTriggerPlayer(), PLAYER_STATE_RESOURCE_LUMBER, currentLumber - statIncrease)
        
        let g = CreateGroup();
        GroupEnumUnitsOfPlayer(g, GetTriggerPlayer(), Filter(() => !IsUnitType(GetEnumUnit(), UNIT_TYPE_HERO)))
        let u = FirstOfGroup(g)
        
        SetHeroStr(u, GetHeroStr(u, false) + statIncrease, true)

        DestroyGroup(g)
    }
}

export function addStrength() {
	let trigger = CreateTrigger();

	for (let i = 0; i < 10; i++) {
		TriggerRegisterPlayerChatEvent(trigger, Player(i), "-str", false);
	}

	TriggerAddAction(trigger, () => add());
}
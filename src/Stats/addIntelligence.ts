function add() {
    let currentLumber = GetPlayerState(GetTriggerPlayer(), PLAYER_STATE_RESOURCE_LUMBER)
    let statIncrease = S2I(GetEventPlayerChatString().substr(5))

     if (statIncrease <= currentLumber && statIncrease > 0) {
        SetPlayerState(GetTriggerPlayer(), PLAYER_STATE_RESOURCE_LUMBER, currentLumber - statIncrease)

        let g = CreateGroup();
        GroupEnumUnitsOfPlayer(g, GetTriggerPlayer(), Filter(() => !IsUnitType(GetEnumUnit(), UNIT_TYPE_HERO)))
        let u = FirstOfGroup(g)
        
        SetHeroInt(u, GetHeroInt(u, false) + statIncrease, true)

        DestroyGroup(g)
    }
}

export function addIntelligence() {
    let trigger = CreateTrigger();
    
	for (let i = 0; i < 10; i++) {
		TriggerRegisterPlayerChatEvent(trigger, Player(i), "-int", false);
	}

	TriggerAddAction(trigger, () => add());
}
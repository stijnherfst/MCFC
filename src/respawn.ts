function respawn() {
    if (!IsUnitType(GetTriggerUnit(), UNIT_TYPE_HERO) || GetUnitTypeId(GetTriggerUnit()) === FourCC("O001") || GetUnitTypeId(GetTriggerUnit()) === FourCC("O001")) {
        return;
    }
	PolledWait(3)
	ReviveHero(GetTriggerUnit(), GetRectCenterX(gg_rct_revive), GetRectCenterY(gg_rct_revive), true)
}

export function initRespawn() {
	let trigger = CreateTrigger();
	for (let i = 0; i < 10; i++) {
		TriggerRegisterPlayerUnitEvent(trigger, Player(i), EVENT_PLAYER_UNIT_DEATH, null);
	}

	TriggerAddAction(trigger, () => respawn());
}
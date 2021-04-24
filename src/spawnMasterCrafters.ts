function spawn() {
	for (let i = 0; i < 10; i++) {
		if (GetPlayerController(Player(i)) == MAP_CONTROL_COMPUTER || GetPlayerSlotState(Player(i)) != PLAYER_SLOT_STATE_PLAYING) {
			continue;
		}

		bj_lastCreatedUnit = CreateUnitAtLoc(Player(i), FourCC('H001'), GetRandomLocInRect(gg_rct_revive), bj_UNIT_FACING)
	}

	SetCameraField(CAMERA_FIELD_TARGET_DISTANCE, 2200, 2);
	PanCameraToTimed(GetRectCenterX(gg_rct_revive), GetRectCenterY(gg_rct_revive), 2);
}

export function spawnMasterCrafters() {
	let gg_trg_Spawn_Master_Crafters = CreateTrigger();
	TriggerRegisterTimerEvent(gg_trg_Spawn_Master_Crafters, 2.00, false);
	TriggerAddAction(gg_trg_Spawn_Master_Crafters, () => spawn());
}
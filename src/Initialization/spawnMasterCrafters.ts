import { PlayerInfo } from "player"

export class PlayerSpawn {
	constructor(
		private players: PlayerInfo[],
	) {
		let gg_trg_Spawn_Master_Crafters = CreateTrigger();
		TriggerRegisterTimerEvent(gg_trg_Spawn_Master_Crafters, 2.00, false);
		TriggerAddAction(gg_trg_Spawn_Master_Crafters, () => this.spawn());
	}

	spawn() {
		for (let i = 0; i < 10; i++) {
			if (GetPlayerController(Player(i)) == MAP_CONTROL_COMPUTER || GetPlayerSlotState(Player(i)) != PLAYER_SLOT_STATE_PLAYING) {
				continue;
			}

			let hero = CreateUnitAtLoc(Player(i), FourCC('H001'), GetRandomLocInRect(gg_rct_revive), bj_UNIT_FACING)

			this.players.push( {
				hero: hero,
				abilities: []
			})
		}
	}
}
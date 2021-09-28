import { maxAbilities, PlayerInfo } from "../player"
import { spellToAbility, summoningAbilities } from "Spells/spellTypes"
import { Item } from "w3ts"

export class LearnSpell {
	constructor(
		private players: PlayerInfo[],
	) {
		let trigger = CreateTrigger()
		TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_USE_ITEM)
		TriggerAddAction(trigger, () => this.learnSpell())
	}

	learnSpell() {
		let itemID = GetItemTypeId(GetManipulatedItem());
		if (!(itemID !in spellToAbility)) {
			DisplayTimedTextToPlayer(GetTriggerPlayer(), 0, 0, 200.00, "Booboo.")
			return
		}

		let player = this.players[GetPlayerId(GetOwningPlayer(GetTriggerUnit()))]

		if (spellToAbility[itemID] in player.abilities) {
			DisplayTimedTextToPlayer(GetTriggerPlayer(), 0, 0, 200.00, "You've already read this spell book before.")
			CreateItem(itemID, GetUnitX(GetTriggerUnit()), GetUnitY(GetTriggerUnit()))
			return
		}

		if (player.abilities.length >= maxAbilities) {
			DisplayTimedTextToPlayer(GetTriggerPlayer(), 0, 0, 200.00, "You do not have the capacity to remember an 8th spell. Maybe you have to forget one first?")
			CreateItem(itemID, GetUnitX(GetTriggerUnit()), GetUnitY(GetTriggerUnit()))
			return
		}

		player.abilities.push(spellToAbility[itemID]);
		UnitAddAbility(GetTriggerUnit(), spellToAbility[itemID]);
	}
}
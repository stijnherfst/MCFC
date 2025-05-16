import { Item, Unit } from "w3ts";
import { changeType } from "../ItemsAndTypes/changeTypeByItem"
import { twoHandedItems } from "../ItemsAndTypes/twoHandedCheck"
import { PlayerInfo } from "../player";

export const arrowTypes:number[] = [
    FourCC('I05P'), // Crystal Tip Arrow heads
    FourCC('I068'), // Battle Arrows
    FourCC('I062'), // Wooden Arrows
    FourCC('I063'), // Poison Arrows
    FourCC('I065'), // Paralizing Bolts
    FourCC('I066'), // Electric Arrows
    FourCC('I067'), // Freezing Arrows
    FourCC('I069'), // Marksmen Arrows
    FourCC('I06G'), // Godly Arrows
    FourCC('I0A9'), // Ghosty Arrows
]

export const archerTypes:number[] = [
    FourCC('O001'), // Arena Brawler
    FourCC('H001'), // Unarmed
    FourCC('H01P'), // Archer Type (Divine)
    FourCC('H003'), // Archer Type
    FourCC('H01G'), // Archer Type (Fortified)
    FourCC('H01S'), // Flying Archer
    FourCC('H01R'), // Sniper Type
    FourCC('H009'), // Sniper Type
    FourCC('H01I'), // Sniper Type
    FourCC('H01I'), // Sniper Type
    FourCC('H01Y') // Flying Sniper
]

export class CheckItemPickup {
	constructor(
		private players: PlayerInfo[],
	) {
		let trigger = CreateTrigger();

		for (let i = 0; i < 10; i++) {
			TriggerRegisterPlayerUnitEvent(trigger, Player(i), EVENT_PLAYER_UNIT_PICKUP_ITEM, null);
		}
	
		TriggerAddAction(trigger, () => this.checkPickup());
	}

	ArrowCheck(unit: Unit, item: Item) {
		return arrowTypes.includes(item.typeId) && !archerTypes.includes(unit.typeId);
	}

	// Whether the unit already has a weapon equipped that would prevent wearing a two handed weapon
	twoHandedCheck(unit: Unit, item: Item) {
		if (!twoHandedItems.includes(item.typeId)) {
			return false
		}

		for (let i = 0; i < 6; i += 1) {
			let item_in_slot = unit.getItemInSlot(i);
			if (item_in_slot == undefined) {
				continue;
			}

			if (item.typeId != item_in_slot.typeId && twoHandedItems.includes(item_in_slot.typeId)) {
				return true
			}
		}
		return false
	}

	/** Whether the player owns the item, also sets ownership if the item is unowned */
	ownsItem(item: Item, player: player) {
		if (item.userData == 0) {
			SetItemUserData(item.handle, GetPlayerId(player) + 1)
			return true
		}

		if (item.userData != GetPlayerId(player) + 1) {
			return false;
		} else {
			return true
		}
	}

	// How many items of a class a unit has
	ownedItemClassCount(unit: Unit, item_type: itemtype) {
		let owned = 0;
		for (let i = 0; i < 6; i++) {
			let item = unit.getItemInSlot(i)

			if (item != undefined && item.type == item_type) {
				owned += 1;
			}
		}

		return owned;
	}

	heroCapeCheck(unit: Unit, item: Item) {
		if (item.typeId != FourCC("I03V")) {
			return true
		}

		if (unit.typeId == FourCC("H008") 
			|| unit.typeId == FourCC("H01B")
			|| unit.typeId == FourCC("H01L")
			|| unit.typeId == FourCC("H01T")
			|| unit.typeId == FourCC("O001")) {

			return true
		}

		return false
	}

	// Checks whether the player owns the item and doesn't already have one of the same class (hat, weapon, gloves, ...)
	checkPickup() {
		let unit = Unit.fromEvent()
		let item = Item.fromEvent()

		if (!this.ownsItem(item, GetTriggerPlayer())) {
			unit.removeItem(item)
			DisplayTimedTextToPlayer(GetTriggerPlayer(), 0, 0, 10, "You don't own this item")
			return;
		}

		if (item.type != ITEM_TYPE_UNKNOWN && this.ownedItemClassCount(unit, item.type) > 1) {
			unit.removeItem(item)
			DisplayTimedTextToPlayer(GetTriggerPlayer(), 0, 0, 10, "You are already wearing this type of item!")
			return;
		}

		if (this.twoHandedCheck(unit, item)) {
			unit.removeItem(item)
			DisplayTimedTextToPlayer(GetTriggerPlayer(), 0, 0, 10, "Your left hand is not free for this awesome weapon/shield")
			return;
		}

		if (this.ArrowCheck(unit, item)) {
			unit.removeItem(item)
			DisplayTimedTextToPlayer(GetTriggerPlayer(), 0, 0, 10, "You are not an archer and arrows aren't made to be used as a sword")
			return;
		}

		if (!this.heroCapeCheck(unit, item)) {
			unit.removeItem(item)
			DisplayTimedTextToPlayer(GetTriggerPlayer(), 0, 0, 10, "The Hero cape can only be worn by true heroes")
			return
		}

		changeType(this.players)
	}
}
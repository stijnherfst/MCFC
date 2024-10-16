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

	ArrowCheck(unit: unit, item: item) {
		return arrowTypes.includes(GetItemTypeId(item)) && !archerTypes.includes(GetUnitTypeId(unit));
	}

	// Whether the unit already has a weapon equipped that would prevent wearing a two handed weapon
	twoHandedCheck(unit: unit, item: item) {
		if (!twoHandedItems.includes(GetItemTypeId(item))) {
			return false
		}

		for (let i = 0; i < 6; i += 1) {
			let item_in_slot = UnitItemInSlot(unit, i);
			if (item_in_slot == null) {
				continue;
			}

			let item_id = GetItemTypeId(item_in_slot);
			if (GetItemTypeId(item) != item_id && twoHandedItems.includes(item_id)) {
				return true
			}
		}
		return false
	}

	/** Whether the player owns the item, also sets ownership if the item is unowned */
	ownsItem(item: item, player: player) {
		if (GetItemUserData(item) == 0) {
			SetItemUserData(item, GetPlayerId(player) + 1)
			return true
		}

		if (GetItemUserData(item) != GetPlayerId(player) + 1) {
			return false;
		} else {
			return true
		}
	}

	// How many items of a class a unit has
	ownedItemClassCount(unit: unit, item_type: itemtype) {
		let owned = 0;
		for (let i = 0; i < 6; i++) {
			let item = UnitItemInSlot(unit, i);

			if (item != null && GetItemType(item) == item_type) {
				owned += 1;
			}
		}

		return owned;
	}

	// Checks whether the player owns the item and doesn't already have one of the same class (hat, weapon, gloves, ...)
	checkPickup() {
		if (!this.ownsItem(GetManipulatedItem(), GetTriggerPlayer())) {
			UnitRemoveItem(GetTriggerUnit(), GetManipulatedItem())
			DisplayTimedTextToPlayer(GetTriggerPlayer(), 0, 0, 10, "You don't own this item")
			return;
		}

		let item_type = GetItemType(GetManipulatedItem());
		if (item_type != ITEM_TYPE_UNKNOWN && this.ownedItemClassCount(GetTriggerUnit(), item_type) > 1) {
			UnitRemoveItem(GetTriggerUnit(), GetManipulatedItem())
			DisplayTimedTextToPlayer(GetTriggerPlayer(), 0, 0, 10, "You are already wearing this type of item!")
			return;
		}

		if (this.twoHandedCheck(GetTriggerUnit(), GetManipulatedItem())) {
			UnitRemoveItem(GetTriggerUnit(), GetManipulatedItem())
			DisplayTimedTextToPlayer(GetTriggerPlayer(), 0, 0, 10, "Your left hand is not free for this awesome weapon/shield")
			return;
		}

		if (this.ArrowCheck(GetTriggerUnit(), GetManipulatedItem())) {
			UnitRemoveItem(GetTriggerUnit(), GetManipulatedItem())
			DisplayTimedTextToPlayer(GetTriggerPlayer(), 0, 0, 10, "You are not an archer and arrows aren't made to be used as a sword")
			return;
		}

		changeType(this.players)
	}
}
import { changeType } from "ItemsAndTypes/changeTypeByItem"
import { twoHandedItems } from "ItemsAndTypes/twoHandedCheck"
import { Unit } from "w3ts"

// Whether the unit already has a weapon equipped that would prevent wearing a two handed weapon
function twoHandedCheck(unit: unit, item: item) {
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
function ownsItem(item: item, player: player) {
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
function ownedItemClassCount(unit: unit, item_type: itemtype) {
    let owned = 0;
    for (let i = 0; i < 6; i++) {
        let item = UnitItemInSlot(GetTriggerUnit(), i);

        if (item != null && GetItemType(item) == item_type) {
            owned += 1;
        }
    }

    return owned;
}

// Checks whether the player owns the item and doesn't already have one of the same class (hat, weapon, gloves, ...)
function checkPickup() {
	if (!ownsItem(GetManipulatedItem(), GetTriggerPlayer())) {
		UnitDropItemPointLoc(GetTriggerUnit(), GetManipulatedItem(), GetUnitLoc(GetTriggerUnit()))
		DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, 10, "You don't own this item")
		return;
	}

	let item_type = GetItemType(GetManipulatedItem());
	if (item_type != ITEM_TYPE_UNKNOWN && ownedItemClassCount(GetTriggerUnit(), item_type) > 1) {
		UnitDropItemPointLoc(GetTriggerUnit(), GetManipulatedItem(), GetItemLoc(GetManipulatedItem()))
		DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, 10, "You already have this item type")
		return;
	}

	if (twoHandedCheck(GetTriggerUnit(), GetManipulatedItem())) {
		UnitDropItemPointLoc(GetTriggerUnit(), GetManipulatedItem(), GetUnitLoc(GetTriggerUnit()))
		DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, 10, "Your left hand is not free for this awesome weapon/shield")
		return;
	}

	changeType()
}

export function initCheckItemPickup() {
	let trigger = CreateTrigger();

	for (let i = 0; i < 10; i++) {
		TriggerRegisterPlayerUnitEvent(trigger, Player(i), EVENT_PLAYER_UNIT_PICKUP_ITEM, null);
	}

	TriggerAddAction(trigger, () => checkPickup());
}
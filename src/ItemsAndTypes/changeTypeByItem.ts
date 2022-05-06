import { itemTypes } from "ItemsAndTypes/itemTypes"
import { typeFamilies } from "ItemsAndTypes/typeFamilies"
import { PlayerInfo } from "player";

export function changeType(players: PlayerInfo[]) {
	if (GetItemType(GetManipulatedItem()) != ITEM_TYPE_ARTIFACT) {
		return;
	}

	if (!IsHeroUnitId(GetUnitTypeId(GetTriggerUnit()))) {
		return;
	}

	let weaponCount = 0;
	for (let i = 0; i < 6; i++) {
		let item = UnitItemInSlot(GetTriggerUnit(), i);
		if (item != null && GetItemType(item) == ITEM_TYPE_ARTIFACT) {
			weaponCount++;
		}
	}

	if (weaponCount > 1) {
		DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, 10, "You already have a weapon equiped")
		UnitDropItemPointLoc(GetTriggerUnit(), GetManipulatedItem(), GetUnitLoc(GetTriggerUnit()))
		return
	}
	
	let item_type = GetItemTypeId(GetManipulatedItem())

	// If of same type family then do nothing (eg. Normal type and Normal Flyer
	if (typeFamilies[GetUnitTypeId(GetTriggerUnit())] == typeFamilies[itemTypes[item_type]]) {
		return
	}

	let str = GetHeroStr(GetTriggerUnit(), false);
	let agi = GetHeroAgi(GetTriggerUnit(), false);
	let int = GetHeroInt(GetTriggerUnit(), false);
	let xp = GetHeroXP(GetTriggerUnit());
	let item1 = UnitItemInSlot(GetTriggerUnit(), 0);
	let item2 = UnitItemInSlot(GetTriggerUnit(), 1);
	let item3 = UnitItemInSlot(GetTriggerUnit(), 2);	
	let item4 = UnitItemInSlot(GetTriggerUnit(), 3);
	let item5 = UnitItemInSlot(GetTriggerUnit(), 4);
	let item6 = UnitItemInSlot(GetTriggerUnit(), 5);

	let hp = GetUnitState(GetTriggerUnit(), UNIT_STATE_LIFE)
	let mp = GetUnitState(GetTriggerUnit(), UNIT_STATE_MANA)

	let loc = GetUnitLoc(GetTriggerUnit())
	let facing = GetUnitFacing(GetTriggerUnit())

	RemoveUnit(GetTriggerUnit());
	bj_lastCreatedUnit = CreateUnitAtLoc(GetTriggerPlayer(), itemTypes[item_type], loc, facing )

	SetHeroStr(bj_lastCreatedUnit, str, true);
	SetHeroAgi(bj_lastCreatedUnit, agi, true);
	SetHeroInt(bj_lastCreatedUnit, int, true);
	SetHeroXP(bj_lastCreatedUnit, xp, false);
	
	UnitAddItem(bj_lastCreatedUnit, item1);
	UnitAddItem(bj_lastCreatedUnit, item2);
	UnitAddItem(bj_lastCreatedUnit, item3);	
	UnitAddItem(bj_lastCreatedUnit, item4);
	UnitAddItem(bj_lastCreatedUnit, item5);
	UnitAddItem(bj_lastCreatedUnit, item6);

	SetUnitState(bj_lastCreatedUnit, UNIT_STATE_LIFE, hp);
	SetUnitState(bj_lastCreatedUnit, UNIT_STATE_MANA, mp);
	
	for (let ability of players[GetPlayerId(GetTriggerPlayer())].abilities) {
		UnitAddAbility(bj_lastCreatedUnit, ability)
	}
	
	if (GetLocalPlayer() == GetOwningPlayer(bj_lastCreatedUnit)) {
		ClearSelection();
		SelectUnit(bj_lastCreatedUnit, true);
	}
}
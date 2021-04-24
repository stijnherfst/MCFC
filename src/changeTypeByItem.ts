import { itemTypes } from "itemTypes"
import { typeFamilies } from "typeFamilies"

function changeType() {
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

	if (weaponCount >= 2) {
		DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, 10, "You already have a weapon equiped")
		return;
	}

	let item_type = GetItemTypeId(GetManipulatedItem())
	// If of same type family then do nothing (eg. Normal type and Normal Flyer
	if (typeFamilies[GetUnitTypeId(GetTriggerUnit())] == typeFamilies[itemTypes[item_type]]) {
		return
	}

	bj_lastCreatedUnit = CreateUnitAtLoc(GetOwningPlayer(GetTriggerUnit()), itemTypes[item_type], GetUnitLoc(GetTriggerUnit()), GetUnitFacing(GetTriggerUnit()))
	
	let hp = GetUnitState(GetTriggerUnit(), UNIT_STATE_LIFE)
	let mp = GetUnitState(GetTriggerUnit(), UNIT_STATE_MANA)

	SetHeroStr(bj_lastCreatedUnit, GetHeroStr(GetTriggerUnit(), false), true);
	SetHeroAgi(bj_lastCreatedUnit, GetHeroAgi(GetTriggerUnit(), false), true);
	SetHeroInt(bj_lastCreatedUnit, GetHeroInt(GetTriggerUnit(), false), true);
	SetHeroXP(bj_lastCreatedUnit, GetHeroXP(GetTriggerUnit()), false);
	
	UnitAddItem(bj_lastCreatedUnit, UnitItemInSlot(GetTriggerUnit(), 0));
	UnitAddItem(bj_lastCreatedUnit, UnitItemInSlot(GetTriggerUnit(), 1));
	UnitAddItem(bj_lastCreatedUnit, UnitItemInSlot(GetTriggerUnit(), 2));	
	UnitAddItem(bj_lastCreatedUnit, UnitItemInSlot(GetTriggerUnit(), 3));
	UnitAddItem(bj_lastCreatedUnit, UnitItemInSlot(GetTriggerUnit(), 4));
	UnitAddItem(bj_lastCreatedUnit, UnitItemInSlot(GetTriggerUnit(), 5));

	SetUnitState(bj_lastCreatedUnit, UNIT_STATE_LIFE, hp);
	SetUnitState(bj_lastCreatedUnit, UNIT_STATE_MANA, mp);
	
	RemoveUnit(GetTriggerUnit());
	
	for (let i = 0; i < 7; i++) {
		//let temp_ability = abilities[playerAbilities[GetPlayerId(GetOwningPlayer(bj_lastCreatedUnit)) * 7 + i]]
		//UnitAddAbility(bj_lastCreatedUnit, temp_ability)
		//SetUnitAbilityLevel(bj_lastCreatedUnit, temp_ability, GetUnitAbilityLevel(GetTriggerUnit(), temp_ability))
	}
	
	if (GetLocalPlayer() == GetOwningPlayer(bj_lastCreatedUnit)) {
		ClearSelection();
		SelectUnit(bj_lastCreatedUnit, true);
	}
	print("Changed type by item")
}

export function changeTypeByItem() {
	let trigger = CreateTrigger();

	for (let i = 0; i < 10; i++) {
		TriggerRegisterPlayerUnitEvent(trigger, Player(i), EVENT_PLAYER_UNIT_PICKUP_ITEM, null);
	}

	TriggerAddAction(trigger, () => changeType());
}
function rareDrops() {
	if (GetUnitTypeId(GetDyingUnit()) === FourCC('h00B')) {
		return
	}

	if (GetUnitLevel(GetDyingUnit()) <= 40) {
			if (GetRandomInt(1, 20) === 1) {
			CreateItemLoc(FourCC('I064'), GetUnitLoc(GetDyingUnit())) // Gold
		}
		if (GetRandomInt(1, 10000) === 1) {
			CreateItemLoc(FourCC('I06N'), GetUnitLoc(GetDyingUnit())) // Spell - Weapon Enchancement
		}
		if (GetRandomInt(1, 500) === 1) {
			CreateItemLoc(FourCC('I041'), GetUnitLoc(GetDyingUnit())) // Power Book
		}
	} else if (GetUnitLevel(GetDyingUnit()) <= 99) {
		if (GetRandomInt(1, 1000) === 1) {
			CreateItemLoc(FourCC('I06N'), GetUnitLoc(GetDyingUnit())) // Weapon Enhancement
		}
		if (GetRandomInt(1, 75) === 1) {
			CreateItemLoc(FourCC('I02L'), GetUnitLoc(GetDyingUnit())) // Steel Knucles
		}
		if (GetRandomInt(1, 75) === 1) {
			CreateItemLoc(FourCC('I00L'), GetUnitLoc(GetDyingUnit())) // Glass Sword
		}
		if (GetRandomInt(1, 100) === 1) {
			CreateItemLoc(FourCC('I041'), GetUnitLoc(GetDyingUnit())) // Power Book
		}
		if (GetRandomInt(1, 75) === 1) {
			CreateItemLoc(FourCC('I05L'), GetUnitLoc(GetDyingUnit())) // Spell - Advanced Summoning
		}
		if (GetRandomInt(1, 75) === 1) {
			CreateItemLoc(FourCC('I02M'), GetUnitLoc(GetDyingUnit())) // Speed Gauntlets
		}
		if (GetRandomInt(1, 75) === 1) {
			CreateItemLoc(FourCC('I022'), GetUnitLoc(GetDyingUnit())) // Spell - Lightning Fury
		}
	} else if (GetUnitLevel(GetDyingUnit()) >= 100) {
		if (GetRandomInt(1, 10) === 1) {
		CreateItemLoc(FourCC('I041'), GetUnitLoc(GetDyingUnit())) // Power Book
		}
		if (GetRandomInt(1, 100) == 1) {
			CreateItemLoc(FourCC('I06N'), GetUnitLoc(GetDyingUnit())) // Spell - Weapon Enchancement
		}
		if (GetRandomInt(1, 50) === 1) {
			CreateItemLoc(FourCC('I06L'), GetUnitLoc(GetDyingUnit())) // Turbo heal
		}
		if (GetRandomInt(1, 150) === 1) {
			CreateItemLoc(FourCC('I061'), GetUnitLoc(GetDyingUnit())) // Aegis Shield
		}
		if (GetRandomInt(1, 100) === 1) {
			CreateItemLoc(FourCC('I06C'), GetUnitLoc(GetDyingUnit())) // Arcane Wand
		}
		if (GetRandomInt(1, 50) === 1) {
			CreateItemLoc(FourCC('I08H'), GetUnitLoc(GetDyingUnit())) // Spell - Full Heal
		}
	}
}

export function initRareDrops() {
	let trigger = CreateTrigger();
	TriggerRegisterPlayerUnitEvent(trigger, Player(11), EVENT_PLAYER_UNIT_DEATH, null)
	TriggerAddAction(trigger, () => rareDrops());
}
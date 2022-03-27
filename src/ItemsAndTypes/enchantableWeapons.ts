const enchantableWeapons: Record<number, number> = { 
	[FourCC('I0AI')]: FourCC('I0AK'),
	[FourCC('I06C')]: FourCC('I06M'),
	[FourCC('I024')]: FourCC('I06O'),
	[FourCC('I001')]: FourCC('I06P'),
	[FourCC('I00J')]: FourCC('I06Q'),
	[FourCC('I003')]: FourCC('I06R'),
	[FourCC('I06B')]: FourCC('I06S'),
	[FourCC('I006')]: FourCC('I06T'),
	[FourCC('I00C')]: FourCC('I06U'),
	[FourCC('I025')]: FourCC('I070'),
	[FourCC('I06H')]: FourCC('I06V'),
	[FourCC('I028')]: FourCC('I06W'),
	[FourCC('I03E')]: FourCC('I06X'),
	[FourCC('I008')]: FourCC('I06Y'),
	[FourCC('I049')]: FourCC('I06Z'),
	[FourCC('I009')]: FourCC('I071'),
	[FourCC('I017')]: FourCC('I072'),
	[FourCC('I06K')]: FourCC('I073'),
	[FourCC('I00B')]: FourCC('I074'),
	[FourCC('I03G')]: FourCC('I075'),
	[FourCC('I027')]: FourCC('I076'),
	[FourCC('I00D')]: FourCC('I077'),
	[FourCC('I00H')]: FourCC('I078'),
	[FourCC('I05G')]: FourCC('I079'),
	[FourCC('I03D')]: FourCC('I07A'),
	[FourCC('I026')]: FourCC('I07B'),
	[FourCC('I00O')]: FourCC('I07C'),
	[FourCC('I018')]: FourCC('I07D'),
	[FourCC('I00P')]: FourCC('I07E'),
	[FourCC('I00K')]: FourCC('I07F'),
	[FourCC('I03A')]: FourCC('I07G'),
	[FourCC('I00V')]: FourCC('I07H'),
	[FourCC('I00Y')]: FourCC('I07I'),
	[FourCC('I00Z')]: FourCC('I07J'),
	[FourCC('I03B')]: FourCC('I07K'),
	[FourCC('I011')]: FourCC('I07L'),
	[FourCC('I002')]: FourCC('I07M'),
	[FourCC('I03S')]: FourCC('I07N'),
	[FourCC('I02E')]: FourCC('I07O'),
	[FourCC('I015')]: FourCC('I07P'),
	[FourCC('I05I')]: FourCC('I07Q'),
	[FourCC('I000')]: FourCC('I07R'),
	[FourCC('I00T')]: FourCC('I07S'),
	[FourCC('I01B')]: FourCC('I07T'),
	[FourCC('I03L')]: FourCC('I07U'),
	[FourCC('I00A')]: FourCC('I07V'),
	[FourCC('I03C')]: FourCC('I07W'),
	[FourCC('I03K')]: FourCC('I07X'),
	[FourCC('I082')]: FourCC('I083')
};

function canEnchant() {
	if (GetItemTypeId(GetEnumItem()) in enchantableWeapons) {
		AddSpecialEffectLocBJ( GetItemLoc(GetEnumItem()), "Abilities\\Spells\\Human\\Heal\\HealTarget.mdl")

	}
}

function enhancementability() {
    if (GetItemTypeId(GetManipulatedItem()) != FourCC('I06N')) {
		return
	}

	EnumItemsInRectBJ( RectFromCenterSizeBJ(GetUnitLoc(GetManipulatingUnit()), 600.00, 600.00), () => canEnchant())
}

function enchantItem() {
	if (GetItemTypeId(GetManipulatedItem()) != FourCC('I06N')) {
		return
	}

	for (let i = 0; i < 6; i++) {
		let item = UnitItemInSlot(GetTriggerUnit(), i);
		if (item == null) {
			continue
		}

		if (!(GetItemTypeId(item) in enchantableWeapons)) {
			continue
		}

		DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, 10, "You sense that your weapon has gotten stronger and feels extra girthy in your hands")
		
		let item_id = GetItemTypeId(item)
		RemoveItem(item)
		UnitAddItemById(GetTriggerUnit(), enchantableWeapons[item_id])
		return
	}

	// Otherwise player hasn't received enchanted item, recreate book
	DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, 10, "You open the book but nothing happens")
	CreateItemLoc(GetItemTypeId(GetManipulatedItem()), GetUnitLoc(GetTriggerUnit()))
}

export function initEnchantItem() {
	let trigger = CreateTrigger();

	for (let i = 0; i < 10; i++) {
		TriggerRegisterPlayerUnitEvent(trigger, Player(i), EVENT_PLAYER_UNIT_USE_ITEM, null);
	}

	TriggerAddAction(trigger, () => enchantItem());

	let enhancementabilityTrigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( enhancementabilityTrigger, EVENT_PLAYER_UNIT_DROP_ITEM )
    TriggerAddAction( enhancementabilityTrigger, () =>  enhancementability())
}
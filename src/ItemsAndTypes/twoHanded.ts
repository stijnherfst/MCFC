import { Trigger, Unit } from "w3ts";

export const twoHandedItems:number[] = [
    FourCC('I061'), // Aegis Shield
    FourCC('I086'), // Burning Shield
    FourCC('I056'), // Flame Shield
    FourCC('I007'), // Ghetto Shield
    FourCC('I09H'), // Heavy Shield
    FourCC('I05Q'), // Hunter Shield
    FourCC('I057'), // Mirror Shield
    FourCC('I0A7'), // Rotting Shield
    FourCC('I05H'), // Scale Shield
    FourCC('I00G'), // Smale Shield
    FourCC('I0A1'), // Spiked Shield
    FourCC('I00I'), // Sturdy Shield
    FourCC('I058'), // Sun Shield
    FourCC('I084'), // Tower Shield
    FourCC('I09G'), // Toxic Shield
    FourCC('I00Q'), // Crystal Shield
    FourCC('I09V'), // Badass Sword (left handed)
    FourCC('I00R'), // Crystal Sword (left handed)
    FourCC('I059'), // Gold Claw (left handed)
    FourCC('I098'), // Electric Sword (left handed)
    FourCC('I0A0'), // Katana (left handed)
    FourCC('I05A'), // Long Sword (left handed))
    FourCC('I05B'), // Meat Cleaver (left handed)
    FourCC('I012'), // Short Sword (left handed)
    FourCC('I013'), // Small Axe (left handed)
    FourCC('I016'), // Striped Sword (left handed)
    FourCC('I05C'), // Sword of Lava (left handed)
    FourCC('I05D'), // Sun Sword (left handed)
    FourCC('I019'), // Gold Sword (left handed)
    FourCC('I01D'), // Turtle Shell Shield
    FourCC('I05E'), // Ashbringer (left handed)
    FourCC('I01C'), // Guardian Blade (left handed)
    FourCC('I00U'), // Creator Ownage (left handed)
    FourCC('I05V'), // Ubiquitous Profligate (left handed)
    FourCC('I02D'), // Forbidden Malefaction (left handed)
    FourCC('I01F'), // Living Weapon (left handed)
    FourCC('I04R'), // Hell Shield
    FourCC('I09P'), // Demi-God Slayer (left handed)
    FourCC('I001'), // Arm Scythes
    FourCC('I06P'), // Enchanced Arm Scythes
    FourCC('I00J'), // Axe of Smartassness
    FourCC('I06Q'), // Enchanced Axe of Smartassness
    FourCC('I006'), // Bow
    FourCC('I06T'), // Enchanced Bow
    FourCC('I008'), // Cross bow
    FourCC('I06Y'), // Enchanced Cross bow
    FourCC('I03E'), // Cranium Crackers
    FourCC('I06X'), // Enchanced Cranum Crackers
    FourCC('I054'), // Devils Dual Claws
    FourCC('I017'), // Double Edged Blade
    FourCC('I072'), // Enchanced Double Edged Blade
    FourCC('I00B'), // Dual Bladed Axe
    FourCC('I074'), // Enchanced Dual Bladed Axe
    FourCC('I03G'), // Dual Claws
    FourCC('I075'), // Enchanced Dual Claws
    FourCC('I00D'), // Elvish Bow
    FourCC('I077'), // Enchanced Elvish Bow
    FourCC('I03D'), // Ginormous Dual Axes
    FourCC('I07A'), // Enchanced Ginormous Dual Axes
    FourCC('I00O'), // Gold Spear
    FourCC('I07C'), // Enchanced Gold Spear
    FourCC('I03A'), // Long Bow
    FourCC('I07G'), // Enchanced Long Bow
    FourCC('I03B'), // Marksman Bow
    FourCC('I07K'), // Enchanced Marksman Bow
    FourCC('I03S'), // Phoenix Feather Bow
    FourCC('I07N'), // Enchanced Phoenix Feather Bow
    FourCC('I03J'), // Ragnarok
    FourCC('I03C'), // Wind Force
    FourCC('I07W'), // Enchanced Wind Force
    FourCC('I05U'), // Satanic Sickle
    FourCC('I05T'), // Water Scythe
    FourCC('I06K'), // Dragon Slayer Sword
    FourCC('I073'), // Enchanced Dragon Slayer Sword
    FourCC('I08B'), // Kitten Claws
    FourCC('I054'), // Devils Dual Claws
    FourCC('I09A'), // Bow of Arctic Wrath
    FourCC('I09B'), // Creator Ownage Bow
    FourCC('I09I'), // Volcanic Bow
    FourCC('I0A8') // Ghostly BowFourCC(),
]

function TwoHandedCheck() {
    if (!twoHandedItems.includes(GetItemTypeId(GetManipulatedItem()))) {
        return
    }

    for (let i = 0; i < 6; i += 1) {
        if (twoHandedItems.includes(Unit.fromEvent().getItemInSlot(i).id)) {
            UnitDropItem(GetTriggerUnit(), GetItemTypeId(GetManipulatedItem()))
        }
    }
}

export function initTwoHandedCheck() {
	let trigger = CreateTrigger();

	for (let i = 0; i < 10; i++) {
		TriggerRegisterPlayerUnitEvent(trigger, Player(i), EVENT_PLAYER_UNIT_PICKUP_ITEM, null);
	}

	TriggerAddAction(trigger, () => TwoHandedCheck());
}
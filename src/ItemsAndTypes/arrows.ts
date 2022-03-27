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

// If you aren't an archer then drop the arrow
function ArrowCheck() {
    if (!arrowTypes.includes(GetItemTypeId(GetManipulatedItem()))) {
        return
    }

    if (archerTypes.includes(GetUnitTypeId(GetTriggerUnit()))) {
        return
    }
    
    UnitDropItemPointLoc(GetTriggerUnit(), GetManipulatedItem(), GetUnitLoc(GetTriggerUnit()))
}

export function initArrows() {
	let trigger = CreateTrigger();

	for (let i = 0; i < 10; i++) {
		TriggerRegisterPlayerUnitEvent(trigger, Player(i), EVENT_PLAYER_UNIT_PICKUP_ITEM, null);
	}

	TriggerAddAction(trigger, () => ArrowCheck());
}
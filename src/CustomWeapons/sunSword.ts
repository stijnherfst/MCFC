function sunSword() {
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I090"))) {
        if (GetRandomInt(1, 50) == 1) {
            CreateNUnitsAtLoc(1, FourCC("h029"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetTriggerUnit()), bj_UNIT_FACING)
            IssueImmediateOrderBJ(GetLastCreatedUnit(), "starfall")
            UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
        }
    }
}

function pickUp() {
    if (GetItemTypeId(GetManipulatedItem()) != FourCC("I05V")) {
        return
    }

    if (GetOwningPlayer(GetTriggerUnit()) == Player(11)) {
        return
    }

    if (GetHeroLevel(GetTriggerUnit()) > 400) {
        return
    }

    UnitRemoveItem(GetTriggerUnit(), GetManipulatedItem())
}

export function initSunSword() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => sunSword());	
    
    let drop_trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(drop_trigger, EVENT_PLAYER_UNIT_PICKUP_ITEM);
	TriggerAddAction(drop_trigger, () => pickUp());
}
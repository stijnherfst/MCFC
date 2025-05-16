import { Trigger } from "w3ts"

function waterScythe() {
	if (!UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I05T"))) {
        return
    }
    
    if (GetRandomInt(1, 10) === 1) {
        CreateNUnitsAtLoc(1, FourCC("h02A"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
        IssuePointOrderLocBJ(GetLastCreatedUnit(), "carrionswarm", GetUnitLoc(GetAttackedUnitBJ()))
    }
}

function pickUp() {
    if (GetItemTypeId(GetManipulatedItem()) != FourCC("I05T")) {
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

export function initWaterScythe() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => waterScythe());

	let drop_trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(drop_trigger, EVENT_PLAYER_UNIT_PICKUP_ITEM);
	TriggerAddAction(drop_trigger, () => pickUp());
}
import { Group, MapPlayer, Region } from "w3ts";

function moveToInventory() {
    let g = new Group()
    g.enumUnitsOfPlayer(MapPlayer.fromEvent(), Filter(() => !IsUnitType(GetEnumUnit(), UNIT_TYPE_HERO)))
    const u = g.first.handle

    if (GetPlayerId(GetTriggerPlayer()) == 0) {
        SetUnitPositionLoc(u, GetRectCenter(gg_rct_inventory_1))
    } else if (GetPlayerId(GetTriggerPlayer()) == 1) {
        SetUnitPositionLoc(u, GetRectCenter(gg_rct_inventory_2))
    } else if (GetPlayerId(GetTriggerPlayer()) == 2) {
        SetUnitPositionLoc(u, GetRectCenter(gg_rct_inventory_3))
    } else if (GetPlayerId(GetTriggerPlayer()) == 3) {
        SetUnitPositionLoc(u, GetRectCenter(gg_rct_inventory_4))
    } else if (GetPlayerId(GetTriggerPlayer()) == 4) {
        SetUnitPositionLoc(u, GetRectCenter(gg_rct_inventory_5))
    } else if (GetPlayerId(GetTriggerPlayer()) == 5) {
        SetUnitPositionLoc(u, GetRectCenter(gg_rct_inventory_6))
    } else if (GetPlayerId(GetTriggerPlayer()) == 6) {
        SetUnitPositionLoc(u, GetRectCenter(gg_rct_inventory_7))
    } else if (GetPlayerId(GetTriggerPlayer()) == 7) {
        SetUnitPositionLoc(u, GetRectCenter(gg_rct_inventory_8))
    } else if (GetPlayerId(GetTriggerPlayer()) == 8) {
        SetUnitPositionLoc(u, GetRectCenter(gg_rct_inventory_9))
    } else if (GetPlayerId(GetTriggerPlayer()) == 9) {
        SetUnitPositionLoc(u, GetRectCenter(gg_rct_inventory_10))
    }
}

function leaveInventory() {
    SetUnitPositionLoc(GetTriggerUnit(), GetRectCenter(gg_rct_revive))
}

export function initMoveToInventory() {
	let trigger = CreateTrigger();
	for (let i = 0; i < 10; i++) {
		TriggerRegisterPlayerChatEvent(trigger, Player(i), "-inventory", true);
	}

	TriggerAddAction(trigger, () => moveToInventory());

    let enterTrigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(enterTrigger, gg_rct_inventory_leave)
    TriggerAddAction(enterTrigger, () => leaveInventory())
}
function message() {
    DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, 25.00, 
`Inventory
type -inventory to go to your inventory pick up an item to return to town. If you get stuck somewhere you might have to use -suicide to kill yourself`
    );
}

export function initInventory() {
    
	let trigger = CreateTrigger();
    TriggerRegisterTimerEventSingle(trigger, 360)
	TriggerAddAction(trigger, () => message());
}
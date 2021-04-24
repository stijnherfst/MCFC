function message() {
    DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, 25.00, 
`Becoming a master isn't easy maximum level is 9999 though so theres always room for improvement!`
    );
}

export function initBecomingMaster() {
	let trigger = CreateTrigger();
    TriggerRegisterTimerEventSingle(trigger, 500)
	TriggerAddAction(trigger, () => message());
}
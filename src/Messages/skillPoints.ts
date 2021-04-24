function message() {
    DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, 25.00, 
`Use "-str xx, -agi xx, or -int xx" to add stats.

Str - get buff! +12 hp and .01 hp regain
Agi - get fast! 1% attack speed and .25 move speed
Int - get smart! adds 8 mp and .01 mp regain`
    );

    let tag = CreateTextTag()
    SetTextTagText(tag, "Wood are your skill points. Use the -str/agi/int xx to add them.", 10)
    SetTextTagPosUnit(tag, gg_unit_h00U_0050, 0)
    
}

export function initSkillPoints() {
	let trigger = CreateTrigger();
    TriggerRegisterTimerEventSingle(trigger, 150)
	TriggerAddAction(trigger, () => message());
}
function cursedBlade() {
	if (!UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I025"))) {
        return
    }
    
    if (GetRandomInt(1, 800) === 1) {
        DisplayTimedTextToForce(GetPlayersAll(), 10.00, "The Devil has snatched your soul")
        AddSpecialEffectTargetUnitBJ("overhead", GetAttacker(), "Objects\\Spawnmodels\\Undead\\UndeadDissipate\\UndeadDissipate.mdl")
        KillUnit(GetAttacker())
    }
}

export function initCursedBlade() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => cursedBlade());
}
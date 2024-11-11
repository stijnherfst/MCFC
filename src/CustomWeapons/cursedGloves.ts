function cursedGloves() {
	if (!UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I06F"))) {
        return
    }
    
    if (GetRandomInt(1, 800) === 1) {
        DisplayTimedTextToForce(GetPlayersAll(), 10.00, "The Devil has snatched your soul")
        AddSpecialEffectTargetUnitBJ("overhead", GetAttacker(), "Objects\\Spawnmodels\\Undead\\UndeadDissipate\\UndeadDissipate.mdl")
        KillUnit(GetAttacker())
    }
}

export function initCursedGloves() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => cursedGloves());
}
function ghotslyEdge() {
	if (!UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I08A"))) {
        return
    }

    if (GetUnitLevel(GetAttackedUnitBJ()) < 95) {
        return
    }
    
    if (GetRandomInt(1, 75) === 1) {
        AddSpecialEffectTargetUnitBJ("overhead", GetAttackedUnitBJ(), "Abilities\\Spells\\Undead\\Unsummon\\UnsummonTarget.mdl")
        SetUnitLifeBJ(GetAttackedUnitBJ(), (GetUnitStateSwap(UNIT_STATE_LIFE, GetAttackedUnitBJ()) * 0.50))
    }
}

export function initGhostlyEdge() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => ghotslyEdge());
}
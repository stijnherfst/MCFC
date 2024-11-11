function glassSword() {
	if (!UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I00L"))) {
        return
    }
    
    if (GetRandomInt(1, 1000) === 1) {
        RemoveItem(GetItemOfTypeFromUnitBJ(GetAttacker(), FourCC("I00L")))
        UnitAddItemByIdSwapped(FourCC("I02Q"), GetAttacker())
        DisplayTimedTextToForce(GetPlayersAll(), 10.00, "Shatter")
        UnitDamagePointLoc(GetTriggerUnit(), 0, 500, GetUnitLoc(GetTriggerUnit()), 100.00, ATTACK_TYPE_MELEE, DAMAGE_TYPE_NORMAL)
        AddSpecialEffectLocBJ(GetUnitLoc(GetTriggerUnit()), "Abilities\\Spells\\Human\\ThunderClap\\ThunderClapCaster.mdl")
        PolledWait(0.75)
        UnitDamagePointLoc(GetTriggerUnit(), 0, 500, GetUnitLoc(GetTriggerUnit()), 200.00, ATTACK_TYPE_MELEE, DAMAGE_TYPE_NORMAL)
        AddSpecialEffectLocBJ(GetUnitLoc(GetTriggerUnit()), "Abilities\\Spells\\Human\\ThunderClap\\ThunderClapCaster.mdl")
        PolledWait(0.75)
        DisplayTimedTextToForce(GetPlayersAll(), 10.00, "Shatter")
        UnitDamagePointLoc(GetTriggerUnit(), 0, 500, GetUnitLoc(GetTriggerUnit()), 300.00, ATTACK_TYPE_MELEE, DAMAGE_TYPE_NORMAL)
        AddSpecialEffectLocBJ(GetUnitLoc(GetTriggerUnit()), "Abilities\\Spells\\Human\\ThunderClap\\ThunderClapCaster.mdl")
        PolledWait(0.75)
        DisplayTimedTextToForce(GetPlayersAll(), 3.00, "Shatter")
        UnitDamagePointLoc(GetTriggerUnit(), 0, 500, GetUnitLoc(GetTriggerUnit()), 400.00, ATTACK_TYPE_MELEE, DAMAGE_TYPE_NORMAL)
        AddSpecialEffectLocBJ(GetUnitLoc(GetTriggerUnit()), "Abilities\\Spells\\Human\\ThunderClap\\ThunderClapCaster.mdl")
        PolledWait(0.75)
        DisplayTimedTextToForce(GetPlayersAll(), 10.00, "Shatter")
        UnitDamagePointLoc(GetTriggerUnit(), 0, 500, GetUnitLoc(GetTriggerUnit()), 500.00, ATTACK_TYPE_MELEE, DAMAGE_TYPE_NORMAL)
        AddSpecialEffectLocBJ(GetUnitLoc(GetTriggerUnit()), "Abilities\\Spells\\Human\\ThunderClap\\ThunderClapCaster.mdl")
        PolledWait(0.75)
        UnitDamagePointLoc(GetTriggerUnit(), 0, 500, GetUnitLoc(GetTriggerUnit()), 600.00, ATTACK_TYPE_MELEE, DAMAGE_TYPE_NORMAL)
        AddSpecialEffectLocBJ(GetUnitLoc(GetTriggerUnit()), "Abilities\\Spells\\Human\\ThunderClap\\ThunderClapCaster.mdl")
        PolledWait(0.75)
        UnitDamagePointLoc(GetTriggerUnit(), 0, 500, GetUnitLoc(GetTriggerUnit()), 700.00, ATTACK_TYPE_MELEE, DAMAGE_TYPE_NORMAL)
        AddSpecialEffectLocBJ(GetUnitLoc(GetTriggerUnit()), "Abilities\\Spells\\Human\\ThunderClap\\ThunderClapCaster.mdl")
        PolledWait(0.75)
        DisplayTimedTextToForce(GetPlayersAll(), 6.00, "Shatter")
        UnitDamagePointLoc(GetTriggerUnit(), 0, 500, GetUnitLoc(GetTriggerUnit()), 800.00, ATTACK_TYPE_MELEE, DAMAGE_TYPE_NORMAL)
        AddSpecialEffectLocBJ(GetUnitLoc(GetTriggerUnit()), "Abilities\\Spells\\Human\\ThunderClap\\ThunderClapCaster.mdl")
    }
}

export function initGlassSword() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => glassSword());
}
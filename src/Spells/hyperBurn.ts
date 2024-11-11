function hyperBurn() {
    if (GetSpellAbilityId() != FourCC('A087')) {
        return
    }
    
    UnitDamageTargetBJ(GetSpellAbilityUnit(), GetSpellTargetUnit(), GetUnitStateSwap(UNIT_STATE_MAX_MANA, GetSpellAbilityUnit()), ATTACK_TYPE_MAGIC, DAMAGE_TYPE_NORMAL)
    SetUnitManaBJ(GetSpellAbilityUnit(), 0)
}

export function initHyperBurn() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_SPELL_CAST)
    TriggerAddAction( trigger, () => hyperBurn())
}
function soulDrain() {
    if (GetSpellAbilityId() != FourCC('A01O')) {
        return
    }

    UnitDamageTargetBJ(GetSpellAbilityUnit(), GetSpellTargetUnit(), GetUnitStateSwap(UNIT_STATE_LIFE, GetSpellAbilityUnit()), ATTACK_TYPE_MAGIC, DAMAGE_TYPE_NORMAL)
    SetUnitLifeBJ(GetSpellAbilityUnit(), (GetUnitStateSwap(UNIT_STATE_LIFE, GetSpellAbilityUnit()) * 0.50))
}

export function initSoulDrain() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_SPELL_CAST)
    TriggerAddAction( trigger, () => soulDrain())
}
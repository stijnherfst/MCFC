function minorHeal() {
    if (GetSpellAbilityId() != FourCC('A09C')) {
        return
    }
    let heal_amount = 70 + GetHeroInt(GetTriggerUnit(), true) * 0.5
    BlzSetAbilityRealLevelField(GetSpellAbility(), ABILITY_RLF_AMOUNT_HEALED_DAMAGED_HHB1, 0, heal_amount)
    BlzSetAbilityStringLevelField(GetSpellAbility(), ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED, 0, `Heals for |cff8080ff${heal_amount}|r (70 + 50% intelligence) hp or deals equal damage to an undead`)
}

export function initMinorHeal() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_SPELL_EFFECT)
    TriggerAddAction( trigger, () => minorHeal())
}
function fullHeal() {
    if (GetSpellAbilityId() != FourCC('A0CD')) {
        return
    }
    let heal_amount = 7000 + GetHeroInt(GetTriggerUnit(), true)  
    BlzSetAbilityRealLevelField(GetSpellAbility(), ABILITY_RLF_DAMAGE_PER_TARGET_OCL1, 0, heal_amount)
    BlzSetAbilityStringLevelField(GetSpellAbility(), ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED, 0, `Heals |cff8080ff${heal_amount}|r (7000 + 100% intelligence) hp to all allies in the area`)
}

export function initFullHeal() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_SPELL_EFFECT)
    TriggerAddAction( trigger, () => fullHeal())
}
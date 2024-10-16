function lightning() {
    if (GetSpellAbilityId() != FourCC('A09A')) {
        return
    }
    let damage = 30 + GetHeroInt(GetTriggerUnit(), true) * 0.25   
    BlzSetAbilityRealLevelField(GetSpellAbility(), ABILITY_RLF_DAMAGE_PER_TARGET_OCL1, 0, damage)
    BlzSetAbilityStringLevelField(GetSpellAbility(), ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED, 0, `Deals |cff8080ff${damage}|r (30 + 25% intelligence) damage, bounces up to 4 times`)
    BlzSetAbilityExtendedTooltip
}

export function initLightning() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_SPELL_EFFECT)
    TriggerAddAction( trigger, () => lightning())
}
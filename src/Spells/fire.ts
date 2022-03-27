function fire() {
    if (GetSpellAbilityId() != FourCC('A09B')) {
        return
    }
    let damage = 50 + GetHeroInt(GetTriggerUnit(), true) * 0.15
    BlzSetAbilityRealLevelField(GetSpellAbility(), ABILITY_RLF_DAMAGE_HBZ2, 0, damage)
    BlzSetAbilityStringLevelField(GetSpellAbility(), ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED, 0, `Deals |cff8080ff${damage}|r (50 + 15% intelligence) damage and burns for 5 dmg a second`)
}

export function initFire() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_SPELL_EFFECT)
    TriggerAddAction( trigger, () => fire())
}
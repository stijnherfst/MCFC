function deathblow() {
    if (!UnitHasBuffBJ(GetAttacker(), FourCC("B002"))) {
        return
    }

    if (GetRandomInt(1, 50) !== 1) {
        return
    }

    AddSpecialEffectTargetUnitBJ("overhead", GetAttackedUnitBJ(), "war3mapImported\\WaterMagic.mdx")
    UnitDamageTargetBJ(GetAttacker(), GetAttackedUnitBJ(), 300.00, ATTACK_TYPE_MELEE, DAMAGE_TYPE_NORMAL)
}

export function initDeathblow() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED)
    TriggerAddAction(trigger, () => deathblow())
}
function devilBooster() {
    if (!UnitHasBuffBJ(GetKillingUnitBJ(), FourCC("B00L"))) {
        return
    }
    
    if (GetRandomInt(1, 6) == 1) {
        AddHeroXPSwapped(666, GetKillingUnitBJ(), false)
    }

    if (GetOwningPlayer(GetKillingUnitBJ()) != Player(11) && GetRandomInt(1, 66) == 1) {
        KillUnit(GetKillingUnitBJ())
    }
}

export function initDevilBooster() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_DEATH)
    TriggerAddAction( trigger, () => devilBooster())
}
function expBooster() {
    if (!UnitHasBuffBJ(GetKillingUnitBJ(), FourCC("B000"))) {
        return
    }
    
    AddHeroXPSwapped(GetUnitLevel(GetDyingUnit()), GetKillingUnitBJ(), true)
}

export function initExpBooster() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_DEATH)
    TriggerAddAction( trigger, () => expBooster())
}
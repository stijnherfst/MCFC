function autoHeal() {
    if (GetUnitLevel(GetAttacker()) > 100) {
        return
    }

    if (!UnitHasBuffBJ(GetAttackedUnitBJ(), FourCC("B003"))) {
        return
    }

    if (GetRandomInt(1, 20) !== 1) {
        return
    }

    SetUnitLifeBJ(GetAttackedUnitBJ(), ((GetUnitStateSwap(UNIT_STATE_LIFE, GetAttackedUnitBJ()) + 100.00) + (I2R(GetUnitLevel(GetAttacker())) * 10.00)))
    CreateTextTagUnitBJ("Auto Heal", GetTriggerUnit(), 0, 8.00, 100, 100, 100, 15.00)
    SetTextTagVelocityBJ(GetLastCreatedTextTag(), 33.00, GetRandomDirectionDeg())
    SetTextTagPermanentBJ(GetLastCreatedTextTag(), false)
    SetTextTagLifespanBJ(GetLastCreatedTextTag(), 3.00)
}

export function initAutoHeal() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_ATTACKED)
    TriggerAddAction( trigger, () => autoHeal())
}
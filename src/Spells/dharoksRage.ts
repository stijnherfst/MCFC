function dharoksRage() {
    if (GetUnitAbilityLevel(GetAttacker(), FourCC('A0ES')) == 0) {
        return
    }

    let level = R2I((100 - R2I(GetUnitLifePercent(GetAttacker()))) / 10) + 1
    SetUnitAbilityLevel(GetAttacker(), FourCC('A0ES'), level)
}

export function initDharoksRage() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_ATTACKED )
    TriggerAddAction( trigger, () => dharoksRage() )
}
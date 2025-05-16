function crimsonDragon() {
    if (GetUnitTypeId(GetTriggerUnit()) != FourCC('n017')) {
        return
    }

    IssueImmediateOrderBJ(GetAttacker(), "starfall")
}

export function initCrimsonDragon() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_ATTACKED )
    TriggerAddAction( trigger, () => crimsonDragon() )
}
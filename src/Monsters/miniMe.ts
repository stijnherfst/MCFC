function miniMe() {
    if (GetUnitTypeId(GetTriggerUnit()) != FourCC('n034')) {
        return
    }

    IssueImmediateOrderBJ(GetAttacker(), "mirrorimage")
    IssueImmediateOrderBJ(GetAttacker(), "spiritwolf")
}

export function initMiniMe() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_ATTACKED )
    TriggerAddAction( trigger, () => miniMe() )
}
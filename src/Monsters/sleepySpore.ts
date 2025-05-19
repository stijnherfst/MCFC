function sleepySpore() {
    if (GetUnitTypeId(GetTriggerUnit()) != FourCC('n02J')) {
        return
    }

    IssueTargetOrderBJ(GetAttacker(), "sleep", GetAttacker())
}

export function initSleepySpore() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_ATTACKED )
    TriggerAddAction( trigger, () => sleepySpore() )
}
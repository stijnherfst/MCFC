function superSpore() {
    if (GetUnitTypeId(GetTriggerUnit()) != FourCC('n02T')) {
        return
    }

    IssueTargetOrderBJ(GetAttacker(), "sleep", GetAttacker())
}

export function initSuperSpore() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_ATTACKED )
    TriggerAddAction( trigger, () => superSpore() )
}
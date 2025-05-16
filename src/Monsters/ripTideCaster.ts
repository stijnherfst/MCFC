function ripTideCaster() {
    if (GetUnitTypeId(GetTriggerUnit()) != FourCC('n01N')) {
        return
    }

    IssuePointOrderLocBJ(GetAttacker(), "carrionswarm", GetUnitLoc(GetAttackedUnitBJ()))
}

export function initRipTideCaster() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_ATTACKED )
    TriggerAddAction( trigger, () => ripTideCaster() )
}
function sandcrawler() {
    if (GetUnitTypeId(GetTriggerUnit()) != FourCC('n04K')) {
        return
    }

    IssueImmediateOrder(GetTriggerUnit(), "immolation")
}

export function initSandCrawler() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_ATTACKED )
    TriggerAddAction( trigger, () => sandcrawler() )
}
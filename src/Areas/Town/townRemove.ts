function townRemove() {
    if (GetOwningPlayer(GetTriggerUnit()) != Player(11)) {
        return
    }

    SetUnitPositionLocFacingBJ( GetTriggerUnit(), GetRandomLocInRect(gg_rct_Anti_town), bj_UNIT_FACING )
}

export function initTownRemove() {
    let trigger = CreateTrigger()
    TriggerRegisterEnterRectSimple( trigger, gg_rct_Town_tele )
    TriggerAddAction( trigger, () => townRemove() )
}


function echoBlast() {
    if (GetSpellAbilityId() != FourCC('A08K')) {
        return
    }

    let udg_EchoBlast = RectFromCenterSizeBJ(GetUnitLoc(GetTriggerUnit()), 400.00, 400.00)
    CreateNUnitsAtLoc(1, FourCC("h00P"), GetOwningPlayer(GetTriggerUnit()), GetRandomLocInRect(udg_EchoBlast), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    IssueImmediateOrderBJ(GetLastCreatedUnit(), "stomp")
    PolledWait(0.25)
    CreateNUnitsAtLoc(1, FourCC("h00P"), GetOwningPlayer(GetTriggerUnit()), GetRandomLocInRect(udg_EchoBlast), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    IssueImmediateOrderBJ(GetLastCreatedUnit(), "stomp")
    PolledWait(0.25)
    CreateNUnitsAtLoc(1, FourCC("h00P"), GetOwningPlayer(GetTriggerUnit()), GetRandomLocInRect(udg_EchoBlast), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    IssueImmediateOrderBJ(GetLastCreatedUnit(), "stomp")
    PolledWait(0.25)
    CreateNUnitsAtLoc(1, FourCC("h00P"), GetOwningPlayer(GetTriggerUnit()), GetRandomLocInRect(udg_EchoBlast), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    IssueImmediateOrderBJ(GetLastCreatedUnit(), "stomp")
    PolledWait(0.25)
    CreateNUnitsAtLoc(1, FourCC("h00P"), GetOwningPlayer(GetTriggerUnit()), GetRandomLocInRect(udg_EchoBlast), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    IssueImmediateOrderBJ(GetLastCreatedUnit(), "stomp")
    PolledWait(0.25)
    CreateNUnitsAtLoc(1, FourCC("h00P"), GetOwningPlayer(GetTriggerUnit()), GetRandomLocInRect(udg_EchoBlast), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    IssueImmediateOrderBJ(GetLastCreatedUnit(), "stomp")
}

export function initEchoBlast() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_SPELL_CAST)
    TriggerAddAction( trigger, () => echoBlast())
}
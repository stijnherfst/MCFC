function teslaCoil() {
    if (GetUnitTypeId(GetTriggerUnit()) != FourCC('n02V')) {
        return
    }

    CreateNUnitsAtLoc(1, FourCC("h00J"), GetOwningPlayer(GetAttacker()), OffsetLocation(GetUnitLoc(GetAttacker()), 100.00, 50.00), bj_UNIT_FACING)
    IssueTargetOrderBJ(GetLastCreatedUnit(), "chainlightning", GetLastCreatedUnit())
    CreateNUnitsAtLoc(1, FourCC("h00J"), GetOwningPlayer(GetAttacker()), OffsetLocation(GetUnitLoc(GetAttacker()), 200.00, 100.00), bj_UNIT_FACING)
    IssueTargetOrderBJ(GetLastCreatedUnit(), "chainlightning", GetLastCreatedUnit())
    CreateNUnitsAtLoc(1, FourCC("h00J"), GetOwningPlayer(GetAttacker()), OffsetLocation(GetUnitLoc(GetAttacker()), 300.00, 150.00), bj_UNIT_FACING)
    IssueTargetOrderBJ(GetLastCreatedUnit(), "chainlightning", GetLastCreatedUnit())
    CreateNUnitsAtLoc(1, FourCC("h00J"), GetOwningPlayer(GetAttacker()), OffsetLocation(GetUnitLoc(GetAttacker()), 200.00, 200.00), bj_UNIT_FACING)
    IssueTargetOrderBJ(GetLastCreatedUnit(), "chainlightning", GetLastCreatedUnit())
    CreateNUnitsAtLoc(1, FourCC("h00J"), GetOwningPlayer(GetAttacker()), OffsetLocation(GetUnitLoc(GetAttacker()), 100.00, 250.00), bj_UNIT_FACING)
    IssueTargetOrderBJ(GetLastCreatedUnit(), "chainlightning", GetLastCreatedUnit())
    CreateNUnitsAtLoc(1, FourCC("h00J"), GetOwningPlayer(GetAttacker()), OffsetLocation(GetUnitLoc(GetAttacker()), -100.00, 50.00), bj_UNIT_FACING)
    IssueTargetOrderBJ(GetLastCreatedUnit(), "chainlightning", GetLastCreatedUnit())
    CreateNUnitsAtLoc(1, FourCC("h00J"), GetOwningPlayer(GetAttacker()), OffsetLocation(GetUnitLoc(GetAttacker()), -200.00, 100.00), bj_UNIT_FACING)
    IssueTargetOrderBJ(GetLastCreatedUnit(), "chainlightning", GetLastCreatedUnit())
    CreateNUnitsAtLoc(1, FourCC("h00J"), GetOwningPlayer(GetAttacker()), OffsetLocation(GetUnitLoc(GetAttacker()), -300.00, 150.00), bj_UNIT_FACING)
    IssueTargetOrderBJ(GetLastCreatedUnit(), "chainlightning", GetLastCreatedUnit())
    CreateNUnitsAtLoc(1, FourCC("h00J"), GetOwningPlayer(GetAttacker()), OffsetLocation(GetUnitLoc(GetAttacker()), -200.00, 200.00), bj_UNIT_FACING)
    IssueTargetOrderBJ(GetLastCreatedUnit(), "chainlightning", GetLastCreatedUnit())
    CreateNUnitsAtLoc(1, FourCC("h00J"), GetOwningPlayer(GetAttacker()), OffsetLocation(GetUnitLoc(GetAttacker()), -100.00, 250.00), bj_UNIT_FACING)
    IssueTargetOrderBJ(GetLastCreatedUnit(), "chainlightning", GetLastCreatedUnit())
}

export function initTeslaCoil() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_ATTACKED )
    TriggerAddAction( trigger, () => teslaCoil() )
}
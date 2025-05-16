function litSkin() {
    if (!UnitHasBuffBJ(GetAttackedUnitBJ(), FourCC("B00M"))) {
        return
    }

    if (GetRandomInt(1, 10) == 1) {
        CreateNUnitsAtLoc(1, FourCC("h00N"), GetOwningPlayer(GetAttackedUnitBJ()), GetUnitLoc(GetAttackedUnitBJ()), bj_UNIT_FACING)
        UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
        IssueTargetOrderBJ(GetLastCreatedUnit(), "chainlightning", GetAttacker())
    }
}

export function initLitSkin() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_ATTACKED )
    TriggerAddAction( trigger, () => litSkin() )
}
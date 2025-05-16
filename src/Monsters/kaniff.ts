function kaniff() {
    if (GetUnitTypeId(GetTriggerUnit()) != FourCC('n03L')) {
        return
    }

    if (GetRandomInt(1, 100) == 1) {
        CreateNUnitsAtLoc(1, FourCC("n001"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        UnitApplyTimedLifeBJ(5.00, FourCC("BTLF"), GetLastCreatedUnit())
    }
}

export function initKaniff() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_ATTACKED )
    TriggerAddAction( trigger, () => kaniff() )
}
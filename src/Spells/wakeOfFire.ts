import { Timer } from "w3ts"

function wakeOfFire() {
    if (GetSpellAbilityId() != FourCC('A01Q')) {
        return
    }

    CreateNUnitsAtLoc(1, FourCC("h00B"), GetOwningPlayer(GetTriggerUnit()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), 0.00, 90.00), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    IssuePointOrderLocBJ(GetLastCreatedUnit(), "carrionswarm", GetUnitLoc(GetTriggerUnit()))
    CreateNUnitsAtLoc(1, FourCC("h00B"), GetOwningPlayer(GetTriggerUnit()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), 0, 130.00), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    IssuePointOrderLocBJ(GetLastCreatedUnit(), "flamestrike", GetUnitLoc(GetLastCreatedUnit()))

    CreateNUnitsAtLoc(1, FourCC("h00B"), GetOwningPlayer(GetTriggerUnit()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), 90.00, 0.00), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    IssuePointOrderLocBJ(GetLastCreatedUnit(), "carrionswarm", GetUnitLoc(GetTriggerUnit()))
    CreateNUnitsAtLoc(1, FourCC("h00B"), GetOwningPlayer(GetTriggerUnit()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), 130.00, 0.00), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    IssuePointOrderLocBJ(GetLastCreatedUnit(), "flamestrike", GetUnitLoc(GetLastCreatedUnit()))

    CreateNUnitsAtLoc(1, FourCC("h00B"), GetOwningPlayer(GetTriggerUnit()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), -90.00, 0.00), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    IssuePointOrderLocBJ(GetLastCreatedUnit(), "carrionswarm", GetUnitLoc(GetTriggerUnit()))
    CreateNUnitsAtLoc(1, FourCC("h00B"), GetOwningPlayer(GetTriggerUnit()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), -130.00, 0.00), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    IssuePointOrderLocBJ(GetLastCreatedUnit(), "flamestrike", GetUnitLoc(GetLastCreatedUnit()))

    CreateNUnitsAtLoc(1, FourCC("h00B"), GetOwningPlayer(GetTriggerUnit()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), 0.00, -90.00), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    IssuePointOrderLocBJ(GetLastCreatedUnit(), "carrionswarm", GetUnitLoc(GetTriggerUnit()))
    CreateNUnitsAtLoc(1, FourCC("h00B"), GetOwningPlayer(GetTriggerUnit()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), 0, -130.00), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    IssuePointOrderLocBJ(GetLastCreatedUnit(), "flamestrike", GetUnitLoc(GetLastCreatedUnit()))

    PolledWait(0.50)

    CreateNUnitsAtLoc(1, FourCC("h00B"), GetOwningPlayer(GetTriggerUnit()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), 0, 260.00), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    IssuePointOrderLocBJ(GetLastCreatedUnit(), "flamestrike", GetUnitLoc(GetLastCreatedUnit()))

    CreateNUnitsAtLoc(1, FourCC("h00B"), GetOwningPlayer(GetTriggerUnit()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), 260.00, 0.00), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    IssuePointOrderLocBJ(GetLastCreatedUnit(), "flamestrike", GetUnitLoc(GetLastCreatedUnit()))

    CreateNUnitsAtLoc(1, FourCC("h00B"), GetOwningPlayer(GetTriggerUnit()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), -260.00, 0.00), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    IssuePointOrderLocBJ(GetLastCreatedUnit(), "flamestrike", GetUnitLoc(GetLastCreatedUnit()))

    CreateNUnitsAtLoc(1, FourCC("h00B"), GetOwningPlayer(GetTriggerUnit()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), 0, -260.00), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    IssuePointOrderLocBJ(GetLastCreatedUnit(), "flamestrike", GetUnitLoc(GetLastCreatedUnit()))

    PolledWait(0.50)

    CreateNUnitsAtLoc(1, FourCC("h00B"), GetOwningPlayer(GetTriggerUnit()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), 0, 390.00), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    IssuePointOrderLocBJ(GetLastCreatedUnit(), "flamestrike", GetUnitLoc(GetLastCreatedUnit()))

    CreateNUnitsAtLoc(1, FourCC("h00B"), GetOwningPlayer(GetTriggerUnit()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), 390.00, 0.00), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    IssuePointOrderLocBJ(GetLastCreatedUnit(), "flamestrike", GetUnitLoc(GetLastCreatedUnit()))

    CreateNUnitsAtLoc(1, FourCC("h00B"), GetOwningPlayer(GetTriggerUnit()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), -390.00, 0.00), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    IssuePointOrderLocBJ(GetLastCreatedUnit(), "flamestrike", GetUnitLoc(GetLastCreatedUnit()))

    CreateNUnitsAtLoc(1, FourCC("h00B"), GetOwningPlayer(GetTriggerUnit()), OffsetLocation(GetUnitLoc(GetTriggerUnit()), 0, -390.00), bj_UNIT_FACING)
    UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
    IssuePointOrderLocBJ(GetLastCreatedUnit(), "flamestrike", GetUnitLoc(GetLastCreatedUnit()))
}

export function initWakeOfFire() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_SPELL_CAST)
    TriggerAddAction( trigger, () => wakeOfFire())
}
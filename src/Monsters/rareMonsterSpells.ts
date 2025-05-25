function rareMonsterSpells() {
    if (!UnitHasBuffBJ(GetAttacker(), FourCC("B014"))) {
        return
    }

    // Mabahut
    if (GetRandomInt(1, 25) == 1) {
        const unit = CreateUnitAtLoc(GetOwningPlayer(GetAttacker()), FourCC("n001"), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
        UnitApplyTimedLifeBJ(7.00, FourCC("BTLF"), unit)
    }

    // Lit fury
    if (GetRandomInt(1, 25) == 1) {
        const positions = [
            OffsetLocation(GetUnitLoc(GetTriggerUnit()), 100.00, 50.00),
            OffsetLocation(GetUnitLoc(GetTriggerUnit()), 200.00, 100.00),
            OffsetLocation(GetUnitLoc(GetTriggerUnit()), 300.00, 150.00),
            OffsetLocation(GetUnitLoc(GetTriggerUnit()), 200.00, 200.00),
            OffsetLocation(GetUnitLoc(GetTriggerUnit()), 100.00, 250.00),
            OffsetLocation(GetUnitLoc(GetTriggerUnit()), -100.00, 50.00),
            OffsetLocation(GetUnitLoc(GetTriggerUnit()), -200.00, 100.00),
            OffsetLocation(GetUnitLoc(GetTriggerUnit()), -300.00, 150.00),
            OffsetLocation(GetUnitLoc(GetTriggerUnit()), -200.00, 200.00),
            OffsetLocation(GetUnitLoc(GetTriggerUnit()), -100.00, 250.00)
        ]

        for (let i = 0; i < 7; i++) {
            const unit = CreateUnitAtLoc(GetOwningPlayer(GetAttacker()), FourCC("h00J"), positions[i], bj_UNIT_FACING)
            UnitApplyTimedLife(unit, FourCC("BTLF"), 1.0)
            IssueTargetOrder(unit, "chainlightning", GetTriggerUnit())
            PolledWait(0.10)
        }

    }

    // HP halver
    if (GetRandomInt(1, 5) == 1) {
        AddSpecialEffectTargetUnitBJ("overhead", GetTriggerUnit(), "war3mapImported\\WaterMagic.mdx")
        SetUnitLifeBJ(GetTriggerUnit(), (GetUnitStateSwap(UNIT_STATE_LIFE, GetTriggerUnit()) * 0.50))
    }

    // SunStorm
    if (GetRandomInt(1, 25) == 1) {
        const sun_storm = RectFromCenterSizeBJ(GetUnitLoc(GetTriggerUnit()), 500.00, 500.00)

        for (let i = 0; i < 7; i++) {
            const unit = CreateUnitAtLoc(GetOwningPlayer(GetAttacker()), FourCC("h00M"), GetRandomLocInRect(sun_storm), bj_UNIT_FACING)
            UnitApplyTimedLife(unit, FourCC("BTLF"), 1.0)
            IssueImmediateOrder(unit, "creepthunderclap")
            PolledWait(0.20)
        }
    }
}

export function initRareMonsterSpells() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_ATTACKED )
    TriggerAddAction( trigger, () => rareMonsterSpells() )
}
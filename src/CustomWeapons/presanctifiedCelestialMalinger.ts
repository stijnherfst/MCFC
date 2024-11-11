function presanctifiedCelestialMalinger() {
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I08Z")) || UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I0AC"))) {
        UnitDamageTargetBJ(GetAttacker(), GetAttackedUnitBJ(), 333.00, ATTACK_TYPE_NORMAL, DAMAGE_TYPE_MAGIC)
        SetUnitManaBJ(GetAttacker(), (GetUnitStateSwap(UNIT_STATE_MANA, GetAttacker()) - 33.00))

        if (GetRandomInt(1, 100) == 1) {
            CreateNUnitsAtLoc(1, FourCC("h00O"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
            IssueTargetOrderBJ(GetLastCreatedUnit(), "frostnova", GetAttackedUnitBJ())
            UnitApplyTimedLifeBJ(7.00, FourCC("BTLF"), GetLastCreatedUnit())        
        }

        if (GetRandomInt(1, 100) == 1 && GetUnitLevel(GetAttackedUnitBJ()) <= 100) {
            AddSpecialEffectTargetUnitBJ("overhead", GetAttackedUnitBJ(), "Abilities\\Spells\\Undead\\Unsummon\\UnsummonTarget.mdl")
            SetUnitLifeBJ(GetAttackedUnitBJ(), (GetUnitStateSwap(UNIT_STATE_LIFE, GetAttackedUnitBJ()) * 0.50))
        }

        if (GetRandomInt(1, 100) == 1) {
            let sunstorm = RectFromCenterSizeBJ(GetUnitLoc(GetAttackedUnitBJ()), 500.00, 500.00)
            CreateNUnitsAtLoc(1, FourCC("h00M"), GetOwningPlayer(GetAttacker()), GetRandomLocInRect(sunstorm), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
            IssueImmediateOrderBJ(GetLastCreatedUnit(), "creepthunderclap")
            PolledWait(0.20)
            CreateNUnitsAtLoc(1, FourCC("h00M"), GetOwningPlayer(GetAttacker()), GetRandomLocInRect(sunstorm), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
            IssueImmediateOrderBJ(GetLastCreatedUnit(), "creepthunderclap")
            PolledWait(0.20)
            CreateNUnitsAtLoc(1, FourCC("h00M"), GetOwningPlayer(GetAttacker()), GetRandomLocInRect(sunstorm), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
            IssueImmediateOrderBJ(GetLastCreatedUnit(), "creepthunderclap")
            PolledWait(0.20)
            CreateNUnitsAtLoc(1, FourCC("h00M"), GetOwningPlayer(GetAttacker()), GetRandomLocInRect(sunstorm), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
            IssueImmediateOrderBJ(GetLastCreatedUnit(), "creepthunderclap")
            PolledWait(0.20)
            CreateNUnitsAtLoc(1, FourCC("h00M"), GetOwningPlayer(GetAttacker()), GetRandomLocInRect(sunstorm), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
            IssueImmediateOrderBJ(GetLastCreatedUnit(), "creepthunderclap")
            PolledWait(0.20)
            CreateNUnitsAtLoc(1, FourCC("h00M"), GetOwningPlayer(GetAttacker()), GetRandomLocInRect(sunstorm), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
            IssueImmediateOrderBJ(GetLastCreatedUnit(), "creepthunderclap")
            PolledWait(0.20)
            UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
            IssueImmediateOrderBJ(GetLastCreatedUnit(), "creepthunderclap")
        }

        if (GetRandomInt(1, 100) == 1) {
            CreateNUnitsAtLoc(1, FourCC("h029"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetTriggerUnit()), bj_UNIT_FACING)
            IssueImmediateOrderBJ(GetLastCreatedUnit(), "starfall")
            UnitApplyTimedLifeBJ(1.00, FourCC("BTLF"), GetLastCreatedUnit())
        }
    }
}

export function initPresanctifiedCelestialMalinger() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => presanctifiedCelestialMalinger());
}
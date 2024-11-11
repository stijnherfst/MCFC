function treasureFindingShovel() {
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I093"))) {
        if (GetRandomInt(1, 1000) == 1) {
            CreateItemLoc(FourCC("I03M"), GetUnitLoc(GetTriggerUnit()))
            CreateTextTagUnitBJ("TRIGSTR_5792", GetTriggerUnit(), 0, 8.00, 100, 100, 100, 15.00)
            SetTextTagVelocityBJ(GetLastCreatedTextTag(), 33.00, GetRandomDirectionDeg())
            SetTextTagPermanentBJ(GetLastCreatedTextTag(), false)
            SetTextTagLifespanBJ(GetLastCreatedTextTag(), 3.00)
        }

        if (GetRandomInt(1, 100) == 1) {
            CreateItemLoc(FourCC("I064"), GetUnitLoc(GetTriggerUnit()))
            CreateTextTagUnitBJ("TRIGSTR_5793", GetTriggerUnit(), 0, 8.00, 100, 100, 100, 15.00)
            SetTextTagVelocityBJ(GetLastCreatedTextTag(), 33.00, GetRandomDirectionDeg())
            SetTextTagPermanentBJ(GetLastCreatedTextTag(), false)
            SetTextTagLifespanBJ(GetLastCreatedTextTag(), 3.00)
        }

        if (GetRandomInt(1, 2500) == 1) {
            CreateItemLoc(FourCC("tkno"), GetUnitLoc(GetTriggerUnit()))
            CreateTextTagUnitBJ("TRIGSTR_5794", GetTriggerUnit(), 0, 8.00, 100, 100, 100, 15.00)
            SetTextTagVelocityBJ(GetLastCreatedTextTag(), 33.00, GetRandomDirectionDeg())
            SetTextTagPermanentBJ(GetLastCreatedTextTag(), false)
            SetTextTagLifespanBJ(GetLastCreatedTextTag(), 3.00)
        }

        if (GetRandomInt(1, 250) == 1) {
            CreateItemLoc(FourCC("I089"), GetUnitLoc(GetTriggerUnit()))
            CreateTextTagUnitBJ("TRIGSTR_5795", GetTriggerUnit(), 0, 8.00, 100, 100, 100, 15.00)
            SetTextTagVelocityBJ(GetLastCreatedTextTag(), 33.00, GetRandomDirectionDeg())
            SetTextTagPermanentBJ(GetLastCreatedTextTag(), false)
            SetTextTagLifespanBJ(GetLastCreatedTextTag(), 3.00)
        }

        if (GetRandomInt(1, 250) == 1) {
            CreateItemLoc(FourCC("I045"), GetUnitLoc(GetTriggerUnit()))
            CreateTextTagUnitBJ("TRIGSTR_5796", GetTriggerUnit(), 0, 8.00, 100, 100, 100, 15.00)
            SetTextTagVelocityBJ(GetLastCreatedTextTag(), 33.00, GetRandomDirectionDeg())
            SetTextTagPermanentBJ(GetLastCreatedTextTag(), false)
            SetTextTagLifespanBJ(GetLastCreatedTextTag(), 3.00)
        }

        if (GetRandomInt(1, 250) == 1) {
            CreateItemLoc(FourCC("I044"), GetUnitLoc(GetTriggerUnit()))
            CreateTextTagUnitBJ("TRIGSTR_5797", GetTriggerUnit(), 0, 8.00, 100, 100, 100, 15.00)
            SetTextTagVelocityBJ(GetLastCreatedTextTag(), 33.00, GetRandomDirectionDeg())
            SetTextTagPermanentBJ(GetLastCreatedTextTag(), false)
            SetTextTagLifespanBJ(GetLastCreatedTextTag(), 3.00)
        }
    }
}

export function initTreasureFindingShovel() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => treasureFindingShovel());
}
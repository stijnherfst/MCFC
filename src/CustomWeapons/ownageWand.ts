function ownageWand() {
    if (UnitHasItemOfTypeBJ(GetAttacker(), FourCC("I0AB"))) {
        if (GetRandomInt(1, 750) == 1) {
            CreateNUnitsAtLoc(1, FourCC("n03F"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(60.00, FourCC("BTLF"), GetLastCreatedUnit()) 
        }

        if (GetRandomInt(1, 250) == 1) {
            CreateNUnitsAtLoc(1, FourCC("n040"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(60.00, FourCC("BTLF"), GetLastCreatedUnit())
        }

        if (GetRandomInt(1, 250) == 1) {
            CreateNUnitsAtLoc(1, FourCC("n03Q"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(60.00, FourCC("BTLF"), GetLastCreatedUnit())
        }

        if (GetRandomInt(1, 250) == 1) {
            CreateNUnitsAtLoc(1, FourCC("n03S"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(60.00, FourCC("BTLF"), GetLastCreatedUnit())
        }

        if (GetRandomInt(1, 250) == 1) {
            CreateNUnitsAtLoc(1, FourCC("n03T"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(60.00, FourCC("BTLF"), GetLastCreatedUnit())
        }

        if (GetRandomInt(1, 750) == 1) {
            CreateNUnitsAtLoc(1, FourCC("n03R"), GetOwningPlayer(GetAttacker()), GetUnitLoc(GetAttacker()), bj_UNIT_FACING)
            UnitApplyTimedLifeBJ(60.00, FourCC("BTLF"), GetLastCreatedUnit())
        }

        if (GetRandomInt(1, 100) == 1 && GetUnitLevel(GetAttackedUnitBJ()) <= 100)) {
            AddSpecialEffectTargetUnitBJ("overhead", GetAttackedUnitBJ(), "Abilities\\Spells\\Undead\\Unsummon\\UnsummonTarget.mdl")
            SetUnitLifeBJ(GetAttackedUnitBJ(), (GetUnitStateSwap(UNIT_STATE_LIFE, GetAttackedUnitBJ()) * 0.50))
        }

        UnitDamageTargetBJ(GetAttacker(), GetAttackedUnitBJ(), 777.00, ATTACK_TYPE_NORMAL, DAMAGE_TYPE_MAGIC)
        SetUnitManaBJ(GetAttacker(), (GetUnitStateSwap(UNIT_STATE_MANA, GetAttacker()) - 177.00))
    }
}

export function initOwnageWand() {
	let trigger = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED);
	TriggerAddAction(trigger, () => ownageWand());
}